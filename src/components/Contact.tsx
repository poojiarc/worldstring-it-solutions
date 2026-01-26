import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Phone, Mail, MapPin, Clock, Send, 
  MessageSquare, User, AtSign, FileText,
  CheckCircle, Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { FloatingOrb } from "@/components/ui/animated-background";

const contactCards = [
  {
    icon: Phone,
    label: "Direct Support",
    value: "660-528-5383",
    href: "tel:6605285383",
    desc: "Call us for immediate assistance",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "worldstringitsolutions@gmail.com",
    href: "mailto:worldstringitsolutions@gmail.com",
    desc: "We respond within 24 hours",
    color: "from-primary to-accent",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "14011 Levy Ln, Pflugerville, TX 78660",
    href: "https://www.google.com/maps/search/?api=1&query=14011+Levy+Ln,+Pflugerville,+TX+78660",
    desc: "Our headquarters location",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: MessageSquare,
    label: "Live Chat",
    value: "Available 24/7",
    href: "#",
    desc: "Connect with our support team",
    color: "from-violet-500 to-purple-500",
  },
];

const businessHours = [
  { day: "Monday – Friday", hours: "9:00 AM – 5:00 PM", open: true },
  { day: "Saturday", hours: "9:00 AM – 5:00 PM", open: true },
  { day: "Sunday", hours: "Closed", open: false },
];

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = encodeURIComponent(`Website Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:worldstringitsolutions@gmail.com?subject=${subject}&body=${body}`;

    toast({
      title: "Opening email client...",
      description: "Your message details have been prepared.",
    });

    setTimeout(() => {
      window.location.href = mailtoUrl;
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
      
      toast({
        title: "Message prepared!",
        description: "Please send the email from your email client.",
      });
    }, 500);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative overflow-hidden bg-gradient-to-b from-background via-secondary/10 to-background">
      {/* Background Effects */}
      <FloatingOrb className="top-0 left-0 bg-primary/5" size="xl" delay={0} />
      <FloatingOrb className="bottom-0 right-0 bg-accent/5" size="lg" delay={2} />
      
      <div className="absolute inset-0 mesh-bg opacity-20" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-sm uppercase tracking-wider mb-6"
          >
            <Sparkles className="w-4 h-4 animate-pulse" />
            Get in Touch
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Contact <span className="text-gradient">Us</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Ready to transform your business? We'd love to hear from you. 
            Fill out the form below and our team will get back to you shortly.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16">
          {contactCards.map((card, index) => (
            <motion.a
              key={index}
              href={card.href}
              target={card.href.startsWith("http") ? "_blank" : undefined}
              rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-card p-6 rounded-2xl group cursor-pointer text-center"
            >
              <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                <card.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-foreground mb-1">{card.label}</h4>
              <p className="text-primary font-medium text-sm mb-2 break-all">{card.value}</p>
              <p className="text-xs text-muted-foreground">{card.desc}</p>
            </motion.a>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form - Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 lg:p-10 rounded-3xl relative overflow-hidden"
          >
            {/* Top gradient accent */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-accent to-primary" />
            
            <h3 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Send className="w-5 h-5 text-primary" />
              </div>
              Send Us a Message
            </h3>
            <p className="text-muted-foreground mb-8">We'll get back to you within 24 hours.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="relative">
                <label
                  htmlFor="name"
                  className={`absolute left-12 transition-all duration-300 pointer-events-none ${
                    focusedField === 'name' || formData.name 
                      ? '-top-2.5 text-xs text-primary bg-white px-2' 
                      : 'top-3.5 text-muted-foreground'
                  }`}
                >
                  Full Name
                </label>
                <div className="relative">
                  <User className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${focusedField === 'name' ? 'text-primary' : 'text-muted-foreground'}`} />
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="pl-12 h-14 rounded-xl bg-white border-2 border-border/50 focus:border-primary transition-all"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="relative">
                <label
                  htmlFor="email"
                  className={`absolute left-12 transition-all duration-300 pointer-events-none ${
                    focusedField === 'email' || formData.email 
                      ? '-top-2.5 text-xs text-primary bg-white px-2' 
                      : 'top-3.5 text-muted-foreground'
                  }`}
                >
                  Email Address
                </label>
                <div className="relative">
                  <AtSign className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${focusedField === 'email' ? 'text-primary' : 'text-muted-foreground'}`} />
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="pl-12 h-14 rounded-xl bg-white border-2 border-border/50 focus:border-primary transition-all"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="relative">
                <label
                  htmlFor="message"
                  className={`absolute left-12 transition-all duration-300 pointer-events-none ${
                    focusedField === 'message' || formData.message 
                      ? '-top-2.5 text-xs text-primary bg-white px-2 z-10' 
                      : 'top-4 text-muted-foreground'
                  }`}
                >
                  Your Message
                </label>
                <div className="relative">
                  <FileText className={`absolute left-4 top-4 w-5 h-5 transition-colors ${focusedField === 'message' ? 'text-primary' : 'text-muted-foreground'}`} />
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows={5}
                    className="pl-12 pt-4 rounded-xl bg-white border-2 border-border/50 focus:border-primary transition-all resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-premium h-14 text-white font-bold rounded-xl text-lg group"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Preparing...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message
                      <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                  )}
                </Button>
              </motion.div>
            </form>
          </motion.div>

          {/* Contact Info & Hours */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Map Background Card */}
            <div className="glass-card p-8 rounded-3xl relative overflow-hidden h-[280px]">
              {/* Simulated map background */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/50 to-primary/10 opacity-50" />
              <div 
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23007bff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />
              
              <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
                <div className="w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center mb-4 animate-float">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-bold text-lg text-foreground mb-2">Our Headquarters</h4>
                <p className="text-muted-foreground">14011 Levy Ln</p>
                <p className="text-muted-foreground">Pflugerville, TX 78660</p>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=14011+Levy+Ln,+Pflugerville,+TX+78660"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-primary font-semibold text-sm hover:underline flex items-center gap-1"
                >
                  Get Directions →
                </a>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="glass-card p-8 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Business Hours</h3>
                  <p className="text-sm text-muted-foreground">When we're available</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {businessHours.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex justify-between items-center py-3 px-4 rounded-xl bg-white/50 border border-border/30"
                  >
                    <span className="text-foreground font-medium flex items-center gap-2">
                      {item.open ? (
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                      ) : (
                        <div className="w-4 h-4 rounded-full bg-destructive/20" />
                      )}
                      {item.day}
                    </span>
                    <span className={`font-bold ${item.open ? "text-primary" : "text-destructive"}`}>
                      {item.hours}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};