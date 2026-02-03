import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { aboutData } from '../../data/about';
import { HiCheckCircle } from 'react-icons/hi';
import EarthElement from '../backgrounds/EarthElement';

const About = () => {
  return (
    <section id="about" className="py-20 bg-dark-secondary/60 backdrop-blur-sm relative overflow-hidden">
      {/* Earth Element */}
      <EarthElement position="top-left" size="medium" glowColor="nebula-coral" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle>About Me</SectionTitle>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image/Avatar Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-primary-500 via-accent-purple to-accent-cyan p-1">
                <div className="w-full h-full rounded-2xl bg-dark-bg flex items-center justify-center overflow-hidden">
                  {/* Profile image or emoji placeholder */}
                  {aboutData.photo ? (
                    <img
                      src={aboutData.photo}
                      alt="Profile"
                      loading="lazy"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  ) : (
                    <div className="text-8xl text-gray-600">👨‍💻</div>
                  )}
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-500/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent-purple/20 rounded-full blur-2xl"></div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              {aboutData.bio}
            </p>

            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              {aboutData.currentFocus}
            </p>

            {/* Highlights */}
            <div className="space-y-3">
              {aboutData.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <HiCheckCircle className="text-primary-500 text-2xl flex-shrink-0 mt-1" />
                  <span className="text-gray-300">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
