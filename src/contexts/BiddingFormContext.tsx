import { createContext, useContext, useState, ReactNode } from "react";

interface BiddingFormContextType {
  isOpen: boolean;
  openForm: () => void;
  closeForm: () => void;
}

const BiddingFormContext = createContext<BiddingFormContextType | undefined>(undefined);

export const BiddingFormProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openForm = () => setIsOpen(true);
  const closeForm = () => setIsOpen(false);

  return (
    <BiddingFormContext.Provider value={{ isOpen, openForm, closeForm }}>
      {children}
    </BiddingFormContext.Provider>
  );
};

export const useBiddingForm = () => {
  const context = useContext(BiddingFormContext);
  if (context === undefined) {
    throw new Error("useBiddingForm must be used within a BiddingFormProvider");
  }
  return context;
};
