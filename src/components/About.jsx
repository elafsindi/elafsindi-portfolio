import { useLang } from '../context/LanguageContext';
import './About.css';

export default function About() {
  const { t } = useLang();

  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-header fade-in">
          <span className="section-tag">{t.about.tag}</span>
          <h2 className="section-title">{t.about.title}</h2>
        </div>

        <div className="about__content">
          <div className="about__text fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="about__desc">{t.about.description}</p>
            <p className="about__desc">{t.about.description2}</p>
          </div>

          <div className="about__stats">
            {t.about.stats.map((stat, index) => (
              <div 
                key={index} 
                className="about__stat-card glass-card fade-in"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <h3 className="about__stat-value">{stat.value}</h3>
                <p className="about__stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}