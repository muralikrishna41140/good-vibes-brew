import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Heart, Share2 } from "lucide-react";

const galleryImages = [
  { id: 1, caption: "Morning vibes ☀️", likes: 124 },
  { id: 2, caption: "Latte art love ❤️", likes: 89 },
  { id: 3, caption: "Cozy corner 📚", likes: 156 },
  { id: 4, caption: "Fresh pastries 🥐", likes: 203 },
  { id: 5, caption: "Coffee break ☕", likes: 178 },
  { id: 6, caption: "Friends & coffee 👯", likes: 145 },
];

const GalleryCard = ({ image, delay = 0 }: { image: typeof galleryImages[0]; delay?: number }) => {
  const [liked, setLiked] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -10 }}
      className="group relative bg-background rounded-2xl overflow-hidden shadow-lg cursor-pointer"
    >
      {/* Placeholder gradient image */}
      <div className="aspect-square bg-gradient-to-br from-primary via-secondary to-accent" />

      {/* Overlay on hover */}
      <motion.div
        className="absolute inset-0 bg-foreground/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
        initial={false}
      >
        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setLiked(!liked)}
            className="mx-2"
          >
            <Heart
              className={`w-8 h-8 ${liked ? "fill-primary text-primary" : "text-background"}`}
            />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="mx-2"
          >
            <Share2 className="w-8 h-8 text-background" />
          </motion.button>
        </div>
      </motion.div>

      {/* Caption */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/90 to-transparent p-4">
        <p className="text-background font-medium">{image.caption}</p>
        <p className="text-background/80 text-sm">{liked ? image.likes + 1 : image.likes} likes</p>
      </div>
    </motion.div>
  );
};

const VibesGallery = () => {
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
            Feel the Vibes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Moments captured, memories made. Join our community! 📸
          </p>
        </motion.div>

        {/* Masonry grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 max-w-6xl mx-auto">
          {galleryImages.map((image, i) => (
            <div key={image.id} className="mb-6 break-inside-avoid">
              <GalleryCard image={image} delay={i * 0.1} />
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-lg text-muted-foreground mb-4">Share your Good Vibes moments!</p>
          <p className="text-2xl font-bold text-foreground">#GoodVibesCafe</p>
        </motion.div>
      </div>
    </section>
  );
};

export default VibesGallery;
