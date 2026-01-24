import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export const CTASection = ({
  title = "Ready to Get Started?",
  description = "Let's discuss how we can help transform your business with innovative IT solutions.",
  buttonText = "Contact Us Today",
  buttonHref = "/contact",
}: CTASectionProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(buttonHref);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="py-20 lg:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(203_89%_53%_/_0.1)_0%,_transparent_70%)]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {description}
          </p>
          <Button
            size="lg"
            onClick={handleClick}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg shadow-button hover:shadow-glow transition-all duration-300"
          >
            {buttonText}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
