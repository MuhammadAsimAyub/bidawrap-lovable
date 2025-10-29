import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const LocateShops = () => {
  const [zipCode, setZipCode] = useState("");

  const shops = [
    {
      id: 1,
      name: "Elite Auto Wraps",
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400",
      rating: 4.8,
      reviews: 124,
      services: ["PPF", "Wraps", "Tinting"],
      distance: "2.3 miles",
    },
    {
      id: 2,
      name: "Precision Detail Studio",
      image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=400",
      rating: 4.9,
      reviews: 89,
      services: ["Ceramic Coating", "PPF", "Detailing"],
      distance: "3.7 miles",
    },
    {
      id: 3,
      name: "Custom Wrap Co",
      image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=400",
      rating: 4.7,
      reviews: 156,
      services: ["Custom Graphics", "Color Wraps", "Tinting"],
      distance: "5.1 miles",
    },
  ];

  return (
    <Layout>
      <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-background via-background to-primary/5 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 gradient-text">Locate Shops Near You</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find verified wrap and detailing shops in your area
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          <div className="flex gap-4">
            <Input
              type="text"
              placeholder="Enter your ZIP code"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              className="flex-1"
            />
            <Button className="btn-primary">Search</Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {shops.map((shop) => (
            <div key={shop.id} className="bg-card border border-border rounded-2xl overflow-hidden card-hover">
              <img
                src={shop.image}
                alt={shop.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{shop.name}</h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-primary text-lg">★ {shop.rating}</span>
                  <span className="text-muted-foreground text-sm">({shop.reviews} reviews)</span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{shop.distance}</p>
                <div className="flex flex-wrap gap-2">
                  {shop.services.map((service) => (
                    <span
                      key={service}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </Layout>
  );
};

export default LocateShops;
