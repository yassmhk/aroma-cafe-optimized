import { useState } from 'react';
import { motion } from 'framer-motion';

const ProductImage = ({ product, className = "" }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // URLs de imágenes generadas con IA para cada producto
  const productImages = {
    'Panes Artesanales': 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=400&h=300&fit=crop&crop=center&auto=format&q=80',
    'Pasteles & Tartas': 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop&crop=center&auto=format&q=80',
    'Croissants': 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=300&fit=crop&crop=center&auto=format&q=80',
    'Dulces Variados': 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=400&h=300&fit=crop&crop=center&auto=format&q=80'
  };

  const fallbackEmojis = {
    'Panes Artesanales': '🍞',
    'Pasteles & Tartas': '🎂',
    'Croissants': '🥐',
    'Dulces Variados': '🧁'
  };

  const imageUrl = productImages[product];
  const fallbackEmoji = fallbackEmojis[product];

  return (
    <div className={`product-image-container ${className}`}>
      {!imageError ? (
        <motion.img
          src={imageUrl}
          alt={`Deliciosos ${product.toLowerCase()} de Aroma Café`}
          className="product-image"
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: imageLoaded ? 1 : 0,
            scale: imageLoaded ? 1 : 0.8
          }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
        />
      ) : (
        <div className="product-image-fallback">
          <span className="product-emoji">{fallbackEmoji}</span>
        </div>
      )}
    </div>
  );
};

export default ProductImage;
