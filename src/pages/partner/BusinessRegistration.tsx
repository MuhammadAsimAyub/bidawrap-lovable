import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Layout from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";
import { Upload } from "lucide-react";

const BusinessRegistration = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const plan = location.state?.plan || "basic";

  const [formData, setFormData] = useState({
    businessName: "",
    legalEntityName: "",
    ownerName: "",
    email: "",
    countryCode: "+1",
    phone: "",
    website: "",
    address: "",
    serviceArea: "",
    services: [] as string[],
    vinylFilms: "",
    certificates: "",
    startDate: "",
    acceptPolicy: false,
  });

  const [loading, setLoading] = useState(false);

  const serviceOptions = [
    "PPF",
    "Color Change Wraps",
    "Business/Fleet Wraps and Graphics",
    "Window Perf & Store Front Graphics",
    "Wall Wraps & Interior Graphics",
    "Decals & Lettering",
    "Wrap & Graphic Design",
    "Printing Services",
    "Banners & Signage",
    "Channel Letters",
    "Wrap Installation",
    "Sign Installation",
    "Other",
  ];

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.acceptPolicy) {
      toast({
        title: "Please accept the policy",
        description: "You must accept the plan policy to continue.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast({
      title: "Registration submitted!",
      description: "Proceeding to payment information.",
    });
    
    navigate("/partner/payment", { state: { plan, formData } });
    setLoading(false);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-2">Business Information</h1>
            <p className="text-muted-foreground">Tell us about your shop</p>
          </div>

          <div className="bg-card rounded-lg shadow-lg p-8 border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="businessName">Business Name *</Label>
                  <Input
                    id="businessName"
                    required
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="legalEntityName">Legal Entity Name *</Label>
                  <Input
                    id="legalEntityName"
                    required
                    value={formData.legalEntityName}
                    onChange={(e) => setFormData({ ...formData, legalEntityName: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="ownerName">Owner/Contact Name *</Label>
                  <Input
                    id="ownerName"
                    required
                    value={formData.ownerName}
                    onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <div className="flex gap-2">
                    <Select
                      value={formData.countryCode}
                      onValueChange={(value) => setFormData({ ...formData, countryCode: value })}
                    >
                      <SelectTrigger className="w-24">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="+1">+1</SelectItem>
                        <SelectItem value="+44">+44</SelectItem>
                        <SelectItem value="+91">+91</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      className="flex-1"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="website">Website URL (Optional)</Label>
                  <Input
                    id="website"
                    type="url"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Shop Address *</Label>
                <Input
                  id="address"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="serviceArea">Service Area *</Label>
                <Input
                  id="serviceArea"
                  required
                  placeholder="e.g., Los Angeles County"
                  value={formData.serviceArea}
                  onChange={(e) => setFormData({ ...formData, serviceArea: e.target.value })}
                />
              </div>

              <div className="space-y-3">
                <Label>Services Offered *</Label>
                <div className="grid md:grid-cols-2 gap-3">
                  {serviceOptions.map((service) => (
                    <div key={service} className="flex items-center space-x-2">
                      <Checkbox
                        id={service}
                        checked={formData.services.includes(service)}
                        onCheckedChange={() => handleServiceToggle(service)}
                      />
                      <label htmlFor={service} className="text-sm cursor-pointer">
                        {service}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="vinylFilms">Vinyl Films and PPF Films Used</Label>
                <Textarea
                  id="vinylFilms"
                  placeholder="List the brands you typically use..."
                  value={formData.vinylFilms}
                  onChange={(e) => setFormData({ ...formData, vinylFilms: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="certificates">Certificates Obtained</Label>
                <Input
                  id="certificates"
                  placeholder="Enter certificate names or 'NA'"
                  value={formData.certificates}
                  onChange={(e) => setFormData({ ...formData, certificates: e.target.value })}
                />
                <Button type="button" variant="outline" className="mt-2">
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Certificates
                </Button>
              </div>

              <div className="space-y-2">
                <Label htmlFor="startDate">Start Date *</Label>
                <Input
                  id="startDate"
                  type="date"
                  required
                  value={formData.startDate}
                  onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="acceptPolicy"
                  checked={formData.acceptPolicy}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, acceptPolicy: checked as boolean })
                  }
                />
                <label htmlFor="acceptPolicy" className="text-sm cursor-pointer">
                  I have read and accept the plan policy *
                </label>
              </div>

              <Button
                type="submit"
                className="w-full"
                size="lg"
                disabled={loading || !formData.acceptPolicy}
              >
                {loading ? "Processing..." : "Start Free Trial"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BusinessRegistration;
