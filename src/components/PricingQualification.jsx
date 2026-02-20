import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function PricingQualification() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="pricing" id="pricing" ref={ref}>
      <div className="container">
        <motion.div
          className="pricing__content"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="pricing__title">Investment Range</h2>
          <p className="pricing__text">
            Most projects range between <strong>$5,000–$20,000+</strong> depending on scope. We work with businesses that are ready to invest in systems that drive real results.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
