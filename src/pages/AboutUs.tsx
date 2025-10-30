import { useEffect, useRef } from "react";
import Layout from "@/components/Layout";
import { CheckCircle, Shield, Users, TrendingUp } from "lucide-react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import carImage from "@/assets/blackcar.jpg"; // ⬅️ update filename to match your actual image



const AboutUs = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

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

  return (
    <Layout>
      <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-background via-background to-primary/5">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-background py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center observe-animation opacity-0">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
                About Bidawrap.com
              </h1>
              <p className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Driven by Passion. Built on Trust.
              </p>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Connecting the wrap industry with fairness, transparency, and opportunity
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Mission Section with Image */}
            <div className="grid md:grid-cols-2 gap-8 items-center observe-animation opacity-0">
              <div className="order-2 md:order-1">
                <h2 className="text-4xl font-bold mb-6">
                  ABOUT BIDAWRAP.COM
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p>
                    Bidawrap.com was created with one goal: to bring fairness, transparency, and
                    opportunity to the wrap industry. Founded by a group of industry-leading
                    professionals—each with over 25 years of experience in wraps, graphics, and
                    signage—our mission is to build a platform that truly serves both shops and customers.
                  </p>
                  <p>
                    Unlike traditional lead-generation sites that take commissions and hide behind
                    marketing claims, Bidawrap.com is a true marketplace built on honesty, ethics,
                    and trust. Here, customers can post their wrap projects and receive competitive
                    bids from verified professionals specializing in color change wraps, PPF,
                    commercial graphics, and more.
                  </p>
                  <p>
                    Every shop that joins our platform goes through a verification process to ensure
                    quality, professionalism, and reliability. Shops can bid freely without commissions,
                    while customers get real, transparent pricing and access to trusted experts.
                    It's a win-win environment designed for the entire wrap community.
                  </p>
                </div>
              </div>

              <div className="order-1 md:order-2">
                {/* Car wrap image */}
                <div className="relative h-96 rounded-2xl overflow-hidden border-2 border-dashed border-primary/30 group hover:border-primary/50 transition-colors">
                  <img
                    src={carImage}
                    alt="Premium Car Wrap"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Optional overlay for better text visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                </div>
              </div>

            </div>

            {/* Why We Do What We Do Section */}
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12 observe-animation opacity-0 card-hover">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl font-bold mb-4 text-center">
                  Because the Industry Deserves Better.
                </h2>
                <h3 className="text-2xl font-semibold text-primary mb-6 text-center">
                  WHY WE DO WHAT WE DO
                </h3>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p>
                    We've spent decades in the wrap and signage industry, and we've seen how much
                    it's changed. Too many platforms today claim to support professionals but instead
                    charge unnecessary fees, manipulate pricing, or prioritize profits over people.
                    We built Bidawrap.com to change that.
                  </p>
                  <p>
                    Our purpose is to create a fair, honest, and ethical space where real shops and
                    real customers can connect without the middlemen. We believe that when good work
                    meets good people, the entire industry grows stronger.
                  </p>
                  <p className="font-semibold text-foreground">
                    Bidawrap.com was built by the industry, for the industry—to empower professionals,
                    inspire trust, and make the process of getting wrapped simple, transparent, and
                    rewarding for everyone involved.
                  </p>
                </div>
              </div>
            </div>

            {/* Values Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 observe-animation opacity-0">
              <div className="bg-card border border-border rounded-xl p-6 text-center card-hover group">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">No Commissions</h3>
                <p className="text-muted-foreground">
                  Shops bid freely without hidden fees or commissions
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 text-center card-hover group">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Verified Shops</h3>
                <p className="text-muted-foreground">
                  Every shop is verified for quality and professionalism
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 text-center card-hover group">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Built by Experts</h3>
                <p className="text-muted-foreground">
                  Founded by professionals with 25+ years experience
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 text-center card-hover group">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Transparent Pricing</h3>
                <p className="text-muted-foreground">
                  Real pricing from real professionals, no hidden costs
                </p>
              </div>
            </div>

            {/* Image Gallery Section */}
            <div className="grid md:grid-cols-3 gap-6 observe-animation opacity-0">
              <div className="relative h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl border-2 border-dashed border-primary/30 flex items-center justify-center group hover:border-primary/50 transition-colors overflow-hidden">
                <div className="text-center text-muted-foreground">
                  <div className="text-3xl mb-2">🎨</div>
                  <p className="text-sm">Color Change Wrap</p>
                </div>
              </div>
              <div className="relative h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl border-2 border-dashed border-primary/30 flex items-center justify-center group hover:border-primary/50 transition-colors overflow-hidden">
                <div className="text-center text-muted-foreground">
                  <div className="text-3xl mb-2">🛡️</div>
                  <p className="text-sm">Paint Protection Film</p>
                </div>
              </div>
              <div className="relative h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl border-2 border-dashed border-primary/30 flex items-center justify-center group hover:border-primary/50 transition-colors overflow-hidden">
                <div className="text-center text-muted-foreground">
                  <div className="text-3xl mb-2">📊</div>
                  <p className="text-sm">Commercial Graphics</p>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div ref={statsRef} className="grid md:grid-cols-3 gap-6 observe-animation opacity-0">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-8 text-center card-hover">
                <div className="text-5xl font-bold text-primary mb-2">25+</div>
                <p className="text-lg font-semibold text-foreground">Years Experience</p>
                <p className="text-sm text-muted-foreground mt-2">Industry-leading expertise</p>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-8 text-center card-hover">
                <div className="text-5xl font-bold text-primary mb-2">0%</div>
                <p className="text-lg font-semibold text-foreground">Commission Fees</p>
                <p className="text-sm text-muted-foreground mt-2">No hidden costs for shops</p>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-8 text-center card-hover">
                <div className="text-5xl font-bold text-primary mb-2">100%</div>
                <p className="text-lg font-semibold text-foreground">Verified Shops</p>
                <p className="text-sm text-muted-foreground mt-2">Quality guaranteed</p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-12 text-center text-primary-foreground observe-animation opacity-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Experience the Difference?
              </h2>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                Join thousands of customers and shops who trust Bidawrap.com for their wrap needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-background text-foreground rounded-lg font-semibold hover:bg-background/90 transition-colors">
                  Get a Bid
                </button>
                <button className="px-8 py-4 bg-primary-foreground/10 text-primary-foreground rounded-lg font-semibold hover:bg-primary-foreground/20 transition-colors border-2 border-primary-foreground/30" onClick={() => navigate('/partner')}>
                  Join as a Shop
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

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

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .observe-animation:nth-child(1) { animation-delay: 0.1s; }
        .observe-animation:nth-child(2) { animation-delay: 0.2s; }
        .observe-animation:nth-child(3) { animation-delay: 0.3s; }
        .observe-animation:nth-child(4) { animation-delay: 0.4s; }
        .observe-animation:nth-child(5) { animation-delay: 0.5s; }
      `}</style>
    </Layout>
  );
};

export default AboutUs;