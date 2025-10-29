import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import DashboardLayout from "@/components/DashboardLayout";

const Profile = () => {
  const { user } = useAuth();
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Profile updated successfully!");
  };

  return (
    <DashboardLayout>
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold mb-2">Profile Settings</h1>
        <p className="text-muted-foreground mb-8">
          Update your personal information
        </p>

        <Card className="p-6">
          <form onSubmit={handleUpdateProfile} className="space-y-6">
            <div className="flex items-center gap-6 mb-6">
              {user?.avatar && (
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-24 h-24 rounded-full"
                />
              )}
              <Button type="button" variant="outline">
                Change Avatar
              </Button>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter your address"
                />
              </div>
            </div>

            <Button type="submit" className="w-full">
              Save Changes
            </Button>
          </form>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
