import { useState } from 'react';
import './styles/variables.css';
import './styles/reset.css';
import './styles/animations.css';
import './styles/header.css';
import './styles/hero.css';
import './styles/products.css';
import './styles/features.css';
import './styles/about.css';
import './styles/testimonials.css';
import './styles/contact.css';
import './styles/gallery.css';
import './styles/footer.css';
import './styles/mobile-nav.css';
import './styles/responsive.css';
import { FloatingParticles, ScrollProgress } from './components/Animations';
import Header from './components/Header';
import MobileNav from './components/MobileNav';
import Hero from './components/Hero';
import Features from './components/Features';
import Products from './components/Products';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="app">
      <ScrollProgress />
      <FloatingParticles />
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <MobileNav mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <Hero />
      <Features />
      <Products />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
