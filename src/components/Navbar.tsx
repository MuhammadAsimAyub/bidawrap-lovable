import { useState } from "react";
import { Menu, X, Sun, Moon, User, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useAuth } from "@/contexts/AuthContext";
import { usePartnerAuth } from "@/contexts/PartnerAuthContext";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/logo.avif"; // ✅ adjust path if needed
import { motion } from "framer-motion";


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
        <div className="flex items-center justify-between h-20">
          {/* Logo */}

          <motion.div
            className="flex items-center w-14 h-14 justify-center 
  ml-3
  bg-white dark:bg-gray-400
  rounded
  leading-none"
            style={{
              display: "inline-flex",
            }}
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 15px rgba(250, 204, 21, 0.5)", // soft yellow glow
            }}
            whileTap={{
              scale: 0.95,
              rotate: [-2, 2, -1, 0], // small jiggle on click
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
          >
            <img
              src={logo}
              alt="Bid A Wrap Logo"
              className="w-16 h-16 sm:w-16 sm:h-16 object-contain block"
            />
          </motion.div>






          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <div key={link.label} className="relative">
                  <Button
                    variant="ghost"
                    onClick={() => navigate(link.href)}
                    className={`text-foreground/80 hover:text-foreground hover:bg-primary/10 transition-colors ${isActive ? "text-foreground" : ""
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
                  className="sm:hidden rounded-full border border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-gray-800/40 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors shadow-sm"
                  onClick={() => navigate("/partner/dashboard")}
                >
                  <Store className="h-5 w-5 text-yellow-500 dark:text-yellow-400" />
                </Button>

                {/* Desktop - Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="hidden sm:flex rounded-full border border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-gray-800/40 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors shadow-sm"
                    >
                      <Store className="h-5 w-5 text-yellow-500 dark:text-yellow-400" />
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
                  className="sm:hidden rounded-full border border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-gray-800/40 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors shadow-sm"
                  onClick={() => navigate("/dashboard")}
                >
                  <User className="h-5 w-5 text-yellow-500 dark:text-yellow-400" />
                </Button>

                {/* Desktop - Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="hidden sm:flex rounded-full border border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-gray-800/40 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors shadow-sm"
                    >
                      <User className="h-5 w-5 text-yellow-500 dark:text-yellow-400" />
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
                    className={`w-full justify-start text-foreground/80 hover:text-foreground hover:bg-primary/10 ${isActive ? "text-foreground bg-primary/5" : ""
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