// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { ArrowRight, CheckCircle, Code } from "lucide-react";

// import { PageLayout } from "@/components/PageLayout";
// import { PageHero } from "@/components/PageHero";
// import { CTASection } from "@/components/CTASection";

// import { services } from "@/data/services";

// /* Delivery Phases */
// const deliveryPhases = [
//   { phase: "Discovery", description: "Understand requirements, assess current state, define objectives" },
//   { phase: "Design", description: "Architecture planning, solution design, technical specifications" },
//   { phase: "Develop", description: "Agile development, iterative builds, quality assurance" },
//   { phase: "Deploy", description: "Implementation, migration, training, and go-live support" },
//   { phase: "Optimize", description: "Continuous improvement, monitoring, and maintenance" },
// ];

// const ITSolutionsPage = () => {
//   return (
//     <PageLayout>
//       <div className="min-h-screen bg-gradient-to-b from-background via-secondary/20 to-background">
//         <PageHero
//           title="IT Solutions"
//           subtitle="Technology Excellence"
//           description="Comprehensive technology solutions from development to deployment. We deliver innovative IT solutions that drive business success."
//           icon={Code}
//         />

//         {/* IT Solutions (From services.tsx) */}
//         <section className="py-16 lg:py-20">
//           <div className="container mx-auto px-4 lg:px-8">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="text-center mb-16"
//             >
//               <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
//                 Our IT Solutions
//               </h2>

//               <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-justify sm:text-center">
//                 Explore our comprehensive range of IT services designed to empower your business.
//               </p>
//             </motion.div>

//             {/* Services Grid */}
//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
//               {services.map((service, index) => (
//                 <motion.div
//                   key={service.title}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                 >
//                   <Link
//                     to={`/services/${service.slug}`}
//                     className="block h-full group"
//                   >
//                     <div className="glass-card rounded-2xl p-6 h-full flex flex-col hover:border-primary/40 transition-all duration-300 cursor-pointer">
//                       <div className="icon-badge mb-4 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-accent">
//                         <service.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
//                       </div>

//                       <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
//                         {service.title}
//                       </h3>

//                       <p className="text-muted-foreground text-sm mb-5 flex-grow line-clamp-3 text-justify leading-relaxed">
//                         {service.shortDescription}
//                       </p>

//                       <div className="flex items-center gap-2 text-primary text-sm font-bold mt-auto group-hover:gap-3 transition-all">
//                         Read More
//                         <ArrowRight className="w-4 h-4" />
//                       </div>
//                     </div>
//                   </Link>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Solution Delivery Lifecycle */}
//         <section className="py-16 bg-secondary/30">
//           <div className="container mx-auto px-4 lg:px-8">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="text-center mb-16"
//             >
//               <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
//                 Solution Delivery Lifecycle
//               </h2>

//               <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-justify sm:text-center">
//                 Our proven methodology ensures successful project delivery every time.
//               </p>
//             </motion.div>

//             <div className="flex flex-wrap justify-center gap-4">
//               {deliveryPhases.map((phase, index) => (
//                 <motion.div
//                   key={phase.phase}
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.4, delay: index * 0.1 }}
//                   className="glass-card rounded-2xl p-6 flex-1 min-w-[200px] max-w-[250px]"
//                 >
//                   <div className="flex items-center gap-3 mb-3">
//                     <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm">
//                       {index + 1}
//                     </div>

//                     <h3 className="font-bold text-foreground">
//                       {phase.phase}
//                     </h3>
//                   </div>

//                   <p className="text-sm text-muted-foreground text-justify leading-relaxed">
//                     {phase.description}
//                   </p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Why Choose Us */}
//         <section className="py-16 lg:py-20">
//           <div className="container mx-auto px-4 lg:px-8">
//             <div className="grid lg:grid-cols-2 gap-12 items-center">
//               <motion.div
//                 initial={{ opacity: 0, x: -30 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//               >
//                 <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
//                   Why Choose Our Solutions?
//                 </h2>

