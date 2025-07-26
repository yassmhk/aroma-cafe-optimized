import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonios">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="section-badge">Testimonios</span>
          <h2 className="section-title">Lo que Dicen Nuestros Clientes</h2>
          <p className="section-subtitle">
            La satisfacción de nuestros clientes es nuestro mayor logro. 
            Estas son algunas de sus experiencias con nosotros.
          </p>
        </motion.div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card"
              initial={{ y: 10, opacity: 0.3, scale: 0.98 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ 
                delay: index * 0.06, 
                duration: 0.3, 
                ease: [0.25, 0.46, 0.45, 0.94],
                type: "tween"
              }}
              whileHover={{ y: -3, scale: 1.02 }}
              viewport={{ once: true, margin: "-40px" }}
            >
              <div className="testimonial-header">
                <div className="testimonial-avatar">{testimonial.image}</div>
                <div className="testimonial-info">
                  <h4>{testimonial.name}</h4>
                  <div className="testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="star" />
                    ))}
                  </div>
                </div>
              </div>
              <blockquote>"{testimonial.text}"</blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
