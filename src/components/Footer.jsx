import { useLang } from '../context/LanguageContext';
import './Footer.css';

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="footer fade-in" style={{ animationDelay: '0.2s' }}>
      <div className="container">
        <div className="footer__content">
          <div className="footer__logo">
            <span className="footer__logo-bracket">&lt;</span>
            <span className="footer__logo-text">ES</span>
            <span className="footer__logo-bracket">/&gt;</span>
          </div>
          
          <div className="footer__copyright">
            &copy; {new Date().getFullYear()} Elaf Sindi. {t.footer.rights}
          </div>
          
          <div className="footer__made-with">
            {t.footer.madeWith} React & Vite
          </div>
        </div>
      </div>
    </footer>
  );
}
