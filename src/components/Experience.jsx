import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { value: '11+', label: 'Years Experience' },
  { value: '150+', label: 'Projects Delivered' },
  { value: '12+', label: 'Platforms Expertise' },
  { value: '25+', label: 'Industries Served' },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="experience" id="experience" ref={ref}>
      <div className="container">
        <motion.div
          className="experience__grid"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="experience__stat"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className="experience__value">{stat.value}</span>
              <span className="experience__label">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
