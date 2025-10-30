import { motion } from "framer-motion";
import { Coffee, Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-primary via-background to-secondary relative overflow-hidden">
      {/* Floating background elements */}
      <motion.div
        className="absolute top-20 left-10 text-accent/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Coffee className="w-32 h-32" />
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-10 text-primary/20"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <Heart className="w-40 h-40" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block mb-8"
          >
            <Sparkles className="w-16 h-16 text-accent" />
          </motion.div>

          <h2
            className="text-5xl md:text-7xl font-bold text-foreground mb-8"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Let's Catch Up Over Coffee
          </h2>

          <p className="text-2xl text-muted-foreground mb-12 leading-relaxed">
            Whether you want to book a table, host an event, or just say hi — we're all ears!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="text-xl px-12 py-8 bg-foreground text-background hover:bg-foreground/90 rounded-full shadow-2xl"
                onClick={() => window.location.href = 'mailto:danaboinamuralikrishna7@gmail.com?subject=Booking at Good Vibes Café'}
              >
                <Coffee className="w-6 h-6 mr-3" />
                Book a Table
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="text-xl px-12 py-8 border-2 border-foreground text-foreground hover:bg-foreground hover:text-background rounded-full"
                onClick={() => window.location.href = 'mailto:danaboinamuralikrishna7@gmail.com'}
              >
                <Heart className="w-6 h-6 mr-3" />
                Say Hello
              </Button>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-lg text-muted-foreground mt-12 italic"
          >
            Good vibes only, always. ☕✨
          </motion.p>
        </motion.div>
      </div>

      {/* Decorative wave at bottom */}
      <motion.div
        className="absolute bottom-0 left-0 right-0"
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
      >
        <svg viewBox="0 0 1440 120" className="w-full">
          <path
            fill="hsl(var(--background))"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          />
        </svg>
      </motion.div>
    </section>
  );
};

export default Contact;
