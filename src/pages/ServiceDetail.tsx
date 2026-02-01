// import { useParams, Link, Navigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
// import { Header } from "@/components/Header";
// import { Footer } from "@/components/Footer";
// import { ScrollToTop } from "@/components/ScrollToTop";
// import { getServiceBySlug, services } from "@/data/services";

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, x: -20 },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: {
//       duration: 0.5,
//     },
//   },
// };

// const ServiceDetail = () => {
//   const { slug } = useParams<{ slug: string }>();
//   const service = slug ? getServiceBySlug(slug) : undefined;

//   if (!service) {
//     return <Navigate to="/services" replace />;
//   }

//   // Get related services (excluding current)
//   const relatedServices = services
//     .filter((s) => s.slug !== slug)
//     .slice(0, 3);

//   return (
//     <div className="min-h-screen bg-background">
//       <Header />
//       <main>
//         {/* Hero Section */}
//         <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 relative overflow-hidden">
//           {/* Background Effects */}
//           <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
//           <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
//           <div className="absolute top-40 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

//           <div className="container mx-auto px-4 lg:px-8 relative z-10">
//             {/* Breadcrumb */}
//             <motion.div
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.4 }}
//               className="mb-8"
//             >
//               <Link
//                 to="/services"
//                 className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
//               >
//                 <ArrowLeft className="w-4 h-4" />
//                 Back to Services
//               </Link>
//             </motion.div>

//             <div className="grid lg:grid-cols-2 gap-12 items-center">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//               >
//                 {/* Icon */}
//                 <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
//                   <service.icon className="w-10 h-10 text-primary" />
//                 </div>

//                 <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
//                   {service.title}
//                 </h1>
//                 <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed">
//                   {service.longDescription}
//                 </p>
//               </motion.div>

//               <motion.div
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.6, delay: 0.2 }}
//                 className="hidden lg:block"
//               >
//                 {/* Abstract Tech Visual */}
//                 <div className="relative aspect-square">
//                   <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent rounded-3xl" />
//                   <div className="absolute inset-8 bg-card/50 backdrop-blur-sm border border-border rounded-2xl flex items-center justify-center">
//                     <service.icon className="w-32 h-32 text-primary/30" />
//                   </div>
//                   {/* Decorative elements */}
//                   <div className="absolute top-4 right-4 w-24 h-24 border border-primary/20 rounded-full" />
//                   <div className="absolute bottom-4 left-4 w-16 h-16 border border-accent/20 rounded-lg rotate-45" />
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </section>

//         {/* What We Offer Section */}
//         <section className="py-16 lg:py-24 relative">
//           <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
//           <div className="container mx-auto px-4 lg:px-8 relative z-10">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="text-center mb-12"
//             >
//               <span className="text-primary font-semibold text-sm uppercase tracking-wider">
//                 Capabilities
//               </span>
//               <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4">
//                 What We Offer
//               </h2>
//             </motion.div>

//             <motion.div
//               variants={containerVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
//             >
//               {service.offerings.map((offering, index) => (
//                 <motion.div
//                   key={index}
//                   variants={itemVariants}
//                   className="group bg-card border border-border rounded-2xl p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-glow-sm"
//                 >
//                   <div className="flex items-start gap-4">
//                     <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
//                       <CheckCircle2 className="w-5 h-5 text-primary" />
//                     </div>
//                     <div>
//                       <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
//                         {offering.title}
//                       </h3>
//                       <p className="text-muted-foreground text-sm leading-relaxed">
//                         {offering.description}
//                       </p>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>
//         </section>

//         {/* CTA Section */}
//         <section className="py-16 lg:py-24">
//           <div className="container mx-auto px-4 lg:px-8">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="text-center bg-gradient-to-br from-primary/10 via-card to-card border border-border rounded-3xl p-12 lg:p-16"
//             >
//               <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
//                 Ready to Get Started?
//               </h2>
//               <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
//                 Let's discuss how our {service.title.toLowerCase()} expertise can help 
//                 transform your business and drive meaningful results.
//               </p>
//               <Link
//                 to="/contact"
//                 className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
//               >
//                 Discuss Your Project
//                 <ArrowRight className="w-5 h-5" />
//               </Link>
//             </motion.div>
//           </div>
//         </section>

