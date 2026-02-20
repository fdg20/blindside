import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { team } from '../data/siteData';

export default function TeamPage() {
  return (
    <main className="team-page">
      <div className="container">
        <motion.div
          className="team-page__header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="team-page__back">← Back</Link>
          <h1 className="team-page__heading">The People Behind Blindside</h1>
          <p className="team-page__intro">
            A team of strategists, developers, designers, and producers who build digital systems that perform.
          </p>
        </motion.div>

        <div className="team-page__grid">
          {team.map((member, i) => (
            <motion.article
              key={member.id}
              className="team-page__card"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <div className="team-page__image-wrap">
                <div className="team-page__image-placeholder">
                  <span>{member.name.split(' ')[0][0]}{member.name.split(' ')[1][0]}</span>
                </div>
              </div>
              <h2 className="team-page__name">{member.name}</h2>
              <p className="team-page__title">{member.title}</p>
              <p className="team-page__description">{member.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
}
