import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../../context/LanguageContext';
import '../Hero.css'; // Reuse styles but override animations

export default function AnimatedHero() {
  const { t } = useLang();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', bounce: 0.5, duration: 1 } }
  };

  return (
    <section className="hero bg-grid" id="hero" style={{ overflow: 'hidden' }}>
      {/* Animated Orbs */}
      <motion.div 
        className="orb orb-purple hero__orb hero__orb--1" 
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="orb orb-cyan hero__orb hero__orb--2" 
        animate={{ scale: [1, 1.5, 1], rotate: [0, -90, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      {/* Particles (Dots) */}
      {[...Array(15)].map((_, i) => (
        <span key={i} className="hero__particle" style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 8}s`,
          animationDuration: `${8 + Math.random() * 6}s`,
          width: `${2 + Math.random() * 4}px`,
          height: `${2 + Math.random() * 4}px`,
        }} />
      ))}

      <div className="container hero__content">
        <motion.div 
          className="hero__text"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={itemVariants} className="hero__badge">
            <span className="hero__badge-dot" />
            {t.hero.greeting}
          </motion.div>

          <motion.h1 variants={itemVariants} className="hero__name">
            {t.hero.name}
          </motion.h1>

          <motion.div variants={itemVariants} className="hero__role">
             {t.hero.roles[0]} {/* Just show the first role for a punchy animated hero */}
          </motion.div>

          <motion.p variants={itemVariants} className="hero__description">
            {t.hero.description}
          </motion.p>

          <motion.div variants={itemVariants} className="hero__cta">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(56,189,248,0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary"
            >
              {t.hero.cta}
            </motion.button>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/cv.pdf" 
              className="btn btn-outline" 
              download
            >
              {t.hero.ctaSecondary}
            </motion.a>
            {[
              { icon: 'github', href: t.contact.social.github, label: 'GitHub' },
              { icon: 'linkedin', href: t.contact.social.linkedin, label: 'LinkedIn' },
            ].map(({ icon, href, label }) => (
              <motion.a 
                key={icon}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                {label}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100, rotate: 10 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ type: "spring", bounce: 0.6, duration: 1.5, delay: 0.5 }}
          className="hero__visual"
        >
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="hero__avatar-ring"
          >
            <div className="hero__avatar-ring-inner">
              <div className="hero__avatar">
                <span className="hero__avatar-logo">&lt;ES/&gt;</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
