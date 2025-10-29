import { createContext, useContext, useState, ReactNode } from "react";

interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, name: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const signIn = async (email: string, password: string) => {
    // Mock sign in - replace with actual backend call
    await new Promise(resolve => setTimeout(resolve, 500));
    setUser({
      id: "1",
      email,
      name: email.split("@")[0],
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=" + email,
    });
  };

  const signUp = async (email: string, password: string, name: string) => {
    // Mock sign up - replace with actual backend call
    await new Promise(resolve => setTimeout(resolve, 500));
    setUser({
      id: "1",
      email,
      name,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=" + email,
    });
  };

  const signInWithGoogle = async () => {
    // Mock Google sign in - replace with actual backend call
    await new Promise(resolve => setTimeout(resolve, 500));
    setUser({
      id: "1",
      email: "user@gmail.com",
      name: "Google User",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=google",
    });
  };

  const signOut = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        signIn,
        signUp,
        signInWithGoogle,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
