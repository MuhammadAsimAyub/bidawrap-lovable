import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Search, MapPin, Star, Phone } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

const FindShops = () => {
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
    },
    {
      id: 2,
      name: "Elite Car Repair",
      address: "456 Oak Ave, New York, NY",
      rating: 4.9,
      distance: "3.2 miles",
      phone: "(555) 987-6543",
      specialties: ["Engine", "Transmission", "Electrical"],
    },
    {
      id: 3,
      name: "Quick Fix Auto",
      address: "789 Pine Rd, New York, NY",
      rating: 4.6,
      distance: "4.1 miles",
      phone: "(555) 456-7890",
      specialties: ["Oil Change", "Tires", "Brakes"],
    },
  ];

  return (
    <DashboardLayout>
      <div className="max-w-5xl">
        <h1 className="text-3xl font-bold mb-2">Find Shops</h1>
        <p className="text-muted-foreground mb-8">
          Discover trusted repair shops in your area
        </p>

        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by location, zip code, or service..."
              className="pl-10"
            />
          </div>
        </div>

        <div className="grid gap-6">
          {shops.map((shop) => (
            <Card key={shop.id} className="p-6">
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
      </div>
    </DashboardLayout>
  );
};

export default FindShops;
