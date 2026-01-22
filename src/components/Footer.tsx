// // // import { motion } from "framer-motion";
// // // import { Phone, Mail, MapPin, Clock, ArrowUp } from "lucide-react";

// // // const quickLinks = [
// // //   { name: "Home", href: "#home" },
// // //   { name: "Services", href: "#services" },
// // //   { name: "About", href: "#about" },
// // //   { name: "Careers", href: "#careers" },
// // //   { name: "Contact", href: "#contact" },
// // // ];

// // // export const Footer = () => {
// // //   const scrollToTop = () => {
// // //     window.scrollTo({ top: 0, behavior: "smooth" });
// // //   };

// // //   const scrollToSection = (href: string) => {
// // //     const element = document.querySelector(href);
// // //     if (element) {
// // //       element.scrollIntoView({ behavior: "smooth" });
// // //     }
// // //   };

// // //   return (
// // //     <footer className="relative bg-card border-t border-border">
// // //       {/* Scroll to Top Button */}
// // //       <motion.button
// // //         initial={{ opacity: 0, y: 20 }}
// // //         animate={{ opacity: 1, y: 0 }}
// // //         onClick={scrollToTop}
// // //         className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-button hover:shadow-glow transition-all duration-300 hover:scale-110"
// // //         aria-label="Scroll to top"
// // //       >
// // //         <ArrowUp className="w-5 h-5 text-primary-foreground" />
// // //       </motion.button>

// // //       <div className="container mx-auto px-4 lg:px-8 pt-16 pb-8">
// // //         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
// // //           {/* Brand */}
// // //           <div className="lg:col-span-1">
// // //             <div className="flex items-center gap-2 mb-4">
// // //               <span className="text-xl font-bold text-foreground">
// // //                 World<span className="text-primary">String</span>
// // //               </span>
// // //               <span className="text-primary font-bold text-xl">(W|S)</span>
// // //             </div>
// // //             <p className="text-muted-foreground text-sm leading-relaxed mb-6">
// // //               Delivering innovative, secure, and scalable IT solutions for
// // //               modern businesses. Your trusted technology partner.
// // //             </p>
// // //           </div>

// // //           {/* Quick Links */}
// // //           <div>
// // //             <h4 className="text-foreground font-semibold mb-4">Quick Links</h4>
// // //             <ul className="space-y-3">
// // //               {quickLinks.map((link) => (
// // //                 <li key={link.name}>
// // //                   <a
// // //                     href={link.href}
// // //                     onClick={(e) => {
// // //                       e.preventDefault();
// // //                       scrollToSection(link.href);
// // //                     }}
// // //                     className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
// // //                   >
// // //                     {link.name}
// // //                   </a>
// // //                 </li>
// // //               ))}
// // //             </ul>
// // //           </div>

// // //           {/* Contact Info */}
// // //           <div>
// // //             <h4 className="text-foreground font-semibold mb-4">Contact</h4>
// // //             <ul className="space-y-3">
// // //               <li>
// // //                 <a
// // //                   href="tel:6605285383"
// // //                   className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
// // //                 >
// // //                   <Phone className="w-4 h-4" />
// // //                   660-528-5383
// // //                 </a>
// // //               </li>
// // //               <li>
// // //                 <a
// // //                   href="mailto:worldstringitsolutions@gmail.com"
// // //                   className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
// // //                 >
// // //                   <Mail className="w-4 h-4" />
// // //                   worldstringitsolutions@gmail.com
// // //                 </a>
// // //               </li>
// // //               <li>
// // //                 <a
// // //                   href="https://maps.google.com/?q=14011+Levy+Ln+Pflugerville+TX+78660"
// // //                   target="_blank"
// // //                   rel="noopener noreferrer"
// // //                   className="flex items-start gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
// // //                 >
// // //                   <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
// // //                   14011 Levy Ln, Pflugerville, TX 78660
// // //                 </a>
// // //               </li>
// // //             </ul>
// // //           </div>

// // //           {/* Business Hours */}
// // //           <div>
// // //             <h4 className="text-foreground font-semibold mb-4 flex items-center gap-2">
// // //               <Clock className="w-4 h-4 text-primary" />
// // //               Business Hours
// // //             </h4>
// // //             <ul className="space-y-2 text-sm">
// // //               <li className="flex justify-between text-muted-foreground">
// // //                 <span>Mon – Fri</span>
// // //                 <span className="text-primary">9:00 AM – 5:00 PM</span>
// // //               </li>
// // //               <li className="flex justify-between text-muted-foreground">
// // //                 <span>Saturday</span>
// // //                 <span className="text-primary">9:00 AM – 5:00 PM</span>
// // //               </li>
// // //               <li className="flex justify-between text-muted-foreground">
// // //                 <span>Sunday</span>
// // //                 <span className="text-destructive">Closed</span>
// // //               </li>
// // //             </ul>
// // //           </div>
// // //         </div>

