import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { services } from "@/data/services";
import { FloatingOrb, Particles } from "@/components/ui/animated-background";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section with Animated Background */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 relative overflow-hidden">
          {/* Animated Gradient Background */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-secondary/10"
            animate={{
              background: [
                "linear-gradient(180deg, hsl(210 100% 50% / 0.05) 0%, hsl(var(--background)) 50%, hsl(var(--secondary) / 0.1) 100%)",
                "linear-gradient(180deg, hsl(192 91% 50% / 0.08) 0%, hsl(var(--background)) 50%, hsl(210 100% 50% / 0.05) 100%)",
                "linear-gradient(180deg, hsl(210 100% 50% / 0.05) 0%, hsl(var(--background)) 50%, hsl(var(--secondary) / 0.1) 100%)",
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute inset-0 mesh-bg opacity-30" />
          
          {/* Floating Orbs */}
          <FloatingOrb className="top-20 -right-32 bg-primary/10" size="xl" delay={0} />
          <FloatingOrb className="-bottom-20 -left-20 bg-accent/10" size="lg" delay={2} />
          <FloatingOrb className="top-1/2 left-1/4 bg-primary/5" size="md" delay={4} />
          
          {/* Particles */}
          <Particles count={15} className="hidden lg:block" />

          <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              {/* Badge */}
              <motion.span 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-sm uppercase tracking-wider mb-6"
              >
                <Sparkles className="w-4 h-4 animate-pulse" />
                Our Expertise
              </motion.span>
              
              <h1 className="text-4xl lg:text-6xl font-black text-foreground mb-6 tracking-tight font-heading">
                Our <span className="text-gradient">Services</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-justify sm:text-center">
                Comprehensive IT solutions designed to transform your business, 
                enhance security, and drive innovation across every dimension of your enterprise.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid with Background Images */}
        <section className="py-16 lg:py-24 relative overflow-hidden">
          {/* Animated Background */}
          <motion.div 
            className="absolute inset-0"
            animate={{
              background: [
                "linear-gradient(180deg, hsl(var(--secondary) / 0.1) 0%, hsl(var(--background)) 50%, hsl(var(--secondary) / 0.2) 100%)",
                "linear-gradient(180deg, hsl(var(--secondary) / 0.15) 0%, hsl(var(--background)) 50%, hsl(var(--secondary) / 0.1) 100%)",
                "linear-gradient(180deg, hsl(var(--secondary) / 0.1) 0%, hsl(var(--background)) 50%, hsl(var(--secondary) / 0.2) 100%)",
              ]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <FloatingOrb className="top-1/4 -left-32 bg-primary/5" size="lg" delay={1} />
          <FloatingOrb className="bottom-1/4 -right-32 bg-accent/5" size="xl" delay={3} />
          
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {services.map((service) => (
                <motion.div key={service.slug} variants={itemVariants} whileHover={{ y: -8 }}>
                  <Link
                    to={`/services/${service.slug}`}
                    onClick={() => window.scrollTo(0, 0)}
                    className="group flex flex-col h-full rounded-3xl overflow-hidden relative shadow-lg hover:shadow-2xl transition-all duration-500"
                  >
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Gradient Overlay for readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/95 via-foreground/70 to-foreground/40 group-hover:from-foreground/90 group-hover:via-foreground/60 transition-all duration-500" />
                    </div>
                    
                    {/* Content Area */}
                    <div className="relative z-10 p-6 lg:p-8 flex flex-col h-full min-h-[380px]">
                      {/* Icon Badge */}
                      <motion.div 
                        className="w-14 h-14 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-accent transition-all duration-300"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <service.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                      </motion.div>
                      
                      {/* Title */}
                      <h3 className="text-2xl font-black text-white mb-4 tracking-tight font-heading drop-shadow-lg">
                        {service.title}
                      </h3>
                      
                      {/* Description - Justified */}
                      <p className="text-white/90 leading-relaxed mb-6 line-clamp-4 text-justify flex-grow font-medium text-base">
                        {service.shortDescription}
                      </p>

                      {/* Explore Link */}
                      <div className="mt-auto flex items-center gap-2 text-white font-bold group-hover:gap-3 transition-all">
                        <span className="text-lg">Explore Service</span>
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                      </div>
                    </div>
                    
                    {/* Top accent line on hover */}
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-accent to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20" />
                    
                    {/* Bottom glow effect on hover */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section with Animation */}
        <section className="py-16 lg:py-20 relative overflow-hidden">
          {/* Animated Background */}
          <motion.div 
            className="absolute inset-0 opacity-50"
            animate={{
              background: [
                "radial-gradient(ellipse at 30% 50%, hsl(210 100% 50% / 0.1) 0%, transparent 50%)",
                "radial-gradient(ellipse at 70% 50%, hsl(192 91% 50% / 0.1) 0%, transparent 50%)",
                "radial-gradient(ellipse at 30% 50%, hsl(210 100% 50% / 0.1) 0%, transparent 50%)",
              ]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-10 lg:p-16 rounded-3xl text-center relative overflow-hidden"
            >
              {/* Top gradient accent */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-accent to-primary" />
              
              {/* Animated background inside card */}
              <motion.div 
                className="absolute inset-0 opacity-30"
                animate={{
                  background: [
                    "radial-gradient(circle at 20% 80%, hsl(210 100% 50% / 0.15) 0%, transparent 40%)",
                    "radial-gradient(circle at 80% 20%, hsl(192 91% 50% / 0.15) 0%, transparent 40%)",
                    "radial-gradient(circle at 20% 80%, hsl(210 100% 50% / 0.15) 0%, transparent 40%)",
                  ]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
              
              <div className="relative z-10">
                <h2 className="text-3xl lg:text-4xl font-black text-foreground mb-4 tracking-tight font-heading">
                  Ready to Transform Your <span className="text-gradient">Business?</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 text-justify sm:text-center">
                  Let's discuss how our services can help you achieve your technology goals 
                  and drive meaningful results for your organization.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 btn-premium text-white font-bold px-10 py-5 rounded-2xl text-lg group"
                  >
                    Get in Touch
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default ServicesPage;
