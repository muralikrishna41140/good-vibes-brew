import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Music, Palette, Mic, Calendar } from "lucide-react";

const events = [
  {
    icon: Music,
    title: "Live Music Nights",
    desc: "Every Friday & Saturday evening with local artists",
    time: "7 PM - 10 PM",
    color: "from-primary to-primary/60",
  },
  {
    icon: Palette,
    title: "Art Jam Sessions",
    desc: "Unleash your creativity with paints and coffee",
    time: "Sundays, 3 PM - 6 PM",
    color: "from-secondary to-secondary/60",
  },
  {
    icon: Mic,
    title: "Open Mic Nights",
    desc: "Share your poetry, comedy, or music with us",
    time: "First Thursday of every month",
    color: "from-accent to-accent/60",
  },
  {
    icon: Calendar,
    title: "Book Club Meetups",
    desc: "Monthly discussions over coffee and cake",
    time: "Last Sunday, 11 AM - 1 PM",
    color: "from-primary/80 to-secondary/80",
  },
];

const EventCard = ({ event, delay = 0 }: { event: typeof events[0]; delay?: number }) => {
  const Icon = event.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05, rotate: 1 }}
      className={`bg-gradient-to-br ${event.color} rounded-3xl p-8 shadow-lg cursor-pointer`}
    >
      <Icon className="w-12 h-12 text-foreground mb-4" />
      <h3 className="text-2xl font-bold text-foreground mb-3">{event.title}</h3>
      <p className="text-foreground/90 mb-4">{event.desc}</p>
      <div className="flex items-center gap-2 text-sm text-foreground/80">
        <Calendar className="w-4 h-4" />
        <span>{event.time}</span>
      </div>
    </motion.div>
  );
};

const Events = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-gradient-to-b from-background to-primary/10">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Good Vibes Happen Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join our community events and make memories that last forever! 🎉
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {events.map((event, i) => (
            <EventCard key={i} event={event} delay={i * 0.15} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-muted-foreground mb-4">Want to host an event with us?</p>
          <motion.a
            href="mailto:danaboinamuralikrishna7@gmail.com?subject=Event Collaboration at Good Vibes Café"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-foreground text-background px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Events;
