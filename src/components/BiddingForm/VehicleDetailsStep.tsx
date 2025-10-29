import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Star, Upload, X } from "lucide-react";
import { FormData } from "./BiddingFormModal";

interface VehicleDetailsStepProps {
  data: FormData;
  onNext: (data: Partial<FormData>) => void;
}

const VehicleDetailsStep = ({ data, onNext }: VehicleDetailsStepProps) => {
  const [vehicleYear, setVehicleYear] = useState(data.vehicleYear);
  const [vehicleMake, setVehicleMake] = useState(data.vehicleMake);
  const [vehicleModel, setVehicleModel] = useState(data.vehicleModel);
  const [vehicleTrim, setVehicleTrim] = useState(data.vehicleTrim);
  const [vehicleCondition, setVehicleCondition] = useState(data.vehicleCondition);
  const [vehicleImages, setVehicleImages] = useState<File[]>(data.vehicleImages);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const totalImages = vehicleImages.length + files.length;
    
    if (totalImages > 5) {
      setErrors({ ...errors, images: "Maximum 5 images allowed" });
      return;
    }
    
    setVehicleImages([...vehicleImages, ...files]);
    setErrors({ ...errors, images: "" });
  };

  const removeImage = (index: number) => {
    setVehicleImages(vehicleImages.filter((_, i) => i !== index));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!vehicleYear) newErrors.vehicleYear = "Year is required";
    if (!vehicleMake) newErrors.vehicleMake = "Make is required";
    if (!vehicleModel) newErrors.vehicleModel = "Model is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      onNext({
        vehicleYear,
        vehicleMake,
        vehicleModel,
        vehicleTrim,
        vehicleCondition,
        vehicleImages,
      });
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Vehicle Details</h3>
        <p className="text-sm text-muted-foreground mb-6">
          Tell us about your vehicle to receive accurate bids.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="year">Vehicle Year *</Label>
          <Input
            id="year"
            type="number"
            placeholder="2024"
            value={vehicleYear}
            onChange={(e) => setVehicleYear(e.target.value)}
            className={errors.vehicleYear ? "border-destructive" : ""}
          />
          {errors.vehicleYear && (
            <p className="text-sm text-destructive">{errors.vehicleYear}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="make">Vehicle Make *</Label>
          <Input
            id="make"
            placeholder="Tesla"
            value={vehicleMake}
            onChange={(e) => setVehicleMake(e.target.value)}
            className={errors.vehicleMake ? "border-destructive" : ""}
          />
          {errors.vehicleMake && (
            <p className="text-sm text-destructive">{errors.vehicleMake}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="model">Vehicle Model *</Label>
          <Input
            id="model"
            placeholder="Model 3"
            value={vehicleModel}
            onChange={(e) => setVehicleModel(e.target.value)}
            className={errors.vehicleModel ? "border-destructive" : ""}
          />
          {errors.vehicleModel && (
            <p className="text-sm text-destructive">{errors.vehicleModel}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="trim">Vehicle Trim (Optional)</Label>
          <Input
            id="trim"
            placeholder="Long Range"
            value={vehicleTrim}
            onChange={(e) => setVehicleTrim(e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label>Vehicle Condition: {vehicleCondition} / 5</Label>
        <div className="flex space-x-2">
          {[1, 2, 3, 4, 5].map((rating) => (
            <button
              key={rating}
              type="button"
              onClick={() => setVehicleCondition(rating)}
              className="transition-transform hover:scale-110"
            >
              <Star
                className={`w-8 h-8 ${
                  rating <= vehicleCondition
                    ? "fill-primary text-primary"
                    : "text-muted-foreground"
                }`}
              />
            </button>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          1 = Needs work, 5 = Excellent condition
        </p>
      </div>

      <div className="space-y-2">
        <Label>Vehicle Images (Up to 5)</Label>
        <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-colors">
          <input
            id="images"
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
            className="hidden"
          />
          <label htmlFor="images" className="cursor-pointer">
            <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">
              Click to upload images or drag and drop
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              PNG, JPG up to 10MB each
            </p>
          </label>
        </div>
        {errors.images && (
          <p className="text-sm text-destructive">{errors.images}</p>
        )}

        {vehicleImages.length > 0 && (
          <div className="grid grid-cols-3 gap-3 mt-4">
            {vehicleImages.map((file, index) => (
              <div key={index} className="relative group">
                <img
                  src={URL.createObjectURL(file)}
                  alt={`Vehicle ${index + 1}`}
                  className="w-full h-24 object-cover rounded-lg"
                />
                <button
                  onClick={() => removeImage(index)}
                  className="absolute top-1 right-1 p-1 bg-destructive text-destructive-foreground rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <Button onClick={handleNext} className="w-full btn-primary">
        Next Step
      </Button>
    </div>
  );
};

export default VehicleDetailsStep;
