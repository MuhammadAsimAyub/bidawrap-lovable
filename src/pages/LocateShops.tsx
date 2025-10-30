import { useState } from "react";
import Layout from "@/components/Layout";
import ShopMap from "@/components/ShopMap";

const LocateShops = () => {
  const [selectedShop, setSelectedShop] = useState<number | null>(null);

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

  return (
    <Layout>
      <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-background via-background to-primary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 gradient-text">
              Locate Shops Near You
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find verified wrap and detailing shops in your area
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* Shop List */}
            <div className="space-y-6">
              {shops.map((shop) => (
                <div
                  key={shop.id}
                  className={`bg-card border rounded-2xl overflow-hidden card-hover cursor-pointer transition-all ${
                    selectedShop === shop.id ? "ring-2 ring-primary" : ""
                  }`}
                  onClick={() => setSelectedShop(shop.id)}
                >
                  <img
                    src={shop.image}
                    alt={shop.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{shop.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {shop.address}
                    </p>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-primary text-lg">
                        ★ {shop.rating}
                      </span>
                      <span className="text-muted-foreground text-sm">
                        ({shop.reviews} reviews)
                      </span>
                      <span className="text-muted-foreground text-sm">
                        • {shop.distance}
                      </span>
                    </div>
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

            {/* Interactive Map */}
            <div className="lg:sticky lg:top-24 h-fit">
              <ShopMap
                shops={shops}
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
