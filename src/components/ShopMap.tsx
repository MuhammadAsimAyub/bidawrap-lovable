import { useState } from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import { Button } from "@/components/ui/button";
import { Navigation } from "lucide-react";
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
  const [selectedShop, setSelectedShop] = useState<Shop | null>(null);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [mapCenter, setMapCenter] = useState({ lat: 40.7128, lng: -74.006 });
  const [mapZoom, setMapZoom] = useState(12);

  const mapContainerStyle = {
    width: "100%",
    height: "100%",
  };

  const handleLocateMe = () => {
    if (!navigator.geolocation) {
      toast.error("Geolocation is not supported by your browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const coords = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setUserLocation(coords);
        setMapCenter(coords);
        setMapZoom(14);
        toast.success("Your location has been found!");
      },
      () => {
        toast.error("Unable to retrieve your location");
      }
    );
  };

  const handleMarkerClick = (shop: Shop) => {
    setSelectedShop(shop);
    onShopSelect?.(shop);
    setMapCenter({ lat: shop.coordinates[1], lng: shop.coordinates[0] });
    setMapZoom(14);
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

    const directionsUrl = `https://www.google.com/maps/dir/?api=1&origin=${userLocation.lat},${userLocation.lng}&destination=${selectedShop.coordinates[1]},${selectedShop.coordinates[0]}`;
    window.open(directionsUrl, "_blank");
  };

  return (
    <div className="relative h-full rounded-lg overflow-hidden border">
      <LoadScript googleMapsApiKey="AIzaSyDummyKeyForDevelopment">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={mapCenter}
          zoom={mapZoom}
          options={{
            zoomControl: true,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: true,
          }}
        >
          {shops.map((shop, index) => (
            <Marker
              key={shop.id}
              position={{ lat: shop.coordinates[1], lng: shop.coordinates[0] }}
              label={{
                text: String(index + 1),
                color: "white",
                fontSize: "14px",
                fontWeight: "bold",
              }}
              onClick={() => handleMarkerClick(shop)}
            />
          ))}

          {userLocation && (
            <Marker
              position={userLocation}
              icon={{
                path: window.google?.maps?.SymbolPath?.CIRCLE,
                fillColor: "#4285F4",
                fillOpacity: 1,
                strokeColor: "white",
                strokeWeight: 2,
                scale: 8,
              }}
            />
          )}

          {selectedShop && (
            <InfoWindow
              position={{
                lat: selectedShop.coordinates[1],
                lng: selectedShop.coordinates[0],
              }}
              onCloseClick={() => setSelectedShop(null)}
            >
              <div className="p-2">
                <h4 className="font-semibold text-base mb-1">{selectedShop.name}</h4>
                {selectedShop.address && (
                  <p className="text-xs text-gray-600 mb-1">{selectedShop.address}</p>
                )}
                {selectedShop.phone && (
                  <p className="text-xs text-gray-600 mb-2">{selectedShop.phone}</p>
                )}
                <div className="flex items-center gap-1 mb-2">
                  <span className="text-sm font-semibold text-blue-600">
                    ★ {selectedShop.rating}
                  </span>
                  {selectedShop.reviews && (
                    <span className="text-xs text-gray-500">
                      ({selectedShop.reviews})
                    </span>
                  )}
                </div>
                <Button onClick={handleGetDirections} size="sm" className="w-full text-xs">
                  Get Directions
                </Button>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>

      {/* Locate Me Button */}
      <Button
        size="icon"
        variant="secondary"
        onClick={handleLocateMe}
        className="absolute bottom-24 right-4 z-10 shadow-lg"
        title="Locate Me"
      >
        <Navigation className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default ShopMap;
