// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { ArrowRight } from "lucide-react";
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

// export const Services = () => {
//   return (
//     <section id="services" className="py-24 lg:py-32 relative bg-background">
//       <div className="container mx-auto px-4 lg:px-8 relative z-10">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <span className="text-primary font-semibold text-sm uppercase tracking-wider">
//             What We Offer
//           </span>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
//             Our Services
//           </h2>
//           <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
//             Customized IT solutions tailored to your business needs. We deliver
//             excellence across every technology domain.
//           </p>
//         </motion.div>

//         {/* Services Grid */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
//         >
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               variants={itemVariants}
//               className="group relative bg-background border border-border rounded-2xl p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 flex flex-col"
//             >
//               {/* Icon */}
//               <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
//                 <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
//               </div>

//               {/* Content */}
//               <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
//                 {service.title}
//               </h3>
//               <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-grow line-clamp-3">
//                 {service.shortDescription}
//               </p>

//               {/* Read More Button */}
//               <Link
//                 to={`/services/${service.slug}`}
//                 className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:gap-3 transition-all duration-300"
//               >
//                 Read More
//                 <ArrowRight className="w-4 h-4" />
//               </Link>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* View All Services Link */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="text-center mt-12"
//         >
//           <Link
//             to="/services"
//             className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
//           >
//             View All Services
//             <ArrowRight className="w-5 h-5" />
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   );
// };




// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { ArrowRight, Sparkles } from "lucide-react";
// import { services } from "@/data/services";

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.1 },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };

// export const Services = () => {
//   return (
//     <section id="services" className="py-24 lg:py-32 relative bg-slate-50/50 overflow-hidden">
//       {/* Background Decorative Element */}
//       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/30 blur-[120px] rounded-full -z-10" />
      
//       <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-primary font-bold text-xs uppercase tracking-tighter mb-4">
//             <Sparkles className="w-3 h-3" />
//             What We Offer
//           </span>

//           <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-2 mb-6 tracking-tight">
//             Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Services</span>
//           </h2>

//           <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
//             Customized IT solutions tailored to your business needs. We deliver
//             excellence across every technology domain.
//           </p>
//         </motion.div>

//         {/* Services Grid */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
//         >
//           {services.map((service, index) => (
//             <motion.div 
//               key={index} 
//               variants={itemVariants}
//               whileHover={{ y: -10 }} // Card lifts up on hover
//               className="relative"
//             >
//               <Link
//                 to={service.slug.startsWith("/") ? service.slug : `/services/${service.slug}`}

//                 className="block h-full group outline-none"
//               >
//                 {/* THE CREATIVE CARD */}
//                 <div className="relative h-full bg-white border border-slate-200 rounded-[2rem] p-8 transition-all duration-500 overflow-hidden 
//                                 group-hover:border-blue-400 group-hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.15)]">
                  
//                   {/* Creative Blue Glow Gradient (Desktop Only Hover Effect) */}
//                   <div className="absolute -inset-px bg-gradient-to-br from-blue-600/20 via-transparent to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
//                   {/* Decorative corner accent */}
//                   <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-bl-full" />

//                   {/* Icon Wrapper */}
//                   <div className="relative z-10 w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 transition-all duration-500 
//                                   group-hover:bg-blue-600 group-hover:rotate-[10deg] group-hover:scale-110 shadow-sm group-hover:shadow-blue-500/50">
//                     <service.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-500" />
//                   </div>

//                   {/* Text Content */}
//                   <div className="relative z-10">
//                     <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors">
//                       {service.title}
//                     </h3>

//                     <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-3 font-medium">
//                       {service.shortDescription}
//                     </p>

//                     {/* Animated Link Text */}
//                     <div className="flex items-center gap-2 text-blue-600 text-sm font-bold">
//                       <span className="relative overflow-hidden inline-block">
//                         <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">Read More</span>
//                         <span className="absolute top-0 left-0 inline-block transition-transform duration-300 translate-y-full group-hover:translate-y-0 text-blue-800">Explore Now</span>
//                       </span>
//                       <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
//                     </div>
//                   </div>
//                 </div>
//               </Link>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* View All Button */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.5 }}
//           className="text-center mt-16"
//         >
//           <Link
//             to="/services"
//             className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-blue-600 hover:shadow-[0_10px_20px_rgba(59,130,246,0.3)] transition-all duration-300 group"
//           >
//             View All Services
//             <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//           </Link>
//         </motion.div>

//       </div>
//     </section>
//   );
// };


import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { services } from "@/data/services";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// 👇 SCROLL HANDLER
const scrollToFooterServices = () => {
  const el = document.getElementById("footer-services");
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export const Services = () => {
  return (
    <section id="services" className="py-24 lg:py-32 bg-slate-50/50">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border text-xs font-bold uppercase">
            <Sparkles className="w-3 h-3" /> What We Offer
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold mt-6 mb-4">
            Our <span className="text-blue-600">Services</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => {
            const CardContent = (
              <div className="h-full bg-white rounded-[2rem] p-8 border group-hover:shadow-xl transition-all">
                <div className="w-14 h-14 rounded-xl bg-slate-50 flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-blue-600" />
                </div>

                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-500 text-sm mb-6 line-clamp-3">
                  {service.shortDescription}
                </p>

                <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm">
                  Read More <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            );

            return (
              <motion.div key={index} variants={itemVariants}>
                {service.scrollToFooter ? (
                  <button
                    onClick={scrollToFooterServices}
                    className="block w-full text-left"
                  >
                    {CardContent}
                  </button>
                ) : (
                  <Link to={`/services/${service.slug}`}>
                    {CardContent}
                  </Link>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
