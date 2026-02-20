import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <Link to="/" className="footer__logo">
            <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="Blindside" />
          </Link>
          <div className="footer__links">
            <a href="mailto:hello@blindside.agency">hello@blindside.agency</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Blindside. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
