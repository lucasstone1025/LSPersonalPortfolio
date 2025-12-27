import { motion } from 'framer-motion';
import * as Icons from 'react-icons/si';

const SkillCard = ({ skill }) => {
  // Dynamically get the icon component
  const IconComponent = Icons[skill.icon];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="flex flex-col items-center justify-center p-6 bg-dark-secondary rounded-lg border border-dark-accent hover:border-primary-500/50 hover:shadow-lg hover:shadow-primary-500/20 transition-all duration-300 group"
    >
      {IconComponent && (
        <IconComponent className="text-5xl mb-3 text-gray-400 group-hover:text-primary-500 transition-colors duration-300" />
      )}
      <span className="text-gray-300 group-hover:text-white font-medium text-center transition-colors duration-300">
        {skill.name}
      </span>
    </motion.div>
  );
};

export default SkillCard;
