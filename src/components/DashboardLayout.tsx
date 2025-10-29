import { ReactNode } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth } from "@/contexts/AuthContext";
import {
  LayoutDashboard,
  User,
  MapPin,
  FileText,
  MessageSquare,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSignOut = () => {
    signOut();
    navigate("/");
  };

  const navItems = [
    { path: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { path: "/dashboard/profile", icon: User, label: "Profile" },
    { path: "/dashboard/find-shops", icon: MapPin, label: "Find Shops" },
    { path: "/dashboard/bids", icon: FileText, label: "Your Bids" },
    { path: "/dashboard/chats", icon: MessageSquare, label: "Chats" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-card border-b border-border px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold">Dashboard</h1>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-card border-r border-border z-40 transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="p-6">
          <Link to="/" className="flex items-center gap-2 mb-8">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              BidCar
            </span>
          </Link>

          <div className="mb-8 p-4 bg-background rounded-lg">
            <div className="flex items-center gap-3">
              {user?.avatar && (
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-12 h-12 rounded-full"
                />
              )}
              <div className="flex-1 min-w-0">
                <p className="font-semibold truncate">{user?.name}</p>
                <p className="text-sm text-muted-foreground truncate">
                  {user?.email}
                </p>
              </div>
            </div>
          </div>

          <nav className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link key={item.path} to={item.path}>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <Icon className="mr-2 h-4 w-4" />
                    {item.label}
                  </Button>
                </Link>
              );
            })}
          </nav>

          <div className="mt-8 pt-8 border-t border-border">
            <Button
              variant="ghost"
              className="w-full justify-start text-destructive hover:text-destructive"
              onClick={handleSignOut}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Sign Out
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64 min-h-screen pt-16 lg:pt-0">
        <div className="p-4 lg:p-8">{children}</div>
      </main>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default DashboardLayout;
