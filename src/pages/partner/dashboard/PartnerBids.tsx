import { useState } from "react";
import PartnerDashboardLayout from "@/components/PartnerDashboardLayout";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Calendar, DollarSign, User, Phone, Mail } from "lucide-react";

const PartnerBids = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const mockBids = {
    incoming: [
      {
        id: "BID-101",
        customer: "John Smith",
        email: "john@example.com",
        phone: "+1 (555) 123-4567",
        service: "Full Car Wrap",
        vehicle: "2023 Tesla Model 3",
        date: "2024-01-22",
        budget: "$3,000 - $4,000",
        status: "new",
      },
      {
        id: "BID-102",
        customer: "Emily Davis",
        email: "emily@example.com",
        phone: "+1 (555) 234-5678",
        service: "PPF Installation",
        vehicle: "2022 BMW M4",
        date: "2024-01-21",
        budget: "$5,000 - $6,000",
        status: "new",
      },
    ],
    accepted: [
      {
        id: "BID-098",
        customer: "Michael Brown",
        email: "michael@example.com",
        phone: "+1 (555) 345-6789",
        service: "Window Tint",
        vehicle: "2023 Audi Q5",
        date: "2024-01-18",
        budget: "$400 - $600",
        status: "in-progress",
      },
    ],
    completed: [
      {
        id: "BID-095",
        customer: "Sarah Wilson",
        email: "sarah@example.com",
        phone: "+1 (555) 456-7890",
        service: "Color Change Wrap",
        vehicle: "2021 Porsche 911",
        date: "2024-01-10",
        budget: "$4,500",
        completedDate: "2024-01-15",
        status: "completed",
      },
    ],
  };

  const renderBidCard = (bid: any, showActions: boolean = true) => (
    <Card key={bid.id} className="p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-lg">{bid.customer}</h3>
            <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full font-mono">
              {bid.id}
            </span>
          </div>
          <p className="text-sm text-muted-foreground">{bid.service}</p>
        </div>
        {bid.status === "new" && (
          <span className="px-3 py-1 bg-green-500/10 text-green-500 rounded-full text-xs font-semibold">
            New
          </span>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <span>{bid.email}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Phone className="h-4 w-4 text-muted-foreground" />
            <span>{bid.phone}</span>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span>{new Date(bid.date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <DollarSign className="h-4 w-4 text-muted-foreground" />
            <span>{bid.budget}</span>
          </div>
        </div>
      </div>

      <div className="bg-secondary/30 rounded-lg p-3 mb-4">
        <p className="text-sm font-medium">Vehicle: {bid.vehicle}</p>
      </div>

      {showActions && (
        <div className="flex gap-2">
          {bid.status === "new" && (
            <>
              <Button className="flex-1">Accept Bid</Button>
              <Button variant="outline" className="flex-1">Decline</Button>
            </>
          )}
          {bid.status === "in-progress" && (
            <Button className="flex-1">Mark as Completed</Button>
          )}
          <Button variant="outline">View Details</Button>
        </div>
      )}

      {bid.completedDate && (
        <div className="mt-4 pt-4 border-t text-sm text-muted-foreground">
          Completed on {new Date(bid.completedDate).toLocaleDateString()}
        </div>
      )}
    </Card>
  );

  return (
    <PartnerDashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Bids Management</h1>
          <p className="text-muted-foreground">Manage incoming and ongoing service requests</p>
        </div>

        <div className="flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by ID or customer name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <Tabs defaultValue="incoming" className="space-y-6">
          <TabsList>
            <TabsTrigger value="incoming">
              Incoming ({mockBids.incoming.length})
            </TabsTrigger>
            <TabsTrigger value="accepted">
              Accepted ({mockBids.accepted.length})
            </TabsTrigger>
            <TabsTrigger value="completed">
              Completed ({mockBids.completed.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="incoming" className="space-y-4">
            {mockBids.incoming.map((bid) => renderBidCard(bid))}
          </TabsContent>

          <TabsContent value="accepted" className="space-y-4">
            {mockBids.accepted.map((bid) => renderBidCard(bid))}
          </TabsContent>

          <TabsContent value="completed" className="space-y-4">
            {mockBids.completed.map((bid) => renderBidCard(bid, false))}
          </TabsContent>
        </Tabs>
      </div>
    </PartnerDashboardLayout>
  );
};

export default PartnerBids;
