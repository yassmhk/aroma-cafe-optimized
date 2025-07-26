import { motion } from 'framer-motion';
import { FaCoffee, FaInstagram, FaFacebook, FaTwitter, FaAward } from 'react-icons/fa';
import { IoLocationSharp, IoCall, IoMail } from 'react-icons/io5';
import { MdVerified } from 'react-icons/md';
import { FaClock } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer enhanced">
      <div className="footer-background"></div>
      <div className="container">
        <div className="footer-content enhanced">
          <motion.div 
            className="footer-main"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="footer-logo enhanced">
              <FaCoffee className="logo-icon" />
              <h3>Aroma Café</h3>
              <span className="logo-badge">Est. 1985</span>
            </div>
            <p className="footer-description">
              Horneando sonrisas y creando momentos especiales desde 1985. 
              Nuestro compromiso es ofrecerte siempre la mejor calidad y el 
              más cálido servicio.
            </p>
            <div className="footer-certifications">
              <span className="cert"><MdVerified /> Certificado Orgánico</span>
              <span className="cert"><FaAward /> Premio Mejor Panadería 2024</span>
            </div>
          </motion.div>
          <motion.div 
            className="footer-links"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4>Enlaces Rápidos</h4>
            <ul>
              <li><motion.a href="#inicio" whileHover={{ x: 5 }}>Inicio</motion.a></li>
              <li><motion.a href="#productos" whileHover={{ x: 5 }}>Productos</motion.a></li>
              <li><motion.a href="#nosotros" whileHover={{ x: 5 }}>Nosotros</motion.a></li>
              <li><motion.a href="#testimonios" whileHover={{ x: 5 }}>Reseñas</motion.a></li>
              <li><motion.a href="#contacto" whileHover={{ x: 5 }}>Contacto</motion.a></li>
            </ul>
          </motion.div>
          <motion.div 
            className="footer-contact"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4>Contáctanos</h4>
            <div className="contact-item">
              <IoLocationSharp /> Calle Principal 123, Centro
            </div>
            <div className="contact-item">
              <IoCall /> +1 (555) 123-4567
            </div>
            <div className="contact-item">
              <IoMail /> info@aromacafe.com
            </div>
            <div className="contact-item">
              <FaClock /> Lun-Sáb: 6AM-8PM | Dom: 7AM-6PM
            </div>
          </motion.div>
          <motion.div 
            className="footer-social"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4>Síguenos</h4>
            <div className="social-links enhanced">
              <motion.a 
                href="#" 
                className="social-link"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaInstagram />
                <span>Instagram</span>
              </motion.a>
              <motion.a 
                href="#" 
                className="social-link"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaFacebook />
                <span>Facebook</span>
              </motion.a>
              <motion.a 
                href="#" 
                className="social-link"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaTwitter />
                <span>Twitter</span>
              </motion.a>
            </div>
            <div className="newsletter">
              <h5>Newsletter</h5>
              <p>Recibe ofertas especiales y novedades</p>
              <div className="newsletter-form">
                <input type="email" placeholder="Tu email" />
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Suscribirse
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div 
          className="footer-bottom enhanced"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="footer-bottom-content">
            <p>&copy; 2025 Aroma Café. Todos los derechos reservados.</p>
            <div className="footer-legal">
              <a href="#">Política de Privacidad</a>
              <a href="#">Términos y Condiciones</a>
              <a href="#">Política de Cookies</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
