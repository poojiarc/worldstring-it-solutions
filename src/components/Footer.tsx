// import { motion } from "framer-motion";
// import { 
//   Phone, Mail, MapPin, Clock, 
//   Home, Briefcase, Server, Users, FileText,
//   Linkedin, Instagram, ArrowRight, Sparkles, Globe
// } from "lucide-react";
// import { Link } from "react-router-dom";
// import logo from "../assets/favicon.svg";

// const quickLinks = [
//   { name: "Home", href: "/", icon: Home },
//   { name: "About", href: "/about", icon: Users },
//   { name: "Careers", href: "/careers", icon: Briefcase },
//   { name: "Contact", href: "/contact", icon: FileText },
// ];

// const serviceLinks = [
//   { name: "IT Staffing", href: "/it-services/it-staffing", desc: "Contract & permanent talent" },
//   { name: "IT Solutions", href: "/it-services/it-solutions", desc: "Cloud & development" },
//   { name: "Federal", href: "/who-we-serve/federal", desc: "Government IT services" },
//   { name: "GSA MAS", href: "/contracts/gsa-mas", desc: "Federal contracts" },
// ];

// const socialLinks = [
//   { icon: Linkedin, href: "#", label: "LinkedIn" },
//   { icon: Instagram, href: "#", label: "Instagram" },
// ];

// export const Footer = () => {
//   return (
//     <footer className="relative bg-[#0a0c10] text-slate-300 pt-20 pb-10 overflow-hidden font-['Plus_Jakarta_Sans']">
//       {/* Visual Accents */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
//       <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
//       <div className="absolute bottom-0 right-0 w-[30%] h-[30%] bg-indigo-600/5 blur-[100px] rounded-full" />

//       <div className="container mx-auto px-6 lg:px-12 relative z-10">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
          
//           {/* Brand Column - Wider Span */}
//           <div className="lg:col-span-4 space-y-8">
//             <Link to="/" className="inline-block group">
//               <div className="flex items-center gap-4">
//                 <div className="p-2 bg-white/5 rounded-2xl border border-white/10 group-hover:border-blue-500/50 transition-colors shadow-2xl">
//                   <img src={logo} alt="Logo" className="h-10 w-auto" />
//                 </div>
//                 <div className="flex flex-col">
//                   <span className="text-xl font-extrabold tracking-tight text-white group-hover:text-blue-400 transition-colors">
//                     WorldString <span className="text-blue-500">IT</span>
//                   </span>
//                   <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">Solutions</span>
//                 </div>
//               </div>
//             </Link>
            
//             <p className="text-slate-400 text-lg leading-relaxed max-w-sm">
//               Architecting the digital future with bespoke <span className="text-white font-medium">enterprise solutions</span> and world-class IT talent.
//             </p>
            
//             <div className="flex gap-4">
//               {socialLinks.map((social) => (
//                 <motion.a 
//                   key={social.label}
//                   href={social.href}
//                   whileHover={{ y: -5, scale: 1.1 }}
//                   className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-500 transition-all shadow-xl"
//                 >
//                   <social.icon size={20} />
//                 </motion.a>
//               ))}
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div className="lg:col-span-2">
//             <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-8 flex items-center gap-2">
//               <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
//               Quick Links
//             </h4>
//             <ul className="space-y-4">
//               {quickLinks.map((link) => (
//                 <li key={link.name}>
//                   <Link to={link.href} className="text-slate-400 hover:text-white flex items-center gap-2 group transition-colors">
//                     <ArrowRight className="w-3 h-3 text-blue-500 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Services */}
//           <div className="lg:col-span-3" id="footer-services">
//           <div className="lg:col-span-3">
//             <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-8 flex items-center gap-2">
//               <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
//               Services
//             </h4>
//             <ul className="space-y-6">
//               {serviceLinks.map((link) => (
//                 <li key={link.name}>
//                   <Link to={link.href} className="group block">
//                     <span className="text-slate-200 group-hover:text-blue-400 transition-colors block font-semibold mb-1">
//                       {link.name}
//                     </span>
//                     <span className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors">
//                       {link.desc}
//                     </span>
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact - The "Value" Column */}
//           <div className="lg:col-span-3">
//             <div className="p-6 rounded-[2rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10 shadow-2xl relative overflow-hidden group">
//               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
//                 <Globe className="w-20 h-20 text-blue-500" />
//               </div>
              
