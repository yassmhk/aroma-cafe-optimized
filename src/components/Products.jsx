import { motion } from 'framer-motion';
import { products } from '../data/products';
import { FaStar } from 'react-icons/fa';

export default function Products() {
  return (
    <section className="products" id="productos">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="section-badge">Nuestros Productos</span>
          <h2 className="section-title">Especialidades Artesanales</h2>
          <p className="section-subtitle">
            Cada producto es elaborado con amor y los mejores ingredientes, 
            siguiendo recetas tradicionales perfeccionadas a lo largo de décadas.
          </p>
        </motion.div>
        <div className="products-grid enhanced">
          {products.map((product, index) => (
            <motion.div 
              key={index}
              className={`product-card enhanced ${product.popular ? 'popular' : ''}`}
              initial={{ y: 10, opacity: 0.3, scale: 0.98 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ 
                delay: index * 0.05, 
                duration: 0.3, 
                ease: [0.25, 0.46, 0.45, 0.94],
                type: "tween"
              }}
              whileHover={{ y: -6, scale: 1.02 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              {product.popular && (
                <motion.div 
                  className="popular-badge"
                  initial={{ scale: 0.8, opacity: 0.5 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ 
                    delay: 0.2 + index * 0.05,
                    duration: 0.25,
                    type: "spring",
                    stiffness: 200,
                    damping: 15
                  }}
                >
                  <FaStar /> Más Popular
                </motion.div>
              )}
              <div className="product-image">
                <img 
                  src={product.image} 
                  alt={product.name}
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.style.background = 'linear-gradient(135deg, var(--light-bg) 0%, rgba(244, 162, 97, 0.1) 100%)';
                  }}
                />
              </div>
              <div className="product-content">
                <div className="product-header">
                  <div className="product-icon">{product.icon && <product.icon />}</div>
                  <h3>{product.name}</h3>
                </div>
                <p className="product-description">{product.desc}</p>
                <div className="product-footer">
                  <div className="product-price">{product.price}</div>
                  <motion.button 
                    className="product-btn-enhanced"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Ver Detalles
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
