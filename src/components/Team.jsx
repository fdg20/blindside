import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { team } from '../data/siteData';

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="team" id="team" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          The People Behind Blindside
        </motion.h2>
        <div className="team__grid">
          {team.map((member, i) => (
            <motion.article
              key={member.id}
              className="team__card"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <div className="team__image-wrap">
                <div className="team__image-placeholder">
                  <span>{member.name.split(' ')[0][0]}{member.name.split(' ')[1][0]}</span>
                </div>
              </div>
              <h3 className="team__name">{member.name}</h3>
              <p className="team__title">{member.title}</p>
              <p className="team__description">{member.description}</p>
            </motion.article>
          ))}
        </div>
        <motion.div
          className="team__more"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link to="/team" className="team__link">
            Meet the full team →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
