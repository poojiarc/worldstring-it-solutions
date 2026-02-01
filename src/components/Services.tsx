// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import {
//   ArrowRight,
//   Sparkles,
//   Users,
//   Building2,
//   FileText,
// } from "lucide-react";

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

// /* 🔹 First 3 custom cards */
// const topServices = [
//   {
//     title: "IT Staffing",
//     shortDescription:
//       "Flexible IT staffing solutions including contract, contract-to-hire, and full-time placements tailored to your business needs.",
//     icon: Users,
//     link: "/it-services/it-staffing",
//     image: "/Images/it staffing.jpg"
//   },
//   {
//     title: "Federal",
//     shortDescription:
//       "Technology solutions and staffing services designed specifically for U.S. federal agencies and government organizations.",
//     icon: Building2, // ✅ replaced Landmark
//     link: "/who-we-serve/federal",
//     image:"/Images/federal.jpg"
//   },
//   {
//     title: "GSA MAS",
//     shortDescription:
//       "Simplified procurement through GSA Multiple Award Schedule for federal and public sector customers.",
//     icon: FileText,
//     link: "/contracts/gsa-mas",
//     image:"/Images/gsa mas.jpg"
//   },
// ];


// export const Services = () => {
//   return (
//     <section
//       id="services"
//       className="py-24 lg:py-32 relative bg-slate-50/50 overflow-hidden"
//     >
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
//             Our{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
//               Services
//             </span>
//           </h2>

//           <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
//             Customized IT solutions tailored to your business needs.
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
//           {/* 🔹 First 3 replacement cards */}
//           {topServices.map((service, index) => (
//             <motion.div
//               key={index}
//               variants={itemVariants}
//               whileHover={{ y: -10 }}
//             >
//               <Link to={service.link} className="block h-full group">
//                 <div className="relative h-full bg-white border border-slate-200 rounded-[2rem] p-8 transition-all duration-500 overflow-hidden group-hover:border-blue-400 group-hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.15)]">
//                   <div className="absolute -inset-px bg-gradient-to-br from-blue-600/20 via-transparent to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//                   <div className="relative z-10 w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-all">
//                     <service.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
//                   </div>

//                   <h3 className="text-xl font-bold text-slate-900 mb-4">
//                     {service.title}
//                   </h3>

//                   <p className="text-slate-500 text-sm mb-8">
//                     {service.shortDescription}
//                   </p>

//                   <div className="flex items-center gap-2 text-blue-600 font-bold text-sm">
//                     Explore Now
//                     <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
//                   </div>
//                 </div>
//               </Link>
//             </motion.div>
//           ))}

//           {/* 🔹 Remaining existing services (UNCHANGED) */}
//           {services.slice(3).map((service, index) => (
//             <motion.div
//               key={service.slug}
//               variants={itemVariants}
//               whileHover={{ y: -10 }}
//             >
//               <Link to={`/services/${service.slug}`} className="block h-full group">
//                 <div className="relative h-full bg-white border border-slate-200 rounded-[2rem] p-8 transition-all duration-500 overflow-hidden group-hover:border-blue-400 group-hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.15)]">
//                   <div className="relative z-10 w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-all">
//                     <service.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
//                   </div>

//                   <h3 className="text-xl font-bold text-slate-900 mb-4">
//                     {service.title}
//                   </h3>

//                   <p className="text-slate-500 text-sm mb-8 line-clamp-3">
//                     {service.shortDescription}
//                   </p>

//                   <div className="flex items-center gap-2 text-blue-600 font-bold text-sm">
//                     Explore Now
//                     <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
//                   </div>
//                 </div>
//               </Link>
//             </motion.div>
//           ))}
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

const topServices = [
  {
    title: "IT Staffing",
    shortDescription: "Flexible IT staffing solutions including contract, contract-to-hire, and full-time placements tailored to your business needs.",
    icon: Users,
    link: "/it-services/it-staffing",
    image: "/Images/it staffing.jpg"
  },
  {
    title: "Federal",
    shortDescription: "Technology solutions and staffing services designed specifically for U.S. federal agencies and government organizations.",
    icon: Building2,
    link: "/who-we-serve/federal",
    image: "/Images/federal.jpg"
  },
  {
    title: "GSA MAS",
    shortDescription: "Simplified procurement through GSA Multiple Award Schedule for federal and public sector customers.",
    icon: FileText,
    link: "/contracts/gsa-mas",
    image: "/Images/GSAMAS.jpg"
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 lg:py-32 relative bg-slate-50/50 overflow-hidden">
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
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Services</span>
          </h2>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {/* Combine all services to map through them */}
          {[...topServices, ...services.slice(3)].map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <Link to={service.link || `/services/${service.slug}`} className="block h-full group relative">
                {/* THE CARD CONTAINER */}
                <div className="relative h-full min-h-[400px] border border-slate-200 rounded-[2rem] p-8 transition-all duration-500 overflow-hidden flex flex-col justify-between shadow-sm group-hover:shadow-xl">
                  
                  {/* FULL BACKGROUND IMAGE */}
                  <div 
                    className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${service.image}')` }}
                  />

                  {/* OVERLAY TO MAKE CONTENT VISIBLE (Optional: adjust opacity if too dark/light) */}
                  <div className="absolute inset-0 z-10 bg-white/60 group-hover:bg-white/60 transition-colors duration-500" />

                  {/* ICON AND TEXT CONTENT */}
                  <div className="relative z-20">
                    <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-all duration-300">
                      <service.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed mb-8 font-medium">
                      {service.shortDescription}
                    </p>
                  </div>

                  <div className="relative z-20 flex items-center gap-2 text-blue-600 font-bold text-sm">
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