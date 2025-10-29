import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { AuthProvider } from "@/contexts/AuthContext";
import { BiddingFormProvider } from "@/contexts/BiddingFormContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/dashboard/Profile";
import FindShops from "./pages/dashboard/FindShops";
import YourBids from "./pages/dashboard/YourBids";
import Chats from "./pages/dashboard/Chats";
import HappyStories from "./pages/HappyStories";
import AboutUs from "./pages/AboutUs";
import LocateShops from "./pages/LocateShops";
import JoinNetwork from "./pages/JoinNetwork";
import FAQ from "./pages/FAQ";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <AuthProvider>
        <BiddingFormProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/dashboard/profile" element={<Profile />} />
                <Route path="/dashboard/find-shops" element={<FindShops />} />
                <Route path="/dashboard/bids" element={<YourBids />} />
                <Route path="/dashboard/chats" element={<Chats />} />
                <Route path="/happy-stories" element={<HappyStories />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/locate-shops" element={<LocateShops />} />
                <Route path="/join-network" element={<JoinNetwork />} />
                <Route path="/faq" element={<FAQ />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </BiddingFormProvider>
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
