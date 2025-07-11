import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const FloatingParticles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      emoji: ['🍞', '🥐', '🧁', '☕', '🍰', '🥖'][Math.floor(Math.random() * 6)]
    }));
    setParticles(newParticles);
  }, []);

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
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            ease: "easeInOut"
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
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = scrollPx / winHeightPx;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
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

const AnimatedCounter = ({ end, duration = 2000, prefix = "", suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!hasAnimated) return;

    let startTime;
    const startCount = 0;
    const endCount = parseInt(end);

    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentCount = Math.floor(progress * (endCount - startCount) + startCount);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  }, [hasAnimated, end, duration]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      onViewportEnter={() => setHasAnimated(true)}
      viewport={{ once: true }}
    >
      {prefix}{count}{suffix}
    </motion.span>
  );
};

export { FloatingParticles, ScrollProgress, AnimatedCounter };
