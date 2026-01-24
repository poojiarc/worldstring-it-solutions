import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  icon?: LucideIcon;
  badge?: string;
}

export const PageHero = ({ title, subtitle, description, icon: Icon, badge }: PageHeroProps) => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(203_89%_53%_/_0.08)_0%,_transparent_50%)]" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Icon */}
          {Icon && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 mb-6"
            >
              <Icon className="w-8 h-8 text-primary" />
            </motion.div>
          )}

          {/* Badge */}
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4"
            >
              <span className="text-primary font-medium text-sm">{badge}</span>
            </motion.div>
          )}

          {/* Subtitle */}
          {subtitle && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="text-primary font-semibold text-sm uppercase tracking-wider mb-4"
            >
              {subtitle}
            </motion.p>
          )}

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            {title}
          </motion.h1>

          {/* Description */}
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              {description}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
};
