import { motion } from 'framer-motion';
import { IoLocationSharp, IoCall, IoMail } from 'react-icons/io5';
import { FaClock } from 'react-icons/fa';
import Gallery from './Gallery';

export default function Contact() {
  return (
    <section className="contact enhanced" id="contacto">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="section-badge">Contacto</span>
          <h2 className="section-title">Visítanos o Contáctanos</h2>
          <p className="section-subtitle">
            Estamos aquí para servirte. Ven a disfrutar de nuestros productos 
            o contáctanos para pedidos especiales y eventos.
          </p>
        </motion.div>
        <div className="contact-content enhanced">
          <motion.div 
            className="contact-info enhanced"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="info-item enhanced"
              whileHover={{ scale: 1.02, x: 10 }}
            >
              <div className="info-icon">
                <IoLocationSharp />
              </div>
              <div className="info-content">
                <h3>Nuestra Ubicación</h3>
                <p>Calle Principal 123<br />Centro Histórico, Ciudad</p>
                <span className="info-extra">Fácil acceso y estacionamiento</span>
              </div>
            </motion.div>
            <motion.div 
              className="info-item enhanced"
              whileHover={{ scale: 1.02, x: 10 }}
            >
              <div className="info-icon">
                <FaClock />
              </div>
              <div className="info-content">
                <h3>Horarios de Atención</h3>
                <p>
                  <strong>Lun - Sáb:</strong> 6:00 AM - 8:00 PM<br />
                  <strong>Domingos:</strong> 7:00 AM - 6:00 PM
                </p>
                <span className="info-extra">Productos frescos todo el día</span>
              </div>
            </motion.div>
            <motion.div 
              className="info-item enhanced"
              whileHover={{ scale: 1.02, x: 10 }}
            >
              <div className="info-icon">
                <IoCall />
              </div>
              <div className="info-content">
                <h3>Teléfono & WhatsApp</h3>
                <p>+1 (555) 123-4567</p>
                <span className="info-extra">Pedidos y consultas</span>
              </div>
            </motion.div>
            <motion.div 
              className="info-item enhanced"
              whileHover={{ scale: 1.02, x: 10 }}
            >
              <div className="info-icon">
                <IoMail />
              </div>
              <div className="info-content">
                <h3>Correo Electrónico</h3>
                <p>info@aromacafe.com</p>
                <span className="info-extra">Eventos y pedidos especiales</span>
              </div>
            </motion.div>
            <motion.div 
              className="contact-cta"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3>¿Listo para probar nuestros productos?</h3>
              <div className="cta-buttons">
                <motion.button 
                  className="cta-button primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IoCall /> Llamar Ahora
                </motion.button>
                <motion.button 
                  className="cta-button secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IoLocationSharp /> Cómo Llegar
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
          <motion.div 
            className="map-section"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="map-container">
              <motion.div 
                className="map-placeholder enhanced"
                whileHover={{ scale: 1.02 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&h=400&fit=crop&crop=center&auto=format&q=80"
                  alt="Ubicación de Aroma Café"
                  loading="lazy"
                />
                <div className="map-overlay">
                  <div className="map-content">
                    <span className="map-icon">�</span>
                    <p>Aroma Café</p>
                    <span>Calle Principal 123</span>
                  </div>
                </div>
              </motion.div>
              <div className="location-features">
                <motion.div 
                  className="feature-item"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="feature-icon">🅿️</span>
                  <span>Estacionamiento Gratuito</span>
                </motion.div>
                <motion.div 
                  className="feature-item"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="feature-icon">🚌</span>
                  <span>Transporte Público</span>
                </motion.div>
                <motion.div 
                  className="feature-item"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="feature-icon">♿</span>
                  <span>Acceso Universal</span>
                </motion.div>
              </div>
              <Gallery />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
