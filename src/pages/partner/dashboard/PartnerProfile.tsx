import { useState } from "react";
import { usePartnerAuth } from "@/contexts/PartnerAuthContext";
import PartnerDashboardLayout from "@/components/PartnerDashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { User, Camera } from "lucide-react";

const PartnerProfile = () => {
  const { partner, updatePartner } = usePartnerAuth();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    businessName: partner?.businessName || "",
    email: partner?.email || "",
    phone: "",
    address: "",
    bio: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    updatePartner({ businessName: formData.businessName });
    
    toast({
      title: "Profile updated",
      description: "Your changes have been saved successfully.",
    });
    
    setLoading(false);
  };

  return (
    <PartnerDashboardLayout>
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold mb-8">Profile Settings</h1>

        <Card className="p-6 mb-6">
          <div className="flex items-center gap-6 mb-6">
            <div className="relative">
              <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="h-12 w-12 text-primary" />
              </div>
              <button className="absolute bottom-0 right-0 p-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90">
                <Camera className="h-4 w-4" />
              </button>
            </div>
            <div>
              <h2 className="text-xl font-semibold">{partner?.businessName}</h2>
              <p className="text-sm text-muted-foreground">{partner?.email}</p>
              <span className="inline-block mt-2 text-xs px-3 py-1 bg-primary/10 text-primary rounded-full capitalize">
                {partner?.plan} Plan
              </span>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="businessName">Business Name</Label>
              <Input
                id="businessName"
                value={formData.businessName}
                onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Business Address</Label>
              <Input
                id="address"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Business Bio</Label>
              <Textarea
                id="bio"
                rows={4}
                placeholder="Tell customers about your business..."
                value={formData.bio}
                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              />
            </div>

            <Button type="submit" disabled={loading}>
              {loading ? "Saving..." : "Save Changes"}
            </Button>
          </form>
        </Card>
      </div>
    </PartnerDashboardLayout>
  );
};

export default PartnerProfile;
