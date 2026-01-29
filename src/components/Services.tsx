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




import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const Services = () => {
  return (
    <section id="services" className="py-24 lg:py-32 relative bg-background">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            What We Offer
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Our Services
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Customized IT solutions tailored to your business needs. We deliver
            excellence across every technology domain.
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
          {services.map((service, index) => (
            
            <motion.div key={index} variants={itemVariants}>
              
              {/* FULL CARD LINK */}
              <Link
                to={`/services/${service.slug}`}
                className="block h-full group focus:outline-none"
              >
                <div className="relative bg-background border border-border rounded-2xl p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 flex flex-col h-full cursor-pointer">
                  
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                    <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-grow line-clamp-3">
                    {service.shortDescription}
                  </p>

                  {/* Read More */}
                  <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold group-hover:gap-3 transition-all duration-300 mt-auto">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </div>

                </div>
              </Link>

            </motion.div>
          ))}
        </motion.div>

        {/* View All Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};
