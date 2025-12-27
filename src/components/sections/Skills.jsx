import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import SkillCard from '../ui/SkillCard';
import { skills } from '../../data/skills';

const Skills = () => {
  const categories = [
    { title: 'Languages', data: skills.languages },
    { title: 'Frontend', data: skills.frontend },
    { title: 'Backend', data: skills.backend },
    { title: 'Tools & Technologies', data: skills.tools },
  ];

  return (
    <section id="skills" className="py-20 bg-dark-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Skills & Technologies</SectionTitle>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Technologies and tools I work with to bring ideas to life.
        </p>

        {/* Skills Categories */}
        <div className="space-y-16">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {category.data.map((skill, index) => (
                  <SkillCard key={index} skill={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
