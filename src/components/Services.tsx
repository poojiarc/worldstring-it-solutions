// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { ArrowRight, Sparkles, Globe } from "lucide-react";
// import { services } from "@/data/services";
// import { FloatingOrb, Particles } from "@/components/ui/animated-background";

// // Import images for custom top services
// import itStaffingImg from "@/assets/services/it-staffing.jpg";
// import federalImg from "@/assets/services/federal.jpg";
// import gsaMasImg from "@/assets/services/gsa-mas.jpg";

// /* 🔹 First 3 custom cards with images */
// const topServices = [
//   {
//     title: "IT Staffing",
//     shortDescription:
//       "Flexible IT staffing solutions including contract, contract-to-hire, and full-time placements tailored to your business needs.",
//     link: "/it-services/it-staffing",
//     image: itStaffingImg,
//   },
//   {
//     title: "Federal",
//     shortDescription:
//       "Technology solutions and staffing services designed specifically for U.S. federal agencies and government organizations.",
//     link: "/who-we-serve/federal",
//     image: federalImg,
//   },
//   {
//     title: "GSA MAS",
//     shortDescription:
//       "Simplified procurement through GSA Multiple Award Schedule for federal and public sector customers.",
//     link: "/contracts/gsa-mas",
//     image: gsaMasImg,
//   },
// ];

// export const Services = () => {
//   return (
//     <section
//       id="services"
//       className="py-24 lg:py-32 relative bg-gradient-to-b from-secondary/30 via-background to-secondary/20 overflow-hidden"
//     >
//       {/* Animated Background */}
//       <motion.div 
//         className="absolute inset-0 opacity-50"
//         animate={{
//           background: [
//             "radial-gradient(ellipse at 20% 30%, hsl(210 100% 50% / 0.08) 0%, transparent 50%)",
//             "radial-gradient(ellipse at 80% 70%, hsl(192 91% 50% / 0.08) 0%, transparent 50%)",
//             "radial-gradient(ellipse at 50% 50%, hsl(210 100% 50% / 0.05) 0%, transparent 50%)",
//             "radial-gradient(ellipse at 20% 30%, hsl(210 100% 50% / 0.08) 0%, transparent 50%)",
//           ]
//         }}
//         transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//       />
      
//       {/* Floating Orbs */}
//       <FloatingOrb className="top-0 right-0 bg-primary/10" size="xl" delay={0} />
//       <FloatingOrb className="bottom-0 left-0 bg-accent/10" size="lg" delay={2} />
//       <FloatingOrb className="top-1/2 left-1/4 bg-primary/5" size="md" delay={4} />
      
//       {/* Particles */}
//       <Particles count={12} className="hidden lg:block" />

//       <div className="container mx-auto px-4 lg:px-8 relative z-10">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-xs uppercase tracking-wider mb-6">
//             <Sparkles className="w-4 h-4 animate-pulse" />
//             What We Offer
//           </span>

//           <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mt-2 mb-6 tracking-tight font-heading">
//             Our <span className="text-gradient">Services</span>
//           </h2>

//           <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium text-justify sm:text-center leading-relaxed">
//             Comprehensive IT solutions designed to transform your business, 
//             enhance security, and drive innovation across your enterprise.
//           </p>
//         </motion.div>

//         {/* Services Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
//           {/* First 3 custom cards with background images */}
//           {topServices.map((service, index) => (
//             <motion.div
//               key={service.title}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               whileHover={{ y: -8 }}
//             >
//               <Link to={service.link} className="block h-full group">
//                 <div className="relative h-full min-h-[340px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
//                   {/* Background Image */}
//                   <div className="absolute inset-0">
//                     <img
//                       src={service.image}
//                       alt={service.title}
//                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                     />
//                     {/* Gradient Overlay */}
//                     <div className="absolute inset-0 bg-gradient-to-t from-foreground/95 via-foreground/70 to-foreground/40 group-hover:from-foreground/90 group-hover:via-foreground/60 transition-all duration-500" />
//                   </div>
                  
//                   {/* Content */}
//                   <div className="relative z-10 p-6 lg:p-8 flex flex-col h-full min-h-[340px]">
//                     {/* Title */}
//                     <h3 className="text-2xl font-black text-white mb-4 tracking-tight font-heading drop-shadow-lg">
//                       {service.title}
//                     </h3>

//                     {/* Description */}
//                     <p className="text-white/90 text-base mb-6 flex-grow line-clamp-4 text-justify leading-relaxed font-medium">
//                       {service.shortDescription}
//                     </p>

//                     {/* Learn More */}
//                     <div className="mt-auto flex items-center gap-2 text-white font-bold group-hover:gap-3 transition-all text-lg">
//                       <Globe className="w-5 h-5" />
//                       Learn More
//                       <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
//                     </div>
//                   </div>
                  
//                   {/* Top accent line */}
//                   <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-accent to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20" />
                  
//                   {/* Bottom glow */}
//                   <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
//                 </div>
//               </Link>
//             </motion.div>
//           ))}

//           {/* Remaining services from services.ts with background images */}
//           {services.slice(0, 5).map((service, index) => (
//             <motion.div
//               key={service.slug}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
//               whileHover={{ y: -8 }}
//             >
//               <Link to={`/services/${service.slug}`} className="block h-full group">
//                 <div className="relative h-full min-h-[340px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
//                   {/* Background Image */}
//                   <div className="absolute inset-0">
//                     <img
//                       src={service.image}
//                       alt={service.title}
//                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                     />
//                     {/* Gradient Overlay */}
//                     <div className="absolute inset-0 bg-gradient-to-t from-foreground/95 via-foreground/70 to-foreground/40 group-hover:from-foreground/90 group-hover:via-foreground/60 transition-all duration-500" />
//                   </div>
                  
