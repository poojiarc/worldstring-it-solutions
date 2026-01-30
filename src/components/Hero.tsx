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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const heroSlides = [
  {
    id: 1,
    title: "Innovative IT Solutions",
    highlight: "for a Connected World",
    description:
      "Delivering scalable technology, secure systems, and digital transformation for modern businesses.",
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
      setCurrent((p) => (p + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const CurrentIcon = heroSlides[current].icon;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/Gemini_Generated_Image_xi0kjyxi0kjyxi0k.png')" }}
      />
      <div className="absolute inset-0 bg-black/45" />

      {/* Arrows */}
      <button
        onClick={() => setCurrent((p) => (p === 0 ? heroSlides.length - 1 : p - 1))}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/90 p-3 rounded-xl"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={() => setCurrent((p) => (p + 1) % heroSlides.length)}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/90 p-3 rounded-xl"
      >
        <ChevronRight />
      </button>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6 }}
          >

            {/* ✅ ENTERPRISE IT SOLUTIONS AS BUTTON (FIXED) */}
            <div className="mb-8 flex justify-center">
              <div className="px-6 py-2 rounded-full bg-primary text-white font-semibold shadow-lg">
                Enterprise IT Solutions
              </div>
            </div>

            {/* Icon */}
            <div className="mx-auto mb-6 w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center">
              <CurrentIcon className="w-10 h-10 text-white" />
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {heroSlides[current].title}
              <span className="block text-gradient mt-2">
                {heroSlides[current].highlight}
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
              {heroSlides[current].description}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                onClick={() => navigate(heroSlides[current].cta1Link)}
                className="px-10 py-6 text-lg"
              >
                {heroSlides[current].cta1}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate(heroSlides[current].cta2Link)}
                className="px-10 py-6 text-lg bg-white"
              >
                {heroSlides[current].cta2}
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
