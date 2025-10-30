import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Coffee, Heart, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-coffee.jpg";

const FloatingIcon = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div
    className={`absolute ${className}`}
    animate={{
      y: [0, -20, 0],
      rotate: [-5, 5, -5],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      delay,
      ease: "easeInOut",
    }}
  >
    {children}
  </motion.div>
);

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-background to-secondary">
      {/* Floating decorative elements */}
      <FloatingIcon delay={0} className="top-20 left-10 text-accent opacity-60">
        <Coffee className="w-12 h-12" />
      </FloatingIcon>
      <FloatingIcon delay={1} className="top-40 right-20 text-primary opacity-70">
        <Heart className="w-10 h-10" />
      </FloatingIcon>
      <FloatingIcon delay={2} className="bottom-32 left-20 text-secondary opacity-60">
        <Sparkles className="w-14 h-14" />
      </FloatingIcon>
      <FloatingIcon delay={1.5} className="bottom-20 right-32 text-accent opacity-50">
        <Coffee className="w-8 h-8" />
      </FloatingIcon>

      {/* Blob shapes */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-foreground"
              style={{ fontFamily: "'Poppins', sans-serif" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Welcome to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mt-2">
                Good Vibes Café
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              A cozy corner in Hyderabad where every sip sparks joy.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-foreground text-background hover:bg-foreground/90 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
                onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Our Menu
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-2 border-foreground text-foreground hover:bg-foreground hover:text-background rounded-full transition-all hover:scale-105"
                onClick={() => window.location.href = 'mailto:danaboinamuralikrishna7@gmail.com?subject=Table Booking at Good Vibes Café'}
              >
                Book Your Table
              </Button>
            </motion.div>

            <motion.p
              className="text-sm text-muted-foreground mt-6 italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Sip. Smile. Repeat. ☕
            </motion.p>
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <motion.div
              className="rounded-3xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={heroImage}
                alt="Good Vibes Café - Fresh coffee and pastries"
                className="w-full h-auto"
              />
            </motion.div>

            {/* Decorative floating card */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-background rounded-2xl p-4 shadow-xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <Heart className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <p className="font-bold text-foreground">500+</p>
                  <p className="text-sm text-muted-foreground">Happy Customers</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
