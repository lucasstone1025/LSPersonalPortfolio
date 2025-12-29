import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { educationData } from '../../data/education';
import { HiAcademicCap, HiLocationMarker, HiCalendar, HiStar, HiBadgeCheck } from 'react-icons/hi';
import EarthElement from '../backgrounds/EarthElement';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-dark-bg/60 backdrop-blur-sm relative overflow-hidden">
      {/* Earth Element */}
      <EarthElement position="bottom-right" size="small" glowColor="primary-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle>Education</SectionTitle>

        <div className="max-w-4xl mx-auto">
          {/* Main Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-dark-secondary/90 backdrop-blur-sm rounded-2xl border border-dark-accent p-8 mb-8"
          >
            {/* Header */}
            <div className="flex items-start gap-4 mb-6">
              {/* University Logo */}
              {educationData.logo ? (
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center flex-shrink-0 p-2">
                  <img
                    src={educationData.logo}
                    alt={`${educationData.school} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
              ) : (
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-purple rounded-lg flex items-center justify-center flex-shrink-0">
                  <HiAcademicCap className="text-white text-3xl" />
                </div>
              )}
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {educationData.degree}
                </h3>
                <p className="text-xl text-gray-300 mb-3">{educationData.school}</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <HiCalendar className="text-primary-500" />
                    <span>{educationData.year}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <HiLocationMarker className="text-accent-cyan" />
                    <span>{educationData.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <HiStar className="text-accent-purple" />
                    <span>GPA: {educationData.gpa}/4.0</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Relevant Courses */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-white mb-4">Relevant Coursework</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {educationData.relevantCourses.map((course, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 bg-dark-accent p-3 rounded-lg border border-gray-800 hover:border-primary-500/50 transition-colors"
                  >
                    <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-300 text-sm">{course}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            {educationData.certifications && educationData.certifications.length > 0 && (
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-4">Certifications</h4>
                <div className="space-y-4">
                  {educationData.certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-dark-accent p-4 rounded-lg border border-gray-800 hover:border-primary-500/50 transition-all group"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-3 flex-1">
                          <HiBadgeCheck className="text-2xl text-accent-cyan flex-shrink-0 mt-1 group-hover:text-primary-500 transition-colors" />
                          <div>
                            <h5 className="text-white font-semibold mb-1">{cert.name}</h5>
                            <p className="text-gray-400 text-sm mb-1">{cert.issuer}</p>
                            <p className="text-gray-500 text-xs">{cert.date}</p>
                          </div>
                        </div>
                        {cert.credentialUrl && (
                          <a
                            href={cert.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 text-sm bg-primary-500/10 hover:bg-primary-500/20 text-primary-500 rounded-lg border border-primary-500/30 hover:border-primary-500 transition-all flex items-center gap-2 whitespace-nowrap"
                          >
                            <span>Show Credential</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Achievements */}
            {educationData.achievements && educationData.achievements.length > 0 && (
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Achievements & Activities</h4>
                <div className="space-y-3">
                  {educationData.achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-1.5 h-1.5 bg-accent-cyan rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-gray-300">{achievement}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
