import { useScroll, useTransform } from 'framer-motion'
import { useState } from 'react'
import { FaClock, FaMapMarkerAlt, FaPhone, FaInstagram, FaFacebook, FaTwitter, FaBreadSlice, FaCookie, FaCoffee, FaStar, FaAward, FaHeart, FaLeaf, FaBars, FaTimes } from 'react-icons/fa'
import { IoRestaurant, IoCall, IoMail, IoLocationSharp } from 'react-icons/io5'
import { MdVerified, MdLocalShipping } from 'react-icons/md'
import ProductImage from './components/ProductImage'
import { FloatingParticles, ScrollProgress, AnimatedCounter } from './components/Animations'
import './App.css'

function App() {
  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const testimonials = [
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
  ]

  const features = [
    { icon: <FaLeaf />, title: "100% Natural", desc: "Solo ingredientes orgánicos" },
    { icon: <MdVerified />, title: "Calidad Premium", desc: "Estándares internacionales" },
    { icon: <MdLocalShipping />, title: "Delivery Gratis", desc: "Envíos en la ciudad" },
    { icon: <FaAward />, title: "Premiados", desc: "Mejor panadería 2024" }
  ]

  return (
    <div className="app">
      <ScrollProgress />
      <FloatingParticles />
      
      {/* Header/Navigation */}
      <motion.header 
        className="header"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
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
          <motion.div 
            className="hero-bg-overlay"
            animate={{ 
              background: [
                "linear-gradient(135deg, rgba(139,69,19,0.8) 0%, rgba(244,162,97,0.8) 100%)",
                "linear-gradient(135deg, rgba(139,69,19,0.9) 0%, rgba(231,111,81,0.8) 100%)",
                "linear-gradient(135deg, rgba(139,69,19,0.8) 0%, rgba(244,162,97,0.8) 100%)"
              ]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
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
              <motion.button 
                className="cta-button primary"
                whileHover={{ scale: 1.05, boxShadow: "0 15px 40px rgba(244, 162, 97, 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                <FaHeart /> Ver Productos
              </motion.button>
              <motion.button 
                className="cta-button secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <IoCall /> Llamar Ahora
              </motion.button>
            </motion.div>

            <motion.div 
              className="hero-stats"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <div className="stat-item">
                <span className="stat-number">5000+</span>
                <span className="stat-label">Clientes Felices</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Productos Únicos</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">38+</span>
                <span className="stat-label">Años de Experiencia</span>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="hero-image"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            <motion.div 
              className="floating-elements"
              animate={{ 
                y: [-20, 20, -20],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              <div className="floating-bread">🥖</div>
              <div className="floating-croissant">🥐</div>
              <div className="floating-cake">🎂</div>
            </motion.div>
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
            {[
              { 
                icon: <FaBreadSlice />, 
                name: "Panes Artesanales", 
                desc: "Horneados frescos cada día con masa madre tradicional",
                price: "Desde $3.50",
                popular: true
              },
              { 
                icon: <FaCookie />, 
                name: "Pasteles & Tartas", 
                desc: "Dulces tentaciones con ingredientes premium y decoración artística",
                price: "Desde $25.00",
                popular: false
              },
              { 
                icon: <FaCoffee />, 
                name: "Croissants", 
                desc: "Crujientes por fuera, mantecosos por dentro, técnica francesa auténtica",
                price: "Desde $4.00",
                popular: true
              },
              { 
                icon: <IoRestaurant />, 
                name: "Dulces Variados", 
                desc: "Perfectos para acompañar tu café matutino o merienda",
                price: "Desde $2.50",
                popular: false
              }
            ].map((product, index) => (
              <motion.div 
                key={index}
                className={`product-card enhanced ${product.popular ? 'popular' : ''}`}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -15, rotateY: 5 }}
                viewport={{ once: true }}
              >
                {product.popular && (
                  <motion.div 
                    className="popular-badge"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <FaStar /> Más Popular
                  </motion.div>
                )}
                
                <ProductImage product={product.name} className="product-main-image" />
                
                <div className="product-content">
                  <div className="product-header">
                    <div className="product-icon">{product.icon}</div>
                    <div className="product-price">{product.price}</div>
                  </div>
                  <h3>{product.name}</h3>
                  <p>{product.desc}</p>
                  
                  <motion.button 
                    className="product-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Ver Detalles
                  </motion.button>
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
              <div className="about-image-grid">
                <motion.div 
                  className="about-image main"
                  whileHover={{ scale: 1.05 }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop&crop=center&auto=format&q=80"
                    alt="Maestros panaderos trabajando"
                    loading="lazy"
                  />
                  <div className="image-overlay">
                    <span>👨‍🍳 Nuestros Maestros Panaderos</span>
                  </div>
                </motion.div>
                <motion.div 
                  className="about-image secondary"
                  whileHover={{ scale: 1.05 }}
                  transition={{ delay: 0.1 }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=300&fit=crop&crop=center&auto=format&q=80"
                    alt="Ingredientes frescos"
                    loading="lazy"
                  />
                </motion.div>
                <motion.div 
                  className="about-image tertiary"
                  whileHover={{ scale: 1.05 }}
                  transition={{ delay: 0.2 }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=300&h=300&fit=crop&crop=center&auto=format&q=80"
                    alt="Horno tradicional"
                    loading="lazy"
                  />
                </motion.div>
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
                initial={{ y: 50, opacity: 0, rotateY: 45 }}
                whileInView={{ y: 0, opacity: 1, rotateY: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ y: -10, rotateY: 5 }}
                viewport={{ once: true }}
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
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer enhanced">
        <div className="footer-background">
          <motion.div 
            className="footer-particles"
            animate={{ 
              backgroundPosition: ["0% 0%", "100% 100%"]
            }}
            transition={{ duration: 20, repeat: Infinity }}
          />
        </div>
        
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
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaInstagram />
                  <span>Instagram</span>
                </motion.a>
                <motion.a 
                  href="#" 
                  className="social-link"
                  whileHover={{ scale: 1.2, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaFacebook />
                  <span>Facebook</span>
                </motion.a>
                <motion.a 
                  href="#" 
                  className="social-link"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
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
