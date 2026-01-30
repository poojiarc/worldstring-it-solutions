import { motion } from "framer-motion";

/* Customer Data */
const customers = [
  { name: "Microsoft", logo: "/logos/Microsoft.jpg" },
  { name: "Apple", logo: "/logos/apple.jpg" },
  { name: "Google", logo: "/logos/google.png" },
  { name: "Amazon", logo: "/logos/amazon.png" },
  { name: "Oracle", logo: "/logos/oracle.png" },
  { name: "SAP", logo: "/logos/sap.png" },
  { name: "Salesforce", logo: "/logos/salesforce.png" },
  { name: "Adobe", logo: "/logos/Adobe.png" },
  { name: "IBM", logo: "/logos/ibm.png" },
  { name: "Meta", logo: "/logos/meta.png" },
  { name: "Intuit", logo: "/logos/intuit.png" },
  { name: "ServiceNow", logo: "/logos/SERVICENOW.png" },
  { name: "VMware", logo: "/logos/VMWare.png" },
  { name: "Workday", logo: "/logos/Workday.jpg" },
  { name: "Atlassian", logo: "/logos/Atlassian.jpg" },
  { name: "Snowflake", logo: "/logos/Snowflake.png" },
  { name: "NVIDIA", logo: "/logos/nvidia.png" },
  { name: "Tencent", logo: "/logos/tencent.png" },
  { name: "Alibaba", logo: "/logos/alibaba.jpg" },
  { name: "Palantir", logo: "/logos/palantir.png" },
];

export const OurCustomers = () => {
  return (
    <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Trusted Partners
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Our Customers
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We're proud to partner with leading organizations across industries to deliver
            transformative IT solutions.
          </p>
        </motion.div>

        {/* Auto Scrolling Slider */}
        <div className="logo-slider relative overflow-hidden w-full">

          <div className="logo-track flex items-center animate-scroll">

            {/* Duplicate for Infinite Loop */}
            {[...customers, ...customers].map((customer, index) => (
              <div
                key={index}
                className="group min-w-[180px] sm:min-w-[200px] lg:min-w-[220px]
                           mx-3 bg-background border border-border
                           rounded-2xl p-6 flex flex-col items-center
                           justify-center transition-all duration-300
                           hover:border-primary/40 hover:shadow-lg
                           hover:shadow-primary/10"
              >
                {/* Logo */}
                <div
                  className="w-14 h-14 sm:w-16 sm:h-16 mb-3 rounded-xl
                             bg-secondary flex items-center justify-center
                             group-hover:bg-primary/10 transition-colors p-2"
                >
                  <img
                    src={customer.logo}
                    alt={customer.name}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>

                {/* Name */}
                <span
                  className="text-sm font-medium text-muted-foreground
                             group-hover:text-foreground transition-colors
                             text-center"
                >
                  {customer.name}
                </span>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};