//         {/* Related Services */}
//         <section className="py-16 lg:py-24 relative">
//           <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
//           <div className="container mx-auto px-4 lg:px-8 relative z-10">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="text-center mb-12"
//             >
//               <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
//                 Explore More Services
//               </h2>
//             </motion.div>

//             <div className="grid md:grid-cols-3 gap-6">
//               {relatedServices.map((relatedService, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                 >
//                   <Link
//                     to={`/services/${relatedService.slug}`}
//                     className="group block bg-card border border-border rounded-2xl p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-glow-sm h-full"
//                   >
//                     <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
//                       <relatedService.icon className="w-6 h-6 text-primary" />
//                     </div>
//                     <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
//                       {relatedService.title}
//                     </h3>
//                     <p className="text-muted-foreground text-sm line-clamp-2">
//                       {relatedService.shortDescription}
//                     </p>
//                   </Link>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>
//       </main>
//       <Footer />
//       <ScrollToTop />
//     </div>
//   );
// };

// export default ServiceDetail;



import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { getServiceBySlug, services } from "@/data/services";

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

  const getDisplayImage = (currentSlug: string) => {
    if (currentSlug === "ai-innovation-lab") return "/Images/Ai inovation.jpg";
    if (currentSlug === "digital-transformation") return "/Images/digital transformatio.jpg";
    if (currentSlug === "products-solutions") return "/Images/Productsolutions.jpg";
    return service.image;
  };

  const displayImage = getDisplayImage(slug);

  const relatedServices = services
    .filter((s) => s.slug !== slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background font-['Plus_Jakarta_Sans']">
      <Header />
      <main>
        {/* HERO SECTION - Reduced top/bottom padding */}
        <section className="pt-24 pb-8 lg:pt-32 lg:pb-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-4 transition-colors group text-sm"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Services
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <service.icon className="w-5 h-5" />
                </div>
                <span className="font-semibold tracking-wider uppercase text-xs">Our Expertise</span>
              </div>
              <h1 className="text-3xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                {service.title}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {service.mediumDescription}
              </p>
            </motion.div>
          </div>
        </section>

        {/* SIDE IMAGE CONTENT SECTION - Reduced gap and padding */}
        <section className="py-8 lg:py-12 border-t border-border/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              
              {/* CONTENT SIDE */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
                className="order-2 lg:order-1"
              >
                <motion.h2 variants={itemVariants} className="text-2xl font-bold text-foreground mb-4">
                  Service Overview
                </motion.h2>
                <motion.p variants={itemVariants} className="text-base text-muted-foreground mb-6 leading-relaxed">
                  {service.longDescription}
                </motion.p>
                
                <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.offerings.slice(0, 4).map((offering, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-2 rounded-lg bg-card/50 border border-border">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span className="font-medium text-xs text-foreground">{offering.title}</span>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              {/* IMAGE SIDE */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2"
              >
                <div className="aspect-[16/9] lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-2 border-card">
                  <img 
                    src={displayImage} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CORE CAPABILITIES - Tightened grid and padding */}
        <section className="py-12 relative overflow-hidden bg-muted/20">
          <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
             <img src={displayImage} className="w-full h-full object-cover grayscale" alt="" />
          </div>

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Core Capabilities</h2>
              <div className="w-12 h-1 bg-primary mx-auto rounded-full" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {service.offerings.map((offering, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-card border border-border p-5 rounded-xl hover:border-primary/50 transition-all group"
                >
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {offering.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {offering.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* RELATED SERVICES - Compact version */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-8">Explore Other Services</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {relatedServices.map((related, index) => (
                <Link
                  key={index}
                  to={`/services/${related.slug}`}
                  className="group bg-card border border-border p-4 rounded-xl hover:shadow-md transition-all flex items-center gap-4 text-left"
                  onClick={() => window.scrollTo(0,0)}
                >
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <related.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold group-hover:text-primary transition-colors">{related.title}</h3>
                    <p className="text-xs text-muted-foreground line-clamp-1">{related.shortDescription}</p>
                  </div>
                </Link>
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