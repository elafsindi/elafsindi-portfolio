import { useLang } from '../context/LanguageContext';
import './Projects.css';

export default function Projects() {
  const { t } = useLang();

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-header fade-in">
          <span className="section-tag">{t.projects.tag}</span>
          <h2 className="section-title">{t.projects.title}</h2>
          <p className="section-subtitle">{t.projects.subtitle}</p>
        </div>

        <div className="projects__grid">
          {t.projects.items.map((project, index) => (
            <div 
              key={project.id} 
              className="glass-card project-card fade-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div 
                className="project-card__accent" 
                style={{ background: 'var(--primary)' }}
              />
              <div className="project-card__content">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__desc">{project.description}</p>
                <div className="project-card__tech">
                  {project.tech.map(tech => (
                    <span key={tech} className="tag tag-accent">{tech}</span>
                  ))}
                </div>
                <div className="project-card__links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-outline project-card__btn">
                      {t.projects.codeBtn || "Code"}
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="btn btn-primary project-card__btn">
                      {t.projects.liveBtn || "Live"}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}