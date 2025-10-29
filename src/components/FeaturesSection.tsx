import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Star, Users, MapPin, Handshake, HelpCircle } from "lucide-react";

const FeaturesSection = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background">
      {/* Happy Stories Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-background to-primary/5">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-6">
                <Star className="w-12 h-12 text-primary" />
                <h2 className="text-4xl md:text-5xl font-bold">Happy Stories</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Read real experiences from satisfied customers who found their perfect shop through WrapBid. 
                See how we've helped transform vehicles and build lasting relationships between car owners 
                and professional shops.
              </p>
              <Button
                onClick={() => navigate("/happy-stories")}
                className="btn-primary"
                size="lg"
              >
                View Success Stories
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80"
                alt="Wrapped car"
                className="w-full h-[400px] object-cover rounded-2xl shadow-elegant"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div>
              <img
                src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80"
                alt="Professional car detailing"
                className="w-full h-[400px] object-cover rounded-2xl shadow-elegant"
              />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-12 h-12 text-primary" />
                <h2 className="text-4xl md:text-5xl font-bold">About Us</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Learn about our mission to connect vehicle owners with trusted wrap and detailing professionals. 
                Discover how WrapBid is revolutionizing the way people find quality services with transparency, 
                competitive pricing, and verified professionals.
              </p>
              <Button
                onClick={() => navigate("/about")}
                className="btn-primary"
                size="lg"
              >
                Our Story
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Locate Shops Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-12 h-12 text-primary" />
                <h2 className="text-4xl md:text-5xl font-bold">Locate Shops</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Find verified wrap and detailing shops in your area. Browse portfolios, read authentic reviews, 
                and connect with local professionals who specialize in the exact services your vehicle needs.
              </p>
              <Button
                onClick={() => navigate("/locate-shops")}
                className="btn-primary"
                size="lg"
              >
                Find Shops Near You
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80"
                alt="Car detailing shop"
                className="w-full h-[400px] object-cover rounded-2xl shadow-elegant"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Join Network Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div>
              <img
                src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80"
                alt="Custom car wrap"
                className="w-full h-[400px] object-cover rounded-2xl shadow-elegant"
              />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Handshake className="w-12 h-12 text-primary" />
                <h2 className="text-4xl md:text-5xl font-bold">Join Our Network</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Are you a shop owner? Join our network to receive quality leads, grow your business, 
                and connect with customers actively seeking your services. Start getting more bookings today.
              </p>
              <Button
                onClick={() => navigate("/join-network")}
                className="btn-primary"
                size="lg"
              >
                Become a Partner
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-6">
                <HelpCircle className="w-12 h-12 text-primary" />
                <h2 className="text-4xl md:text-5xl font-bold">FAQ</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Got questions? Find answers to commonly asked questions about how WrapBid works, 
                pricing, timelines, and more. We're here to help you every step of the way on your 
                vehicle transformation journey.
              </p>
              <Button
                onClick={() => navigate("/faq")}
                className="btn-primary"
                size="lg"
              >
                Get Answers
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80"
                alt="Luxury car"
                className="w-full h-[400px] object-cover rounded-2xl shadow-elegant"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesSection;
