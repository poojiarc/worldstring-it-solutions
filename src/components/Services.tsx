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
import {
  ArrowRight,
  Sparkles,
  Users,
  Building2,
  FileText,
} from "lucide-react";

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

/* 🔹 First 3 custom cards */
const topServices = [
  {
    title: "IT Staffing",
    shortDescription:
      "Flexible IT staffing solutions including contract, contract-to-hire, and full-time placements tailored to your business needs.",
    icon: Users,
    link: "/it-services/it-staffing",
  },
  {
    title: "Federal",
    shortDescription:
      "Technology solutions and staffing services designed specifically for U.S. federal agencies and government organizations.",
    icon: Building2, // ✅ replaced Landmark
    link: "/who-we-serve/federal",
  },
  {
    title: "GSA MAS",
    shortDescription:
      "Simplified procurement through GSA Multiple Award Schedule for federal and public sector customers.",
    icon: FileText,
    link: "/contracts/gsa-mas",
  },
];


export const Services = () => {
  return (
    <section
      id="services"
      className="py-24 lg:py-32 relative bg-slate-50/50 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/30 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-primary font-bold text-xs uppercase tracking-tighter mb-4">
            <Sparkles className="w-3 h-3" />
            What We Offer
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-2 mb-6 tracking-tight">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Services
            </span>
          </h2>

          <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
            Customized IT solutions tailored to your business needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {/* 🔹 First 3 replacement cards */}
          {topServices.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <Link to={service.link} className="block h-full group">
                <div className="relative h-full bg-white border border-slate-200 rounded-[2rem] p-8 transition-all duration-500 overflow-hidden group-hover:border-blue-400 group-hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.15)]">
                  <div className="absolute -inset-px bg-gradient-to-br from-blue-600/20 via-transparent to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10 w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-all">
                    <service.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    {service.title}
                  </h3>

                  <p className="text-slate-500 text-sm mb-8">
                    {service.shortDescription}
                  </p>

                  <div className="flex items-center gap-2 text-blue-600 font-bold text-sm">
                    Explore Now
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}

          {/* 🔹 Remaining existing services (UNCHANGED) */}
          {services.slice(3).map((service, index) => (
            <motion.div
              key={service.slug}
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <Link to={`/services/${service.slug}`} className="block h-full group">
                <div className="relative h-full bg-white border border-slate-200 rounded-[2rem] p-8 transition-all duration-500 overflow-hidden group-hover:border-blue-400 group-hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.15)]">
                  <div className="relative z-10 w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-all">
                    <service.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    {service.title}
                  </h3>

                  <p className="text-slate-500 text-sm mb-8 line-clamp-3">
                    {service.shortDescription}
                  </p>

                  <div className="flex items-center gap-2 text-blue-600 font-bold text-sm">
                    Explore Now
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
