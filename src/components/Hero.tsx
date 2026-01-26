import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Globe,
  Shield,
  Zap,
  ChevronLeft,
  ChevronRight,
  Users,
  Code,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { FloatingOrb, GridPattern, Particles } from "@/components/ui/animated-background";

const heroSlides = [
  {
    id: 1,
    title: "Innovative IT Solutions",
    highlight: "for a Connected World",
    description:
      "Delivering scalable technology, secure systems, and digital transformation for modern businesses. Partner with WorldString IT Solutions to accelerate your growth.",
    cta1: "Our Services",
    cta1Link: "/it-services",
    cta2: "Get in Touch",
    cta2Link: "/contact",
    icon: Globe,
  },
  {
    id: 2,
    title: "Reliable IT Staffing",
    highlight: "That Powers Growth",
    description:
      "We connect enterprises with skilled professionals through contract, permanent, and offshore staffing models.",
    cta1: "Explore Staffing",
    cta1Link: "/it-services/it-staffing",
    cta2: "Contact Us",
    cta2Link: "/contact",
    icon: Users,
  },
  {
    id: 3,
    title: "Secure Digital",
    highlight: "Transformation",
    description:
      "Modernize your systems with cloud, cybersecurity, and enterprise-grade digital solutions.",
    cta1: "View Solutions",
    cta1Link: "/it-services/it-solutions",
    cta2: "Talk to Expert",
    cta2Link: "/contact",
    icon: Code,
  },
];

export const Hero = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
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

  const CurrentIcon = heroSlides[current].icon;

  return (
    <>
      {/* HERO SLIDER SECTION */}
      <section
        id="home"
        className="relative min-h-[75vh] lg:min-h-screen flex flex-col lg:flex-row items-center justify-center overflow-hidden pt-24 lg:pt-32 bg-background"
      >
        {/* Premium Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/30 to-background z-0" />
        
        {/* Gradient Mesh */}
        <div className="absolute inset-0 mesh-bg z-0" />
        
        {/* Animated Gradient Overlay */}
        <motion.div 
          className="absolute inset-0 opacity-50 z-0"
          animate={{
            background: [
              "radial-gradient(ellipse at 20% 30%, hsl(210 100% 50% / 0.1) 0%, transparent 50%)",
              "radial-gradient(ellipse at 80% 70%, hsl(192 91% 50% / 0.1) 0%, transparent 50%)",
              "radial-gradient(ellipse at 50% 50%, hsl(210 100% 50% / 0.08) 0%, transparent 50%)",
              "radial-gradient(ellipse at 20% 30%, hsl(210 100% 50% / 0.1) 0%, transparent 50%)",
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Grid Pattern */}
        <GridPattern />

        {/* Floating Orbs */}
        <FloatingOrb 
          className="top-1/4 -right-32 bg-primary/15 hidden lg:block" 
          size="lg" 
          delay={0}
        />
        <FloatingOrb 
          className="-bottom-32 -left-32 bg-accent/10 hidden xl:block" 
          size="xl" 
          delay={2}
        />
        <FloatingOrb 
          className="top-1/2 left-1/4 bg-primary/5 hidden lg:block" 
          size="md" 
          delay={4}
        />

        {/* Particles */}
        <Particles count={15} className="hidden lg:block z-5" />

        {/* ARROWS */}
        <motion.button
          onClick={prevSlide}
          className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-[100] bg-white/95 backdrop-blur-xl border border-border/50 rounded-2xl p-3 lg:p-4 shadow-xl hover:shadow-2xl hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 group"
          aria-label="Previous slide"
          whileHover={{ scale: 1.1, x: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6 group-hover:drop-shadow-lg" />
        </motion.button>

        <motion.button
          onClick={nextSlide}
          className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-[100] bg-white/95 backdrop-blur-xl border border-border/50 rounded-2xl p-3 lg:p-4 shadow-xl hover:shadow-2xl hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 group"
          aria-label="Next slide"
          whileHover={{ scale: 1.1, x: 2 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 group-hover:drop-shadow-lg" />
        </motion.button>

        {/* CONTENT */}
        <div className="container mx-auto px-4 lg:px-8 relative z-20 w-full flex-1 flex flex-col justify-center pb-32 lg:pb-48">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {/* Icon Badge */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 mb-8 shadow-lg animate-float"
                >
                  <CurrentIcon className="w-10 h-10 text-primary animate-glow-pulse" />
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

                {/* Title with Text Reveal */}
                <motion.h1 
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="block text-foreground"
                  >
                    {heroSlides[current].title}
                  </motion.span>
                  <motion.span 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-gradient block mt-2 lg:mt-0"
                  >
                    {heroSlides[current].highlight}
                  </motion.span>
                </motion.h1>

                {/* Description */}
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 px-4 leading-relaxed"
                >
                  {heroSlides[current].description}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      onClick={() => navigate(heroSlides[current].cta1Link)}
                      size="lg"
                      className="btn-premium px-10 py-7 text-lg text-white group w-full sm:w-auto rounded-2xl"
                    >
                      {heroSlides[current].cta1}
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      onClick={() => navigate(heroSlides[current].cta2Link)}
                      size="lg"
                      variant="outline"
                      className="border-2 border-primary/30 hover:bg-primary/5 hover:border-primary px-10 py-7 text-lg w-full sm:w-auto rounded-2xl transition-all duration-300"
                    >
                      {heroSlides[current].cta2}
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* DOTS */}
        <div className="absolute bottom-16 lg:bottom-24 left-1/2 -translate-x-1/2 flex gap-3 z-30 px-4">
          {heroSlides.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-3 rounded-full transition-all duration-500 ${
                i === current
                  ? "w-12 bg-gradient-to-r from-primary to-accent shadow-lg"
                  : "w-3 bg-muted-foreground/30 hover:bg-primary/50 backdrop-blur-sm"
              }`}
              aria-label={`Go to slide ${i + 1}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </section>

      {/* STATS SECTION - Premium Cards */}
      <section className="w-full bg-gradient-to-b from-background via-secondary/20 to-background py-16 lg:py-20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 mesh-bg opacity-50" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 text-center max-w-5xl mx-auto">
            {[
              { icon: Globe, value: "100+", label: "Projects Delivered", desc: "Successful implementations worldwide" },
              { icon: Shield, value: "99.9%", label: "Uptime Guarantee", desc: "Enterprise-grade reliability" },
              { icon: Zap, value: "24/7", label: "Expert Support", desc: "Round-the-clock assistance" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-card flex flex-col items-center space-y-4 p-8 rounded-3xl group cursor-default"
              >
                <div className="icon-badge group-hover:scale-110 transition-all duration-300">
                  <stat.icon className="w-7 h-7 text-primary transition-colors" />
                </div>
                <div className="text-4xl lg:text-5xl font-black text-gradient tracking-tight">{stat.value}</div>
                <div className="text-lg lg:text-xl text-foreground font-bold">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};