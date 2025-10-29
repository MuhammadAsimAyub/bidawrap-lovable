import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import VehicleDetailsStep from "./VehicleDetailsStep";
import ServiceRequestStep from "./ServiceRequestStep";
import ContactInfoStep from "./ContactInfoStep";

interface BiddingFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface FormData {
  // Step 1
  vehicleYear: string;
  vehicleMake: string;
  vehicleModel: string;
  vehicleTrim: string;
  vehicleCondition: number;
  vehicleImages: File[];
  // Step 2
  requestCategory: string;
  serviceDescription: string;
  // Step 3
  firstName: string;
  lastName: string;
  email: string;
  zipCode: string;
  contactMethod: string;
  dueDate: Date | undefined;
}

const BiddingFormModal = ({ isOpen, onClose }: BiddingFormModalProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    vehicleYear: "",
    vehicleMake: "",
    vehicleModel: "",
    vehicleTrim: "",
    vehicleCondition: 5,
    vehicleImages: [],
    requestCategory: "",
    serviceDescription: "",
    firstName: "",
    lastName: "",
    email: "",
    zipCode: "",
    contactMethod: "email",
    dueDate: undefined,
  });

  const totalSteps = 3;
  const progress = (currentStep / totalSteps) * 100;

  const handleNext = (stepData: Partial<FormData>) => {
    setFormData({ ...formData, ...stepData });
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (stepData: Partial<FormData>) => {
    const finalData = { ...formData, ...stepData };
    console.log("Form submitted:", finalData);
    // Here you would typically send the data to your backend
    onClose();
    setCurrentStep(1);
    // Reset form or show success message
  };

  const handleClose = () => {
    onClose();
    setCurrentStep(1);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Get Your Custom Bid
          </DialogTitle>
          <div className="space-y-2 pt-2">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Step {currentStep} of {totalSteps}</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </DialogHeader>

        <div className="pt-4">
          {currentStep === 1 && (
            <VehicleDetailsStep
              data={formData}
              onNext={handleNext}
            />
          )}
          {currentStep === 2 && (
            <ServiceRequestStep
              data={formData}
              onNext={handleNext}
              onBack={handleBack}
            />
          )}
          {currentStep === 3 && (
            <ContactInfoStep
              data={formData}
              onSubmit={handleSubmit}
              onBack={handleBack}
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BiddingFormModal;
