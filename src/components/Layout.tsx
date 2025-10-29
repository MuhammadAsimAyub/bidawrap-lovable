import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BiddingFormModal from "./BiddingForm/BiddingFormModal";
import { useBiddingForm } from "@/contexts/BiddingFormContext";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { isOpen, openForm, closeForm } = useBiddingForm();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onGetBidClick={openForm} />
      <main className="flex-1 pt-16">
        {children}
      </main>
      <Footer />
      <BiddingFormModal
        isOpen={isOpen}
        onClose={closeForm}
      />
    </div>
  );
};

export default Layout;
