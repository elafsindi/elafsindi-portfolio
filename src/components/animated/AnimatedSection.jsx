import { motion } from 'framer-motion';

export default function AnimatedSection({ children, id, className, delay = 0 }) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 100, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        delay: delay,
        type: "spring", 
        bounce: 0.4 
      }}
    >
      {children}
    </motion.section>
  );
}