// // //         {/* Divider */}
// // //         <div className="border-t border-border pt-8">
// // //           <div className="flex flex-col md:flex-row items-center justify-between gap-4">
// // //             <p className="text-muted-foreground text-sm text-center md:text-left">
// // //               © {new Date().getFullYear()} WorldString IT Solutions. All rights
// // //               reserved.
// // //             </p>
// // //             <p className="text-muted-foreground text-xs">
// // //               Enterprise IT Solutions for a Connected World
// // //             </p>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </footer>
// // //   );
// // // };
// // import { motion } from "framer-motion";
// // import { Phone, Mail, MapPin, Clock, ArrowUp, Instagram, Linkedin } from "lucide-react";

// // const quickLinks = [
// //   { name: "Home", href: "#home" },
// //   { name: "Services", href: "#services" },
// //   { name: "About", href: "#about" },
// //   { name: "Careers", href: "#careers" },
// //   { name: "Contact", href: "#contact" },
// // ];

// // export const Footer = () => {
// //   const scrollToTop = () => {
// //     window.scrollTo({ top: 0, behavior: "smooth" });
// //   };

// //   const scrollToSection = (href: string) => {
// //     const element = document.querySelector(href);
// //     if (element) {
// //       element.scrollIntoView({ behavior: "smooth" });
// //     }
// //   };

// //   return (
// //     <footer className="relative bg-card border-t border-border">
// //       {/* Scroll to Top Button */}
// //       <motion.button
// //         initial={{ opacity: 0, y: 20 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         onClick={scrollToTop}
// //         className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-button hover:shadow-glow transition-all duration-300 hover:scale-110"
// //         aria-label="Scroll to top"
// //       >
// //         <ArrowUp className="text-primary-foreground" size={24} />
// //       </motion.button>

// //       <div className="container mx-auto px-4 lg:px-8 py-16">
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
// //           {/* Brand Column */}
// //           <div className="space-y-6">
// //             <div>
// //               <h3 className="text-2xl font-bold text-foreground">
// //                 WorldString <span className="text-primary">IT</span>
// //               </h3>
// //               <p className="mt-4 text-muted-foreground leading-relaxed">
// //                 Empowering businesses with cutting-edge technology solutions and
// //                 strategic IT consulting.
// //               </p>
// //             </div>
            
// //             {/* Social Media Links Added Here */}
// //             <div className="flex items-center gap-4">
// //               <a 
// //                 href="https://www.instagram.com/yourhandle" 
// //                 target="_blank" 
// //                 rel="noopener noreferrer"
// //                 className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
// //                 aria-label="Instagram"
// //               >
// //                 <Instagram size={20} />
// //               </a>
// //               <a 
// //                 href="https://www.linkedin.com/company/yourcompany" 
// //                 target="_blank" 
// //                 rel="noopener noreferrer"
// //                 className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
// //                 aria-label="LinkedIn"
// //               >
// //                 <Linkedin size={20} />
// //               </a>
// //             </div>
// //           </div>

// //           {/* Quick Links */}
// //           <div>
// //             <h4 className="text-foreground font-semibold mb-6">Quick Links</h4>
// //             <ul className="space-y-4">
// //               {quickLinks.map((link) => (
// //                 <li key={link.name}>
// //                   <button
// //                     onClick={() => scrollToSection(link.href)}
// //                     className="text-muted-foreground hover:text-primary transition-colors duration-200"
// //                   >
// //                     {link.name}
// //                   </button>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>

// //           {/* Contact Info */}
// //           <div>
// //             <h4 className="text-foreground font-semibold mb-6">Contact Info</h4>
// //             <ul className="space-y-4">
// //               <li className="flex items-start gap-3 text-muted-foreground">
// //                 <MapPin className="w-5 h-5 text-primary shrink-0" />
// //                 <span>14011 Levy Ln, Pflugerville, TX 78660</span>
// //               </li>
// //               <li className="flex items-center gap-3 text-muted-foreground">
// //                 <Phone className="w-5 h-5 text-primary shrink-0" />
// //                 <span>660-528-5383</span>
// //               </li>
// //               <li className="flex items-center gap-3 text-muted-foreground">
// //                 <Mail className="w-5 h-5 text-primary shrink-0" />
// //                 <span className="truncate">worldstringitsolutions@gmail.com</span>
// //               </li>
// //             </ul>
// //           </div>

// //           {/* Business Hours */}
// //           <div>
// //             <h4 className="text-foreground font-semibold mb-6 flex items-center gap-2">
// //               <Clock className="w-4 h-4 text-primary" />
// //               Business Hours
// //             </h4>
// //             <ul className="space-y-2 text-sm">
// //               <li className="flex justify-between text-muted-foreground">
// //                 <span>Mon – Fri</span>
// //                 <span className="text-primary">9:00 AM – 5:00 PM</span>
// //               </li>
// //               <li className="flex justify-between text-muted-foreground">
// //                 <span>Saturday</span>
// //                 <span className="text-primary">9:00 AM – 5:00 PM</span>
// //               </li>
// //               <li className="flex justify-between text-muted-foreground">
// //                 <span>Sunday</span>
// //                 <span className="text-destructive">Closed</span>
// //               </li>
// //             </ul>
// //           </div>
// //         </div>

