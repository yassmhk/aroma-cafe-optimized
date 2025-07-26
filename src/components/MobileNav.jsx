import { motion } from 'framer-motion';
import { IoCall } from 'react-icons/io5';

export default function MobileNav({ mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <motion.div 
      className="mobile-nav"
      initial={{ opacity: 0, height: 0 }}
      animate={{ 
        opacity: mobileMenuOpen ? 1 : 0,
        height: mobileMenuOpen ? 'auto' : 0
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="mobile-nav-content">
        <motion.a 
          href="#inicio" 
          onClick={() => setMobileMenuOpen(false)}
          whileHover={{ x: 10 }}
        >
          Inicio
        </motion.a>
        <motion.a 
          href="#productos" 
          onClick={() => setMobileMenuOpen(false)}
          whileHover={{ x: 10 }}
        >
          Productos
        </motion.a>
        <motion.a 
          href="#nosotros" 
          onClick={() => setMobileMenuOpen(false)}
          whileHover={{ x: 10 }}
        >
          Nosotros
        </motion.a>
        <motion.a 
          href="#testimonios" 
          onClick={() => setMobileMenuOpen(false)}
          whileHover={{ x: 10 }}
        >
          Reseñas
        </motion.a>
        <motion.a 
          href="#contacto" 
          onClick={() => setMobileMenuOpen(false)}
          whileHover={{ x: 10 }}
        >
          Contacto
        </motion.a>
        <motion.button 
          className="header-cta mobile-cta"
          onClick={() => setMobileMenuOpen(false)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <IoCall /> Ordenar Ahora
        </motion.button>
      </div>
    </motion.div>
  );
}
