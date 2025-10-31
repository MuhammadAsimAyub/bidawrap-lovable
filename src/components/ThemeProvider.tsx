import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"  // 👈 this sets default to dark
      enableSystem={true}  // optional: allows system theme if user changes later
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
