import { useState } from "react";
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
  CheckCircle,
  Sparkles,
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = encodeURIComponent(`Website Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:worldstringitsolutions@gmail.com?subject=${subject}&body=${body}`;

    toast({
      title: "Email ready",
      description: "Please send it from your email app.",
    });

    setIsSubmitting(false);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <FloatingOrb className="top-0 left-0 bg-primary/5" size="xl" delay={0} />
      <FloatingOrb className="bottom-0 right-0 bg-accent/5" size="lg" delay={2} />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-sm mb-6">
            <Sparkles className="w-4 h-4" />
            Get in Touch
          </span>
          <h2 className="text-4xl font-bold mb-4">
            Contact <span className="text-gradient">Us</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Fill out the form below and our team will reach out shortly.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactCards.map((card, i) => (
            <a
              key={i}
              href={card.href}
              className="glass-card p-6 rounded-2xl text-center hover:scale-105 transition"
            >
              <div
                className={`w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center`}
              >
                <card.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold mb-1">{card.label}</h4>
              <p className="text-primary text-sm mb-1 break-all">{card.value}</p>
              <p className="text-xs text-muted-foreground">{card.desc}</p>
            </a>
          ))}
        </div>

        {/* Form + Info */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* FORM */}
          <div className="glass-card p-8 rounded-3xl">
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="relative">
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  placeholder=" "
                  className="peer h-14 pt-6 pl-12 rounded-xl"
                />
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <label
                  htmlFor="name"
                  className="absolute left-12 top-2 text-xs bg-white px-2 transition-all
                  peer-placeholder-shown:top-4
                  peer-placeholder-shown:text-sm
                  peer-focus:top-2
                  peer-focus:text-xs
                  peer-focus:text-primary"
                >
                  Full Name
                </label>
              </div>

              {/* Email */}
              <div className="relative">
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  placeholder=" "
                  className="peer h-14 pt-6 pl-12 rounded-xl"
                />
                <AtSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <label
                  htmlFor="email"
                  className="absolute left-12 top-2 text-xs bg-white px-2 transition-all
                  peer-placeholder-shown:top-4
                  peer-placeholder-shown:text-sm
                  peer-focus:top-2
                  peer-focus:text-xs
                  peer-focus:text-primary"
                >
                  Email Address
                </label>
              </div>

              {/* Message */}
              <div className="relative">
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  placeholder=" "
                  rows={5}
                  className="peer pt-8 pl-12 rounded-xl resize-none"
                />
                <FileText className="absolute left-4 top-5 w-5 h-5 text-muted-foreground" />
                <label
                  htmlFor="message"
                  className="absolute left-12 top-2 text-xs bg-white px-2 transition-all
                  peer-placeholder-shown:top-6
                  peer-placeholder-shown:text-sm
                  peer-focus:top-2
                  peer-focus:text-xs
                  peer-focus:text-primary"
                >
                  Your Message
                </label>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 text-lg font-bold rounded-xl"
              >
                <Send className="mr-2 w-5 h-5" />
                Send Message
              </Button>
            </form>
          </div>

          {/* HOURS */}
          <div className="glass-card p-8 rounded-3xl">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              Business Hours
            </h3>

            <div className="space-y-3">
              {businessHours.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center p-4 rounded-xl bg-white/50"
                >
                  <span className="flex items-center gap-2">
                    {item.open ? (
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <span className="w-4 h-4 rounded-full bg-red-400" />
                    )}
                    {item.day}
                  </span>
                  <span className="font-bold">{item.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
