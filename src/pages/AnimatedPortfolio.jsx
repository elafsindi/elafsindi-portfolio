import AnimatedHero from '../components/animated/AnimatedHero';
import AnimatedProjects from '../components/animated/AnimatedProjects';
import AnimatedSection from '../components/animated/AnimatedSection';

import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Contact from '../components/Contact';

export default function AnimatedPortfolio() {
  return (
    <>
      <AnimatedHero />
      
      <AnimatedSection delay={0.2}>
        <About />
      </AnimatedSection>
      
      <AnimatedSection delay={0.1}>
        <Skills />
      </AnimatedSection>
      
      <AnimatedProjects />
      
      <AnimatedSection>
        <Experience />
      </AnimatedSection>
      
      <AnimatedSection delay={0.2}>
        <Education />
      </AnimatedSection>
      
      {/* <AnimatedSection>
        <Blog />
      </AnimatedSection> */}
      
      <AnimatedSection>
        <Contact />
      </AnimatedSection>
    </>
  );
}
