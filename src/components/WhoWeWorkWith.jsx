import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const clients = [
  'E-commerce brands',
  'Scaling startups',
  'Service-based businesses',
  'Agencies needing technical partners',
  'Companies upgrading their digital infrastructure',
];

export default function WhoWeWorkWith() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="clients" id="clients" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Who We Work With
        </motion.h2>
        <motion.ul
          className="clients__list"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {clients.map((client, i) => (
            <motion.li
              key={client}
              className="clients__item"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
            >
              <span className="clients__bullet" />
              {client}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
