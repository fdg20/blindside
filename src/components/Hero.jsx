import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg">
        <div className="hero__grid" />
        <div className="hero__gradient" />
      </div>

      <div className="hero__content">
        <motion.h1
          className="hero__headline"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Blindside — Digital Systems That Drive Revenue.
        </motion.h1>
        <motion.p
          className="hero__subtext"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          11+ years helping brands scale through strategy, development, performance marketing, and creative execution.
        </motion.p>
        <motion.div
          className="hero__ctas"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link to="/#case-studies" className="hero__cta-primary">
            View Case Studies
          </Link>
          <Link to="/#contact" className="hero__cta-secondary">
            Start a Project
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