//               <h4 className="text-white font-bold mb-6 flex items-center gap-2">
//                 Connect Now
//               </h4>
//               <div className="space-y-4 text-sm">
//                 <a href="tel:6605285383" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
//                   <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
//                     <Phone size={14} />
//                   </div>
//                   +1 (660) 528-5383
//                 </a>
//                 <a href="mailto:worldstringitsolutions@gmail.com" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors break-all">
//                   <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400">
//                     <Mail size={14} />
//                   </div>
//                   worldstringitsolutions@gmail.com
//                 </a>
//               </div>

//               <div className="mt-8 pt-6 border-t border-white/5">
//                  <p className="text-[10px] text-slate-500 uppercase tracking-tighter mb-2">Operation Hours</p>
//                  <div className="flex justify-between items-center">
//                     <span className="text-xs font-medium text-slate-300">Mon — Sat</span>
//                     <span className="text-xs font-bold text-blue-400">9AM — 5PM</span>
//                  </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
//           <p className="text-slate-500 text-xs">
//             © {new Date().getFullYear()} WorldString IT Solutions. Proudly serving Global Enterprises.
//           </p>
//           <div className="flex items-center gap-6 text-xs text-slate-500">
//             <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
//             <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };



import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  Home,
  Briefcase,
  Users,
  FileText,
  Linkedin,
  Instagram,
  ArrowRight,
  Globe,
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/favicon.svg";

const quickLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: Users },
  { name: "Careers", href: "/careers", icon: Briefcase },
  { name: "Contact", href: "/contact", icon: FileText },
];

const serviceLinks = [
  { name: "IT Staffing", href: "/it-services/it-staffing", desc: "Contract & permanent talent" },
  { name: "IT Solutions", href: "/it-services/it-solutions", desc: "Cloud & development" },
  { name: "Federal", href: "/who-we-serve/federal", desc: "Government IT services" },
  { name: "GSA MAS", href: "/contracts/gsa-mas", desc: "Federal contracts" },
];

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export const Footer = () => {
  return (
    <footer className="relative bg-[#0a0c10] text-slate-300 pt-20 pb-10 overflow-hidden font-['Plus_Jakarta_Sans']">
      {/* Background accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[30%] h-[30%] bg-indigo-600/5 blur-[100px] rounded-full" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">

          {/* Brand */}
          <div className="lg:col-span-4 space-y-8">
            <Link to="/" className="inline-block group">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-white/5 rounded-2xl border border-white/10 group-hover:border-blue-500/50 transition-colors">
                  <img src={logo} alt="Logo" className="h-10 w-auto" />
                </div>
                <div>
                  <span className="text-xl font-extrabold text-white group-hover:text-blue-400">
                    WorldString <span className="text-blue-500">IT</span>
                  </span>
                  <span className="block text-[10px] uppercase tracking-widest text-slate-500">
                    Solutions
                  </span>
                </div>
              </div>
            </Link>

            <p className="text-slate-400 max-w-sm">
              Architecting the digital future with bespoke enterprise solutions
              and world-class IT talent.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 transition-all"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-8">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="flex items-center gap-2 text-slate-400 hover:text-white">
                    <ArrowRight className="w-3 h-3 text-blue-500" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ✅ SERVICES (SCROLL TARGET) */}
          <div className="lg:col-span-3" id="footer-services">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-8">
              Services
            </h4>
            <ul className="space-y-6">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="group block">
                    <span className="block font-semibold text-slate-200 group-hover:text-blue-400">
                      {link.name}
                    </span>
                    <span className="text-xs text-slate-500">
                      {link.desc}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 relative">
              <Globe className="absolute top-4 right-4 w-16 h-16 text-blue-500/10" />
              <h4 className="text-white font-bold mb-6">Connect Now</h4>

              <div className="space-y-4 text-sm">
                <a href="tel:6605285383" className="flex items-center gap-3 hover:text-white">
                  <Phone size={14} /> +1 (660) 528-5383
                </a>
                <a href="mailto:worldstringitsolutions@gmail.com" className="flex items-center gap-3 hover:text-white break-all">
                  <Mail size={14} /> worldstringitsolutions@gmail.com
                </a>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex justify-between text-xs">
                <span>Mon — Sat</span>
                <span className="text-blue-400 font-bold">9AM — 5PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-white/10 flex justify-between text-xs text-slate-500">
          <p>© {new Date().getFullYear()} WorldString IT Solutions</p>
          <div className="flex gap-4">
            <Link to="#">Privacy Policy</Link>
            <Link to="#">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
