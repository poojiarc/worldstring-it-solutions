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
        {/* Hero Section */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-secondary/10" />
          <div className="absolute inset-0 mesh-bg opacity-30" />
          <FloatingOrb className="top-20 -right-32 bg-primary/10" size="xl" delay={0} />
          <FloatingOrb className="-bottom-20 -left-20 bg-accent/10" size="lg" delay={2} />
          <Particles count={12} className="hidden lg:block" />

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
              
              <h1 className="text-4xl lg:text-6xl font-black text-foreground mb-6 tracking-tight">
                Our <span className="text-gradient">Services</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Comprehensive IT solutions designed to transform your business, 
                enhance security, and drive innovation across every dimension of your enterprise.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 via-background to-secondary/20" />
          <FloatingOrb className="top-1/4 -left-32 bg-primary/5" size="lg" delay={1} />
          
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
                    className="glass-card group flex flex-col h-full rounded-3xl overflow-hidden"
                  >
                    {/* IMAGE AREA - Uses new images from services.ts */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent" />
                      
                      {/* Icon Badge */}
                      <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-accent transition-all duration-300">
                        <service.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                      </div>
                      
                      {/* Title on image */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-black text-white drop-shadow-lg">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    {/* CONTENT AREA */}
                    <div className="p-6 flex flex-col flex-grow">
                      <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-3 text-justify">
                        {service.shortDescription}
                      </p>

                      {/* Explore Link */}
                      <div className="mt-auto flex items-center gap-2 text-primary font-bold group-hover:gap-3 transition-all">
                        <span>Explore Service</span>
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                    
                    {/* Top accent line on hover */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-10 lg:p-16 rounded-3xl text-center relative overflow-hidden"
            >
              {/* Top gradient accent */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-accent to-primary" />
              
              <div className="relative z-10">
                <h2 className="text-3xl lg:text-4xl font-black text-foreground mb-4 tracking-tight">
                  Ready to Transform Your <span className="text-gradient">Business?</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                  Let's discuss how our services can help you achieve your technology goals 
                  and drive meaningful results.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 btn-premium text-white font-bold px-10 py-5 rounded-2xl text-lg"
                  >
                    Get in Touch
                    <ArrowRight className="w-5 h-5" />
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
