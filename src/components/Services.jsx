import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { services } from '../data/siteData';

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="services" id="services" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          What We Do
        </motion.h2>
        <div className="services__grid">
          {services.map((service, i) => (
            <motion.article
              key={service.id}
              className="services__card"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <h3 className="services__title">{service.title}</h3>
              <ul className="services__list">
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="services__outcome">{service.outcome}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
