/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { Scissors, Calendar, Coffee, MapPin, Instagram, Phone, User, ArrowRight, CheckCircle2, Quote, X, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.2
    }
  },
  viewport: { once: true }
};

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const testimonials = [
    {
      name: "James Wilson",
      role: "Creative Director",
      quote: "The best fade I've ever had. The attention to detail is unmatched. It's not just a haircut, it's a ritual.",
      avatar: "https://i.pravatar.cc/150?u=james"
    },
    {
      name: "Marcus Chen",
      role: "Tech Entrepreneur",
      quote: "Luxury is an understatement. The atmosphere and the service are top-tier. The cold beer is the perfect touch.",
      avatar: "https://i.pravatar.cc/150?u=marcus"
    },
    {
      name: "David Ross",
      role: "Professional Athlete",
      quote: "Finally a place that understands modern style while keeping the classic barber vibe. My go-to spot in the city.",
      avatar: "https://i.pravatar.cc/150?u=david"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5] selection:bg-gold selection:text-black">
      {/* Booking Dialog */}
      <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
        <DialogContent className="bg-charcoal border-gold/20 text-white sm:max-w-[500px] rounded-none p-0 overflow-hidden">
          <div className="bg-gold h-2 w-full" />
          <div className="p-8">
            <DialogHeader className="mb-8">
              <DialogTitle className="text-3xl font-serif tracking-tight">Reserve Your Session</DialogTitle>
              <DialogDescription className="text-white/50 font-light">
                Select your preferred service and time. Our master barbers will handle the rest.
              </DialogDescription>
            </DialogHeader>
            
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setIsBookingOpen(false); alert("Booking request sent! We will contact you shortly."); }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-[10px] uppercase tracking-widest text-white/40">Service</Label>
                  <Select>
                    <SelectTrigger className="bg-white/5 border-white/10 rounded-none h-12 focus:ring-gold">
                      <SelectValue placeholder="Select Service" />
                    </SelectTrigger>
                    <SelectContent className="bg-charcoal border-white/10 text-white rounded-none">
                      <SelectItem value="signature">Signature Cut ($65)</SelectItem>
                      <SelectItem value="beard">Luxury Beard Trim ($45)</SelectItem>
                      <SelectItem value="shave">Hot Towel Shave ($55)</SelectItem>
                      <SelectItem value="combo">The Executive Combo ($110)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] uppercase tracking-widest text-white/40">Barber</Label>
                  <Select>
                    <SelectTrigger className="bg-white/5 border-white/10 rounded-none h-12 focus:ring-gold">
                      <SelectValue placeholder="Any Barber" />
                    </SelectTrigger>
                    <SelectContent className="bg-charcoal border-white/10 text-white rounded-none">
                      <SelectItem value="alex">Alex (Master)</SelectItem>
                      <SelectItem value="julian">Julian (Senior)</SelectItem>
                      <SelectItem value="victor">Victor (Artisan)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-[10px] uppercase tracking-widest text-white/40">Date</Label>
                  <Input type="date" className="bg-white/5 border-white/10 rounded-none h-12 focus:border-gold" />
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] uppercase tracking-widest text-white/40">Time</Label>
                  <Input type="time" className="bg-white/5 border-white/10 rounded-none h-12 focus:border-gold" />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-[10px] uppercase tracking-widest text-white/40">Full Name</Label>
                <Input placeholder="John Doe" className="bg-white/5 border-white/10 rounded-none h-12 focus:border-gold" />
              </div>

              <Button type="submit" className="w-full bg-gold hover:bg-gold-light text-black rounded-none h-14 text-sm uppercase tracking-[0.2em] font-bold mt-4">
                Confirm Reservation
              </Button>
            </form>
          </div>
        </DialogContent>
      </Dialog>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Scissors className="text-gold w-6 h-6" />
            <span className="font-serif text-xl tracking-widest uppercase">Luxury Barber</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest font-medium">
            <a href="#experience" className="hover:text-gold transition-colors">Experience</a>
            <a href="#brand" className="hover:text-gold transition-colors">The Brand</a>
            <a href="#testimonials" className="hover:text-gold transition-colors">Testimonials</a>
            <a href="#waitlist" className="hover:text-gold transition-colors">Waitlist</a>
            <a href="#location" className="hover:text-gold transition-colors">Location</a>
          </div>
          <Button 
            onClick={() => setIsBookingOpen(true)}
            variant="outline" 
            className="border-gold text-gold hover:bg-gold hover:text-black rounded-none px-6 uppercase tracking-widest text-xs hidden sm:flex"
          >
            Book Now
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop"
            alt="Premium Barber Experience"
            className="w-full h-full object-cover opacity-40 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#0A0A0A]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold uppercase tracking-[0.3em] text-sm font-medium mb-6 block">Est. 2024 — Premium Grooming</span>
            <h1 className="text-5xl md:text-8xl font-serif mb-8 leading-tight tracking-tight">
              Precision Cuts.<br />
              <span className="italic text-gold">Cold Beer.</span><br />
              Good Vibes.
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
              Experience the art of grooming in a sanctuary designed for the modern gentleman. 
              Where tradition meets contemporary luxury.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                onClick={() => setIsBookingOpen(true)}
                className="bg-gold hover:bg-gold-light text-black rounded-none px-10 py-7 text-sm uppercase tracking-[0.2em] font-bold w-full sm:w-auto"
              >
                Book Your Cut
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-none px-10 py-7 text-sm uppercase tracking-[0.2em] w-full sm:w-auto">
                View Services
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">Scroll to explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent" />
        </motion.div>
      </section>

      {/* Three-Step Experience Section */}
      <section id="experience" className="py-32 px-6 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">The Experience</h2>
            <div className="w-20 h-1 bg-gold mx-auto" />
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            {[
              { step: "01", title: "Book", icon: Calendar, desc: "Select your preferred master barber and time through our seamless digital concierge." },
              { step: "02", title: "Consult", icon: Scissors, desc: "A personalized session to understand your style, face shape, and hair texture." },
              { step: "03", title: "Relax", icon: Coffee, desc: "Enjoy a premium beverage and hot towel treatment while we craft your perfect look." }
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeIn} className="relative group">
                <div className="absolute -top-6 -left-4 text-6xl font-serif text-white/5 group-hover:text-gold/10 transition-colors">
                  {item.step}
                </div>
                <div className="bg-white/5 border border-white/10 p-10 hover:border-gold/50 transition-all duration-500 relative z-10">
                  <item.icon className="w-10 h-10 text-gold mb-6" />
                  <h3 className="text-2xl font-serif mb-4 tracking-wide">{item.title}</h3>
                  <p className="text-white/50 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Brand Experience Section */}
      <section id="brand" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-deep-brown/40 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1512690196252-751d0aa16f45?q=80&w=2070&auto=format&fit=crop" 
            alt="Barber Shop Interior" 
            className="w-full h-full object-cover grayscale opacity-30"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeIn}>
              <span className="text-gold uppercase tracking-[0.3em] text-sm font-medium mb-6 block">Our Philosophy</span>
              <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">Beyond the Cut. <br />A Statement of <span className="italic">Class.</span></h2>
              <p className="text-lg text-white/70 mb-8 leading-relaxed font-light">
                At Luxury Barber, we believe grooming is more than a necessity—it's a ritual. Our space is designed to be a sanctuary where men can disconnect from the noise and reconnect with their best selves.
              </p>
              <p className="text-lg text-white/70 mb-10 leading-relaxed font-light">
                Every fade, every shave, and every conversation is handled with the utmost precision and respect for the craft. We don't just cut hair; we curate confidence.
              </p>
              <div className="flex items-center gap-6">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-gold overflow-hidden bg-charcoal">
                      <img src={`https://i.pravatar.cc/150?u=${i}`} alt="Client" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <p className="font-bold text-gold">500+ Premium Clients</p>
                  <p className="text-white/40">Trust our master barbers</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] border-2 border-gold/30 p-4">
                <img 
                  src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2070&auto=format&fit=crop" 
                  alt="Master Barber at work" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-gold text-black p-8 hidden md:block">
                <p className="text-4xl font-serif font-bold">15+</p>
                <p className="text-xs uppercase tracking-widest font-bold">Years of Mastery</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-32 px-6 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-gold uppercase tracking-[0.3em] text-sm font-medium mb-4 block">Client Stories</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Voices of Distinction</h2>
            <div className="w-20 h-1 bg-gold mx-auto" />
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((t, idx) => (
              <motion.div key={idx} variants={fadeIn} className="bg-white/5 border border-white/10 p-10 relative">
                <Quote className="absolute top-6 right-8 w-12 h-12 text-gold/10" />
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-3 h-3 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-lg font-serif italic mb-8 leading-relaxed text-white/80">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-gold/30">
                    <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm tracking-wide">{t.name}</h4>
                    <p className="text-xs text-white/40 uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lead Capture Section */}
      <section id="waitlist" className="py-32 bg-charcoal">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Join the Waitlist</h2>
            <p className="text-white/60 mb-12 font-light">
              Our master barbers are in high demand. Join our exclusive waitlist for walk-in availability and priority booking alerts.
            </p>
            
            <form className="space-y-6 text-left bg-black/30 p-8 md:p-12 border border-white/5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-xs uppercase tracking-widest text-white/40">Full Name</Label>
                  <Input 
                    id="name" 
                    placeholder="John Doe" 
                    className="bg-white/5 border-white/10 rounded-none h-14 focus:border-gold transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-xs uppercase tracking-widest text-white/40">Phone Number</Label>
                  <Input 
                    id="phone" 
                    placeholder="+1 (555) 000-0000" 
                    className="bg-white/5 border-white/10 rounded-none h-14 focus:border-gold transition-colors"
                  />
                </div>
              </div>
              <Button className="w-full bg-gold hover:bg-gold-light text-black rounded-none h-16 text-sm uppercase tracking-[0.2em] font-bold">
                Secure My Spot
              </Button>
              <p className="text-[10px] text-white/30 text-center uppercase tracking-widest">
                By joining, you agree to receive priority alerts via SMS.
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="relative h-[600px] w-full">
        <div className="absolute inset-0 z-0">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019297116704!2d-122.40137518468195!3d37.789304979757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064af79d091%3A0x63181d2837859630!2sUnion%20Square%2C%20San%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1625161000000!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2)' }} 
            allowFullScreen={false} 
            loading="lazy"
            title="Location Map"
          />
        </div>
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-black p-10 border border-gold/30 text-center shadow-2xl backdrop-blur-sm"
          >
            <MapPin className="text-gold w-8 h-8 mx-auto mb-4" />
            <h3 className="text-2xl font-serif mb-2">Visit the Lounge</h3>
            <p className="text-white/60 text-sm font-light mb-6">
              123 Luxury Way, Suite 500<br />
              San Francisco, CA 94108
            </p>
            <div className="space-y-2 text-xs uppercase tracking-widest text-gold font-bold">
              <p>Mon - Fri: 9am - 8pm</p>
              <p>Sat - Sun: 10am - 6pm</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-2">
              <Scissors className="text-gold w-6 h-6" />
              <span className="font-serif text-2xl tracking-widest uppercase">Luxury Barber</span>
            </div>
            <p className="text-white/40 text-sm font-light max-w-xs text-center md:text-left">
              The pinnacle of male grooming. Precision, comfort, and class in every cut.
            </p>
          </div>

          <div className="flex items-center gap-8">
            <a href="#" className="text-white/60 hover:text-gold transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-white/60 hover:text-gold transition-colors">
              <Phone className="w-6 h-6" />
            </a>
            <a href="#" className="text-white/60 hover:text-gold transition-colors">
              <MapPin className="w-6 h-6" />
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/20 mb-2">© 2024 Luxury Barber Lounge</p>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/20">All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
