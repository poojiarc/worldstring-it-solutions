import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle2, Sparkles } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { getServiceBySlug, services } from "@/data/services";
import { FloatingOrb, Particles } from "@/components/ui/animated-background";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const relatedServices = services
    .filter((s) => s.slug !== slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* HERO SECTION */}
        <section className="pt-28 pb-12 lg:pt-36 lg:pb-16 relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
          <div className="absolute inset-0 mesh-bg opacity-30" />
          
          {/* Floating Orbs */}
          <FloatingOrb className="top-20 -right-32 bg-primary/10" size="xl" delay={0} />
          <FloatingOrb className="-bottom-20 -left-20 bg-accent/10" size="lg" delay={2} />
          
          {/* Particles */}
          <Particles count={15} className="hidden lg:block" />

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors group text-sm font-semibold"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Services
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              {/* Badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-sm uppercase tracking-wider mb-6"
              >
                <Sparkles className="w-4 h-4 animate-pulse" />
                Our Expertise
              </motion.div>

              {/* Icon + Title */}
              <div className="flex items-center gap-4 mb-6">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg"
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>
              </div>

              <h1 className="text-4xl lg:text-6xl font-black text-foreground mb-6 leading-tight tracking-tight">
                {service.title}
              </h1>
              
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl text-justify">
                {service.mediumDescription}
              </p>
            </motion.div>
          </div>
        </section>

        {/* IMAGE + CONTENT SECTION */}
        <section className="py-16 lg:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-secondary/10" />
          
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* IMAGE */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-2 lg:order-1"
              >
                <div className="relative">
                  {/* Glow effect behind image */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-50" />
                  
                  <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />
                  </div>
                </div>
              </motion.div>

              {/* CONTENT */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
                className="order-1 lg:order-2"
              >
                <motion.h2 
                  variants={itemVariants} 
                  className="text-3xl lg:text-4xl font-black text-foreground mb-6 tracking-tight"
                >
                  Service <span className="text-gradient">Overview</span>
                </motion.h2>
                
                <motion.p 
                  variants={itemVariants} 
                  className="text-base lg:text-lg text-muted-foreground mb-8 leading-relaxed text-justify"
                >
                  {service.longDescription}
                </motion.p>
                
                {/* Key Points */}
                <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.offerings.slice(0, 4).map((offering, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center gap-3 p-4 rounded-xl bg-white/50 border border-border/50 shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                      </div>
                      <span className="font-bold text-sm text-foreground">{offering.title}</span>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CORE CAPABILITIES */}
        <section className="py-16 lg:py-24 relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-secondary/20" />
          <FloatingOrb className="top-1/4 -left-32 bg-primary/5" size="xl" delay={1} />
          <FloatingOrb className="bottom-1/4 -right-32 bg-accent/5" size="lg" delay={3} />
          
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                <Sparkles className="w-4 h-4" />
                Capabilities
              </span>
              <h2 className="text-3xl lg:text-5xl font-black text-foreground tracking-tight">
                Core <span className="text-gradient">Capabilities</span>
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4" />
            </motion.div>

            {/* Capabilities Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.offerings.map((offering, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="glass-card p-6 lg:p-8 rounded-2xl group relative overflow-hidden"
                >
                  {/* Top accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-accent transition-all duration-300">
                      <CheckCircle2 className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                    </div>
                    
                    <h3 className="text-xl font-black text-foreground mb-3 group-hover:text-primary transition-colors tracking-tight">
                      {offering.title}
                    </h3>
                    
                    <p className="text-base text-muted-foreground leading-relaxed text-justify">
                      {offering.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
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
              
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
              
              <div className="relative z-10">
                <h2 className="text-3xl lg:text-4xl font-black text-foreground mb-4 tracking-tight">
                  Ready to Get <span className="text-gradient">Started?</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 text-justify sm:text-center">
                  Let's discuss how our {service.title.toLowerCase()} expertise can help 
                  transform your business and drive meaningful results.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 btn-premium text-white font-bold px-10 py-5 rounded-2xl text-lg"
                  >
                    Discuss Your Project
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* RELATED SERVICES */}
        <section className="py-16 lg:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 via-background to-secondary/20" />
          
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-black text-foreground tracking-tight">
                Explore Other <span className="text-gradient">Services</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {relatedServices.map((related, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <Link
                    to={`/services/${related.slug}`}
                    className="glass-card p-6 rounded-2xl group block h-full relative overflow-hidden"
                  >
                    {/* Top accent */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    
                    {/* Thumbnail */}
                    <div className="aspect-video rounded-xl overflow-hidden mb-4 border border-border/50">
                      <img 
                        src={related.image} 
                        alt={related.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    
                    <div className="icon-badge w-12 h-12 mb-4 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-accent group-hover:border-transparent transition-all">
                      <related.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                    </div>
                    
                    <h3 className="text-xl font-black text-foreground mb-2 group-hover:text-primary transition-colors tracking-tight">
                      {related.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground line-clamp-2 text-justify">
                      {related.shortDescription}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default ServiceDetail;
