import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  User,
  AtSign,
  FileText,
  Layers,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FloatingOrb } from "@/components/ui/animated-background";
import { navigationItems } from "@/data/navigation";

/* ================= LEFT SIDE CONFIG (UNCHANGED COLORS) ================= */

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
    value: "info@worldstringitsolutions.com",
    href: "mailto:info@worldstringitsolutions.com",
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

/* ================= COMPONENT ================= */

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    serviceType: "",
    subService: "",
    message: "",
  });

  const selectedService = useMemo(
    () =>
      navigationItems.find(
        (item) => item.name === formData.serviceType
      ),
    [formData.serviceType]
  );

  const subServices = selectedService?.subItems ?? [];

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const subject = `Contact from ${formData.name}`;
  
  const body = `
Name: ${formData.name}
Email: ${formData.email}
Service: ${formData.serviceType}
Sub Service: ${formData.subService}

Message:
${formData.message}
  `;

  const mailtoLink = `mailto:info@worldstringitsolutions.com?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoLink;
};


  return (
    <section className="py-8 md:py-8 lg:py-8 relative overflow-hidden bg-slate-50/50">
      <FloatingOrb className="top-0 left-0 bg-primary/10" size="xl" />
      <FloatingOrb className="bottom-0 right-0 bg-accent/10" size="lg" />

      <div className="container mx-auto px-4 relative z-10">
        {/* HEADER */}
        <div className="text-center mb-16">
          <motion.span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-primary/10 shadow-sm text-primary font-medium text-sm mb-4">
            <Sparkles className="w-4 h-4 text-amber-400" />
            Get in Touch
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Send Us a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Message
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* ================= LEFT SIDE ================= */}
          <div className="lg:col-span-4 space-y-4">
            {contactCards.map((card, i) => (
              <motion.a
                key={i}
                href={card.href}
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center shadow-lg`}
                >
                  <card.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">{card.label}</h4>
                  <p className="text-primary text-xs font-medium">
                    {card.value}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {card.desc}
                  </p>
                </div>
              </motion.a>
            ))}

            {/* BUSINESS HOURS */}
            <div className="p-6 rounded-3xl bg-slate-900 text-white shadow-xl mt-6">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-400" />
                Business Hours
              </h3>
              <div className="space-y-3">
                {businessHours.map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between text-sm border-b border-white/10 pb-2"
                  >
                    <span className="text-slate-400">{item.day}</span>
                    <span className="font-medium">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ================= RIGHT FORM ================= */}
          <motion.div className="lg:col-span-8 bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl shadow-blue-500/5 border border-slate-100">
            <h3 className="text-2xl font-bold mb-8">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <Input
                    placeholder="Full Name"
                    className="h-14 pl-12 rounded-2xl bg-slate-50/50"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                <div className="relative">
                  <AtSign className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    className="h-14 pl-12 rounded-2xl bg-slate-50/50"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
              </div>

              {/* SERVICE TYPE */}
              <div className="relative">
                <Layers className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <select
                  className="h-14 w-full pl-12 pr-10 rounded-2xl border border-slate-200 bg-slate-50/50 appearance-none cursor-pointer"
                  value={formData.serviceType}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      serviceType: e.target.value,
                      subService: "",
                    })
                  }
                  required
                >
                  <option value="">Select Service Type</option>
                  {navigationItems.map((item) => (
                    <option key={item.name} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400  pointer-events-none" />
              </div>

              {/* SUB SERVICE */}
              <div className="relative">
                <FileText className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <select
                  className="h-14 w-full pl-12 pr-10 rounded-2xl border border-slate-200 bg-slate-50/50 appearance-none cursor-pointer"
                  value={formData.subService}
                  onChange={(e) =>
                    setFormData({ ...formData, subService: e.target.value })
                  }
                  disabled={!formData.serviceType || !subServices.length}
                >
                  <option value="">
                    {subServices.length
                      ? "Select Sub Service"
                      : "No services available"}
                  </option>
                  {subServices.map((sub) => (
                    <option key={sub.name} value={sub.name}>
                      {sub.name}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400  pointer-events-none" />
              </div>

              {/* MESSAGE */}
              <div className="relative">
                <FileText className="absolute left-4 top-5 text-slate-400" />
                <Textarea
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="pl-12 pt-4 rounded-2xl bg-slate-50/50"
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              <Button className="w-full h-14 rounded-2xl text-lg font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40">
                <Send className="mr-2" />
                Send Us a Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
