import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar } from "@/components/ui/avatar";
import { Send } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

const Chats = () => {
  const [selectedChat, setSelectedChat] = useState(1);
  const [message, setMessage] = useState("");

  const conversations = [
    {
      id: 1,
      shop: "Premium Auto Body",
      lastMessage: "We can start the work tomorrow morning",
      time: "10:30 AM",
      unread: 2,
    },
    {
      id: 2,
      shop: "Elite Car Repair",
      lastMessage: "Thank you for choosing us!",
      time: "Yesterday",
      unread: 0,
    },
    {
      id: 3,
      shop: "Quick Fix Auto",
      lastMessage: "Do you have any pictures of the damage?",
      time: "Jan 15",
      unread: 1,
    },
  ];

  const messages = [
    {
      id: 1,
      sender: "shop",
      text: "Hello! We received your quote request for the front bumper repair.",
      time: "10:00 AM",
    },
    {
      id: 2,
      sender: "user",
      text: "Great! How soon can you start?",
      time: "10:15 AM",
    },
    {
      id: 3,
      sender: "shop",
      text: "We can start the work tomorrow morning. It should take about 2-3 days.",
      time: "10:30 AM",
    },
  ];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // Handle sending message
      setMessage("");
    }
  };

  return (
    <DashboardLayout>
      <div className="max-w-6xl">
        <h1 className="text-3xl font-bold mb-2">Messages</h1>
        <p className="text-muted-foreground mb-8">
          Chat with shops about your requests
        </p>

        <div className="grid md:grid-cols-[350px,1fr] gap-6 h-[calc(100vh-250px)]">
          {/* Conversations List */}
          <Card className="p-4">
            <h2 className="font-semibold mb-4">Conversations</h2>
            <ScrollArea className="h-full">
              <div className="space-y-2">
                {conversations.map((conv) => (
                  <button
                    key={conv.id}
                    onClick={() => setSelectedChat(conv.id)}
                    className={`w-full p-4 rounded-lg text-left transition-colors ${
                      selectedChat === conv.id
                        ? "bg-primary text-primary-foreground"
                        : "bg-background hover:bg-accent"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-1">
                      <span className="font-semibold">{conv.shop}</span>
                      {conv.unread > 0 && (
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            selectedChat === conv.id
                              ? "bg-primary-foreground text-primary"
                              : "bg-primary text-primary-foreground"
                          }`}
                        >
                          {conv.unread}
                        </span>
                      )}
                    </div>
                    <p
                      className={`text-sm truncate ${
                        selectedChat === conv.id
                          ? "text-primary-foreground/80"
                          : "text-muted-foreground"
                      }`}
                    >
                      {conv.lastMessage}
                    </p>
                    <span
                      className={`text-xs ${
                        selectedChat === conv.id
                          ? "text-primary-foreground/60"
                          : "text-muted-foreground"
                      }`}
                    >
                      {conv.time}
                    </span>
                  </button>
                ))}
              </div>
            </ScrollArea>
          </Card>

          {/* Chat Window */}
          <Card className="flex flex-col">
            {/* Chat Header */}
            <div className="p-4 border-b border-border">
              <h3 className="font-semibold">
                {conversations.find((c) => c.id === selectedChat)?.shop}
              </h3>
              <p className="text-sm text-muted-foreground">
                Regarding: Front Bumper Repair
              </p>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${
                      msg.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[70%] ${
                        msg.sender === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-accent"
                      } rounded-lg p-3`}
                    >
                      <p className="text-sm">{msg.text}</p>
                      <span
                        className={`text-xs ${
                          msg.sender === "user"
                            ? "text-primary-foreground/60"
                            : "text-muted-foreground"
                        }`}
                      >
                        {msg.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Message Input */}
            <form
              onSubmit={handleSendMessage}
              className="p-4 border-t border-border"
            >
              <div className="flex gap-2">
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1"
                />
                <Button type="submit" size="icon">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Chats;
