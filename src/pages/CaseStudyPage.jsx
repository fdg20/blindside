import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { caseStudies } from '../data/siteData';

export default function CaseStudyPage() {
  const { id } = useParams();
  const study = caseStudies.find((s) => s.id === id);

  if (!study) {
    return (
      <main className="case-study-page">
        <div className="container">
          <p>Case study not found.</p>
          <Link to="/">← Back to home</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="case-study-page">
      <div className="container">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/#case-studies" className="case-study-page__back">← Back to case studies</Link>
          <span className="case-study-page__industry">{study.industry}</span>
          <h1 className="case-study-page__title">{study.title}</h1>

          <div className="case-study-page__section">
            <h2>Challenge</h2>
            <p>{study.challenge}</p>
          </div>

          <div className="case-study-page__section">
            <h2>Solution</h2>
            <p>{study.solution}</p>
          </div>

          <div className="case-study-page__section">
            <h2>Results</h2>
            <div className="case-study-page__results">
              {study.results.map((r) => (
                <div key={r.label} className="case-study-page__metric">
                  <span className="case-study-page__metric-value">{r.metric}</span>
                  <span className="case-study-page__metric-label">{r.label}</span>
                </div>
              ))}
            </div>
          </div>

          <Link to="/#contact" className="case-study-page__cta">
            Start a similar project
          </Link>
        </motion.article>
      </div>
    </main>
  );
}
