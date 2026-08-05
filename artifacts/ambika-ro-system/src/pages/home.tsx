import React from 'react';
import { motion } from 'framer-motion';
import { 
  Droplet, ShieldCheck, Wrench,
  MapPin, Phone, Mail, ChevronRight, ChevronDown, Menu, X
} from 'lucide-react';
import { Button } from '@/components/ui/button';

// Asset Imports
import heroImg from '@assets/hero.jpg';
import commercial1 from '@assets/download_1785901665028.jpg';
import commercial2 from '@assets/download_(1)_1785901665027.jpg';

// Industrial — DM Plants
import dmPlantSmall from '@assets/WhatsApp_Image_2026-08-03_at_10.13.02_AM_1785901872519.jpeg';
import dmPlantLarge from '@assets/WhatsApp_Image_2026-08-03_at_10.14.36_AM_(1)_1785902294542.jpeg';

// Industrial — Softeners
import softener from '@assets/WhatsApp_Image_2026-08-03_at_10.13.43_AM_1785902220033.jpeg';
import softenerBag from '@assets/Screenshot_(202)_1785902151562.png';
import industrial1 from '@assets/industrial-1.jpg';
import industrial2 from '@assets/industrial-2.jpg';

// Real product images — Domestic
import lexzonRed from '@assets/Gemini_Generated_Image_4knxny4knxny4knx_1785820122053.png';
import lexzonBlue from '@assets/Gemini_Generated_Image_m2byqwm2byqwm2by-ezremove_1785820122054.png';
import romaBlack from '@assets/WhatsApp_Image_2025-08-09_at_21.29.56_f29baa99_1785820122055.jpg';
import romaCherry from '@assets/WhatsApp_Image_2025-08-09_at_21.29.57_7ee5dd89_1785820122055.jpg';
import romaBlue from '@assets/WhatsApp_Image_2025-08-09_at_21.29.57_36f9a98d_1785820122055.jpg';
import romaWhite from '@assets/WhatsApp_Image_2025-08-09_at_21.29.57_c9239d05_1785820122056.jpg';
import marsBlue from '@assets/WhatsApp_Image_2025-08-09_at_21.29.58_29d4ae02_1785820122056.jpg';
import marsCherry from '@assets/WhatsApp_Image_2025-08-09_at_21.29.58_e7c7de67_1785820122056.jpg';
import marsGrey from '@assets/WhatsApp_Image_2025-08-09_at_21.29.59_c19d44ff_1785820122056.jpg';
import v5Grey from '@assets/WhatsApp_Image_2025-09-16_at_19.07.01_f4683566_1785820122057.jpg';
import v5Rose from '@assets/WhatsApp_Image_2025-09-16_at_19.07.02_71fa1502_1785820122057.jpg';
import v5Blue from '@assets/WhatsApp_Image_2025-09-16_at_19.07.02_e2f8b00c_1785820122057.jpg';

// Aqua Nine Series
import nineN901 from '@assets/WhatsApp_Image_2026-07-29_at_3.11.17_PM_(1)_1785820299805.jpeg';
import nineCatalog from '@assets/WhatsApp_Image_2026-07-29_at_3.11.17_PM_1785820308560.jpeg';
import nineN301 from '@assets/WhatsApp_Image_2026-07-29_at_3.11.18_PM_(1)_1785820308560.jpeg';
import nineN302 from '@assets/WhatsApp_Image_2026-07-29_at_3.11.18_PM_1785820308560.jpeg';

