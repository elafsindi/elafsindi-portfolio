import { useState } from 'react';
import { useLang } from '../context/LanguageContext';
import './Skills.css';

export default function Skills() {
  const { t } = useLang();
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-header fade-in">
          <span className="section-tag">{t.skills.tag}</span>
          <h2 className="section-title">{t.skills.title}</h2>
          <p className="section-subtitle">{t.skills.subtitle}</p>
        </div>

        <div className="skills__content fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="skills__tabs">
            {t.skills.categories.map((category, index) => (
              <button
                key={index}
                className={`skills__tab ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                <span className="skills__tab-icon">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>

          <div className="skills__grid glass-card">
            {t.skills.categories[activeTab].skills.map((skill, index) => (
              <div 
                key={skill.name} 
                className="skill-item fade-in"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <div className="skill-item__header">
                  <span className="skill-item__name">{skill.name}</span>
                  <span className="skill-item__level">{skill.level}%</span>
                </div>
                <div className="skill-item__bar-bg">
                  <div 
                    className="skill-item__bar-fill"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}