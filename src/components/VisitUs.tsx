import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock, Phone, Mail, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const VisitUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-gradient-to-b from-primary/10 to-secondary/20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Visit Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We'd love to see you! Drop by for a cup of happiness. ☕
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-background rounded-3xl p-8 shadow-xl">
              <h3 className="text-3xl font-bold text-foreground mb-6">Get in Touch</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Address</p>
                    <p className="text-muted-foreground">Banjara Hills, Hyderabad, Telangana, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Hours</p>
                    <p className="text-muted-foreground">Mon - Sun: 8:00 AM - 11:00 PM</p>
                    <p className="text-sm text-muted-foreground mt-1">Open all week for good vibes!</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Phone</p>
                    <p className="text-muted-foreground">Coming soon!</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Email</p>
                    <a
                      href="mailto:danaboinamuralikrishna7@gmail.com"
                      className="text-primary hover:underline"
                    >
                      danaboinamuralikrishna7@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <Button
                className="w-full mt-8 bg-foreground text-background hover:bg-foreground/90 rounded-full py-6 text-lg shadow-lg"
                onClick={() => window.open('https://maps.google.com/?q=Banjara+Hills+Hyderabad', '_blank')}
              >
                <Navigation className="w-5 h-5 mr-2" />
                Get Directions
              </Button>
            </div>
          </motion.div>

          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary via-secondary to-accent rounded-3xl aspect-square shadow-xl flex items-center justify-center relative overflow-hidden">
              {/* Animated coffee steam */}
              <motion.div
                animate={{
                  y: [0, -20, -40],
                  opacity: [0.8, 0.5, 0],
                  scale: [1, 1.2, 1.4],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
                className="absolute bottom-1/3 w-32 h-32 bg-background/30 rounded-full blur-2xl"
              />
              <div className="text-center z-10">
                <MapPin className="w-24 h-24 text-foreground mx-auto mb-4" />
                <p className="text-2xl font-bold text-foreground">Find Us Here</p>
                <p className="text-foreground/80 mt-2">Banjara Hills, Hyderabad</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisitUs;
