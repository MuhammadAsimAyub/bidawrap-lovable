import { useState } from "react";
import { Menu, X, Sun, Moon, User, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useAuth } from "@/contexts/AuthContext";
import { usePartnerAuth } from "@/contexts/PartnerAuthContext";
import { useNavigate, useLocation } from "react-router-dom";
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
  const location = useLocation();

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
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-primary to-[hsl(75,100%,45%)] flex items-center justify-center font-bold text-primary-foreground text-lg sm:text-xl">
              W
            </div>
            <span className="ml-2 text-lg sm:text-xl font-bold">WrapBid</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <div key={link.label} className="relative">
                  <Button
                    variant="ghost"
                    onClick={() => navigate(link.href)}
                    className={`text-foreground/80 hover:text-foreground hover:bg-primary/10 transition-colors ${
                      isActive ? "text-foreground" : ""
                    }`}
                  >
                    {link.label}
                  </Button>
                  {isActive && (
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-0.5 bg-primary rounded-full" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2 sm:space-x-3">
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

            {/* Theme Toggle for Mobile - visible on small screens */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="sm:hidden"
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

            {/* Account Button/Dropdown */}
            {isPartnerAuthenticated ? (
              <>
                {/* Mobile - Direct button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="sm:hidden rounded-full"
                  onClick={() => navigate("/partner/dashboard")}
                >
                  <Store className="h-5 w-5 text-primary" />
                </Button>
                {/* Desktop - Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="hidden sm:flex rounded-full">
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
              </>
            ) : isAuthenticated ? (
              <>
                {/* Mobile - Direct button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="sm:hidden rounded-full"
                  onClick={() => navigate("/dashboard")}
                >
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
                {/* Desktop - Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="hidden sm:flex rounded-full">
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
              </>
            ) : (
              <Button variant="ghost" onClick={() => navigate("/auth")} className="text-sm px-2 sm:px-4">
                Sign In
              </Button>
            )}

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
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <div key={link.label} className="relative">
                  <Button
                    variant="ghost"
                    onClick={() => {
                      navigate(link.href);
                      setIsMenuOpen(false);
                    }}
                    className={`w-full justify-start text-foreground/80 hover:text-foreground hover:bg-primary/10 ${
                      isActive ? "text-foreground bg-primary/5" : ""
                    }`}
                  >
                    {link.label}
                  </Button>
                  {isActive && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-3/4 bg-primary rounded-full" />
                  )}
                </div>
              );
            })}
            <div className="pt-2">
              <Button onClick={onGetBidClick} className="btn-primary w-full">
                Get a Bid
              </Button>
              
              {/* Logout button for authenticated users on mobile */}
              {isPartnerAuthenticated && (
                <Button
                  variant="ghost"
                  onClick={() => {
                    partnerSignOut();
                    setIsMenuOpen(false);
                  }}
                  className="w-full justify-start mt-2"
                >
                  Logout
                </Button>
              )}
              
              {isAuthenticated && !isPartnerAuthenticated && (
                <Button
                  variant="ghost"
                  onClick={() => {
                    signOut();
                    setIsMenuOpen(false);
                  }}
                  className="w-full justify-start mt-2"
                >
                  Logout
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