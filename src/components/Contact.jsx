import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormState({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section className="contact" id="contact" ref={ref}>
      <div className="container">
        <motion.div
          className="contact__content"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="contact__headline">Ready to Build Something That Performs?</h2>
          <p className="contact__subtext">
            Tell us about your project. We'll get back within 24 hours.
          </p>

          <div className="contact__methods">
            <a href="mailto:hello@blindside.agency" className="contact__email">
              hello@blindside.agency
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__linkedin"
            >
              LinkedIn
            </a>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__fields">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formState.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formState.email}
                onChange={handleChange}
                required
              />
            </div>
            <textarea
              name="message"
              placeholder="Tell us about your project..."
              rows={4}
              value={formState.message}
              onChange={handleChange}
              required
            />
            <button type="submit" className="contact__submit">
              {submitted ? 'Message Sent' : 'Send Inquiry'}
            </button>
          </form>

          {submitted && (
            <p className="contact__success">
              Thanks! We'll be in touch soon.
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
