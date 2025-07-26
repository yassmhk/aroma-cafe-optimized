import { motion, useScroll, useTransform } from 'framer-motion';
import { FaStar, FaHeart, FaAward } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';
import { IoCall } from 'react-icons/io5';

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);
  return (
    <motion.section 
      className="hero"
      style={{ y: heroY, opacity: heroOpacity }}
      id="inicio"
    >
      <div className="hero-background"></div>
      <div className="hero-bg-overlay"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <motion.div
            className="hero-badge"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <FaStar /> #1 Panadería de la Ciudad
          </motion.div>
          <motion.h1 
            className="hero-title"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Horneamos con{' '}
            <span className="highlight">Pasión</span>
            <br />
            <span className="hero-subtitle-accent">Cada Día</span>
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Descubre el sabor auténtico de nuestros productos artesanales. 
            Más de <strong>38 años</strong> creando momentos especiales con recetas 
            tradicionales y ingredientes premium.
          </motion.p>
          <motion.div 
            className="hero-buttons"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <motion.a 
              href="#productos"
              className="cta-button primary"
              whileHover={{ scale: 1.05, boxShadow: "0 15px 40px rgba(255, 255, 255, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <FaHeart /> Ver Productos
            </motion.a>
            <motion.a 
              href="#contacto"
              className="cta-button secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <IoCall /> Llamar Ahora
            </motion.a>
          </motion.div>
        </div>
        <motion.div 
          className="hero-visual"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <div className="hero-image-container">
            <motion.div 
              className="hero-main-image"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=600&fit=crop&crop=center&auto=format&q=80"
                alt="Productos artesanales de Aroma Café"
                loading="eager"
              />
              <div className="image-gradient-overlay"></div>
            </motion.div>
            <motion.div 
              className="floating-badge badge-1"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <FaAward />
              <span>Premio 2024</span>
            </motion.div>
            <motion.div 
              className="floating-badge badge-2"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <MdVerified />
              <span>100% Natural</span>
            </motion.div>
            <motion.div 
              className="floating-badge badge-3"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            >
              <FaHeart />
              <span>38 años</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
