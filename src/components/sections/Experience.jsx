import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { experienceData } from '../../data/experience';
import { HiBriefcase, HiLocationMarker, HiCalendar, HiOfficeBuilding } from 'react-icons/hi';
import EarthElement from '../backgrounds/EarthElement';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-dark-bg/60 backdrop-blur-sm relative overflow-hidden">
      {/* Earth Element - Adjusted position to balance the page */}
      <EarthElement position="top-left" size="small" glowColor="accent-cyan" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle>Experience</SectionTitle>

        <div className="max-w-4xl mx-auto space-y-8">
          {experienceData.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-dark-secondary/90 backdrop-blur-sm rounded-2xl border border-dark-accent p-8"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                {/* Company Logo or Fallback Icon */}
                {job.logo ? (
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center flex-shrink-0 p-2">
                    <img
                      src={job.logo}
                      alt={`${job.company} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ) : (
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-cyan to-primary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <HiBriefcase className="text-white text-3xl" />
                  </div>
                )}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {job.role}
                  </h3>
                  <div className="flex items-center gap-2 text-xl text-gray-300 mb-3">
                    <HiOfficeBuilding className="text-gray-400" />
                    <span>{job.company}</span>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <HiCalendar className="text-primary-500" />
                      <span>{job.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <HiLocationMarker className="text-accent-purple" />
                      <span>{job.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Responsibilities */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Key Responsibilities & Achievements</h4>
                <div className="space-y-3">
                  {job.responsibilities.map((task, taskIndex) => (
                    <motion.div
                      key={taskIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: (index * 0.1) + (taskIndex * 0.1) }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-1.5 h-1.5 bg-accent-cyan rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-gray-300">{task}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;