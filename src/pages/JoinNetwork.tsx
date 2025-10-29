import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";

const JoinNetwork = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Mock submission - replace with actual backend call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Application Submitted!",
      description: "We'll review your application and get back to you soon.",
    });
    
    setLoading(false);
  };

  return (
    <Layout>
      <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-background via-background to-primary/5 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 gradient-text">Join Our Network</h1>
            <p className="text-xl text-muted-foreground">
              Grow your business by connecting with customers looking for your services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card border border-border rounded-2xl p-6 card-hover">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-2">Quality Leads</h3>
              <p className="text-muted-foreground">
                Receive bid requests from customers actively seeking your services
              </p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6 card-hover">
              <div className="text-3xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-2">Grow Revenue</h3>
              <p className="text-muted-foreground">
                Increase your bookings and grow your business with minimal effort
              </p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6 card-hover">
              <div className="text-3xl mb-4">⭐</div>
              <h3 className="text-xl font-bold mb-2">Build Reputation</h3>
              <p className="text-muted-foreground">
                Showcase your work and earn reviews from satisfied customers
              </p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6 card-hover">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-2">Easy Management</h3>
              <p className="text-muted-foreground">
                Simple dashboard to manage bids, quotes, and customer communications
              </p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6">Apply to Join</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="businessName">Business Name</Label>
                  <Input id="businessName" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contactName">Contact Name</Label>
                  <Input id="contactName" required />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Business Address</Label>
                <Input id="address" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="services">Services Offered</Label>
                <Textarea
                  id="services"
                  placeholder="List the services you provide (PPF, Wraps, Tinting, etc.)"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience">Years in Business</Label>
                <Input id="experience" type="number" required />
              </div>

              <Button type="submit" className="w-full btn-primary" disabled={loading}>
                {loading ? "Submitting..." : "Submit Application"}
              </Button>
            </form>
          </div>
        </div>
      </div>
      </div>
    </Layout>
  );
};

export default JoinNetwork;
