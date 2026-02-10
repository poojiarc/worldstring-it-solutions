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
  Server,
  Shield,
  Cloud,
  Brain,
  Link2,
  Layers,
  PhoneCall,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/favicon.svg";

const quickLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: Users },
  { name: "Services", href: "/services", icon: Server },
  { name: "Careers", href: "/careers", icon: Briefcase },
  { name: "Contact", href: "/contact", icon: FileText },
];

const serviceLinks = [
  { name: "IT Staffing", href: "/it-services/it-staffing", icon: Users, desc: "Contract & permanent talent" },
  { name: "IT Solutions", href: "/it-services/it-solutions", icon: Server, desc: "Cloud & development" },
  { name: "Cyber Security", href: "/services/cyber-security", icon: Shield, desc: "Enterprise protection" },
  { name: "Cloud Solutions", href: "/services/cloud-solutions", icon: Cloud, desc: "AWS, Azure & GCP" },
  { name: "AI & Innovation", href: "/services/ai-innovation-lab", icon: Brain, desc: "ML & AI solutions" },
];

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleHomeClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-secondary/30 to-secondary/60 border-t border-border/50 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 py-16 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">

          {/* Brand */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="flex items-center gap-4">
              <img src={logo} alt="WorldString IT Solutions" className="h-10 w-auto" />
              <div>
                <span className="text-xl font-extrabold text-foreground">
                  WorldString <span className="text-blue-600">IT</span>
                </span>
                <span className="block text-xs uppercase tracking-widest text-muted-foreground">
                  Solutions
                </span>
              </div>
            </Link>

            <p className="text-muted-foreground max-w-sm">
              Architecting the digital future with bespoke enterprise solutions and world-class IT talent.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ y: -4, scale: 1.1 }}
                  className="w-10 h-10 rounded-full bg-white border border-border/50 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-foreground font-bold text-sm uppercase tracking-widest mb-6 flex items-center gap-2">
              <Link2 className="w-4 h-4 text-blue-600" />
              Quick Links
            </h4>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {link.name === "Home" ? (
                    <button
                      onClick={handleHomeClick}
                      className="flex items-center gap-3 text-muted-foreground hover:text-blue-600 transition-colors"
                    >
                      <link.icon className="w-4 h-4 text-blue-600" />
                      {link.name}
                    </button>
                  ) : (
                    <Link
                      to={link.href}
                      className="flex items-center gap-3 text-muted-foreground hover:text-blue-600 transition-colors"
                    >
                      <link.icon className="w-4 h-4 text-blue-600" />
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-foreground font-bold text-sm uppercase tracking-widest mb-6 flex items-center gap-2">
              <Layers className="w-4 h-4 text-blue-600" />
              Services
            </h4>

            <ul className="space-y-4">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="flex items-start gap-3">
                    <link.icon className="w-4 h-4 mt-1 text-blue-600" />
                    <div>
                      <span className="block font-medium">{link.name}</span>
                      <span className="text-xs text-muted-foreground">{link.desc}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ✅ CONNECT NOW (WIDTH FIXED) */}
          <div className="lg:col-span-3">
            <div className="p-6 rounded-2xl bg-white/70 border border-border/50 w-full lg:min-w-[340px]">
              <h4 className="text-foreground font-bold mb-6 flex items-center gap-2">
                <PhoneCall className="w-5 h-5 text-blue-600" />
                Connect Now
              </h4>

              <div className="space-y-4 text-sm text-muted-foreground">
                <a href="tel:6605285383" className="flex items-center gap-3 hover:text-blue-600">
                  <Phone size={14} /> +1 (660) 528-5383
                </a>

                {/* EMAIL — ONE LINE */}
                <a
                  href="mailto:worldstringitsolutions@gmail.com"
                  className="flex items-center gap-3 hover:text-blue-600 whitespace-nowrap"
                >
                  <Mail size={14} />
                  worldstringitsolutions@gmail.com
                </a>
              </div>

              <div className="mt-6 pt-4 border-t border-border/50 flex justify-between text-xs">
                <span>Mon — Sat</span>
                <span className="text-blue-600 font-semibold">9AM — 5PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-border/50 text-center text-sm text-muted-foreground">
          © 2026 WorldString IT Solutions. All rights reserved.
          <div className="mt-2 flex justify-center gap-6">
            <Link to="#" className="hover:text-blue-600">Privacy Policy</Link>
            <Link to="#" className="hover:text-blue-600">Terms</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
