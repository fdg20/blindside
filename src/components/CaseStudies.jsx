import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { caseStudies } from '../data/siteData';

export default function CaseStudies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="case-studies" id="case-studies" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Case Studies
        </motion.h2>
        <div className="case-studies__grid">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                to={`/case-study/${study.id}`}
                className="case-studies__card"
              >
                <span className="case-studies__industry">{study.industry}</span>
                <h3 className="case-studies__title">{study.title}</h3>
                <p className="case-studies__challenge">{study.challenge}</p>
                <div className="case-studies__results">
                  {study.results.map((r) => (
                    <div key={r.label} className="case-studies__metric">
                      <span className="case-studies__metric-value">{r.metric}</span>
                      <span className="case-studies__metric-label">{r.label}</span>
                    </div>
                  ))}
                </div>
                <span className="case-studies__link">View case study →</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
