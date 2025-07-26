import { motion } from 'framer-motion';
import { features } from '../data/features';

export default function Features() {
  return (
    <section className="features">
      <div className="container">
        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
            >
              <div className="feature-icon">{feature.icon && <feature.icon />}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
