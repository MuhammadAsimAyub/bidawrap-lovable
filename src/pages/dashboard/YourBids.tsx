import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, DollarSign } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

const YourBids = () => {
  const currentBids = [
    {
      id: 1,
      service: "Front Bumper Repair",
      vehicle: "2020 Toyota Camry",
      date: "2024-01-15",
      bidCount: 5,
      highestBid: 450,
      lowestBid: 320,
      status: "active",
    },
    {
      id: 2,
      service: "Oil Change & Tire Rotation",
      vehicle: "2019 Honda Civic",
      date: "2024-01-18",
      bidCount: 3,
      highestBid: 120,
      lowestBid: 85,
      status: "active",
    },
  ];

  const completedBids = [
    {
      id: 3,
      service: "Brake Pad Replacement",
      vehicle: "2018 Ford F-150",
      date: "2024-01-10",
      finalPrice: 280,
      shop: "Elite Car Repair",
      status: "completed",
    },
  ];

  const expiredBids = [
    {
      id: 4,
      service: "Engine Diagnostic",
      vehicle: "2021 Tesla Model 3",
      date: "2024-01-05",
      bidCount: 2,
      status: "expired",
    },
  ];

  return (
    <DashboardLayout>
      <div className="max-w-5xl">
        <h1 className="text-3xl font-bold mb-2">Your Bids</h1>
        <p className="text-muted-foreground mb-8">
          Track and manage your service requests
        </p>

        <Tabs defaultValue="current" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="current">
              Current ({currentBids.length})
            </TabsTrigger>
            <TabsTrigger value="completed">
              Completed ({completedBids.length})
            </TabsTrigger>
            <TabsTrigger value="expired">
              Expired ({expiredBids.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="current" className="space-y-6">
            {currentBids.map((bid) => (
              <Card key={bid.id} className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold">{bid.service}</h3>
                      <Badge className="bg-green-500">Active</Badge>
                    </div>
                    <p className="text-muted-foreground mb-4">{bid.vehicle}</p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>Posted: {bid.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>{bid.bidCount} bids received</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                        <span>
                          ${bid.lowestBid} - ${bid.highestBid}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button>View Bids</Button>
                    <Button variant="outline">Cancel Request</Button>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="completed" className="space-y-6">
            {completedBids.map((bid) => (
              <Card key={bid.id} className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold">{bid.service}</h3>
                      <Badge className="bg-blue-500">Completed</Badge>
                    </div>
                    <p className="text-muted-foreground mb-4">{bid.vehicle}</p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>Completed: {bid.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                        <span className="font-semibold">
                          Final: ${bid.finalPrice}
                        </span>
                      </div>
                      <div className="col-span-2">
                        <span className="text-muted-foreground">Shop: </span>
                        <span className="font-medium">{bid.shop}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button>Leave Review</Button>
                    <Button variant="outline">View Receipt</Button>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="expired" className="space-y-6">
            {expiredBids.map((bid) => (
              <Card key={bid.id} className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold">{bid.service}</h3>
                      <Badge variant="secondary">Expired</Badge>
                    </div>
                    <p className="text-muted-foreground mb-4">{bid.vehicle}</p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>Expired: {bid.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>{bid.bidCount} bids received</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button>Repost Request</Button>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default YourBids;
