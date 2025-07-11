import { motion } from 'framer-motion';
import { useEffect, useState, useMemo } from 'react';

const FloatingParticles = () => {
  // Reducir número de partículas para mejor rendimiento
  const particles = useMemo(() => 
    Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 2,
      emoji: ['🍞', '🥐', '☕', '🍰'][Math.floor(Math.random() * 4)]
    })), []
  );

  return (
    <div className="floating-particles">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            fontSize: `${particle.size}px`
          }}
          animate={{
            y: [-15, 15, -15],
            x: [-8, 8, -8]
          }}
          transition={{
            duration: Math.random() * 8 + 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.id * 0.5
          }}
        >
          {particle.emoji}
        </motion.div>
      ))}
    </div>
  );
};

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = scrollPx / winHeightPx;
      setScrollProgress(scrolled);
      ticking = false;
    };

    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollProgress);
        ticking = true;
      }
    };

    window.addEventListener('scroll', requestTick, { passive: true });
    return () => window.removeEventListener('scroll', requestTick);
  }, []);

  return (
    <motion.div
      className="scroll-progress"
      style={{
        scaleX: scrollProgress,
        transformOrigin: "0%"
      }}
    />
  );
};

const AnimatedCounter = ({ end, duration = 1200, prefix = "", suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!hasAnimated) return;

    let startTime;
    const startCount = 0;
    const endCount = parseInt(end);
    let animationFrame;

    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Usar easing más suave y menos agresivo
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.round(easeOutCubic * (endCount - startCount) + startCount);
      
      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [hasAnimated, end, duration]);

  return (
    <motion.span
      className="animated-counter"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      onViewportEnter={() => !hasAnimated && setHasAnimated(true)}
      viewport={{ once: true, margin: "-80px" }}
      style={{
        display: 'inline-block',
        minWidth: '3ch',
        textAlign: 'center',
        fontVariantNumeric: 'tabular-nums'
      }}
    >
      {prefix}{count}{suffix}
    </motion.span>
  );
};

export { FloatingParticles, ScrollProgress, AnimatedCounter };
