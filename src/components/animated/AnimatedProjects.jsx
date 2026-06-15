import { motion } from 'framer-motion';
import { useLang } from '../../context/LanguageContext';
import '../Projects.css';

export default function AnimatedProjects() {
  const { t } = useLang();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const card = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <span className="section-tag">{t.projects.tag}</span>
          <h2 className="section-title">{t.projects.title}</h2>
          <p className="section-subtitle">{t.projects.subtitle}</p>
        </motion.div>

        <motion.div 
          className="projects__grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {t.projects.items.map((project) => (
            <motion.div 
              key={project.id} 
              variants={card}
              whileHover={{ y: -15, scale: 1.02 }}
              className="glass-card project-card"
            >
              <div 
                className="project-card__accent" 
                style={{ background: 'var(--primary)', boxShadow: `0 0 20px rgba(108, 99, 255, 0.4)` }}
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
