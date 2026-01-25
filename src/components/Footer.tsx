import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, ArrowUp, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/favicon.svg";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

const serviceLinks = [
  { name: "IT Staffing", href: "/it-services/it-staffing" },
  { name: "IT Solutions", href: "/it-services/it-solutions" },
  { name: "Federal", href: "/who-we-serve/federal" },
  { name: "GSA MAS", href: "/contracts/gsa-mas" },
];

export const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-secondary/50 border-t border-border">
      <motion.button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-button hover:bg-primary/90 transition-all duration-300"
        aria-label="Scroll to top"
      >
        <ArrowUp className="text-primary-foreground" size={24} />
      </motion.button>

      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="WorldString Logo" className="h-10 w-auto" />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-foreground">
                  WorldString<span className="text-primary">IT</span>
                </span>
                <span className="text-xs text-muted-foreground">Solutions</span>
              </div>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Empowering businesses with cutting-edge technology solutions and strategic IT consulting.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-foreground font-semibold mb-6">Services</h4>
            <ul className="space-y-4">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-foreground font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex gap-3">
                <MapPin className="text-primary shrink-0 w-5 h-5" /> 
                <span>14011 Levy Ln, Pflugerville, TX 78660</span>
              </li>
              <li className="flex gap-3">
                <Phone className="text-primary shrink-0 w-5 h-5" /> 
                <span>660-528-5383</span>
              </li>
              <li className="flex gap-3">
                <Mail className="text-primary shrink-0 w-5 h-5" /> 
                <span className="break-all">worldstringitsolutions@gmail.com</span>
              </li>
            </ul>
            
            {/* Business Hours */}
            <div className="mt-6">
              <h5 className="text-foreground font-semibold mb-3 flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                Business Hours
              </h5>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li className="flex justify-between">
                  <span>Mon – Fri</span>
                  <span className="text-primary">9:00 AM – 5:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-primary">9:00 AM – 5:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-destructive">Closed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider & Copyright */}
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
