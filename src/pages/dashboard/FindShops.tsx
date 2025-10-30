import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Star, Phone } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import ShopMap from "@/components/ShopMap";

const FindShops = () => {
  const [selectedShop, setSelectedShop] = useState<number | null>(null);

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

  return (
    <DashboardLayout>
      <div>
        <h1 className="text-3xl font-bold mb-2">Find Shops</h1>
        <p className="text-muted-foreground mb-8">
          Discover trusted repair shops in your area
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Shop List */}
          <div className="space-y-6">
            {shops.map((shop) => (
              <Card
                key={shop.id}
                className={`p-6 cursor-pointer transition-all ${
                  selectedShop === shop.id ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setSelectedShop(shop.id)}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{shop.name}</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{shop.address}</span>
                        <span className="text-primary">• {shop.distance}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        <span>{shop.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <span className="font-semibold text-foreground">
                          {shop.rating}
                        </span>
                        <span>rating</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {shop.specialties.map((specialty) => (
                        <span
                          key={specialty}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button>Request Quote</Button>
                    <Button variant="outline">View Details</Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Interactive Map */}
          <div className="lg:sticky lg:top-8 h-fit">
            <ShopMap
              shops={shops}
              onShopSelect={(shop) => setSelectedShop(shop.id)}
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default FindShops;
