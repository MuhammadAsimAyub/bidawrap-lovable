import { useState } from "react";
import PartnerDashboardLayout from "@/components/PartnerDashboardLayout";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, User } from "lucide-react";

const PartnerChats = () => {
  const [selectedChat, setSelectedChat] = useState<string | null>("chat-1");
  const [message, setMessage] = useState("");

  const conversations = [
    {
      id: "chat-1",
      customer: "John Smith",
      lastMessage: "When can you start the wrap?",
      time: "2 min ago",
      unread: 2,
      bidId: "BID-101",
    },
    {
      id: "chat-2",
      customer: "Emily Davis",
      lastMessage: "Thank you for the quote!",
      time: "1 hour ago",
      unread: 0,
      bidId: "BID-102",
    },
    {
      id: "chat-3",
      customer: "Michael Brown",
      lastMessage: "Can I see some samples?",
      time: "3 hours ago",
      unread: 1,
      bidId: "BID-098",
    },
  ];

  const mockMessages = [
    {
      id: 1,
      sender: "customer",
      text: "Hi! I'm interested in the full car wrap for my Tesla.",
      time: "10:30 AM",
    },
    {
      id: 2,
      sender: "shop",
      text: "Hello! I'd be happy to help. Can you tell me more about what you're looking for?",
      time: "10:32 AM",
    },
    {
      id: 3,
      sender: "customer",
      text: "I want a matte black finish. How long would it take?",
      time: "10:35 AM",
    },
    {
      id: 4,
      sender: "shop",
      text: "For a full wrap with matte black, it typically takes 3-4 days. We can schedule you in next week.",
      time: "10:38 AM",
    },
    {
      id: 5,
      sender: "customer",
      text: "When can you start the wrap?",
      time: "10:42 AM",
    },
  ];

  const handleSend = () => {
    if (message.trim()) {
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  return (
    <PartnerDashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Messages</h1>
          <p className="text-muted-foreground">Chat with your customers</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Conversations List */}
          <Card className="lg:col-span-1">
            <div className="p-4 border-b">
              <h2 className="font-semibold">Conversations</h2>
            </div>
            <ScrollArea className="h-[600px]">
              <div className="divide-y">
                {conversations.map((conv) => (
                  <button
                    key={conv.id}
                    onClick={() => setSelectedChat(conv.id)}
                    className={`w-full p-4 text-left hover:bg-secondary/50 transition-colors ${
                      selectedChat === conv.id ? "bg-secondary" : ""
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <User className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <p className="font-semibold truncate">{conv.customer}</p>
                          {conv.unread > 0 && (
                            <span className="h-5 w-5 bg-primary text-primary-foreground rounded-full text-xs flex items-center justify-center">
                              {conv.unread}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground mb-1 truncate">
                          {conv.lastMessage}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">{conv.time}</span>
                          <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full font-mono">
                            {conv.bidId}
                          </span>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </ScrollArea>
          </Card>

          {/* Chat Area */}
          <Card className="lg:col-span-2 flex flex-col">
            {selectedChat ? (
              <>
                {/* Chat Header */}
                <div className="p-4 border-b">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">
                        {conversations.find((c) => c.id === selectedChat)?.customer}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {conversations.find((c) => c.id === selectedChat)?.bidId}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Messages */}
                <ScrollArea className="flex-1 p-4">
                  <div className="space-y-4">
                    {mockMessages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex ${msg.sender === "shop" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[70%] rounded-lg p-3 ${
                            msg.sender === "shop"
                              ? "bg-primary text-primary-foreground"
                              : "bg-secondary"
                          }`}
                        >
                          <p className="text-sm">{msg.text}</p>
                          <p
                            className={`text-xs mt-1 ${
                              msg.sender === "shop"
                                ? "text-primary-foreground/70"
                                : "text-muted-foreground"
                            }`}
                          >
                            {msg.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>

                {/* Message Input */}
                <div className="p-4 border-t">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Type your message..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleSend()}
                    />
                    <Button onClick={handleSend}>
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center text-muted-foreground">
                Select a conversation to start chatting
              </div>
            )}
          </Card>
        </div>
      </div>
    </PartnerDashboardLayout>
  );
};

export default PartnerChats;
