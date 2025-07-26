import { motion } from 'framer-motion';
import { FaCoffee, FaBars, FaTimes } from 'react-icons/fa';
import { IoCall } from 'react-icons/io5';

export default function Header({ mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <motion.header 
      className="header"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container">
        <motion.div 
          className="logo"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <FaCoffee className="logo-icon" />
          <h2>Aroma Café</h2>
          <span className="logo-badge">Est. 1985</span>
        </motion.div>
        <nav className="nav">
          <motion.a href="#inicio" whileHover={{ y: -2 }}>Inicio</motion.a>
          <motion.a href="#productos" whileHover={{ y: -2 }}>Productos</motion.a>
          <motion.a href="#nosotros" whileHover={{ y: -2 }}>Nosotros</motion.a>
          <motion.a href="#testimonios" whileHover={{ y: -2 }}>Reseñas</motion.a>
          <motion.a href="#contacto" whileHover={{ y: -2 }}>Contacto</motion.a>
        </nav>
        <motion.button 
          className="header-cta"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <IoCall /> Ordenar Ahora
        </motion.button>
        <motion.button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </motion.button>
      </div>
    </motion.header>
  );
}
