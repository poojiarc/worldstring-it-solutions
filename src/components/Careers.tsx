import { motion } from "framer-motion";
import { Rocket, Users, TrendingUp, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  { icon: Rocket, text: "Innovation-Driven Culture" },
  { icon: Users, text: "Collaborative Team Environment" },
  { icon: TrendingUp, text: "Growth Opportunities" },
  { icon: Heart, text: "Work-Life Balance" },
];

export const Careers = () => {
  return (
    <section id="careers" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(203_89%_53%_/_0.05)_0%,_transparent_50%)]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Join Our Team
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              Careers at WorldString
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We're always looking for talented individuals who are passionate
              about technology and innovation. Join our team and help shape the
              future of IT solutions for businesses worldwide.
            </p>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
          >
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-4 transition-all duration-300 hover:border-primary/30"
              >
                <benefit.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <span className="text-sm text-foreground font-medium">
                  {benefit.text}
                </span>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 py-6 text-lg shadow-button transition-all duration-300 hover:shadow-glow"
            >
              <a href="mailto:worldstringitsolutions@gmail.com?subject=Resume Submission - Career Opportunity">
                Email Your Resume
              </a>
            </Button>
            <p className="text-muted-foreground text-sm mt-4">
              Send your resume to:{" "}
              <a
                href="mailto:worldstringitsolutions@gmail.com"
                className="text-primary hover:underline"
              >
                worldstringitsolutions@gmail.com
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
