import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Users, Code, Zap, ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { heroSlides } from "@/data/navigation";
import { FloatingOrb, GridPattern, Particles } from "@/components/ui/animated-background";

const slideIcons = {
  staffing: Users,
  solutions: Code,
  transformation: Zap,
};

export const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(timer);
  }, [current]);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? heroSlides.length - 1 : prev - 1
    );
  };

  const currentSlide = heroSlides[current];
  const IconComponent = slideIcons[currentSlide.image as keyof typeof slideIcons] || Zap;

  return (
    <section className="relative min-h-[75vh] lg:min-h-screen bg-background pt-24 lg:pt-28 overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/30 to-background z-0" />
      
      {/* Gradient Mesh */}
      <div className="absolute inset-0 mesh-bg z-0" />
      
      {/* Grid Pattern */}
      <GridPattern />

      {/* Floating Orbs */}
      <FloatingOrb className="top-1/4 -right-32 bg-primary/15" size="lg" delay={0} />
      <FloatingOrb className="-bottom-32 -left-32 bg-accent/10" size="xl" delay={2} />

      {/* Particles */}
      <Particles count={12} className="hidden lg:block z-5" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Navigation Arrows */}
        <motion.button
          onClick={prevSlide}
          className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-50 bg-white/95 backdrop-blur-xl border border-border/50 rounded-2xl p-3 lg:p-4 shadow-xl hover:shadow-2xl hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 group"
          aria-label="Previous slide"
          whileHover={{ scale: 1.1, x: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
        </motion.button>

        <motion.button
          onClick={nextSlide}
          className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-50 bg-white/95 backdrop-blur-xl border border-border/50 rounded-2xl p-3 lg:p-4 shadow-xl hover:shadow-2xl hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 group"
          aria-label="Next slide"
          whileHover={{ scale: 1.1, x: 2 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
        </motion.button>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto py-16 lg:py-24"
          >
            {/* Icon Badge */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 mb-8 shadow-lg animate-float"
            >
              <IconComponent className="w-10 h-10 text-primary animate-glow-pulse" />
            </motion.div>

            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 mb-8 shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm font-semibold text-primary tracking-wide">Enterprise IT Solutions</span>
            </motion.div>

            {/* Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="text-foreground">{currentSlide.title}</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl text-gradient font-bold mb-6"
            >
              {currentSlide.subtitle}
            </motion.h2>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 px-4 leading-relaxed"
            >
              {currentSlide.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => navigate(currentSlide.cta.href)}
                  size="lg"
                  className="btn-premium px-10 py-7 text-lg text-white group rounded-2xl"
                >
                  {currentSlide.cta.text}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => navigate("/contact")}
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary/30 hover:bg-primary/5 hover:border-primary px-10 py-7 text-lg rounded-2xl transition-all duration-300"
                >
                  Get in Touch
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-3 pb-16">
          {heroSlides.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-3 rounded-full transition-all duration-500 ${
                i === current
                  ? "w-12 bg-gradient-to-r from-primary to-accent shadow-lg"
                  : "w-3 bg-muted-foreground/30 hover:bg-primary/50"
              }`}
              aria-label={`Go to slide ${i + 1}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};