import { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface Partner {
  id: string;
  email: string;
  businessName: string;
  plan: "basic" | "premium";
  avatar?: string;
}

interface PartnerAuthContextType {
  partner: Partner | null;
  isAuthenticated: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, businessData: any) => Promise<void>;
  signOut: () => void;
  updatePartner: (data: Partial<Partner>) => void;
}

const PartnerAuthContext = createContext<PartnerAuthContextType | undefined>(undefined);

export const PartnerAuthProvider = ({ children }: { children: ReactNode }) => {
  const [partner, setPartner] = useState<Partner | null>(null);

  useEffect(() => {
    // Check for existing partner session
    const savedPartner = localStorage.getItem("partner");
    if (savedPartner) {
      setPartner(JSON.parse(savedPartner));
    }
  }, []);

  const signIn = async (email: string, password: string) => {
    // Mock sign in
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    const mockPartner: Partner = {
      id: "partner-1",
      email,
      businessName: "Mock Auto Shop",
      plan: "premium",
    };
    
    setPartner(mockPartner);
    localStorage.setItem("partner", JSON.stringify(mockPartner));
  };

  const signUp = async (email: string, password: string, businessData: any) => {
    // Mock sign up
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    const newPartner: Partner = {
      id: `partner-${Date.now()}`,
      email,
      businessName: businessData.businessName,
      plan: businessData.plan,
    };
    
    setPartner(newPartner);
    localStorage.setItem("partner", JSON.stringify(newPartner));
  };

  const signOut = () => {
    setPartner(null);
    localStorage.removeItem("partner");
  };

  const updatePartner = (data: Partial<Partner>) => {
    if (partner) {
      const updated = { ...partner, ...data };
      setPartner(updated);
      localStorage.setItem("partner", JSON.stringify(updated));
    }
  };

  return (
    <PartnerAuthContext.Provider
      value={{
        partner,
        isAuthenticated: !!partner,
        signIn,
        signUp,
        signOut,
        updatePartner,
      }}
    >
      {children}
    </PartnerAuthContext.Provider>
  );
};

export const usePartnerAuth = () => {
  const context = useContext(PartnerAuthContext);
  if (context === undefined) {
    throw new Error("usePartnerAuth must be used within a PartnerAuthProvider");
  }
  return context;
};
