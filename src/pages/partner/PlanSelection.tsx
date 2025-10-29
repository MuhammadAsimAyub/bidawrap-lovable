import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Check } from "lucide-react";

const PlanSelection = () => {
  const [selectedPlan, setSelectedPlan] = useState<"basic" | "premium" | null>(null);
  const navigate = useNavigate();

  const plans = [
    {
      id: "basic",
      name: "Basic Plan",
      price: "$49",
      features: [
        "Up to 50 bids per month",
        "Basic analytics",
        "Email support",
        "Standard listing",
        "Basic profile customization",
      ],
    },
    {
      id: "premium",
      name: "Premium Plan",
      price: "$99",
      features: [
        "Unlimited bids",
        "Advanced analytics & insights",
        "Priority support",
        "Featured listing",
        "Full profile customization",
        "Early access to new features",
        "Dedicated account manager",
      ],
    },
  ];

  const handleContinue = () => {
    if (selectedPlan) {
      navigate("/partner/register", { state: { plan: selectedPlan } });
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Choose Your Plan</h1>
            <p className="text-xl text-muted-foreground mb-2">
              Start growing your business today
            </p>
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
              🎉 1 Month Free Trial
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {plans.map((plan) => (
              <Card
                key={plan.id}
                className={`p-8 cursor-pointer transition-all ${
                  selectedPlan === plan.id
                    ? "border-primary border-2 shadow-xl scale-105"
                    : "border hover:border-primary/50"
                }`}
                onClick={() => setSelectedPlan(plan.id as "basic" | "premium")}
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-primary mb-1">
                    {plan.price}
                    <span className="text-lg text-muted-foreground">/month</span>
                  </div>
                  <p className="text-sm text-muted-foreground">After free trial</p>
                </div>

                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {selectedPlan === plan.id && (
                  <div className="mt-6 text-center">
                    <span className="text-sm font-semibold text-primary">✓ Selected</span>
                  </div>
                )}
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              onClick={handleContinue}
              disabled={!selectedPlan}
              className="px-12"
            >
              Continue to Registration
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PlanSelection;
