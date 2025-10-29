import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Star, Users, MapPin, Handshake, HelpCircle } from "lucide-react";

const FeaturesSection = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Star className="w-12 h-12 text-primary" />,
      title: "Happy Stories",
      description: "Read real experiences from satisfied customers who found their perfect shop through WrapBid. See how we've helped transform vehicles and build lasting relationships.",
      buttonText: "View Success Stories",
      path: "/happy-stories",
      gradient: "from-primary/10 to-accent/10",
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "About Us",
      description: "Learn about our mission to connect vehicle owners with trusted wrap and detailing professionals. Discover how WrapBid is revolutionizing the way people find quality services.",
      buttonText: "Our Story",
      path: "/about",
      gradient: "from-accent/10 to-primary/10",
    },
    {
      icon: <MapPin className="w-12 h-12 text-primary" />,
      title: "Locate Shops",
      description: "Find verified wrap and detailing shops in your area. Browse portfolios, read reviews, and connect with local professionals who specialize in the services you need.",
      buttonText: "Find Shops",
      path: "/locate-shops",
      gradient: "from-primary/10 to-accent/10",
    },
    {
      icon: <Handshake className="w-12 h-12 text-primary" />,
      title: "Join Our Network",
      description: "Are you a shop owner? Join our network to receive quality leads, grow your business, and connect with customers actively seeking your services.",
      buttonText: "Become a Partner",
      path: "/join-network",
      gradient: "from-accent/10 to-primary/10",
    },
    {
      icon: <HelpCircle className="w-12 h-12 text-primary" />,
      title: "FAQ",
      description: "Got questions? Find answers to commonly asked questions about how WrapBid works, pricing, timelines, and more. We're here to help you every step of the way.",
      buttonText: "Get Answers",
      path: "/faq",
      gradient: "from-primary/10 to-accent/10",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Everything You Need
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore all the features and resources WrapBid offers to make your experience seamless
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${feature.gradient} border border-border rounded-2xl p-8 card-hover`}
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground mb-6 min-h-[80px]">
                {feature.description}
              </p>
              <Button
                onClick={() => navigate(feature.path)}
                variant="outline"
                className="w-full border-primary/50 hover:bg-primary hover:text-primary-foreground"
              >
                {feature.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
