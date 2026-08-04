import React from 'react';
import { motion } from 'framer-motion';
import { 
  Droplet, ShieldCheck, Wrench, Headphones, 
  MapPin, Phone, Mail, ChevronRight, Menu, X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

// Asset Imports
import heroImg from '@assets/hero.jpg';
import domestic1 from '@assets/domestic-1.jpg';
import domestic2 from '@assets/domestic-2.jpg';
import commercial1 from '@assets/commercial-1.jpg';
import commercial2 from '@assets/commercial-2.jpg';
import industrial1 from '@assets/industrial-1.jpg';
import industrial2 from '@assets/industrial-2.jpg';

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
            {['Home', 'About', 'Products', 'Why Us', 'Contact'].map((item) => (
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
          {['Home', 'About', 'Products', 'Why Us', 'Contact'].map((item) => (
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
      <section id="home" className="relative min-h-[100dvh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent z-10" />
          <img 
            src={heroImg} 
            alt="Modern Water Treatment Facility" 
            className="w-full h-full object-cover"
          />
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
              <Button size="lg" className="h-14 px-8 text-base font-semibold" onClick={() => scrollTo('products')} data-testid="hero-cta-products">
                View Our Products
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-base font-semibold text-white border-white/30 hover:bg-white/10 hover:text-white" onClick={() => scrollTo('contact')} data-testid="hero-cta-contact">
                Contact Sales
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 text-primary font-bold tracking-wider uppercase text-sm">
                <span className="h-px w-8 bg-primary"></span>
                About Ambika RO
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
                Masters of Water Purification Technology
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                At AMBIKA RO SYSTEM, we believe that pure water is the foundation of health and industry. For over a decade, we have been at the forefront of reverse osmosis technology, delivering systems that meet the most stringent quality standards.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Whether you need a compact purifier for your kitchen, a reliable system for your restaurant, or a high-capacity plant for your manufacturing facility, our engineering excellence ensures you get exactly what you need.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-100">
                <div>
                  <div className="text-4xl font-extrabold text-primary mb-2">10+</div>
                  <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Years Experience</div>
                </div>
                <div>
                  <div className="text-4xl font-extrabold text-primary mb-2">5k+</div>
                  <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Installations</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <img src={industrial2} alt="Industrial Facility" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8">
                <p className="text-white font-medium text-lg border-l-4 border-primary pl-4">
                  "Setting the gold standard in water treatment solutions across sectors."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
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
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { name: "AquaPure Under-Counter", desc: "Space-saving design that fits perfectly under your kitchen sink. Multi-stage filtration for the whole family.", img: domestic1 },
                { name: "Elegance Countertop", desc: "Sleek, modern aesthetic that complements any kitchen. Real-time TDS monitoring and smart alerts.", img: domestic2 }
              ].map((product, i) => (
                <ProductCard key={i} {...product} />
              ))}
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
              Industrial RO Plants
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { name: "Titan Plant 500LPH", desc: "Robust industrial-grade system for manufacturing units. Fully automated with PLC control panel.", img: industrial1 },
                { name: "MegaFlow 2000LPH+", desc: "Massive scale water treatment facility. Custom-engineered for specific factory requirements.", img: industrial2 }
              ].map((product, i) => (
                <ProductCard key={i} {...product} />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Why AMBIKA RO SYSTEM?</h2>
                <p className="text-primary-foreground/80 text-lg mb-8">
                  We don't just sell products; we deliver peace of mind. Our commitment to quality ensures your water is pure, safe, and reliable.
                </p>
                <Button size="lg" variant="secondary" className="w-full sm:w-auto" onClick={() => scrollTo('contact')} data-testid="why-us-cta">
                  Talk to an Expert
                </Button>
              </motion.div>
            </div>
            
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
              {[
                { icon: ShieldCheck, title: "Pure Water Guarantee", desc: "Every drop meets strict WHO standards. Uncompromising quality." },
                { icon: Wrench, title: "Advanced Technology", desc: "Latest reverse osmosis membranes and multi-stage filtration." },
                { icon: MapPin, title: "Expert Installation", desc: "Professional setup by certified technicians with zero hassle." },
                { icon: Headphones, title: "After-Sales Support", desc: "24/7 customer service and routine maintenance scheduling." }
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="bg-white/10 border-white/20 backdrop-blur-sm text-white h-full hover:bg-white/20 transition-colors">
                    <CardContent className="p-6">
                      <feature.icon className="h-10 w-10 mb-4 text-cyan-300" />
                      <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                      <p className="text-white/70">{feature.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
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
                      Opp. Shrinathji Complex, 150 Feet Ring Road,<br />
                      Rajkot, Gujarat
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
                    <a href="tel:+919876543210" className="text-lg font-semibold text-primary hover:underline">
                      +91 98765 43210
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
                    <a href="mailto:info@ambikarosystem.com" className="text-lg font-semibold text-primary hover:underline">
                      info@ambikarosystem.com
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
      <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100 relative">
        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
        <img 
          src={img} 
          alt={name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
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
