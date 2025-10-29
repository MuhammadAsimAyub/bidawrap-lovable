import { useState } from "react";
import { Menu, X, Sun, Moon, User, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useAuth } from "@/contexts/AuthContext";
import { usePartnerAuth } from "@/contexts/PartnerAuthContext";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavbarProps {
  onGetBidClick: () => void;
}

const Navbar = ({ onGetBidClick }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { user, isAuthenticated, signOut } = useAuth();
  const { partner, isAuthenticated: isPartnerAuthenticated, signOut: partnerSignOut } = usePartnerAuth();
  const navigate = useNavigate();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Happy Stories", href: "/happy-stories" },
    { label: "About Us", href: "/about" },
    { label: "Locate Shops", href: "/locate-shops" },
    { label: "Join Our Network", href: "/join-network" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-[hsl(75,100%,45%)] flex items-center justify-center font-bold text-primary-foreground text-xl">
              W
            </div>
            <span className="ml-2 text-xl font-bold">WrapBid</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Button
                key={link.label}
                variant="ghost"
                onClick={() => navigate(link.href)}
                className="text-foreground/80 hover:text-foreground"
              >
                {link.label}
              </Button>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hidden sm:flex"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>

            <Button onClick={onGetBidClick} className="btn-primary hidden sm:flex">
              Get a Bid
            </Button>

            {/* Account Dropdown */}
            <div className="hidden sm:block">
              {isPartnerAuthenticated ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <Store className="h-5 w-5 text-primary" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48 bg-card border-border">
                    <DropdownMenuItem onClick={() => navigate("/partner/dashboard")} className="cursor-pointer">
                      Dashboard
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={partnerSignOut} className="cursor-pointer">
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : isAuthenticated ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-full">
                      {user?.avatar ? (
                        <img
                          src={user.avatar}
                          alt={user.name}
                          className="w-8 h-8 rounded-full"
                        />
                      ) : (
                        <User className="h-5 w-5" />
                      )}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48 bg-card border-border">
                    <DropdownMenuItem onClick={() => navigate("/dashboard")} className="cursor-pointer">
                      Dashboard
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={signOut} className="cursor-pointer">
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button variant="ghost" onClick={() => navigate("/auth")}>
                  Sign In
                </Button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 space-y-2 border-t border-border">
            {navLinks.map((link) => (
              <Button
                key={link.label}
                variant="ghost"
                onClick={() => {
                  navigate(link.href);
                  setIsMenuOpen(false);
                }}
                className="w-full justify-start text-foreground/80"
              >
                {link.label}
              </Button>
            ))}
            <div className="pt-2 space-y-2">
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  {theme === "dark" ? (
                    <Sun className="h-5 w-5" />
                  ) : (
                    <Moon className="h-5 w-5" />
                  )}
                </Button>
                <Button onClick={onGetBidClick} className="btn-primary flex-1">
                  Get a Bid
                </Button>
              </div>
              {isPartnerAuthenticated ? (
                <div className="space-y-2 pt-2">
                  <Button
                    variant="ghost"
                    onClick={() => {
                      navigate("/partner/dashboard");
                      setIsMenuOpen(false);
                    }}
                    className="w-full justify-start"
                  >
                    Partner Dashboard
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={() => {
                      partnerSignOut();
                      setIsMenuOpen(false);
                    }}
                    className="w-full justify-start"
                  >
                    Logout
                  </Button>
                </div>
              ) : isAuthenticated ? (
                <div className="space-y-2 pt-2">
                  <Button
                    variant="ghost"
                    onClick={() => {
                      navigate("/dashboard");
                      setIsMenuOpen(false);
                    }}
                    className="w-full justify-start"
                  >
                    Dashboard
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={() => {
                      signOut();
                      setIsMenuOpen(false);
                    }}
                    className="w-full justify-start"
                  >
                    Logout
                  </Button>
                </div>
              ) : (
                <Button
                  variant="ghost"
                  onClick={() => {
                    navigate("/auth");
                    setIsMenuOpen(false);
                  }}
                  className="w-full justify-start"
                >
                  Sign In
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
