import { useLang } from '../context/LanguageContext';
import './Education.css';

export default function Education() {
  const { t } = useLang();

  return (
    <section id="education" className="section education">
      <div className="container">
        <div className="section-header fade-in">
          <span className="section-tag">{t.education.tag}</span>
          <h2 className="section-title">{t.education.title}</h2>
          <p className="section-subtitle">{t.education.subtitle}</p>
        </div>

        <div className="education__grid">
          {t.education.items.map((item, index) => (
            <div 
              key={item.id} 
              className="education-card glass-card fade-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="education-card__icon">
                {item.icon}
              </div>
              <div className="education-card__content">
                <div className="education-card__header">
                  <h3 className="education-card__degree">{item.degree}</h3>
                  <span className="education-card__period">{item.period}</span>
                </div>
                <h4 className="education-card__institution">{item.institution}</h4>
                <p className="education-card__desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}