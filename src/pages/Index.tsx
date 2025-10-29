import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import JoinNetworkSection from "@/components/JoinNetworkSection";
import { useBiddingForm } from "@/contexts/BiddingFormContext";

const Index = () => {
  const { openForm } = useBiddingForm();

  return (
    <Layout>
      <HeroSection onGetBidClick={openForm} />
      <FeaturesSection />
      <JoinNetworkSection />
    </Layout>
  );
};

export default Index;
