import { motion } from 'framer-motion';
import { FaAward, FaLeaf, FaCoffee, FaHeart } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';
import { AnimatedCounter } from './Animations';

export default function About() {
  return (
    <section className="about enhanced" id="nosotros">
      <div className="container">
        <div className="about-content enhanced">
          <motion.div 
            className="about-text"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="section-badge">Nuestra Historia</span>
            <h2>Tradición y Pasión desde 1985</h2>
            <p className="about-intro">
              Lo que comenzó como un pequeño sueño familiar se ha convertido en 
              el corazón gastronómico de nuestra comunidad.
            </p>
            <p>
              Durante más de tres décadas, hemos perfeccionado nuestras recetas 
              tradicionales, combinando técnicas ancestrales con innovación moderna 
              para crear productos que despiertan todos tus sentidos.
            </p>
            <p>
              Utilizamos exclusivamente ingredientes naturales de la más alta calidad, 
              trabajando con proveedores locales que comparten nuestro compromiso 
              con la excelencia.
            </p>
            <div className="stats enhanced">
              <motion.div 
                className="stat enhanced"
                whileHover={{ scale: 1.05 }}
              >
                <h3><AnimatedCounter end="38" suffix="+" /></h3>
                <p>Años de Experiencia</p>
                <span className="stat-desc">Perfeccionando cada receta</span>
              </motion.div>
              <motion.div 
                className="stat enhanced"
                whileHover={{ scale: 1.05 }}
              >
                <h3><AnimatedCounter end="50" suffix="+" /></h3>
                <p>Productos Únicos</p>
                <span className="stat-desc">Variedad incomparable</span>
              </motion.div>
              <motion.div 
                className="stat enhanced"
                whileHover={{ scale: 1.05 }}
              >
                <h3><AnimatedCounter end="5000" suffix="+" /></h3>
                <p>Clientes Satisfechos</p>
                <span className="stat-desc">Sonrisas cada día</span>
              </motion.div>
            </div>
            <motion.div 
              className="about-certifications"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="cert-item">
                <MdVerified className="cert-icon" />
                <span>Certificación Orgánica</span>
              </div>
              <div className="cert-item">
                <FaAward className="cert-icon" />
                <span>Premio Mejor Panadería 2024</span>
              </div>
              <div className="cert-item">
                <FaHeart className="cert-icon" />
                <span>Empresa Familiar</span>
              </div>
            </motion.div>
          </motion.div>
          <motion.div 
            className="about-visual"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="about-image-showcase">
              <motion.div 
                className="showcase-main-image"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop&crop=center&auto=format&q=80"
                  alt="Maestros panaderos trabajando con masa tradicional"
                  loading="lazy"
                />
                <div className="showcase-overlay">
                  <div className="showcase-badge">
                    <FaAward />
                    <span>Técnicas Tradicionales</span>
                  </div>
                </div>
              </motion.div>
              <div className="showcase-details">
                <motion.div 
                  className="detail-card"
                  whileHover={{ y: -5 }}
                >
                  <div className="detail-icon">
                    <FaLeaf />
                  </div>
                  <div className="detail-content">
                    <h4>Ingredientes Naturales</h4>
                    <p>Solo los mejores ingredientes orgánicos seleccionados</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="detail-card"
                  whileHover={{ y: -5 }}
                >
                  <div className="detail-icon">
                    <FaCoffee />
                  </div>
                  <div className="detail-content">
                    <h4>Recetas Familiares</h4>
                    <p>Transmitidas de generación en generación</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="detail-card"
                  whileHover={{ y: -5 }}
                >
                  <div className="detail-icon">
                    <MdVerified />
                  </div>
                  <div className="detail-content">
                    <h4>Calidad Certificada</h4>
                    <p>Estándares internacionales de excelencia</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
