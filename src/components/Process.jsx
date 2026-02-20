import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { processSteps } from '../data/siteData';

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="process" id="process" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          How We Work
        </motion.h2>
        <div className="process__steps">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.id}
              className="process__step"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <span className="process__number">{String(step.id).padStart(2, '0')}</span>
              <div className="process__content">
                <h3 className="process__title">{step.title}</h3>
                <p className="process__description">{step.description}</p>
              </div>
              {i < processSteps.length - 1 && (
                <div className="process__connector" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
