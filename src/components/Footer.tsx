import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import logo from "@/assets/logo.avif"; // ✅ adjust path if needed
import { motion } from "framer-motion";



const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  const legalLinks = [
    { label: "Terms & Conditions", href: "#terms" },
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Accessibility Statement", href: "#accessibility" },
  ];

  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
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
            <div>
              <div className="text-xl font-bold">Bid a Wrap</div>
              <div className="text-sm text-muted-foreground">Premium Vehicle Services</div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-secondary hover:bg-primary/20 flex items-center justify-center transition-colors group"
              >
                <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-end gap-4">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} WrapBid. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
