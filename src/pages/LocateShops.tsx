import { useState } from "react";
import Layout from "@/components/Layout";
import ShopMap from "@/components/ShopMap";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const LocateShops = () => {
  const [selectedShop, setSelectedShop] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const shops = [
    {
      id: 1,
      name: "Elite Auto Wraps",
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400",
      rating: 4.8,
      reviews: 124,
      services: ["PPF", "Wraps", "Tinting"],
      distance: "2.3 miles",
      address: "123 Main St, New York, NY",
      phone: "(555) 123-4567",
      coordinates: [-74.006, 40.7128] as [number, number],
    },
    {
      id: 2,
      name: "Precision Detail Studio",
      image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=400",
      rating: 4.9,
      reviews: 89,
      services: ["Ceramic Coating", "PPF", "Detailing"],
      distance: "3.7 miles",
      address: "456 Oak Ave, Brooklyn, NY",
      phone: "(555) 987-6543",
      coordinates: [-73.95, 40.65] as [number, number],
    },
    {
      id: 3,
      name: "Custom Wrap Co",
      image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=400",
      rating: 4.7,
      reviews: 156,
      services: ["Custom Graphics", "Color Wraps", "Tinting"],
      distance: "5.1 miles",
      address: "789 Pine Rd, Queens, NY",
      phone: "(555) 456-7890",
      coordinates: [-73.85, 40.75] as [number, number],
    },
  ];

  const filteredShops = shops.filter((shop) =>
    shop.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    shop.address?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-background via-background to-primary/5 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-2 gradient-text">
              Locate Shops Near You
            </h1>
            <p className="text-lg text-muted-foreground">
              Find verified wrap and detailing shops in your area
            </p>
          </div>

          <div className="grid lg:grid-cols-[400px_1fr] gap-4 max-w-7xl mx-auto h-[calc(100vh-280px)]">
            {/* Shop List */}
            <div className="flex flex-col bg-card border rounded-lg overflow-hidden">
              {/* Search Box */}
              <div className="p-4 border-b">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9"
                  />
                </div>
              </div>

              {/* Scrollable Shop List */}
              <div className="flex-1 overflow-y-auto">
                {filteredShops.map((shop) => (
                  <div
                    key={shop.id}
                    className={`p-4 border-b cursor-pointer hover:bg-accent/50 transition-colors ${
                      selectedShop === shop.id ? "bg-accent" : ""
                    }`}
                    onClick={() => setSelectedShop(shop.id)}
                  >
                    <h3 className="font-semibold mb-1">{shop.name}</h3>
                    <p className="text-sm text-muted-foreground">{shop.address}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Map */}
            <div className="h-full">
              <ShopMap
                shops={filteredShops}
                onShopSelect={(shop) => setSelectedShop(shop.id)}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LocateShops;
