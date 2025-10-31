import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Star, Users, MapPin, Handshake, HelpCircle, Sparkles, Award, Clock, Shield } from "lucide-react";
import { useState, useEffect } from "react";

const FeaturesSection = () => {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  const [floatOffset, setFloatOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFloatOffset(prev => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const FeatureCard = ({ icon: Icon, title, description }) => (
    <div className="group relative bg-gradient-to-br from-background to-muted/20 p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative">
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );

  return (
    <div className="bg-background overflow-hidden">
      {/* Happy Stories Section */}
      <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10"></div>
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, rgba(0,0,0,0.05) 1px, transparent 0)",
            backgroundSize: "32px 32px"
          }}
        ></div>
        
        <div className="container mx-auto max-w-7xl relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div 
                className="inline-flex items-center gap-3 bg-yellow-500/90 backdrop-blur-sm rounded-full px-5 py-2.5 border border-yellow-600/30 shadow-lg"
                style={{ transform: `translateY(${Math.sin(floatOffset * Math.PI / 180) * 8}px)` }}
              >
                <Star className="w-5 h-5 text-white animate-pulse" />
                <span className="text-sm font-bold text-white tracking-wide">SUCCESS STORIES</span>
              </div>
              
              <div className="space-y-4 w-full">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Happy Stories
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded-full mx-auto lg:mx-0"></div>
              </div>
              
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
                Read real experiences from satisfied customers who found their perfect shop through WrapBid. 
                See how we've helped transform vehicles and build lasting relationships between car owners 
                and professional shops across the country.
              </p>

              <div className="grid grid-cols-2 gap-4 py-6">
                <div className="text-center p-4 bg-background/50 backdrop-blur-sm rounded-lg border border-border/50">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground mt-1">Happy Customers</div>
                </div>
                <div className="text-center p-4 bg-background/50 backdrop-blur-sm rounded-lg border border-border/50">
                  <div className="text-3xl font-bold text-accent">4.9★</div>
                  <div className="text-sm text-muted-foreground mt-1">Average Rating</div>
                </div>
              </div>
              
              <Button
                onClick={() => navigate("/happy-stories")}
                className="btn-primary w-full sm:w-auto group"
                size="lg"
              >
                View Success Stories
                <Sparkles className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform" />
              </Button>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-primary via-accent to-primary rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500 animate-pulse"></div>
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80"
                    alt="Wrapped car"
                    className="relative w-full h-[280px] sm:h-[400px] lg:h-[500px] object-cover transform group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-5 h-5" />
                    </div>
                    <p className="text-xs opacity-90">Professional transformation by verified shops</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-primary/5"></div>
        
        <div className="container mx-auto max-w-7xl relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-accent via-primary to-accent rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src="/car-31.png"
                    alt="Professional car detailing"
                    className="relative w-full h-[280px] sm:h-[400px] lg:h-[500px] object-cover transform group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="inline-flex items-center gap-3 bg-yellow-500/90 backdrop-blur-sm rounded-full px-5 py-2.5 border border-accent/20">
                <Users className="w-5 h-5 text-white" />
                <span className="text-sm font-bold text-white tracking-wide">OUR MISSION</span>
              </div>
              
              <div className="space-y-4 w-full">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  About Us
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-accent to-primary rounded-full mx-auto lg:mx-0"></div>
              </div>
              
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
                WrapBid is revolutionizing the way people find quality vehicle wrap and detailing services. 
                Our platform connects vehicle owners with trusted professionals through transparency, 
                competitive pricing, and verified credentials.
              </p>

              <div className="grid sm:grid-cols-3 gap-4 w-full max-w-2xl">
                <div className="flex flex-col items-center text-center p-4 bg-background/50 backdrop-blur-sm rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-sm font-semibold mb-1">Verified</h3>
                  <p className="text-xs text-muted-foreground">Quality assured</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-background/50 backdrop-blur-sm rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-sm font-semibold mb-1">Top Quality</h3>
                  <p className="text-xs text-muted-foreground">Best professionals</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-background/50 backdrop-blur-sm rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-sm font-semibold mb-1">Fast</h3>
                  <p className="text-xs text-muted-foreground">24-48 hours</p>
                </div>
              </div>
              
              <Button
                onClick={() => navigate("/about")}
                className="btn-primary w-full sm:w-auto group"
                size="lg"
              >
                Our Story
                <Users className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Locate Shops Section */}
      <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/10 to-background"></div>
        
        <div className="container mx-auto max-w-7xl relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="inline-flex items-center gap-3 bg-yellow-500/90 backdrop-blur-sm rounded-full px-5 py-2.5 border border-primary/20">
                <MapPin className="w-5 h-5 text-white animate-bounce" />
                <span className="text-sm font-bold text-white tracking-wide">FIND PROFESSIONALS</span>
              </div>
              
              <div className="space-y-4 w-full">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Locate Shops
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded-full mx-auto lg:mx-0"></div>
              </div>
              
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
                Find verified wrap and detailing shops in your area with our advanced search tools. 
                Browse comprehensive portfolios, read authentic reviews from real customers, 
                and connect with local professionals who specialize in the exact services your vehicle needs.
              </p>

              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-6 border border-border/50 space-y-4">
                <h3 className="font-semibold text-lg flex items-center justify-center lg:justify-start gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  What You'll Find
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-left">Detailed shop profiles with portfolios and certifications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-left">Authentic customer reviews and ratings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-left">Specialty services including wraps, PPF, ceramic coating, and detailing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-left">Direct contact information and instant quote requests</span>
                  </li>
                </ul>
              </div>
              
              <Button
                onClick={() => navigate("/locate-shops")}
                className="btn-primary w-full sm:w-auto group"
                size="lg"
              >
                Find Shops Near You
                <MapPin className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
              </Button>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-primary via-accent to-primary rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500 animate-pulse"></div>
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80"
                    alt="Car detailing shop"
                    className="relative w-full h-[280px] sm:h-[400px] lg:h-[500px] object-cover transform group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-5 h-5" />
                      <span className="text-sm font-semibold">Nationwide Network</span>
                    </div>
                    <p className="text-xs opacity-90">200+ verified shops across major cities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Network Section */}
      <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/10"></div>
        
        <div className="container mx-auto max-w-7xl relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-accent via-primary to-accent rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80"
                    alt="Custom car wrap"
                    className="relative w-full h-[280px] sm:h-[400px] lg:h-[500px] object-cover transform group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="inline-flex items-center gap-3 bg-yellow-500/90 backdrop-blur-sm rounded-full px-5 py-2.5 border border-accent/20">
                <Handshake className="w-5 h-5 text-white" />
                <span className="text-sm font-bold text-white tracking-wide">FOR BUSINESSES</span>
              </div>
              
              <div className="space-y-4 w-full">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Join Our Network
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-accent to-primary rounded-full mx-auto lg:mx-0"></div>
              </div>
              
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
                Are you a shop owner looking to grow your business? Join WrapBid's network of trusted professionals 
                and connect with customers actively seeking your services. Get quality leads and increase your bookings today.
              </p>

              <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl p-6 border border-border/50 space-y-4">
                <h3 className="font-semibold text-lg flex items-center justify-center lg:justify-start gap-2">
                  <Handshake className="w-5 h-5 text-accent" />
                  Partnership Benefits
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-left">Access to pre-qualified customer leads</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-left">Enhanced online visibility and shop profile</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-left">Marketing support and promotional opportunities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-left">Flexible commission structure with no upfront costs</span>
                  </li>
                </ul>
              </div>
              
              <Button
                onClick={() => navigate("/join-network")}
                className="btn-primary w-full sm:w-auto group"
                size="lg"
              >
                Become a Partner
                <Handshake className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-primary/5 to-background"></div>
        
        <div className="container mx-auto max-w-7xl relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="inline-flex items-center gap-3 bg-yellow-500/90 backdrop-blur-sm rounded-full px-5 py-2.5 border border-primary/20">
                <HelpCircle className="w-5 h-5 text-white" />
                <span className="text-sm font-bold text-white tracking-wide">NEED HELP?</span>
              </div>
              
              <div className="space-y-4 w-full">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  FAQ
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded-full mx-auto lg:mx-0"></div>
              </div>
              
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
                Got questions? Find comprehensive answers to commonly asked questions about how WrapBid works, 
                pricing structures, project timelines, quality standards, and more. We're here to guide you 
                every step of the way on your vehicle transformation journey.
              </p>

              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-6 border border-border/50 space-y-4">
                <h3 className="font-semibold text-lg flex items-center justify-center lg:justify-start gap-2">
                  <HelpCircle className="w-5 h-5 text-primary" />
                  Popular Topics
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer text-center lg:text-left">
                    • How it works
                  </div>
                  <div className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer text-center lg:text-left">
                    • Pricing guide
                  </div>
                  <div className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer text-center lg:text-left">
                    • Project timelines
                  </div>
                  <div className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer text-center lg:text-left">
                    • Quality standards
                  </div>
                  <div className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer text-center lg:text-left">
                    • Warranty info
                  </div>
                  <div className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer text-center lg:text-left">
                    • Payment options
                  </div>
                </div>
              </div>
              
              <Button
                onClick={() => navigate("/faq")}
                className="btn-primary w-full sm:w-auto group"
                size="lg"
              >
                Get Answers
                <HelpCircle className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform" />
              </Button>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-primary via-accent to-primary rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500 animate-pulse"></div>
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80"
                    alt="Luxury car"
                    className="relative w-full h-[280px] sm:h-[400px] lg:h-[500px] object-cover transform group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="w-5 h-5" />
                      <span className="text-sm font-semibold">24/7 Support</span>
                    </div>
                    <p className="text-xs opacity-90">We're here to help with any questions you have</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesSection;