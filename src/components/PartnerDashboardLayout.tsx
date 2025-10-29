import { ReactNode, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { usePartnerAuth } from "@/contexts/PartnerAuthContext";
import { Button } from "@/components/ui/button";
import { Menu, X, LayoutDashboard, User, FileText, MessageSquare, LogOut, Car } from "lucide-react";

interface PartnerDashboardLayoutProps {
  children: ReactNode;
}

const PartnerDashboardLayout = ({ children }: PartnerDashboardLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { partner, signOut } = usePartnerAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/partner/dashboard" },
    { icon: User, label: "Profile", path: "/partner/dashboard/profile" },
    { icon: FileText, label: "Bids", path: "/partner/dashboard/bids" },
    { icon: MessageSquare, label: "Chats", path: "/partner/dashboard/chats" },
  ];

  const handleSignOut = () => {
    signOut();
    navigate("/partner");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Header */}
      <div className="lg:hidden flex items-center justify-between p-4 border-b bg-card">
        <div className="flex items-center gap-2">
          <Car className="h-6 w-6 text-primary" />
          <span className="font-bold">Partner Portal</span>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? <X /> : <Menu />}
        </Button>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-50 w-64 bg-card border-r transition-transform duration-200 ease-in-out`}
        >
          <div className="flex flex-col h-full">
            {/* Logo */}
            <div className="hidden lg:flex items-center gap-2 p-6 border-b">
              <Car className="h-8 w-8 text-primary" />
              <span className="font-bold text-lg">Partner Portal</span>
            </div>

            {/* User Info */}
            <div className="p-6 border-b">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold truncate">{partner?.businessName}</p>
                  <p className="text-xs text-muted-foreground truncate">{partner?.email}</p>
                  <span className="inline-block mt-1 text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full capitalize">
                    {partner?.plan}
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-secondary"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Sign Out */}
            <div className="p-4 border-t">
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={handleSignOut}
              >
                <LogOut className="h-5 w-5 mr-3" />
                Sign Out
              </Button>
            </div>
          </div>
        </aside>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          <div className="p-6 lg:p-8">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default PartnerDashboardLayout;
