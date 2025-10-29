import PartnerDashboardLayout from "@/components/PartnerDashboardLayout";
import { Card } from "@/components/ui/card";
import { FileText, Clock, CheckCircle, TrendingUp } from "lucide-react";

const PartnerDashboard = () => {
  const stats = [
    { icon: FileText, label: "Total Bids", value: "24", color: "text-blue-500" },
    { icon: Clock, label: "Active Projects", value: "8", color: "text-yellow-500" },
    { icon: CheckCircle, label: "Completed", value: "16", color: "text-green-500" },
    { icon: TrendingUp, label: "This Month", value: "+12%", color: "text-primary" },
  ];

  const recentBids = [
    { id: "BID-001", customer: "John Smith", service: "Full Car Wrap", date: "2024-01-20", status: "pending" },
    { id: "BID-002", customer: "Sarah Johnson", service: "PPF Installation", date: "2024-01-19", status: "accepted" },
    { id: "BID-003", customer: "Mike Wilson", service: "Window Tint", date: "2024-01-18", status: "in-progress" },
  ];

  return (
    <PartnerDashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Dashboard Overview</h1>
          <p className="text-muted-foreground">Welcome back! Here's your business summary.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <Card key={idx} className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                    <p className="text-3xl font-bold">{stat.value}</p>
                  </div>
                  <Icon className={`h-10 w-10 ${stat.color}`} />
                </div>
              </Card>
            );
          })}
        </div>

        {/* Recent Bids */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Bids</h2>
          <div className="space-y-4">
            {recentBids.map((bid) => (
              <div key={bid.id} className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg">
                <div className="flex-1">
                  <p className="font-semibold">{bid.customer}</p>
                  <p className="text-sm text-muted-foreground">{bid.service}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-mono text-muted-foreground">{bid.id}</p>
                  <span
                    className={`inline-block text-xs px-2 py-1 rounded-full ${
                      bid.status === "pending"
                        ? "bg-yellow-500/10 text-yellow-500"
                        : bid.status === "accepted"
                        ? "bg-green-500/10 text-green-500"
                        : "bg-blue-500/10 text-blue-500"
                    }`}
                  >
                    {bid.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </PartnerDashboardLayout>
  );
};

export default PartnerDashboard;