// //         {/* Divider */}
// //         <div className="border-t border-border pt-8">
// //           <div className="flex flex-col md:flex-row items-center justify-between gap-4">
// //             <p className="text-muted-foreground text-sm text-center md:text-left">
// //               © {new Date().getFullYear()} WorldString IT Solutions. All rights
// //               reserved.
// //             </p>
// //             <p className="text-muted-foreground text-xs">
// //               Enterprise IT Solutions for a Connected World
// //             </p>
// //           </div>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // };
// import { motion } from "framer-motion";
// import { Phone, Mail, MapPin, Clock, ArrowUp, Instagram, Linkedin } from "lucide-react";
// import logo from "../assets/favicon.svg";

// const quickLinks = [
//   { name: "Home", href: "#home" },
//   { name: "Services", href: "#services" },
//   { name: "About", href: "#about" },
//   { name: "Careers", href: "#careers" },
//   { name: "Contact", href: "#contact" },
// ];

// export const Footer = () => {
//   const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

//   const scrollToSection = (href: string) => {
//     const element = document.querySelector(href);
//     if (element) element.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <footer className="relative bg-card border-t border-border">
//       <motion.button
//         onClick={scrollToTop}
//         className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-button hover:shadow-glow transition-all duration-300"
//       >
//         <ArrowUp className="text-primary-foreground" size={24} />
//       </motion.button>

//       <div className="container mx-auto px-4 lg:px-8 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
//           {/* Brand Column */}
//           <div className="space-y-6">
//             <div className="flex items-center gap-3">
//               <img src={logo} alt="WorldString Logo" className="h-10 w-auto" />
              
                 
          
//             </div>
//             <p className="text-muted-foreground leading-relaxed">
//               Empowering businesses with cutting-edge technology solutions and strategic IT consulting.
//             </p>
//             {/* Social Icons */}
//             <div className="flex gap-4">
//               <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-white transition-all">
//                 <Instagram size={20} />
//               </a>
//               <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-white transition-all">
//                 <Linkedin size={20} />
//               </a>
//             </div>
//           </div>

//           <div>
//             <h4 className="text-foreground font-semibold mb-6">Quick Links</h4>
//             <ul className="space-y-4">
//               {quickLinks.map((link) => (
//                 <li key={link.name}>
//                   <button onClick={() => scrollToSection(link.href)} className="text-muted-foreground hover:text-primary">
//                     {link.name}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h4 className="text-foreground font-semibold mb-6">Contact Info</h4>
//             <ul className="space-y-4 text-muted-foreground">
//               <li className="flex gap-3"><MapPin className="text-primary shrink-0" /> 14011 Levy Ln, Pflugerville, TX 78660</li>
//               <li className="flex gap-3"><Phone className="text-primary shrink-0" /> 660-528-5383</li>
//               <li className="flex gap-3"><Mail className="text-primary shrink-0" /> worldstringitsolutions@gmail.com</li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="text-foreground font-semibold mb-6">Business Hours</h4>
//             <ul className="space-y-2 text-sm text-muted-foreground">
//               <li className="flex justify-between"><span>Mon – Fri</span><span className="text-primary">9:00 AM – 5:00 PM</span></li>
//               <li className="flex justify-between"><span>Saturday</span><span className="text-primary">9:00 AM – 5:00 PM</span></li>
//               <li className="flex justify-between"><span>Sunday</span><span className="text-destructive">Closed</span></li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, ArrowUp, Instagram, Linkedin } from "lucide-react";
import logo from "../assets/favicon.svg";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Careers", href: "#careers" },
  { name: "Contact", href: "#contact" },
];

export const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-card border-t border-border">
      <motion.button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-button hover:shadow-glow transition-all duration-300"
      >
        <ArrowUp className="text-primary-foreground" size={24} />
      </motion.button>

      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src={logo} alt="WorldString Logo" className="h-10 w-auto" />
              {/* Added the text name back next to the logo */}
            
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Empowering businesses with cutting-edge technology solutions and strategic IT consulting.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button onClick={() => scrollToSection(link.href)} className="text-muted-foreground hover:text-primary">
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex gap-3"><MapPin className="text-primary shrink-0" /> 14011 Levy Ln, Pflugerville, TX 78660</li>
              <li className="flex gap-3"><Phone className="text-primary shrink-0" /> 660-528-5383</li>
              <li className="flex gap-3"><Mail className="text-primary shrink-0" /> worldstringitsolutions@gmail.com</li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-6">Business Hours</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex justify-between"><span>Mon – Fri</span><span className="text-primary">9:00 AM – 5:00 PM</span></li>
              <li className="flex justify-between"><span>Saturday</span><span className="text-primary">9:00 AM – 5:00 PM</span></li>
              <li className="flex justify-between"><span>Sunday</span><span className="text-destructive">Closed</span></li>
            </ul>
          </div>
        </div>

        {/* --- ADDED DIVIDER AND COPYRIGHT SECTION --- */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              © {new Date().getFullYear()} WorldString IT Solutions. All rights reserved.
            </p>
            <p className="text-muted-foreground text-xs">
              Enterprise IT Solutions for a Connected World
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};