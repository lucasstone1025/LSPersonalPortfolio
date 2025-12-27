import { motion } from 'framer-motion';

const SectionTitle = ({ children, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`mb-12 ${className}`}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
        {children}
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-primary-500 via-accent-purple to-accent-cyan rounded-full"></div>
    </motion.div>
  );
};

export default SectionTitle;
