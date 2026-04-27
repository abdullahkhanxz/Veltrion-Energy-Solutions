/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Sun, 
  Battery, 
  Zap, 
  ShieldCheck, 
  Wrench, 
  Users, 
  Leaf, 
  Cpu, 
  CheckCircle2, 
  Phone, 
  MessageSquare, 
  MapPin, 
  ChevronRight,
  Menu,
  X,
  CreditCard,
  Infinity
} from 'lucide-react';
import { ReactNode, useState } from 'react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Overview', href: '#overview' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#050810]/80 backdrop-blur-md border-b border-white/10 h-16 sm:h-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between h-full items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-yellow-500 flex items-center justify-center rounded-sm font-bold text-black uppercase">
              V
            </div>
            <span className="text-xl font-bold text-white tracking-tighter">
              VELTRION <span className="text-yellow-500">ENERGY</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/60 hover:text-yellow-500 transition-colors uppercase tracking-widest text-[10px]"
              >
                {link.name}
              </a>
            ))}
            <div className="h-4 w-[1px] bg-white/20"></div>
            <a
              href="https://wa.me/923193705752"
              className="text-yellow-500 flex items-center gap-2 font-bold"
            >
              <Phone className="w-4 h-4" />
              0319 3705752
            </a>
            <button className="bg-yellow-500 text-black px-6 py-2 font-bold uppercase text-[10px] tracking-wider hover:bg-yellow-400 transition-colors">
              Get Free Quote
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#050810] border-b border-white/10 px-4 py-8 space-y-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-xl font-bold uppercase tracking-tighter text-white hover:text-yellow-500"
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:03193705752"
            className="flex items-center gap-3 text-yellow-500 text-lg font-bold pt-4 uppercase italic"
          >
            <Phone className="w-6 h-6" />
            0319 3705752
          </a>
        </motion.div>
      )}
    </nav>
  );
};

const SectionHeading = ({ children, subtitle }: { children: ReactNode; subtitle?: string }) => (
  <div className="mb-10 text-left">
    <h4 className="text-yellow-500 uppercase tracking-[0.4em] text-[10px] font-bold mb-3">
      {subtitle || 'Section'}
    </h4>
    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter leading-none">{children}</h2>
  </div>
);

