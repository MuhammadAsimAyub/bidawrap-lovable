import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { usePartnerAuth } from "@/contexts/PartnerAuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Layout from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";
import { CreditCard, Lock } from "lucide-react";

const PaymentInfo = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { signUp } = usePartnerAuth();
  const { plan, formData } = location.state || {};

  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvv: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    await signUp(formData?.email || "shop@example.com", "password", {
      businessName: formData?.businessName || "My Shop",
      plan,
    });

    toast({
      title: "Account created successfully!",
      description: "Welcome to our partner network. Your free trial has started.",
    });

    navigate("/partner/dashboard");
    setLoading(false);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-2">Payment Information</h1>
            <p className="text-muted-foreground">Secure payment processing</p>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
              <Lock className="h-4 w-4" />
              Your payment information is encrypted and secure
            </div>
          </div>

          <div className="bg-card rounded-lg shadow-lg p-8 border">
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-6">
              <p className="text-sm font-semibold text-primary">
                🎉 Your card will not be charged during the 1-month free trial
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="cardNumber">Card Number *</Label>
                <div className="relative">
                  <Input
                    id="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    required
                    maxLength={19}
                    value={paymentData.cardNumber}
                    onChange={(e) => setPaymentData({ ...paymentData, cardNumber: e.target.value })}
                  />
                  <CreditCard className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="cardName">Cardholder Name *</Label>
                <Input
                  id="cardName"
                  placeholder="John Doe"
                  required
                  value={paymentData.cardName}
                  onChange={(e) => setPaymentData({ ...paymentData, cardName: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="expiry">Expiry Date *</Label>
                  <Input
                    id="expiry"
                    placeholder="MM/YY"
                    required
                    maxLength={5}
                    value={paymentData.expiry}
                    onChange={(e) => setPaymentData({ ...paymentData, expiry: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cvv">CVV *</Label>
                  <Input
                    id="cvv"
                    placeholder="123"
                    required
                    maxLength={4}
                    type="password"
                    value={paymentData.cvv}
                    onChange={(e) => setPaymentData({ ...paymentData, cvv: e.target.value })}
                  />
                </div>
              </div>

              <div className="bg-secondary/30 rounded-lg p-4 space-y-2">
                <h3 className="font-semibold">Summary</h3>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Plan</span>
                  <span className="font-medium capitalize">{plan} Plan</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Trial Period</span>
                  <span className="font-medium">1 Month Free</span>
                </div>
                <div className="flex justify-between text-sm border-t pt-2 mt-2">
                  <span className="font-semibold">Due Today</span>
                  <span className="font-bold text-primary">$0.00</span>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full"
                size="lg"
                disabled={loading}
              >
                {loading ? "Creating Account..." : "Complete Registration"}
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                By completing registration, you agree to our Terms of Service and Privacy Policy
              </p>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PaymentInfo;
