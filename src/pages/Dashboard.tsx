import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { ArrowRight, FileText, CheckCircle, Clock } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <div className="max-w-5xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back, {user?.name}!</h1>
          <p className="text-muted-foreground">
            Here's what's happening with your requests
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Active Bids</p>
                <p className="text-3xl font-bold">2</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-500/10 rounded-lg">
                <Clock className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">In Progress</p>
                <p className="text-3xl font-bold">0</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-500/10 rounded-lg">
                <CheckCircle className="h-6 w-6 text-green-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Completed</p>
                <p className="text-3xl font-bold">1</p>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-background rounded-lg">
              <div>
                <p className="font-semibold">Front Bumper Repair</p>
                <p className="text-sm text-muted-foreground">
                  2020 Toyota Camry • 5 bids received
                </p>
              </div>
              <Button
                variant="ghost"
                onClick={() => navigate("/dashboard/bids")}
              >
                View <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center justify-between p-4 bg-background rounded-lg">
              <div>
                <p className="font-semibold">Oil Change & Tire Rotation</p>
                <p className="text-sm text-muted-foreground">
                  2019 Honda Civic • 3 bids received
                </p>
              </div>
              <Button
                variant="ghost"
                onClick={() => navigate("/dashboard/bids")}
              >
                View <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>

        <Card className="p-8 bg-gradient-to-br from-primary/10 to-primary/5">
          <h2 className="text-2xl font-bold mb-2">Need a new quote?</h2>
          <p className="text-muted-foreground mb-6">
            Get competitive bids from trusted shops in your area
          </p>
          <Button onClick={() => navigate("/")}>
            Get a Bid <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
