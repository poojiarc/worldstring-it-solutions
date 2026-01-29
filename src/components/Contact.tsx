import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone, Mail, MapPin, Clock, Send, MessageSquare,
  User, AtSign, FileText, CheckCircle, Sparkles
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
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // ... (Your existing mailto logic)
    setIsSubmitting(false);
  };

  return (
    <section className="py-12 md:py-20 lg:py-28 relative overflow-hidden bg-slate-50/50">
      <FloatingOrb className="top-0 left-0 bg-primary/10" size="xl" delay={0} />
      <FloatingOrb className="bottom-0 right-0 bg-accent/10" size="lg" delay={2} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-primary/10 shadow-sm text-primary font-medium text-sm mb-4"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            Get in Touch
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Let's Start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Conversation</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base md:text-lg">
            Whether you have a question or just want to say hi, our team is ready to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Contact Info Side */}
          <div className="lg:col-span-4 space-y-4 order-2 lg:order-1">
            {contactCards.map((card, i) => (
              <motion.a
                key={i}
                href={card.href}
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/20`}>
                  <card.icon className="w-5 h-5 text-white" />
                </div>
                <div className="overflow-hidden">
                  <h4 className="font-bold text-sm">{card.label}</h4>
                  <p className="text-primary text-xs truncate font-medium">{card.value}</p>
                </div>
              </motion.a>
            ))}

            {/* Business Hours Card */}
            <div className="p-6 rounded-3xl bg-slate-900 text-white shadow-xl mt-8">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-400" />
                Business Hours
              </h3>
              <div className="space-y-3">
                {businessHours.map((item, i) => (
                  <div key={i} className="flex justify-between text-sm border-b border-white/10 pb-2">
                    <span className="text-slate-400">{item.day}</span>
                    <span className="font-medium">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* FORM SIDE */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:col-span-8 bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl shadow-blue-500/5 border border-slate-100 order-1 lg:order-2"
          >
            <h3 className="text-2xl font-bold mb-8">Send Us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                {/* Name */}
                <div className="group relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-primary transition-colors" />
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    placeholder="Full Name"
                    className="h-14 pl-12 rounded-2xl border-slate-200 focus:ring-4 focus:ring-primary/10 transition-all bg-slate-50/50"
                  />
                </div>

                {/* Email */}
                <div className="group relative">
                  <AtSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-primary transition-colors" />
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    placeholder="Email Address"
                    className="h-14 pl-12 rounded-2xl border-slate-200 focus:ring-4 focus:ring-primary/10 transition-all bg-slate-50/50"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="group relative">
                <FileText className="absolute left-4 top-5 w-5 h-5 text-slate-400 group-focus-within:text-primary transition-colors" />
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  placeholder="Tell us about your project..."
                  rows={5}
                  className="pl-12 pt-4 rounded-2xl border-slate-200 focus:ring-4 focus:ring-primary/10 transition-all bg-slate-50/50 resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 text-lg font-bold rounded-2xl shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">Processing...</span>
                ) : (
                  <>
                    <Send className="mr-2 w-5 h-5" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};