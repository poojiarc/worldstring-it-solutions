import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Globe,
  Shield,
  Zap,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

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

  return (
    <>
      {/* HERO SLIDER SECTION */}
      <section
        id="home"
        className="relative min-h-[70vh] lg:min-h-screen flex flex-col lg:flex-row items-center justify-center overflow-hidden pt-24 lg:pt-32 bg-background"
      >
        {/* Backgrounds */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(203_89%_53%_/_0.08)_0%,_transparent_60%)] z-0" />

        {/* Grid */}
        <div className="absolute inset-0 opacity-20 z-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
                linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {/* Orbs - Hidden on mobile */}
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl z-5 hidden lg:block"
        />
        <motion.div
          animate={{ y: [0, 20, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl z-5 hidden xl:block"
        />

        {/* ARROWS - ABSOLUTE POSITIONED FIRST (HIGHEST Z) */}
        <button
          onClick={prevSlide}
          className="absolute -left-12 lg:-left-16 top-1/2 -translate-y-1/2 z-[100] bg-white/95 backdrop-blur-md border-2 border-gray-100/50 rounded-full p-3 shadow-2xl hover:bg-primary hover:text-white hover:border-primary hover:shadow-3xl transition-all duration-300 lg:p-4"
          style={{ left: '1.5rem' }}
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute -right-12 lg:-right-16 top-1/2 -translate-y-1/2 z-[100] bg-white/95 backdrop-blur-md border-2 border-gray-100/50 rounded-full p-3 shadow-2xl hover:bg-primary hover:text-white hover:border-primary hover:shadow-3xl transition-all duration-300 lg:p-4"
          style={{ right: '1.5rem' }}
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
        </button>

        {/* CONTENT */}
        <div className="container mx-auto px-4 lg:px-8 relative z-20 w-full flex-1 flex flex-col justify-center pb-32 lg:pb-48">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Enterprise IT Solutions</span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
                  {heroSlides[current].title}
                  <br />
                  <span className="text-gradient block mt-2 lg:mt-0">{heroSlides[current].highlight}</span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 px-4">
                  {heroSlides[current].description}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                  <Button
                    onClick={() => navigate(heroSlides[current].cta1Link)}
                    size="lg"
                    className="bg-primary hover:bg-primary/90 px-8 py-6 text-lg shadow-button group w-full sm:w-auto"
                  >
                    {heroSlides[current].cta1}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <Button
                    onClick={() => navigate(heroSlides[current].cta2Link)}
                    size="lg"
                    variant="outline"
                    className="border-primary/30 hover:bg-primary/10 px-8 py-6 text-lg w-full sm:w-auto"
                  >
                    {heroSlides[current].cta2}
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* DOTS */}
        <div className="absolute bottom-20 lg:bottom-28 left-1/2 -translate-x-1/2 flex gap-3 z-30 px-4">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-3 rounded-full transition-all duration-300 shadow-md ${
                i === current
                  ? "w-10 bg-primary shadow-lg scale-110"
                  : "w-3 bg-white/70 hover:bg-white hover:scale-105 backdrop-blur-sm"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* STATS SECTION - COMPLETELY SEPARATE */}
      <section className="w-full bg-gradient-to-r from-background via-card/30 to-background py-12 lg:py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12 text-center max-w-5xl mx-auto">
            <div className="flex flex-col items-center space-y-4 p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-xl border border-border/20 hover:shadow-2xl transition-all duration-300">
              <Globe className="w-16 h-16 lg:w-20 lg:h-20 text-primary" />
              <div className="text-4xl lg:text-5xl font-black text-primary tracking-tight">100+</div>
              <div className="text-lg lg:text-xl text-muted-foreground font-semibold max-w-[220px] leading-relaxed">
                Projects Delivered
              </div>
            </div>

            <div className="flex flex-col items-center space-y-4 p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-xl border border-border/20 hover:shadow-2xl transition-all duration-300">
              <Shield className="w-16 h-16 lg:w-20 lg:h-20 text-primary" />
              <div className="text-4xl lg:text-5xl font-black text-primary tracking-tight">99.9%</div>
              <div className="text-lg lg:text-xl text-muted-foreground font-semibold max-w-[220px] leading-relaxed">
                Uptime Guarantee
              </div>
            </div>

            <div className="flex flex-col items-center space-y-4 p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-xl border border-border/20 hover:shadow-2xl transition-all duration-300">
              <Zap className="w-16 h-16 lg:w-20 lg:h-20 text-primary" />
              <div className="text-4xl lg:text-5xl font-black text-primary tracking-tight leading-tight">24/7</div>
              <div className="text-lg lg:text-xl text-muted-foreground font-semibold max-w-[220px] leading-relaxed">
                Expert Support
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};