// Dolphin Series
import dolphinGold from '@assets/WhatsApp_Image_2026-08-03_at_10.09.15_AM_1785820315792.jpeg';
import dolphinMetallicMaroon from '@assets/WhatsApp_Image_2026-08-03_at_10.09.16_AM_(1)_1785820315793.jpeg';
import dolphinMetallicBlack from '@assets/WhatsApp_Image_2026-08-03_at_10.09.16_AM_1785820322997.jpeg';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export default function Home() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) { el.scrollIntoView({ behavior: 'smooth' }); }
  };

  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden selection:bg-primary/20">
      
      {/* Navbar */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-background/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('home')}>
            <div className="h-10 w-10 bg-primary rounded-xl flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/20">
              <Droplet className="h-6 w-6" strokeWidth={2.5} />
            </div>
            <div>
              <h1 className={`font-bold text-xl leading-none tracking-tight ${isScrolled ? 'text-foreground' : 'text-white drop-shadow-sm'}`}>
                AMBIKA
              </h1>
              <span className={`text-[10px] font-semibold tracking-widest uppercase ${isScrolled ? 'text-primary' : 'text-white/90 drop-shadow-sm'}`}>
                RO System
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {['Home', 'Products', 'Contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollTo(item.toLowerCase().replace(' ', '-'))}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isScrolled ? 'text-muted-foreground' : 'text-white/90 hover:text-white'
                }`}
                data-testid={`nav-link-${item.toLowerCase().replace(' ', '-')}`}
              >
                {item}
              </button>
            ))}
            <Button 
              className={!isScrolled ? 'bg-white text-primary hover:bg-white/90' : ''} 
              onClick={() => scrollTo('contact')}
              data-testid="nav-cta"
            >
              Get Quote
            </Button>
          </nav>

          <button 
            className={`md:hidden p-2 ${isScrolled ? 'text-foreground' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg pt-24 px-6 md:hidden flex flex-col gap-6">
          {['Home', 'Products', 'Contact'].map((item) => (
            <button 
              key={item}
              onClick={() => scrollTo(item.toLowerCase().replace(' ', '-'))}
              className="text-2xl font-semibold text-left text-foreground"
            >
              {item}
            </button>
          ))}
          <div className="mt-8">
            <Button size="lg" className="w-full text-lg" onClick={() => scrollTo('contact')}>
              Get Quote
            </Button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="Modern Water Treatment Facility" 
            className="w-full h-full object-cover scale-105"
            style={{ filter: 'saturate(1.2) brightness(0.75)' }}
          />
          {/* Multi-layer gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/65 to-slate-900/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/30" />
          {/* Blue water tint overlay */}
          <div className="absolute inset-0 bg-blue-950/20" />
        </div>

        {/* Floating water-drop particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-400/20 backdrop-blur-sm border border-blue-300/20 z-10"
            style={{
              width: `${20 + i * 14}px`,
              height: `${20 + i * 14}px`,
              left: `${8 + i * 11}%`,
              top: `${15 + (i % 4) * 18}%`,
            }}
            animate={{
              y: [0, -18, 0],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 3 + i * 0.6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
        ))}

        {/* Animated water shimmer lines */}
        <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent w-full"
              style={{ top: `${25 + i * 18}%` }}
              animate={{ x: ['-100%', '100%'] }}
              transition={{
                duration: 6 + i * 1.5,
                repeat: Infinity,
                ease: "linear",
                delay: i * 1.2,
              }}
            />
          ))}
        </div>

        {/* Animated wave at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden leading-none pointer-events-none" style={{ height: '120px' }}>
          {/* Wave layer 1 — slower, foreground */}
          <motion.div
            className="absolute bottom-0"
            style={{ width: '200%', height: '120px' }}
            animate={{ x: [0, '-50%'] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          >
            <svg viewBox="0 0 2880 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
              <path d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 C1680,100 1920,20 2160,60 C2400,100 2640,20 2880,60 L2880,120 L0,120 Z" fill="#f8fafc" />
            </svg>
          </motion.div>
          {/* Wave layer 2 — faster, semi-transparent */}
          <motion.div
            className="absolute bottom-0"
            style={{ width: '200%', height: '120px' }}
            animate={{ x: ['-50%', 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
          >
            <svg viewBox="0 0 2880 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
              <path d="M0,80 C360,30 720,110 1080,65 C1440,20 1800,100 2160,65 C2520,30 2760,90 2880,80 L2880,120 L0,120 Z" fill="#f8fafc" fillOpacity="0.45" />
            </svg>
          </motion.div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-20">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-primary-foreground mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-sm font-medium tracking-wide">Purity You Can Trust</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
              Crystal Clear Water,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Absolute Precision.
              </span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
              From sophisticated domestic purifiers to massive industrial plants. We engineer reverse osmosis solutions that deliver uncompromising water quality for every scale.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <Button size="lg" className="h-14 px-8 text-base font-semibold shadow-lg shadow-primary/40" onClick={() => scrollTo('products')} data-testid="hero-cta-products">
                View Our Products
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-base font-semibold text-white border-white/30 hover:bg-white/10 hover:text-white" onClick={() => scrollTo('contact')} data-testid="hero-cta-contact">
                Contact Sales
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll-down indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="absolute bottom-36 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 cursor-pointer"
          onClick={() => scrollTo('products')}
        >
          <span className="text-white/60 text-xs font-semibold tracking-[0.2em] uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-6 w-6 text-cyan-300 drop-shadow-lg" />
          </motion.div>
        </motion.div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center justify-center gap-2 text-primary font-bold tracking-wider uppercase text-sm mb-4">
              <span className="h-px w-8 bg-primary"></span>
              Our Products
              <span className="h-px w-8 bg-primary"></span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              Engineered for Every Scale
            </h2>
            <p className="text-lg text-slate-600">
              Discover our comprehensive range of reverse osmosis systems, designed to deliver exceptional purity and reliability regardless of your capacity requirements.
            </p>
          </motion.div>

          {/* Domestic */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="bg-primary/10 text-primary p-2 rounded-lg"><Droplet className="h-6 w-6" /></span>
              Domestic RO Systems
            </h3>

            {/* Lexzon Series */}
            <div className="mb-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-5 flex items-center gap-2">
                <span className="h-px w-6 bg-primary inline-block"></span>Lexzon Series
              </p>
              <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-6">
                {[
                  { name: "Lexzon BD-ALX-001", desc: "Compact wall-mount purifier in Metallic Cherry Red. LED indicator panel, premium cabinet design.", img: lexzonRed },
                  { name: "Lexzon BD-ALX-101", desc: "Compact wall-mount purifier in Aqua Blue. LED indicator, transparent tank, elegant modern finish.", img: lexzonBlue }
                ].map((product, i) => (
                  <ProductCard key={i} {...product} />
                ))}
              </div>
            </div>

            {/* Aqua Roma Series */}
            <div className="mb-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-5 flex items-center gap-2">
                <span className="h-px w-6 bg-primary inline-block"></span>Aqua Roma Series
              </p>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { name: "Aqua Roma — Black", desc: "Smart LED technology, 100% food-grade ABS plastic. Sleek black finish for modern kitchens.", img: romaBlack },
                  { name: "Aqua Roma — Cherry Silver", desc: "Bold cherry-silver dual-tone cabinet. Ultra purification with mineral retention.", img: romaCherry },
                  { name: "Aqua Roma — Metallic Blue", desc: "Rich metallic blue finish. Best quality filter, ultra purification, retains minerals.", img: romaBlue },
                  { name: "Aqua Roma — White", desc: "Clean white finish with chrome faucet. Smart LED indicators, food-grade ABS body.", img: romaWhite }
                ].map((product, i) => (
                  <ProductCard key={i} {...product} />
                ))}
              </div>
            </div>

            {/* Aqua Mars Series */}
            <div className="mb-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-5 flex items-center gap-2">
                <span className="h-px w-6 bg-primary inline-block"></span>Aqua Mars Series
              </p>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  { name: "Aqua Mars — Blue", desc: "9-litre detachable tank, Nile quality. Modern design with transparent storage tank.", img: marsBlue },
                  { name: "Aqua Mars — Cherry", desc: "9-litre detachable tank in cherry finish. Compact and powerful for everyday home use.", img: marsCherry },
                  { name: "Aqua Mars — Grey", desc: "9-litre detachable tank in slate grey. Minimalist modern design with reliable filtration.", img: marsGrey }
                ].map((product, i) => (
                  <ProductCard key={i} {...product} />
                ))}
              </div>
            </div>

            {/* Aqua V5 Series */}
            <div className="mb-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-5 flex items-center gap-2">
                <span className="h-px w-6 bg-primary inline-block"></span>Aqua V5 Series
              </p>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  { name: "Aqua V5 — Graphite", desc: "Next-gen purification with zinc, copper & alkaline technology. Smart digital panel.", img: v5Grey },
                  { name: "Aqua V5 — Rose", desc: "Premium rose cabinet with zinc, copper & alkaline enrichment. Elegant home companion.", img: v5Rose },
                  { name: "Aqua V5 — Sky Blue", desc: "Sky blue premium finish with advanced alkaline minerals. Next-level hydration at home.", img: v5Blue }
                ].map((product, i) => (
                  <ProductCard key={i} {...product} />
                ))}
              </div>
            </div>

            {/* Aqua Nine Series */}
            <div className="mb-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-5 flex items-center gap-2">
                <span className="h-px w-6 bg-primary inline-block"></span>Aqua Nine Series
              </p>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { name: "Aqua Nine N 901", desc: "Modern design with excellent graphics. Digital display, large 10-litre storage tank, heavy food-grade cabinet.", img: nineN901 },
                  { name: "Aqua Nine N 301", desc: "White cabinet with geometric graphic panel. LED display, invisible screw design, easy service access.", img: nineN301 },
                  { name: "Aqua Nine N 302", desc: "White cabinet with vibrant leaf-water graphic. LED display, attractive chrome tap, 10-litre tank.", img: nineN302 },
                  { name: "Aqua Nine — Full Range", desc: "Available in 4 variants: N301, N302, N901, N902. Modern design with excellent graphics across all models.", img: nineCatalog }
                ].map((product, i) => (
                  <ProductCard key={i} {...product} />
                ))}
              </div>
            </div>

            {/* Dolphin Series */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-5 flex items-center gap-2">
                <span className="h-px w-6 bg-primary inline-block"></span>Dolphin Series
              </p>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  { name: "Dolphin Gold+", desc: "ISO 9001 certified. 9-litre compact RO system. Pure, healthy, safe & sweet drinking water with balanced minerals.", img: dolphinGold },
                  { name: "Dolphin Metallic — Maroon", desc: "Nile certified reverse osmosis system. 100% pure water guarantee, quality water for quality life.", img: dolphinMetallicMaroon },
                  { name: "Dolphin Metallic — Black", desc: "Built-in high capacity booster pump. Removes hardness & improves taste. Dust and insect proof body.", img: dolphinMetallicBlack }
                ].map((product, i) => (
                  <ProductCard key={i} {...product} />
                ))}
              </div>
            </div>
          </div>

          {/* Commercial */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="bg-primary/10 text-primary p-2 rounded-lg"><ShieldCheck className="h-6 w-6" /></span>
              Commercial RO Plants
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { name: "ProFlow 50LPH", desc: "Ideal for mid-sized offices and restaurants. Stainless steel housing with high-pressure output.", img: commercial1 },
                { name: "Commercial Ultra 100LPH", desc: "Heavy-duty commercial system. Multi-stage purification for hotels, schools, and hospitals.", img: commercial2 }
              ].map((product, i) => (
                <ProductCard key={i} {...product} />
              ))}
            </div>
          </div>

          {/* Industrial */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="bg-primary/10 text-primary p-2 rounded-lg"><Wrench className="h-6 w-6" /></span>
              Industrial Plants &amp; Special Systems
            </h3>

            {/* Industrial RO Plants */}
            <div className="mb-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-5 flex items-center gap-2">
                <span className="h-px w-6 bg-primary inline-block"></span>Industrial RO Plants
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { name: "Titan Plant 500LPH", desc: "Robust industrial-grade system for manufacturing units. Fully automated with PLC control panel.", img: industrial1 },
                  { name: "MegaFlow 2000LPH+", desc: "Massive scale water treatment facility. Custom-engineered for specific factory requirements.", img: industrial2 }
                ].map((product, i) => (
                  <ProductCard key={i} {...product} />
                ))}
              </div>
            </div>

            {/* DM Plants */}
            <div className="mb-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-5 flex items-center gap-2">
                <span className="h-px w-6 bg-primary inline-block"></span>DM Plants (Demineralisation)
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { name: "DM Plant — Compact", desc: "Cation & Anion resin vessels with HCL and Caustic Soda dosing. Supertronics control panel. Ideal for labs and small industrial units.", img: dmPlantSmall },
                  { name: "DM Plant — Heavy Duty", desc: "Large FRP Cation & Anion vessels on SS frame with pressure gauges and motorised pump. Removes all dissolved solids for zero-TDS output.", img: dmPlantLarge }
                ].map((product, i) => (
                  <ProductCard key={i} {...product} />
                ))}
              </div>
            </div>

            {/* Water Softeners */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-5 flex items-center gap-2">
                <span className="h-px w-6 bg-primary inline-block"></span>Water Softeners
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { name: "Water Softener", desc: "FRP tank with automatic valve, salt absorption tube and brine tank. Removes hardness causing calcium & magnesium ions effectively.", img: softener },
                  { name: "Softener with Bag Filter", desc: "Water softener system with integrated pre-filtration bag filter housing. Ideal for industries requiring both hardness removal and particulate filtration.", img: softenerBag }
                ].map((product, i) => (
                  <ProductCard key={i} {...product} />
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="inline-flex items-center gap-2 text-primary font-bold tracking-wider uppercase text-sm mb-4">
                <span className="h-px w-8 bg-primary"></span>
                Get In Touch
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-8">
                Ready to Upgrade Your Water?
              </h2>
              
              <div className="space-y-8 mb-10">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">Our Location</h4>
                    <p className="text-slate-600 leading-relaxed">
                      AMBIKA RO SYSTEM<br />
                      Opp. Swami Vivekanand Swimming Pool,<br />
                      Pedak Road, Rajkot - 360003 (Gujarat)
                    </p>
                    <a 
                      href="https://maps.app.goo.gl/cm9ZTgpGCJ5xG2699" 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-primary font-semibold mt-2 hover:underline"
                      data-testid="link-directions"
                    >
                      Get Directions <ChevronRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">Call Us</h4>
                    <p className="text-slate-600">Sales & Support</p>
                    <a href="tel:+919714727999" className="text-lg font-semibold text-primary hover:underline">
                      +91 97147 27999
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">Email Us</h4>
                    <p className="text-slate-600">For quotations and inquiries</p>
                    <a href="mailto:ambikaro841@gmail.com" className="text-lg font-semibold text-primary hover:underline">
                      ambikaro841@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-[500px] rounded-2xl overflow-hidden shadow-xl border border-slate-200"
            >
              <iframe 
                src="https://maps.google.com/maps?q=AMBIKA+RO+SYSTEM&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Ambika RO System Location"
                data-testid="map-iframe"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-12 border-t border-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Droplet className="h-6 w-6 text-primary" strokeWidth={2.5} />
              <span className="font-bold text-xl text-white tracking-tight">AMBIKA RO SYSTEM</span>
            </div>
            <p className="text-slate-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Ambika RO System. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ProductCard({ name, desc, img }: { name: string, desc: string, img: string }) {
  return (
    <motion.div 
      variants={fadeInUp}
      className="group relative rounded-2xl bg-white border shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
    >
      <div className="aspect-[3/4] w-full overflow-hidden bg-slate-50 relative">
        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
        <img 
          src={img} 
          alt={name} 
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out p-2" 
        />
      </div>
      <div className="p-8 flex flex-col flex-1">
        <h4 className="text-xl font-bold text-slate-900 mb-3">{name}</h4>
        <p className="text-slate-600 mb-8 flex-1">{desc}</p>
        <Button className="w-full group-hover:bg-primary/90" variant="outline" data-testid={`btn-quote-${name.replace(/\s+/g, '-').toLowerCase()}`}>
          Request Quote
        </Button>
      </div>
    </motion.div>
  );
}
