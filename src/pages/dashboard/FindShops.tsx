import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import ShopMap from "@/components/ShopMap";

const FindShops = () => {
  const [selectedShop, setSelectedShop] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const shops = [
    {
      id: 1,
      name: "Premium Auto Body",
      address: "123 Main St, New York, NY",
      rating: 4.8,
      distance: "2.5 miles",
      phone: "(555) 123-4567",
      specialties: ["Body Work", "Paint", "Collision"],
      coordinates: [-74.006, 40.7128] as [number, number],
    },
    {
      id: 2,
      name: "Elite Car Repair",
      address: "456 Oak Ave, Brooklyn, NY",
      rating: 4.9,
      distance: "3.2 miles",
      phone: "(555) 987-6543",
      specialties: ["Engine", "Transmission", "Electrical"],
      coordinates: [-73.95, 40.65] as [number, number],
    },
    {
      id: 3,
      name: "Quick Fix Auto",
      address: "789 Pine Rd, Queens, NY",
      rating: 4.6,
      distance: "4.1 miles",
      phone: "(555) 456-7890",
      specialties: ["Oil Change", "Tires", "Brakes"],
      coordinates: [-73.85, 40.75] as [number, number],
    },
  ];

  const filteredShops = shops.filter((shop) =>
    shop.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    shop.address?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div>
        <h1 className="text-3xl font-bold mb-2">Find Shops</h1>
        <p className="text-muted-foreground mb-6">
          Discover trusted repair shops in your area
        </p>

        <div className="grid lg:grid-cols-[400px_1fr] gap-4 h-[calc(100vh-250px)]">
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
                  <p className="text-sm text-muted-foreground mb-2">{shop.address}</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="text-primary font-semibold">★ {shop.rating}</span>
                    <span>• {shop.distance}</span>
                  </div>
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
    </DashboardLayout>
  );
};

export default FindShops;