//                 <div className="space-y-4">
//                   {[
//                     "Experienced team with proven track record",
//                     "Agile methodology for faster delivery",
//                     "Scalable solutions that grow with you",
//                     "24/7 support and maintenance",
//                     "Security-first approach",
//                     "Cost-effective implementations",
//                   ].map((item, index) => (
//                     <motion.div
//                       key={item}
//                       initial={{ opacity: 0, x: -20 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ delay: index * 0.1 }}
//                       className="flex items-center gap-3"
//                     >
//                       <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
//                       <span className="text-muted-foreground">{item}</span>
//                     </motion.div>
//                   ))}
//                 </div>
//               </motion.div>

//               <motion.div
//                 initial={{ opacity: 0, x: 30 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 className="glass-card rounded-2xl p-8"
//               >
//                 <div className="grid grid-cols-2 gap-6">
//                   {[
//                     { value: "150+", label: "Projects Delivered" },
//                     { value: "50+", label: "Enterprise Clients" },
//                     { value: "99%", label: "Client Satisfaction" },
//                     { value: "24/7", label: "Support Available" },
//                   ].map((stat) => (
//                     <div key={stat.label} className="text-center">
//                       <div className="text-3xl font-black text-gradient mb-2">
//                         {stat.value}
//                       </div>
//                       <div className="text-sm text-muted-foreground">
//                         {stat.label}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </section>

//         <CTASection
//           title="Ready to Transform Your Technology?"
//           description="Let's discuss how our solutions can help achieve your business goals."
//           buttonText="Start Your Project"
//         />
//       </div>
//     </PageLayout>
//   );
// };

// export default ITSolutionsPage;


import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Code } from "lucide-react";

import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";

import { services } from "@/data/services";

/* Delivery Phases */
const deliveryPhases = [
  {
    phase: "Discovery",
    description:
      "Understand requirements, assess current state, define objectives",
  },
  {
    phase: "Design",
    description:
      "Architecture planning, solution design, technical specifications",
  },
  {
    phase: "Develop",
    description:
      "Agile development, iterative builds, quality assurance",
  },
  {
    phase: "Deploy",
    description:
      "Implementation, migration, training, and go-live support",
  },
  {
    phase: "Optimize",
    description:
      "Continuous improvement, monitoring, and maintenance",
  },
];

const ITSolutionsPage = () => {
  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-b from-background via-secondary/20 to-background">
        <PageHero
          title="IT Solutions"
          subtitle="Technology Excellence"
          description="Comprehensive technology solutions from development to deployment. We deliver innovative IT solutions that drive business success."
          icon={Code}
        />

        {/* IT Solutions */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our IT Solutions
              </h2>

              <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-justify sm:text-center">
                Explore our comprehensive range of IT services designed to empower your business.
              </p>
            </motion.div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link to={`/services/${service.slug}`} className="block h-full group">
                    <div className="glass-card rounded-2xl p-6 h-full flex flex-col hover:border-primary/40 transition-all duration-300 text-left">
                      <div className="icon-badge mb-4 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-accent">
                        <service.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                      </div>

                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-muted-foreground text-sm mb-5 flex-grow leading-relaxed break-words">
                        {service.shortDescription}
                      </p>

                      <div className="flex items-center gap-2 text-primary text-sm font-bold mt-auto">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solution Delivery Lifecycle */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Solution Delivery Lifecycle
              </h2>

              <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-justify sm:text-center">
                Our proven methodology ensures successful project delivery every time.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {deliveryPhases.map((phase, index) => (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="glass-card rounded-2xl p-6 text-left"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>

                    <h3 className="text-lg font-bold text-foreground">
                      {phase.phase}
                    </h3>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed break-words">
                    {phase.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Why Choose Our Solutions?
                </h2>

                <div className="space-y-4">
                  {[
                    "Experienced team with proven track record",
                    "Agile methodology for faster delivery",
                    "Scalable solutions that grow with you",
                    "24/7 support and maintenance",
                    "Security-first approach",
                    "Cost-effective implementations",
                  ].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-8"
              >
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: "150+", label: "Projects Delivered" },
                    { value: "50+", label: "Enterprise Clients" },
                    { value: "99%", label: "Client Satisfaction" },
                    { value: "24/7", label: "Support Available" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-3xl font-black text-gradient mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <CTASection
          title="Ready to Transform Your Technology?"
          description="Let's discuss how our solutions can help achieve your business goals."
          buttonText="Start Your Project"
        />
      </div>
    </PageLayout>
  );
};

export default ITSolutionsPage;
