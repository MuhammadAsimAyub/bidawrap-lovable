import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronLeft } from "lucide-react";
import { FormData } from "./BiddingFormModal";

interface ServiceRequestStepProps {
  data: FormData;
  onNext: (data: Partial<FormData>) => void;
  onBack: () => void;
}

const ServiceRequestStep = ({ data, onNext, onBack }: ServiceRequestStepProps) => {
  const [requestCategory, setRequestCategory] = useState(data.requestCategory);
  const [serviceDescription, setServiceDescription] = useState(data.serviceDescription);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const categories = [
    "PPF (Paint Protection Film)",
    "Color Wrap",
    "Business/Branding Wrap",
    "Custom Graphics",
    "Window Tinting",
    "Ceramic Coating",
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!requestCategory) newErrors.requestCategory = "Please select a service category";
    if (!serviceDescription.trim()) newErrors.serviceDescription = "Description is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      onNext({
        requestCategory,
        serviceDescription,
      });
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Service Request</h3>
        <p className="text-sm text-muted-foreground mb-6">
          Tell us what service you're looking for.
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="category">Request Category *</Label>
        <Select value={requestCategory} onValueChange={setRequestCategory}>
          <SelectTrigger className={errors.requestCategory ? "border-destructive" : ""}>
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent className="bg-popover z-50">
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.requestCategory && (
          <p className="text-sm text-destructive">{errors.requestCategory}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Service Description *</Label>
        <Textarea
          id="description"
          placeholder="Please describe your service needs in detail. Include any specific requirements, preferences, or questions you have..."
          value={serviceDescription}
          onChange={(e) => setServiceDescription(e.target.value)}
          className={`min-h-[150px] ${errors.serviceDescription ? "border-destructive" : ""}`}
        />
        {errors.serviceDescription && (
          <p className="text-sm text-destructive">{errors.serviceDescription}</p>
        )}
        <p className="text-xs text-muted-foreground">
          Be as detailed as possible to receive accurate bids
        </p>
      </div>

      <div className="flex gap-3">
        <Button
          type="button"
          variant="outline"
          onClick={onBack}
          className="flex-1"
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        <Button onClick={handleNext} className="flex-1 btn-primary">
          Next Step
        </Button>
      </div>
    </div>
  );
};

export default ServiceRequestStep;
