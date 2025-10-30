import { useEffect, useRef, useState } from "react";
import Layout from "@/components/Layout";
import {
  TrendingUp,
  Shield,
  Users,
  DollarSign,
  Star,
  BarChart3,
  CheckCircle,
  Zap,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import carImage from "@/assets/bg-car.avif";


const JoinNetwork = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".observe-animation");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Mock submission - replace with actual backend call
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Application Submitted!",
      description: "We'll review your application and get back to you within 24-48 hours.",
    });

    setLoading(false);
    setIsModalOpen(false);
  };

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Quality Leads",
      description: "Receive bid requests from customers actively seeking your services. No more cold calls or paid ads."
    },
    {
      icon: <DollarSign className="w-8 h-8 text-primary" />,
      title: "Zero Commission",
      description: "Keep 100% of your earnings. No hidden fees, no commissions, no surprises. Just honest business."
    },
    {
      icon: <Star className="w-8 h-8 text-primary" />,
      title: "Build Reputation",
      description: "Showcase your work and earn reviews from satisfied customers. Build trust and credibility."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      title: "Easy Management",
      description: "Simple dashboard to manage bids, quotes, and customer communications all in one place."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Verified Badge",
      description: "Get verified and stand out from competitors. Show customers you're a trusted professional."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Community Support",
      description: "Join a network of professionals. Share knowledge, tips, and grow together."
    }
  ];

  const features = [
    "Unlimited bid submissions",
    "Direct customer communication",
    "Portfolio showcase",
    "Review management",
    "Real-time notifications",
    "Mobile-friendly dashboard",
    "Analytics and insights",
    "Priority support"
  ];

  return (
    <Layout>
      <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-background via-background to-primary/5">
        {/* Hero Section */}
        <div className="relative overflow-hidden py-20 min-h-[600px] flex items-center">
          {/* Background Image Container */}
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
              {/* Placeholder for background image - replace with actual image */}

              <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-xl overflow-hidden">
                <img
                  src={carImage}
                  alt="Premium Car Wrap"
                  className="w-full h-full object-cover"
                />
                {/* Optional overlay for style */}
                <div className="absolute inset-0 bg-gradient-to-t to-transparent" />
              </div>

            </div>
            {/* Dark overlay for text readability */}
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 
  dark:bg-gradient-to-r dark:from-background/95 dark:via-background/80 dark:to-background/60
  bg-gradient-to-r from-white/0 via-white/0 to-white/0"
            />
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center observe-animation opacity-0">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text drop-shadow-lg">
                Join Our Network
              </h1>
              <p className="text-2xl text-foreground mb-4 font-semibold drop-shadow">
                Grow Your Business with Quality Leads
              </p>
              <p className="text-xl font-bold text-foreground max-w-3xl mx-auto mb-8 drop-shadow">
                Connect with customers looking for wraps, PPF, tinting, and detailing services.
                No commissions. No hidden fees. Just honest connections.
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-10 py-5 bg-primary text-primary-foreground rounded-lg font-bold text-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-2xl"
              >
                Join as a Shop Partner
              </button>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 observe-animation opacity-0">
              <h2 className="text-4xl font-bold mb-4">Why Partner With Bidawrap?</h2>
              <p className="text-xl text-muted-foreground">
                Built by professionals, for professionals
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 card-hover observe-animation opacity-0 group"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>

            {/* Features List */}
            <div className="bg-gradient-to-br from-primary/5 to-background border border-primary/20 rounded-2xl p-8 md:p-12 observe-animation opacity-0">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">
                  Everything You Need to Succeed
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                      <span className="text-lg">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div ref={statsRef} className="grid md:grid-cols-3 gap-6 mt-16 observe-animation opacity-0">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-8 text-center card-hover">
                <div className="text-5xl font-bold text-primary mb-2">0%</div>
                <p className="text-lg font-semibold text-foreground">Commission Fee</p>
                <p className="text-sm text-muted-foreground mt-2">Keep all your earnings</p>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-8 text-center card-hover">
                <div className="text-5xl font-bold text-primary mb-2">100%</div>
                <p className="text-lg font-semibold text-foreground">Verified Process</p>
                <p className="text-sm text-muted-foreground mt-2">Quality assurance guaranteed</p>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-8 text-center card-hover">
                <div className="text-5xl font-bold text-primary mb-2">24/7</div>
                <p className="text-lg font-semibold text-foreground">Platform Access</p>
                <p className="text-sm text-muted-foreground mt-2">Manage bids anytime</p>
              </div>
            </div>

            {/* How It Works */}
            <div className="mt-20 observe-animation opacity-0">
              <h2 className="text-4xl font-bold mb-12 text-center">How It Works</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl">
                    1
                  </div>
                  <h3 className="font-bold text-lg mb-2">Sign Up</h3>
                  <p className="text-muted-foreground text-sm">
                    Create your shop account and complete verification
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl">
                    2
                  </div>
                  <h3 className="font-bold text-lg mb-2">Get Verified</h3>
                  <p className="text-muted-foreground text-sm">
                    Our team reviews your shop to ensure quality standards
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl">
                    3
                  </div>
                  <h3 className="font-bold text-lg mb-2">Receive Leads</h3>
                  <p className="text-muted-foreground text-sm">
                    Get notified when customers need your services
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl">
                    4
                  </div>
                  <h3 className="font-bold text-lg mb-2">Submit Bids</h3>
                  <p className="text-muted-foreground text-sm">
                    Send competitive quotes and win more projects
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial Section */}
            <div className="mt-20 bg-card border border-border rounded-2xl p-8 md:p-12 observe-animation opacity-0">
              <div className="max-w-3xl mx-auto text-center">
                <div className="text-6xl mb-4">💬</div>
                <p className="text-xl text-muted-foreground mb-6 italic">
                  "Bidawrap has transformed how we get new customers. The quality of leads is
                  excellent, and the zero-commission model means we can offer competitive prices
                  while maintaining our margins. Best decision we made for our business!"
                </p>
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                  ))}
                </div>
                <p className="font-bold">Michael Chen</p>
                <p className="text-sm text-muted-foreground">Premium Wraps LA</p>
              </div>
            </div>

            {/* Final CTA */}
            <div className="mt-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-12 text-center text-primary-foreground observe-animation opacity-0">
              <div className="flex items-center justify-center mb-4">
                <Zap className="w-12 h-12" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Grow Your Business?
              </h2>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                Join hundreds of successful shops already using Bidawrap to grow their business.
                Start receiving quality leads today!
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-10 py-5 bg-background text-foreground rounded-lg font-bold text-lg hover:bg-background/90 transition-all hover:scale-105 shadow-lg"
              >
                Get Started - It's Free
              </button>
              <p className="text-sm mt-4 opacity-75">
                No credit card required • No setup fees • Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Signup Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />

          {/* Modal Content */}
          <div className="relative bg-card border border-border rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto m-4 shadow-2xl animate-modal-slide-up">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Form Content */}
            <div className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-2">Join as a Shop Partner</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24-48 hours
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="businessName">Business Name *</Label>
                    <Input id="businessName" required placeholder="Your Shop Name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contactName">Contact Name *</Label>
                    <Input id="contactName" required placeholder="John Doe" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" required placeholder="shop@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone *</Label>
                    <Input id="phone" type="tel" required placeholder="+1 (555) 123-4567" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Business Address *</Label>
                  <Input id="address" required placeholder="123 Main St, City, State 12345" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="website">Website (Optional)</Label>
                  <Input id="website" type="url" placeholder="https://yourshop.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="services">Services Offered *</Label>
                  <Textarea
                    id="services"
                    placeholder="e.g., Color Change Wraps, PPF, Window Tinting, Commercial Graphics..."
                    required
                    rows={3}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="experience">Years in Business *</Label>
                    <Input id="experience" type="number" required placeholder="5" min="0" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="employees">Number of Employees</Label>
                    <Input id="employees" type="number" placeholder="10" min="1" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="about">Tell Us About Your Shop (Optional)</Label>
                  <Textarea
                    id="about"
                    placeholder="Brief description of your shop, specializations, certifications, etc."
                    rows={4}
                  />
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    className="w-full btn-primary py-6 text-lg"
                    disabled={loading}
                  >
                    {loading ? "Submitting..." : "Submit Application"}
                  </Button>
                  <p className="text-xs text-center text-muted-foreground mt-4">
                    By submitting, you agree to our Terms of Service and Privacy Policy
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes modalSlideUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-modal-slide-up {
          animation: modalSlideUp 0.3s ease-out;
        }

        .observe-animation:nth-child(1) { animation-delay: 0.1s; }
        .observe-animation:nth-child(2) { animation-delay: 0.2s; }
        .observe-animation:nth-child(3) { animation-delay: 0.3s; }
        .observe-animation:nth-child(4) { animation-delay: 0.4s; }
        .observe-animation:nth-child(5) { animation-delay: 0.5s; }
        .observe-animation:nth-child(6) { animation-delay: 0.6s; }
      `}</style>
    </Layout>
  );
};

export default JoinNetwork;