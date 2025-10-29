import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-2xl shadow-elegant p-8 mb-8">
            <div className="flex items-center gap-4 mb-6">
              {user?.avatar && (
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-16 h-16 rounded-full"
                />
              )}
              <div>
                <h1 className="text-3xl font-bold">Welcome, {user?.name}!</h1>
                <p className="text-muted-foreground">{user?.email}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <div className="bg-background border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Active Bids</h3>
                <p className="text-3xl font-bold text-primary">0</p>
              </div>
              <div className="bg-background border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Completed</h3>
                <p className="text-3xl font-bold text-primary">0</p>
              </div>
              <div className="bg-background border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">In Progress</h3>
                <p className="text-3xl font-bold text-primary">0</p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl shadow-elegant p-8">
            <h2 className="text-2xl font-bold mb-4">Your Requests</h2>
            <div className="text-center py-12 text-muted-foreground">
              <p className="mb-4">You haven't submitted any bid requests yet.</p>
              <Button onClick={() => navigate("/")} className="btn-primary">
                Get Your First Bid
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
