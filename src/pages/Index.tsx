import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import JoinNetworkSection from "@/components/JoinNetworkSection";
import Footer from "@/components/Footer";
import BiddingFormModal from "@/components/BiddingForm/BiddingFormModal";

const Index = () => {
  const [isBiddingFormOpen, setIsBiddingFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onGetBidClick={() => setIsBiddingFormOpen(true)} />
      <HeroSection onGetBidClick={() => setIsBiddingFormOpen(true)} />
      <JoinNetworkSection />
      <Footer />
      <BiddingFormModal
        isOpen={isBiddingFormOpen}
        onClose={() => setIsBiddingFormOpen(false)}
      />
    </div>
  );
};

export default Index;
