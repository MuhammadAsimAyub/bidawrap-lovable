import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import yellowcar from '../assets/yellowcar.jpg';
import Shiny

interface HeroSectionProps {
  onGetBidClick: () => void;
}

const HeroSection = ({ onGetBidClick }: HeroSectionProps) => {
  return (
    <section id="home" className="pt-24 pb-16 px-4 min-h-[90vh] flex items-center">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Premium Vehicle Transformation</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Transform Your Vehicle with{" "}
              <span className="gradient-text">Expert Care</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl">
              Connect with top-rated vehicle wrapping and detailing professionals. Get competitive bids for PPF, wraps, tinting, and ceramic coating services.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={onGetBidClick}
                className="btn-primary text-lg px-8 py-6 rounded-xl"
              >
                Get Your Free Bid
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 rounded-xl border-2"
                onClick={() => document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Join as a Shop
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div>
                <div className="text-3xl font-bold gradient-text">500+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="h-12 w-px bg-border"></div>
              <div>
                <div className="text-3xl font-bold gradient-text">200+</div>
                <div className="text-sm text-muted-foreground">Partner Shops</div>
              </div>
              <div className="h-12 w-px bg-border"></div>
              <div>
                <div className="text-3xl font-bold gradient-text">4.9★</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative group">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/10 p-4 card-hover">
              <div className="relative rounded-xl overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-background to-card">
                {/* Car Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={yellowcar}
                    alt="Premium Vehicle"
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent"></div>

                  {/* Animated Shine Effect */}
                  {/* Dark Overlay + Gradient */}
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent"></div>

                </div>

                {/* Service Tags Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 space-y-3">
                  <h3 className="text-2xl font-bold text-foreground animate-fade-in">Premium Services</h3>
                  <div className="flex flex-wrap gap-2">
                    {['PPF', 'Wraps', 'Tinting', 'Ceramic Coating'].map((service, index) => (
                      <span
                        key={service}
                        className="px-3 py-1.5 rounded-full bg-primary/90 text-primary-foreground text-sm font-medium backdrop-blur-sm border border-primary/20 animate-fade-in-up"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-primary/20 blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-accent/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 -right-8 w-20 h-20 rounded-full bg-primary/10 blur-2xl animate-float"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
