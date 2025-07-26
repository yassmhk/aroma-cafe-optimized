import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState } from 'react';
import { galleryImages } from '../data/galleryImages';

export default function Gallery() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  return (
    <motion.div 
      className="local-gallery-stacked"
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      viewport={{ once: true }}
    >
      <h4 className="gallery-title">Conoce Nuestro Local</h4>
      <div className="gallery-stack-container">
        <div className="gallery-stack">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className={`gallery-card ${index === currentImageIndex ? 'active' : ''}`}
              style={{
                zIndex: galleryImages.length - Math.abs(index - currentImageIndex),
                transform: `translateX(${(index - currentImageIndex) * 20}px) translateY(${Math.abs(index - currentImageIndex) * 10}px)` ,
                opacity: Math.abs(index - currentImageIndex) <= 2 ? 1 - Math.abs(index - currentImageIndex) * 0.3 : 0
              }}
              animate={{
                scale: index === currentImageIndex ? 1 : 0.9,
                rotate: index === currentImageIndex ? 0 : (index - currentImageIndex) * 2
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <img 
                src={image.src}
                alt={image.title}
              />
              <div className="gallery-card-info">
                <h5>{image.title}</h5>
                <p>{image.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="gallery-controls">
          <motion.button
            className="gallery-btn prev"
            onClick={prevImage}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaChevronLeft />
          </motion.button>
          <motion.button
            className="gallery-btn next"
            onClick={nextImage}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaChevronRight />
          </motion.button>
        </div>
        <div className="gallery-indicators">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