export default function App() {
  return (
    <div className="bg-[#050810] text-slate-200 font-sans selection:bg-yellow-400 selection:text-black" id="home">
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex flex-col pt-16 sm:pt-20 border-b border-white/10">
        <div className="flex flex-col lg:flex-row h-auto lg:h-[450px]">
          {/* Main Hero content */}
          <div className="flex-1 p-8 sm:p-12 lg:p-16 bg-gradient-to-br from-[#0B1120] to-[#201505] flex flex-col justify-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 70% 30%, #EAB308 0%, transparent 40%)' }}></div>
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <h4 className="text-yellow-500 uppercase tracking-[0.4em] text-[10px] font-bold mb-4 italic">Powering Tomorrow</h4>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight tracking-tighter">
                Professional Solar Installation <br />
                <span className="text-yellow-500 italic">Experts You Can Trust</span>
              </h1>
              <div className="flex flex-wrap gap-4">
                <button className="px-10 py-4 bg-yellow-500 text-black font-bold text-xs uppercase tracking-widest hover:bg-yellow-400 transition-all active:scale-95">
                  Call/WhatsApp Now
                </button>
                <div className="px-8 py-4 border border-white/10 bg-white/5 text-white/70 font-medium text-xs flex items-center gap-2 italic uppercase tracking-widest">
                  Multan Region Specialized
                </div>
              </div>
            </motion.div>
          </div>

          {/* Overview / Banner Image */}
          <div className="w-full lg:w-112 border-l border-white/10 p-10 bg-[#0A0F1A] flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-yellow-500 font-bold mb-4 uppercase text-[10px] tracking-[0.4em]">Overview & About Us</h3>
              <p className="text-xl md:text-2xl font-bold text-white leading-tight mb-6 tracking-tight italic">
                Clean solar energy, big bill savings, and a greener Pakistan starts here.
              </p>
              <p className="text-sm text-white/50 leading-relaxed font-medium">
                Veltrion Energy Solutions is a trusted solar company in Multan providing high-quality installations with advanced technology and full customer support.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-[#050810] py-12 px-6 border-b border-white/10" id="services">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-center text-[10px] uppercase tracking-[0.5em] text-white/30 mb-10">Our Premium Services</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { id: '01', title: 'Residential Solar' },
              { id: '02', title: 'Commercial Solar' },
              { id: '03', title: 'Industrial Solar' },
              { id: '04', title: 'Net Metering' },
              { id: '05', title: 'Hybrid Systems' },
              { id: '06', title: 'Off-Grid Energy' },
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="p-6 border border-white/5 bg-white/5 text-center group hover:border-yellow-500/50 transition-all cursor-default"
              >
                <div className="text-yellow-500 mb-3 font-bold text-2xl tracking-tighter group-hover:scale-110 transition-transform">{service.id}</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-white/80 leading-tight">{service.title}</div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-[9px] text-white/30 uppercase tracking-[0.5em]">Full installation + after-sales service & maintenance</p>
          </div>
        </div>
      </section>

      {/* Why / Benefits / Contact Grid */}
      <section className="grid lg:grid-cols-3 border-b border-white/10 h-auto">
        {/* Why Choose Us */}
        <div className="p-10 border-r border-white/10 bg-[#080D1A] flex flex-col">
          <h4 className="text-yellow-500 font-bold text-[10px] uppercase tracking-[0.4em] mb-8">Why Choose Us</h4>
          <ul className="space-y-5 flex-1">
            {[
              'Expert Engineering', 
              'Reliable Solutions', 
              'Quality Installation', 
              'After-Sales Service', 
              'Experienced Team', 
              'Tier-1 Components'
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-white/90">
                <div className="w-2 h-2 bg-yellow-500 rotate-45 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* System Benefits */}
        <div className="p-10 border-r border-white/10 bg-[#0A0F20] flex flex-col">
          <h4 className="text-yellow-500 font-bold text-[10px] uppercase tracking-[0.4em] mb-8">System Benefits</h4>
          <ul className="space-y-5 flex-1">
            {[
              'Reduce Monthly Bills', 
              'Eco-Friendly Living', 
              'Energy Independence', 
              'Net Metering Support', 
              'Long Warranty', 
              '24/7 Priority Support'
            ].map((benefit, i) => (
              <li key={i} className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-white/90">
                <div className="w-5 h-5 bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center text-[10px] text-yellow-500 shrink-0">✓</div>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Form */}
        <div className="p-10 bg-[#0B1124]" id="contact">
          <h4 className="text-yellow-500 font-bold text-[10px] uppercase tracking-[0.4em] mb-8">Quick Inquiry</h4>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <input type="text" placeholder="NAME" className="bg-white/5 border border-white/10 p-3 text-[10px] outline-none focus:border-yellow-500 text-white font-bold tracking-widest uppercase" />
              <input type="text" placeholder="PHONE" className="bg-white/5 border border-white/10 p-3 text-[10px] outline-none focus:border-yellow-500 text-white font-bold tracking-widest uppercase" />
            </div>
            <textarea placeholder="PROJECT DETAILS" className="w-full h-24 bg-white/5 border border-white/10 p-3 text-[10px] outline-none focus:border-yellow-500 resize-none text-white font-bold tracking-widest uppercase"></textarea>
            <div className="flex justify-between items-center pt-4">
              <div className="text-[9px] text-white/40 uppercase tracking-widest leading-relaxed">
                <p>Multan Main Office</p>
                <p>WhatsApp: 0319 3705752</p>
              </div>
              <button className="bg-yellow-500 text-black px-8 py-3 font-bold text-[10px] uppercase tracking-widest hover:bg-yellow-400 transition-all">Submit</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Decor */}
      <div className="h-2 bg-yellow-500"></div>
    </div>
  );
}

