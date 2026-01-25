import { motion } from "framer-motion";
import { CheckCircle, Target, Lightbulb, Award } from "lucide-react";

const features = [
  { icon: Target, text: "Strategic Technology Planning" },
  { icon: Lightbulb, text: "Innovative Solutions" },
  { icon: Award, text: "Industry Best Practices" },
  { icon: CheckCircle, text: "Client-Focused Approach" },
];

export const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden bg-secondary/30">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(210_100%_45%_/_0.05)_0%,_transparent_50%)]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              Your Trusted Technology Partner
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              WorldString IT Solutions is committed to delivering innovative,
              secure, and scalable technology solutions that help organizations
              grow, adapt, and succeed in a digital-first world.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              With a team of experienced professionals and a passion for
              excellence, we partner with enterprises, startups, and government
              organizations to transform their technology landscape and achieve
              their strategic objectives.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Abstract Tech Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Main Circle */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/15 to-accent/10 animate-pulse-glow" />
              <div className="absolute inset-8 rounded-full bg-background border border-border shadow-lg" />

              {/* Inner Content */}
              <div className="absolute inset-16 rounded-full bg-gradient-to-br from-primary/10 to-transparent flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-gradient mb-2">
                    W|S
                  </div>
                  <div className="text-muted-foreground text-sm uppercase tracking-widest">
                    IT Solutions
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary" />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent" />
                <div className="absolute left-4 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-primary/70" />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-accent/70" />
              </motion.div>

              {/* Outer Ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-20px] border border-dashed border-primary/20 rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
