import { Button } from "@/components/ui/button";
import { Store, TrendingUp, Users, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const JoinNetworkSection = () => {
  const navigate = useNavigate();
  
  const benefits = [
    {
      icon: Users,
      title: "Quality Leads",
      description: "Connect with serious customers ready to pay for premium work",
    },
    {
      icon: TrendingUp,
      title: "Grow Your Business",
      description: "Expand your customer base and increase revenue",
    },
    {
      icon: Zap,
      title: "Easy Management",
      description: "Simple platform to manage bids and communicate with clients",
    },
  ];

  return (
    <section id="join" className="py-20 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Store className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">For Professionals</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold">
            Join Our Network of{" "}
            <span className="gradient-text">Elite Shops</span>
          </h2>

          <p className="text-xl text-muted-foreground">
            Partner with us and get access to exclusive leads from customers seeking premium vehicle services in your area.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="p-6 rounded-xl bg-card border border-border card-hover"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="btn-primary text-lg px-8 py-6 rounded-xl"
            onClick={() => navigate('/partner')}
          >
            Become a Partner
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">
            No setup fees • Only pay for successful jobs
          </p>
        </div>
      </div>
    </section>
  );
};

export default JoinNetworkSection;
