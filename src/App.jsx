import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useMemo } from 'react'
import { FaClock, FaMapMarkerAlt, FaPhone, FaInstagram, FaFacebook, FaTwitter, FaBreadSlice, FaCookie, FaCoffee, FaStar, FaAward, FaHeart, FaLeaf, FaBars, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { IoRestaurant, IoCall, IoMail, IoLocationSharp } from 'react-icons/io5'
import { MdVerified, MdLocalShipping } from 'react-icons/md'
import ProductImage from './components/ProductImage'
import { FloatingParticles, ScrollProgress, AnimatedCounter } from './components/Animations'
import './App.css'

function App() {
  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.8])
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Memoizar datos estáticos para evitar re-renderizados
  const testimonials = useMemo(() => [
    {
      name: "María González",
      text: "Los mejores croissants de la ciudad. Vengo aquí desde hace 10 años y nunca me defraudan.",
      rating: 5,
      image: "👩‍💼"
    },
    {
      name: "Carlos Rodríguez", 
      text: "El pan artesanal es increíble. Se nota la calidad de los ingredientes en cada bocado.",
      rating: 5,
      image: "👨‍🍳"
    },
    {
      name: "Ana Martín",
      text: "Perfectos para eventos especiales. Sus tartas son obras de arte que saben aún mejor.",
      rating: 5,
      image: "👩‍🎨"
    }
  ], [])

  const features = useMemo(() => [
    { icon: <FaLeaf />, title: "100% Natural", desc: "Solo ingredientes orgánicos" },
    { icon: <MdVerified />, title: "Calidad Premium", desc: "Estándares internacionales" },
    { icon: <MdLocalShipping />, title: "Delivery Gratis", desc: "Envíos en la ciudad" },
    { icon: <FaAward />, title: "Premiados", desc: "Mejor panadería 2024" }
  ], [])

  const products = useMemo(() => [
    { 
      icon: <FaBreadSlice />, 
      name: "Panes Artesanales", 
      desc: "Horneados frescos cada día con masa madre tradicional",
      price: "Desde $3.50",
      popular: true,
      image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400&h=250&fit=crop&crop=center&auto=format&q=80"
    },
    { 
      icon: <FaCookie />, 
      name: "Pasteles & Tartas", 
      desc: "Dulces tentaciones con ingredientes premium y decoración artística",
      price: "Desde $25.00",
      popular: false,
      image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=400&h=250&fit=crop&crop=center&auto=format&q=80"
    },
    { 
      icon: <FaCoffee />, 
      name: "Croissants", 
      desc: "Crujientes por fuera, mantecosos por dentro, técnica francesa auténtica",
      price: "Desde $4.00",
      popular: true,
      image: "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=400&h=250&fit=crop&crop=center&auto=format&q=80"
    },
    { 
      icon: <IoRestaurant />, 
      name: "Dulces Variados", 
      desc: "Perfectos para acompañar tu café matutino o merienda",
      price: "Desde $2.50",
      popular: false,
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=250&fit=crop&crop=center&auto=format&q=80"
    },
    { 
      icon: <FaHeart />, 
      name: "Café Premium", 
      desc: "Granos seleccionados de origen, tostados artesanalmente para el sabor perfecto",
      price: "Desde $8.00",
      popular: false,
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=250&fit=crop&crop=center&auto=format&q=80"
    },
    { 
      icon: <FaAward />, 
      name: "Especialidades", 
      desc: "Creaciones únicas del chef, productos de temporada y ediciones limitadas",
      price: "Desde $6.00",
      popular: true,
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=250&fit=crop&crop=center&auto=format&q=80"
    }
  ], [])

  const galleryImages = useMemo(() => [
    {
      src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=450&fit=crop&crop=center&auto=format&q=80",
      title: "Interior Acogedor",
      description: "Ambiente cálido y familiar"
    },
    {
      src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=450&fit=crop&crop=center&auto=format&q=80",
      title: "Vitrina Principal", 
      description: "Exhibición de especialidades"
    },
    {
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=450&fit=crop&crop=center&auto=format&q=80",
      title: "Área de Mesas",
      description: "Perfecto para reuniones"
    },
    {
      src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=450&fit=crop&crop=center&auto=format&q=80",
      title: "Mostrador Principal",
      description: "Servicio y atención"
    },
    {
      src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&h=450&fit=crop&crop=center&auto=format&q=80",
      title: "Vitrinas Refrigeradas",
      description: "Frescura garantizada"
    }
  ], [])

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <div className="app">
      <ScrollProgress />
      <FloatingParticles />
      
      {/* Header/Navigation */}
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

          {/* Mobile Menu Button */}
          <motion.button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
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
      </motion.header>

      {/* Hero Section */}
      <motion.section 
        className="hero"
        style={{ y: heroY, opacity: heroOpacity }}
        id="inicio"
      >
        <div className="hero-background">
          {/* Removida la animación de background que causaba parpadeo */}
        </div>
        
        <div className="container hero-container">
          <div className="hero-content">
            <motion.div
              className="hero-badge"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <FaStar /> #1 Panadería de la Ciudad
            </motion.div>
            
            <motion.h1 
              className="hero-title"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Horneamos con 
              <span className="highlight"> Pasión</span>
              <br />
              <span className="hero-subtitle-accent">Cada Día</span>
            </motion.h1>
            
            <motion.p 
              className="hero-subtitle"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Descubre el sabor auténtico de nuestros productos artesanales. 
              Más de <strong>38 años</strong> creando momentos especiales con recetas 
              tradicionales y ingredientes premium.
            </motion.p>
            
            <motion.div 
              className="hero-buttons"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <motion.a 
                href="#productos"
                className="cta-button primary"
                whileHover={{ scale: 1.05, boxShadow: "0 15px 40px rgba(244, 162, 97, 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                <FaHeart /> Ver Productos
              </motion.a>
              <motion.button 
                className="cta-button secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <IoCall /> Llamar Ahora
              </motion.button>
            </motion.div>
          </div>
          
          <motion.div 
            className="hero-visual"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            {/* Nuevo diseño visual más elegante */}
            <div className="hero-image-container">
              <motion.div 
                className="hero-main-image"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=600&fit=crop&crop=center&auto=format&q=80"
                  alt="Productos artesanales de Aroma Café"
                  loading="eager"
                />
                <div className="image-gradient-overlay"></div>
              </motion.div>
              
              {/* Decorative elements */}
              <motion.div 
                className="floating-badge badge-1"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <FaAward />
                <span>Premio 2024</span>
              </motion.div>
              
              <motion.div 
                className="floating-badge badge-2"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <MdVerified />
                <span>100% Natural</span>
              </motion.div>
              
              <motion.div 
                className="floating-badge badge-3"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <FaHeart />
                <span>38 años</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
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
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
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
                
                {product.image && (
                  <div className="product-image">
                    <img src={product.image} alt={product.name} />
                  </div>
                )}
                
                <div className="product-content">
                  <div className="product-header">
                    <div className="product-icon">{product.icon}</div>
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

      {/* About Section */}
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

      {/* Testimonials Section */}
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

      {/* Contact Section */}
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
                
                {/* Galería de fotos del local */}
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
                            transform: `translateX(${(index - currentImageIndex) * 20}px) translateY(${Math.abs(index - currentImageIndex) * 10}px)`,
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
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer enhanced">
        {/* Simplificado el footer background para mejor performance */}
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
    </div>
  )
}

export default App
