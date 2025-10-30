import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Coffee, Cookie, IceCream, Cake } from "lucide-react";

const menuItems = [
  {
    category: "Coffee & Brews",
    icon: Coffee,
    items: [
      { name: "Classic Cappuccino", desc: "Rich espresso with velvety foam", price: "₹150", emoji: "☕" },
      { name: "Iced Caramel Latte", desc: "Sweet and smooth perfection", price: "₹180", emoji: "🧊" },
      { name: "Filter Coffee", desc: "Traditional South Indian style", price: "₹120", emoji: "☕" },
      { name: "Cold Brew", desc: "Smooth, bold, refreshing", price: "₹200", emoji: "🥤" },
    ],
  },
  {
    category: "Snacks & Bakes",
    icon: Cookie,
    items: [
      { name: "Croissant", desc: "Buttery and flaky perfection", price: "₹100", emoji: "🥐" },
      { name: "Chocolate Chip Cookies", desc: "Warm, gooey, delicious", price: "₹80", emoji: "🍪" },
      { name: "Veg Sandwich", desc: "Fresh & healthy goodness", price: "₹150", emoji: "🥪" },
      { name: "Garlic Bread", desc: "Crispy with herb butter", price: "₹120", emoji: "🍞" },
    ],
  },
  {
    category: "Special Blends",
    icon: IceCream,
    items: [
      { name: "Good Vibes Frappe", desc: "Our signature blend", price: "₹220", emoji: "🌟" },
      { name: "Matcha Latte", desc: "Earthy and energizing", price: "₹190", emoji: "🍵" },
      { name: "Hazelnut Mocha", desc: "Nutty chocolate heaven", price: "₹210", emoji: "🌰" },
      { name: "Affogato", desc: "Espresso meets vanilla ice cream", price: "₹180", emoji: "🍨" },
    ],
  },
  {
    category: "Desserts",
    icon: Cake,
    items: [
      { name: "Red Velvet Cake", desc: "Cream cheese frosting delight", price: "₹160", emoji: "🍰" },
      { name: "Brownie Sundae", desc: "Warm brownie with ice cream", price: "₹180", emoji: "🍫" },
      { name: "Tiramisu", desc: "Classic Italian indulgence", price: "₹200", emoji: "🍮" },
      { name: "Cheesecake", desc: "Creamy berry bliss", price: "₹170", emoji: "🍰" },
    ],
  },
];

const MenuCard = ({ category, delay = 0 }: { category: typeof menuItems[0]; delay?: number }) => {
  const [flipped, setFlipped] = useState(false);
  const Icon = category.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      className="perspective-1000"
    >
      <motion.div
        className="relative w-full h-96 cursor-pointer"
        onClick={() => setFlipped(!flipped)}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <motion.div
          className="absolute inset-0 backface-hidden"
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.6 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front of card */}
          <div className="w-full h-full bg-gradient-to-br from-primary/90 to-secondary/90 rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-xl">
            <Icon className="w-16 h-16 text-foreground mb-4" />
            <h3 className="text-3xl font-bold text-foreground mb-2">{category.category}</h3>
            <p className="text-sm text-foreground/80">Click to explore →</p>
          </div>
        </motion.div>

        <motion.div
          className="absolute inset-0 backface-hidden"
          animate={{ rotateY: flipped ? 0 : -180 }}
          transition={{ duration: 0.6 }}
          style={{ transformStyle: "preserve-3d", transform: "rotateY(180deg)" }}
        >
          {/* Back of card */}
          <div className="w-full h-full bg-background rounded-3xl p-6 overflow-y-auto shadow-xl border-2 border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4 text-center">{category.category}</h3>
            <div className="space-y-4">
              {category.items.map((item, i) => (
                <motion.div
                  key={i}
                  className="pb-3 border-b border-border last:border-0"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-semibold text-foreground flex items-center gap-2">
                      <span>{item.emoji}</span>
                      {item.name}
                    </span>
                    <span className="font-bold text-primary">{item.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground text-center mt-4 italic">Click again to flip back</p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const Menu = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="menu" className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Our Menu
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Crafted with love, served with joy. Click each card to explore! ✨
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {menuItems.map((category, i) => (
            <MenuCard key={i} category={category} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
