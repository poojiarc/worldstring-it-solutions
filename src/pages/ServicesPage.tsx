// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { ArrowRight } from "lucide-react";
// import { Header } from "@/components/Header";
// import { Footer } from "@/components/Footer";
// import { ScrollToTop } from "@/components/ScrollToTop";
// import { services } from "@/data/services";

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
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.5,
//     },
//   },
// };

// const ServicesPage = () => {
//   return (
//     <div className="min-h-screen bg-background">
//       <Header />
//       <main>
//         {/* Hero Section */}
//         <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 relative">
//           <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
//           <div className="container mx-auto px-4 lg:px-8 relative z-10">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className="text-center max-w-3xl mx-auto"
//             >
//               <span className="text-primary font-semibold text-sm uppercase tracking-wider">
//                 Our Expertise
//               </span>
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
//                 Comprehensive IT Services
//               </h1>
//               <p className="text-muted-foreground text-lg lg:text-xl">
//                 From AI innovation to cloud infrastructure, we deliver end-to-end technology 
//                 solutions that drive business transformation and growth.
//               </p>
//             </motion.div>
//           </div>
//         </section>

//         {/* Services Grid */}
//         <section className="py-16 lg:py-24 relative">
//           <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
//           <div className="container mx-auto px-4 lg:px-8 relative z-10">
//             <motion.div
//               variants={containerVariants}
//               initial="hidden"
//               animate="visible"
//               className="grid md:grid-cols-2 gap-8"
//             >
//               {services.map((service, index) => (
//                 <motion.div
//                   key={index}
//                   variants={itemVariants}
//                   className="group relative bg-card border border-border rounded-2xl p-8 lg:p-10 transition-all duration-300 hover:border-primary/30 hover:shadow-glow-sm"
//                 >
//                   {/* Icon */}
//                   <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
//                     <service.icon className="w-8 h-8 text-primary" />
//                   </div>

//                   {/* Content */}
//                   <h2 className="text-2xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
//                     {service.title}
//                   </h2>
//                   <p className="text-muted-foreground leading-relaxed mb-6">
//                     {service.mediumDescription}
//                   </p>

//                   {/* Read More Button */}
//                   <Link
//                     to={`/services/${service.slug}`}
//                     className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
//                   >
//                     Explore Service
//                     <ArrowRight className="w-5 h-5" />
//                   </Link>

//                   {/* Hover Gradient */}
//                   <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>
//         </section>

//         {/* CTA Section */}
//         <section className="py-16 lg:py-24 relative">
//           <div className="container mx-auto px-4 lg:px-8">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="text-center bg-gradient-to-br from-card via-card to-primary/5 border border-border rounded-3xl p-12 lg:p-16"
//             >
//               <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
//                 Ready to Transform Your Business?
//               </h2>
//               <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
//                 Let's discuss how our services can help you achieve your technology goals 
//                 and drive meaningful results.
//               </p>
//               <Link
//                 to="/#contact"
//                 className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
//               >
//                 Get in Touch
//                 <ArrowRight className="w-5 h-5" />
//               </Link>
//             </motion.div>
//           </div>
//         </section>
//       </main>
//       <Footer />
//       <ScrollToTop />
//     </div>
//   );
// };

// export default ServicesPage;



import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { services } from "@/data/services";

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
  // Local helper to match your specific file paths
  const getImagePath = (slug: string) => {
    if (slug === "ai-innovation-lab") return "/Images/Ai inovation.jpg";
    if (slug === "digital-transformation") return "/Images/digital transformatio.jpg";
    if (slug === "products-solutions") return "/Images/Productsolutions.jpg";
    
    // Fallback to the path defined in your services.ts for others
    const service = services.find(s => s.slug === slug);
    return service?.image || "/Images/default.jpg";
  };

  return (
    <div className="min-h-screen bg-background font-['Plus_Jakarta_Sans']">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">Our Services</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Tailored technology solutions designed for your business growth.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {services.map((service) => (
                <motion.div key={service.slug} variants={itemVariants}>
                  {/* ENTIRE CARD IS A LINK/BUTTON */}
                  <Link
                    to={`/services/${service.slug}`}
                    onClick={() => window.scrollTo(0, 0)}
                    className="group flex flex-col h-full bg-card border border-border rounded-[2rem] overflow-hidden hover:shadow-2xl hover:border-primary/50 transition-all duration-500"
                  >
                    {/* IMAGE AREA */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={getImagePath(service.slug)}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => {
                          e.currentTarget.src = "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000";
                        }}
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                      
                      <div className="absolute top-6 left-6 bg-background/90 backdrop-blur-sm p-3 rounded-2xl shadow-lg">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>

                    {/* CONTENT AREA */}
                    <div className="p-8 flex flex-col flex-grow">
                      <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-8 line-clamp-3">
                        {service.shortDescription}
                      </p>

                      {/* RESTORED EXPLORE BUTTON LINK */}
                      <div className="mt-auto flex items-center gap-2 text-primary font-bold">
                        <span>Explore {service.title}</span>
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
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