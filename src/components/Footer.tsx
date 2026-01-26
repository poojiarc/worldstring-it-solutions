import { motion } from "framer-motion";
import { 
  Phone, Mail, MapPin, Clock, 
  Home, Briefcase, Server, Users, FileText,
  Instagram, Linkedin, Twitter, Facebook,
  ArrowRight, Sparkles
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/favicon.svg";

const quickLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "Services", href: "/services", icon: Server },
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
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-secondary/30 to-secondary/60 border-t border-border/50 overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      {/* Background mesh */}
      <div className="absolute inset-0 mesh-bg opacity-20 pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <img src={logo} alt="WorldString Logo" className="h-12 w-auto group-hover:scale-105 transition-transform" />
                <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-foreground">
                  WorldString<span className="text-gradient">IT</span>
                </span>
                <span className="text-xs text-muted-foreground">Solutions</span>
              </div>
            </Link>
            
            <p className="text-muted-foreground leading-relaxed">
              Empowering businesses with cutting-edge technology solutions and strategic IT consulting for the modern enterprise.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a 
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl bg-white border border-border/50 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary hover:shadow-lg transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon size={18} className="group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-bold text-lg mb-6 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-all duration-300 group"
                  >
                    <link.icon className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                    <span className="link-underline">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-foreground font-bold text-lg mb-6 flex items-center gap-2">
              <Server className="w-4 h-4 text-primary" />
              Services
            </h4>
            <ul className="space-y-4">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="group block"
                  >
                    <span className="flex items-center gap-2 text-muted-foreground group-hover:text-primary transition-colors font-medium">
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                      {link.name}
                    </span>
                    <span className="text-xs text-muted-foreground/70 ml-0 group-hover:ml-5 transition-all">
                      {link.desc}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-foreground font-bold text-lg mb-6 flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              Contact Info
            </h4>
            <ul className="space-y-4 text-muted-foreground">
              <li>
                <a href="https://maps.google.com" className="flex gap-3 group hover:text-primary transition-colors">
                  <MapPin className="text-primary shrink-0 w-5 h-5 group-hover:scale-110 transition-transform" /> 
                  <span>14011 Levy Ln, Pflugerville, TX 78660</span>
                </a>
              </li>
              <li>
                <a href="tel:6605285383" className="flex gap-3 group hover:text-primary transition-colors">
                  <Phone className="text-primary shrink-0 w-5 h-5 group-hover:scale-110 transition-transform" /> 
                  <span>660-528-5383</span>
                </a>
              </li>
              <li>
                <a href="mailto:worldstringitsolutions@gmail.com" className="flex gap-3 group hover:text-primary transition-colors">
                  <Mail className="text-primary shrink-0 w-5 h-5 group-hover:scale-110 transition-transform" /> 
                  <span className="break-all">worldstringitsolutions@gmail.com</span>
                </a>
              </li>
            </ul>
            
            {/* Business Hours Card */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-6 p-4 rounded-2xl bg-white/50 border border-border/50 shadow-sm"
            >
              <h5 className="text-foreground font-semibold mb-3 flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-primary" />
                Business Hours
              </h5>
              <ul className="space-y-1.5 text-xs text-muted-foreground">
                <li className="flex justify-between">
                  <span>Mon – Fri</span>
                  <span className="text-primary font-medium">9:00 AM – 5:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-primary font-medium">9:00 AM – 5:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-destructive font-medium">Closed</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-border/50 pt-8 relative">
          {/* Gradient separator */}
          <div className="absolute -top-px left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              © {new Date().getFullYear()} WorldString IT Solutions. All rights reserved.
            </p>
            <p className="text-muted-foreground text-xs flex items-center gap-2">
              <Sparkles className="w-3 h-3 text-primary" />
              Enterprise IT Solutions for a Connected World
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};