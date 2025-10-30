import { motion } from "framer-motion";
import { Coffee, Heart, Instagram, Music, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2 justify-center md:justify-start">
              <Coffee className="w-6 h-6 text-primary" />
              Good Vibes Café
            </h3>
            <p className="text-muted-foreground">Sip. Smile. Repeat.</p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex gap-6"
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-background transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2, rotate: -5 }}
              className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary hover:bg-secondary hover:text-background transition-colors"
              aria-label="Music"
            >
              <Music className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="mailto:danaboinamuralikrishna7@gmail.com"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent hover:bg-accent hover:text-background transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </motion.a>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center md:text-right"
          >
            <p className="text-muted-foreground text-sm flex items-center gap-2 justify-center md:justify-end">
              © 2025 Good Vibes Café
              <Heart className="w-4 h-4 text-primary inline-block fill-primary" />
            </p>
            <p className="text-muted-foreground text-sm mt-1">Brewed by Torque</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
