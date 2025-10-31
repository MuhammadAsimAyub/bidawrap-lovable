import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import carImage from "@/assets/yellowcar.jpg";
import { useNavigate } from "react-router-dom";


interface HeroSectionProps {
  onGetBidClick: () => void;
}

const HeroSection = ({ onGetBidClick }: HeroSectionProps) => {
  const navigate = useNavigate();
  return (
    <section
      id="home"
      // ↓ Reduced top padding so it sits closer to navbar
      className=" sm:pt-10 md:pt-5 pb-10 px-2 sm:px-4 md:px-8 min-h-[88vh] flex items-center relative overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute top-10 left-6 w-32 h-32 md:w-48 md:h-48 bg-primary/20 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-10 right-6 w-40 h-40 md:w-64 md:h-64 bg-accent/10 blur-3xl rounded-full animate-pulse delay-1000" />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-14 items-center">
          {/* ===== Left Content ===== */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-4 text-center lg:text-left order-1"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-2 mt-3 rounded-full bg-primary/20 border border-primary/20 backdrop-blur-md hover:scale-105 transition text-sm mx-auto lg:mx-0">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="font-medium">Premium Vehicle Transformation</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Transform Your Ride with{" "}
              <span className="gradient-text">Expert Auto Care</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Discover top-tier professionals for PPF, wraps, tinting, and
              ceramic coating. Compare bids, explore services, and elevate your
              vehicle’s look with unmatched quality.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Button
                size="lg"
                onClick={onGetBidClick}
                className="btn-primary text-base md:text-lg px-6 md:px-8 py-4 md:py-6 rounded-xl hover:shadow-lg hover:scale-105 transition-transform duration-300"
              >
                Get Your Free Bid
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base md:text-lg px-6 md:px-8 py-4 md:py-6 rounded-xl border-2 hover:shadow-lg hover:scale-105 transition-transform duration-300"
                onClick={() =>
                  navigate("/partner")
                }
              >
                Join as a Shop
              </Button>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 md:gap-10 pt-4">
              <motion.div whileHover={{ scale: 1.05 }}>
                <div className="text-2xl md:text-3xl font-bold gradient-text">500+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </motion.div>

              <div className="hidden sm:block h-10 w-px bg-border"></div>

              <motion.div whileHover={{ scale: 1.05 }}>
                <div className="text-2xl md:text-3xl font-bold gradient-text">200+</div>
                <div className="text-sm text-muted-foreground">Partner Shops</div>
              </motion.div>

              <div className="hidden sm:block h-10 w-px bg-border"></div>

              <motion.div whileHover={{ scale: 1.05 }}>
                <div className="text-2xl md:text-3xl font-bold gradient-text">4.9★</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </motion.div>
            </div>
          </motion.div>

          {/* ===== Right Visual Content ===== */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative group order-2 lg:order-2 w-full"
          >
            <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-[#1a1a1a] via-[#222222] to-[#2b2b2b] sm:p-2 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <motion.div
                initial={{ opacity: 0.8, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
                // ↓ Slightly smaller image height on laptops
                className="relative w-full h-[320px] sm:h-[420px] md:h-[460px] rounded-xl overflow-hidden border border-primary/30 shadow-xl"
              >
                <img
                  src={carImage}
                  alt="Premium Car"
                  className="w-full h-full object-fit object-center transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-500" />

                {/* Floating Label — INSIDE the picture */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="hidden sm:flex absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/80 text-white backdrop-blur-md border border-yellow-400/40 px-6 py-2 rounded-full shadow-md text-sm font-semibold group-hover:scale-105 transition"
                >
                  Premium Auto Detailing • Wraps • Tinting
                </motion.div>
              </motion.div>
            </div>

            {/* Decorative floating blobs */}
            <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-yellow-400/30 blur-3xl animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-20 h-20 sm:w-32 sm:h-32 rounded-full bg-primary/20 blur-3xl animate-pulse delay-700" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
