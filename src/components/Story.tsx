import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import cafeInterior from "@/assets/cafe-interior.jpg";
import latteArt from "@/assets/latte-art.jpg";
import pastries from "@/assets/pastries.jpg";

const PolaroidImage = ({ src, alt, delay = 0, rotation = 0 }: { src: string; alt: string; delay?: number; rotation?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotate: 0 }}
      animate={isInView ? { opacity: 1, y: 0, rotate: rotation } : {}}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05, rotate: rotation + 2, zIndex: 10 }}
      className="bg-background p-4 shadow-2xl cursor-pointer"
      style={{ borderRadius: "8px" }}
    >
      <img src={src} alt={alt} className="w-full h-64 object-cover mb-3" />
      <p className="text-center text-sm text-muted-foreground font-handwriting italic">{alt}</p>
    </motion.div>
  );
};

const Story = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Our Story
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Born from a love of people and coffee, Good Vibes Café is a creative hub for dreamers and doers.
            We serve warmth, one cup at a time.
          </p>
        </motion.div>

        {/* Polaroid collage */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PolaroidImage
            src={cafeInterior}
            alt="Our cozy space"
            delay={0.2}
            rotation={-3}
          />
          <PolaroidImage
            src={latteArt}
            alt="Crafted with love"
            delay={0.4}
            rotation={2}
          />
          <PolaroidImage
            src={pastries}
            alt="Fresh daily treats"
            delay={0.6}
            rotation={-2}
          />
        </div>

        {/* Fun fact cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-4xl mx-auto"
        >
          {[
            { emoji: "☕", title: "Premium Coffee", desc: "Sourced from local roasters" },
            { emoji: "🎨", title: "Creative Space", desc: "Perfect for work & inspiration" },
            { emoji: "🤝", title: "Community Hub", desc: "Events, music & art jams" },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-background rounded-3xl p-6 text-center shadow-lg hover:shadow-xl transition-all"
              whileHover={{ y: -5 }}
            >
              <span className="text-5xl mb-3 block">{item.emoji}</span>
              <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Story;
