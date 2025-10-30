import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Menu from "@/components/Menu";
import VibesGallery from "@/components/VibesGallery";
import Events from "@/components/Events";
import VisitUs from "@/components/VisitUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen />}
      </AnimatePresence>

      {!loading && (
        <main className="overflow-x-hidden">
          <Hero />
          <Story />
          <Menu />
          <VibesGallery />
          <Events />
          <VisitUs />
          <Contact />
          <Footer />
        </main>
      )}
    </>
  );
};

export default Index;
