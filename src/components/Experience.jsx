import { useLang } from '../context/LanguageContext';
import './Experience.css';

export default function Experience() {
  const { t } = useLang();

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="section-header fade-in">
          <span className="section-tag">{t.experience.tag}</span>
          <h2 className="section-title">{t.experience.title}</h2>
          <p className="section-subtitle">{t.experience.subtitle}</p>
        </div>

        <div className="timeline-horizontal-container fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="timeline-horizontal">
            {t.experience.items.map((item, index) => (
              <div 
                key={item.id} 
                className={`timeline-horizontal__item ${item.type === 'current' ? 'timeline-horizontal__item--current' : ''}`}
              >
                <div className="timeline-horizontal__dot"></div>
                <div className="timeline-horizontal__content glass-card">
                  <div className="timeline-horizontal__header">
                    <span className="timeline-horizontal__period">{item.period}</span>
                    <h3 className="timeline-horizontal__role">{item.role}</h3>
                  </div>
                  <h4 className="timeline-horizontal__company">{item.company}</h4>
                  <p className="timeline-horizontal__desc">{item.description}</p>
                  <div className="timeline-horizontal__tech">
                    {item.tech.map((tech) => (
                      <span key={tech} className="tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}