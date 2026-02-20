import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="about" id="about" ref={ref}>
      <div className="container">
        <motion.div
          className="about__content"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="section-title">About Blindside</h2>
          <div className="about__text">
            <p>
              We're a digital agency with <strong>11+ years of experience</strong> building systems that perform. We work with serious businesses and growing brands—companies that understand the value of strategy-first execution and long-term partnerships.
            </p>
            <p>
              Our approach is straightforward: we focus on business outcomes, not vanity metrics. Every project we take on is designed to drive revenue, improve efficiency, or create lasting competitive advantage.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