//                   {/* Content */}
//                   <div className="relative z-10 p-6 lg:p-8 flex flex-col h-full min-h-[340px]">
//                     {/* Icon Badge */}
//                     <motion.div 
//                       className="w-12 h-12 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-accent transition-all duration-300"
//                       whileHover={{ scale: 1.1, rotate: 5 }}
//                     >
//                       <service.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
//                     </motion.div>
                    
//                     {/* Title */}
//                     <h3 className="text-xl font-black text-white mb-3 tracking-tight font-heading drop-shadow-lg">
//                       {service.title}
//                     </h3>

//                     {/* Description */}
//                     <p className="text-white/90 text-sm mb-6 flex-grow line-clamp-4 text-justify leading-relaxed font-medium">
//                       {service.shortDescription}
//                     </p>

//                     {/* Learn More */}
//                     <div className="mt-auto flex items-center gap-2 text-white font-bold group-hover:gap-3 transition-all">
//                       <Globe className="w-4 h-4" />
//                       Learn More
//                       <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
//                     </div>
//                   </div>
                  
//                   {/* Top accent line */}
//                   <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-accent to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20" />
                  
//                   {/* Bottom glow */}
//                   <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
//                 </div>
//               </Link>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };




import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Globe } from "lucide-react";
import { services } from "@/data/services";
import { FloatingOrb, Particles } from "@/components/ui/animated-background";

// Import images for custom top services
import itStaffingImg from "@/assets/services/it-staffing.jpg";
import federalImg from "@/assets/services/federal.jpg";
import gsaMasImg from "@/assets/services/gsa-mas.jpg";

/* 🔹 First 3 custom cards with images */
const topServices = [
  {
    title: "IT Staffing",
    shortDescription:
      "Flexible IT staffing solutions including contract, contract-to-hire, and full-time placements tailored to your business needs.",
    link: "/it-services/it-staffing",
    image: itStaffingImg,
  },
  {
    title: "Federal",
    shortDescription:
      "Technology solutions and staffing services designed specifically for U.S. federal agencies and government organizations.",
    link: "/who-we-serve/federal",
    image: federalImg,
  },
  {
    title: "GSA MAS",
    shortDescription:
      "Simplified procurement through GSA Multiple Award Schedule for federal and public sector customers.",
    link: "/contracts/gsa-mas",
    image: gsaMasImg,
  },
];

export const Services = () => {
  return (
    <section
      id="services"
      className="py-24 lg:py-32 relative bg-gradient-to-b from-secondary/30 via-background to-secondary/20 overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 opacity-50"
        animate={{
          background: [
            "radial-gradient(ellipse at 20% 30%, hsl(210 100% 50% / 0.08) 0%, transparent 50%)",
            "radial-gradient(ellipse at 80% 70%, hsl(192 91% 50% / 0.08) 0%, transparent 50%)",
            "radial-gradient(ellipse at 50% 50%, hsl(210 100% 50% / 0.05) 0%, transparent 50%)",
            "radial-gradient(ellipse at 20% 30%, hsl(210 100% 50% / 0.08) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating Orbs */}
      <FloatingOrb className="top-0 right-0 bg-primary/10" size="xl" delay={0} />
      <FloatingOrb className="bottom-0 left-0 bg-accent/10" size="lg" delay={2} />
      <FloatingOrb className="top-1/2 left-1/4 bg-primary/5" size="md" delay={4} />

      {/* Particles */}
      <Particles count={12} className="hidden lg:block" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-xs uppercase tracking-wider mb-6">
            <Sparkles className="w-4 h-4 animate-pulse" />
            What We Offer
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mt-2 mb-6 tracking-tight font-heading">
            Our <span className="text-gradient">Services</span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium sm:text-center leading-relaxed">
            Comprehensive IT solutions designed to transform your business,
            enhance security, and drive innovation across your enterprise.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Top 3 custom cards */}
          {topServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Link to={service.link} className="block h-full group">
                <div className="relative h-full min-h-[340px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                  {/* Background */}
                  <div className="absolute inset-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/95 via-foreground/70 to-foreground/40" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-6 lg:p-8 flex flex-col h-full">
                    <h3 className="text-2xl font-black text-white mb-4 tracking-tight font-heading drop-shadow-lg">
                      {service.title}
                    </h3>

                    <p className="text-white/90 text-base mb-6 flex-grow leading-relaxed font-medium text-left whitespace-normal break-words">
                      {service.shortDescription}
                    </p>

                    <div className="mt-auto flex items-center gap-2 text-white font-bold text-lg">
                      <Globe className="w-5 h-5" />
                      Learn More
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}

          {/* Remaining services */}
          {services.slice(0, 5).map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Link to={`/services/${service.slug}`} className="block h-full group">
                <div className="relative h-full min-h-[340px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="absolute inset-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/95 via-foreground/70 to-foreground/40" />
                  </div>

                  <div className="relative z-10 p-6 lg:p-8 flex flex-col h-full">
                    <motion.div
                      className="w-12 h-12 bg-white/95 rounded-xl shadow-lg flex items-center justify-center mb-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <service.icon className="w-6 h-6 text-primary" />
                    </motion.div>

                    <h3 className="text-xl font-black text-white mb-3 tracking-tight font-heading drop-shadow-lg">
                      {service.title}
                    </h3>

                    <p className="text-white/90 text-sm mb-6 flex-grow leading-relaxed font-medium text-left whitespace-normal break-words">
                      {service.shortDescription}
                    </p>

                    <div className="mt-auto flex items-center gap-2 text-white font-bold">
                      <Globe className="w-4 h-4" />
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
