import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Navigation, MapPin } from "lucide-react";
import { toast } from "sonner";

interface Shop {
  id: number;
  name: string;
  image?: string;
  rating: number;
  reviews?: number;
  services?: string[];
  specialties?: string[];
  distance: string;
  address?: string;
  phone?: string;
  coordinates: [number, number]; // [lng, lat]
}

interface ShopMapProps {
  shops: Shop[];
  onShopSelect?: (shop: Shop) => void;
}

const ShopMap = ({ shops, onShopSelect }: ShopMapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markers = useRef<mapboxgl.Marker[]>([]);
  const [mapboxToken, setMapboxToken] = useState("");
  const [isTokenSet, setIsTokenSet] = useState(false);
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
  const [selectedShop, setSelectedShop] = useState<Shop | null>(null);

  useEffect(() => {
    if (!mapContainer.current || !isTokenSet) return;

    mapboxgl.accessToken = mapboxToken;

    // Initialize map
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [-74.006, 40.7128], // Default to NYC
      zoom: 12,
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

    // Add shop markers
    shops.forEach((shop) => {
      const el = document.createElement("div");
      el.className = "shop-marker";
      el.style.width = "30px";
      el.style.height = "30px";
      el.style.borderRadius = "50%";
      el.style.backgroundColor = "hsl(var(--primary))";
      el.style.border = "3px solid white";
      el.style.cursor = "pointer";
      el.style.boxShadow = "0 2px 8px rgba(0,0,0,0.3)";

      const marker = new mapboxgl.Marker(el)
        .setLngLat(shop.coordinates)
        .addTo(map.current!);

      // Click marker to show shop details
      el.addEventListener("click", () => {
        setSelectedShop(shop);
        onShopSelect?.(shop);
        map.current?.flyTo({
          center: shop.coordinates,
          zoom: 14,
        });
      });

      markers.current.push(marker);
    });

    return () => {
      markers.current.forEach((marker) => marker.remove());
      markers.current = [];
      map.current?.remove();
    };
  }, [isTokenSet, mapboxToken, shops, onShopSelect]);

  const handleLocateMe = () => {
    if (!navigator.geolocation) {
      toast.error("Geolocation is not supported by your browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const coords: [number, number] = [
          position.coords.longitude,
          position.coords.latitude,
        ];
        setUserLocation(coords);

        if (map.current) {
          // Add user location marker
          const el = document.createElement("div");
          el.className = "user-marker";
          el.style.width = "20px";
          el.style.height = "20px";
          el.style.borderRadius = "50%";
          el.style.backgroundColor = "hsl(var(--primary))";
          el.style.border = "3px solid white";
          el.style.boxShadow = "0 0 0 8px hsla(var(--primary), 0.2)";

          new mapboxgl.Marker(el).setLngLat(coords).addTo(map.current);

          map.current.flyTo({
            center: coords,
            zoom: 14,
          });
        }

        toast.success("Your location has been found!");
      },
      () => {
        toast.error("Unable to retrieve your location");
      }
    );
  };

  const handleSearch = (query: string) => {
    if (!query.trim() || !map.current) return;

    // Search by shop name
    const foundShop = shops.find((shop) =>
      shop.name.toLowerCase().includes(query.toLowerCase())
    );

    if (foundShop) {
      map.current.flyTo({
        center: foundShop.coordinates,
        zoom: 14,
      });
      setSelectedShop(foundShop);
      onShopSelect?.(foundShop);
      return;
    }

    // Otherwise, geocode the query using Mapbox API
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
        query
      )}.json?access_token=${mapboxToken}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.features && data.features.length > 0) {
          const [lng, lat] = data.features[0].center;
          map.current?.flyTo({
            center: [lng, lat],
            zoom: 13,
          });
          toast.success(`Found: ${data.features[0].place_name}`);
        } else {
          toast.error("Location not found");
        }
      })
      .catch(() => {
        toast.error("Error searching location");
      });
  };

  const handleGetDirections = () => {
    if (!selectedShop) {
      toast.error("Please select a shop first");
      return;
    }

    if (!userLocation) {
      toast.error("Please use 'Locate Me' first to set your location");
      return;
    }

    const directionsUrl = `https://www.google.com/maps/dir/?api=1&origin=${userLocation[1]},${userLocation[0]}&destination=${selectedShop.coordinates[1]},${selectedShop.coordinates[0]}`;
    window.open(directionsUrl, "_blank");
  };

  if (!isTokenSet) {
    return (
      <div className="flex flex-col items-center justify-center h-[600px] bg-muted/30 rounded-lg p-8">
        <MapPin className="h-16 w-16 text-muted-foreground mb-4" />
        <h3 className="text-xl font-semibold mb-2">Enter Mapbox Token</h3>
        <p className="text-sm text-muted-foreground mb-4 text-center max-w-md">
          To display the interactive map, please enter your Mapbox public token.
          Get one at{" "}
          <a
            href="https://mapbox.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            mapbox.com
          </a>
        </p>
        <div className="flex gap-2 w-full max-w-md">
          <Input
            type="text"
            placeholder="pk.eyJ1IjoieW91ci1hY2NvdW50..."
            value={mapboxToken}
            onChange={(e) => setMapboxToken(e.target.value)}
            className="flex-1"
          />
          <Button onClick={() => setIsTokenSet(true)} disabled={!mapboxToken}>
            Set Token
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-[600px] rounded-lg overflow-hidden border">
      <div ref={mapContainer} className="absolute inset-0" />
      
      {/* Search and controls overlay */}
      <div className="absolute top-4 left-4 right-4 flex flex-col gap-2 z-10">
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Search by shop name, location, ZIP code..."
            className="flex-1 bg-background/95 backdrop-blur"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch((e.target as HTMLInputElement).value);
              }
            }}
          />
          <Button
            size="icon"
            variant="secondary"
            onClick={handleLocateMe}
            className="bg-background/95 backdrop-blur"
          >
            <Navigation className="h-4 w-4" />
          </Button>
        </div>

        {selectedShop && (
          <div className="bg-background/95 backdrop-blur rounded-lg p-4 shadow-lg">
            <h4 className="font-semibold text-lg mb-1">{selectedShop.name}</h4>
            {selectedShop.address && (
              <p className="text-sm text-muted-foreground mb-1">
                {selectedShop.address}
              </p>
            )}
            {selectedShop.phone && (
              <p className="text-sm text-muted-foreground mb-2">
                {selectedShop.phone}
              </p>
            )}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-primary font-semibold">
                ★ {selectedShop.rating}
              </span>
              {selectedShop.reviews && (
                <span className="text-xs text-muted-foreground">
                  ({selectedShop.reviews} reviews)
                </span>
              )}
              <span className="text-xs text-muted-foreground">
                • {selectedShop.distance}
              </span>
            </div>
            <Button onClick={handleGetDirections} size="sm" className="w-full">
              Get Directions
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopMap;
