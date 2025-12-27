import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import Button from '../ui/Button';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { socialLinks } from '../../data/social';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-secondary to-dark-bg">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-white">Hi, I'm </span>
            <span className="text-gradient">Lucas Stone</span>
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Full-Stack Developer
          </motion.p>

          <motion.p
            className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I am Passionate about learning and growing as a developer, learning new technologies and building projects to expand my skillset.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link to="projects" smooth={true} duration={500} offset={-64}>
              <Button variant="primary">View My Work</Button>
            </Link>
            <Link to="contact" smooth={true} duration={500} offset={-64}>
              <Button variant="secondary">Get In Touch</Button>
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex gap-6 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-12 h-12 bg-dark-secondary border border-dark-accent rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:border-primary-500 hover:bg-primary-500/10 transition-all transform hover:scale-110"
            >
              <FaGithub size={24} />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-12 h-12 bg-dark-secondary border border-dark-accent rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:border-primary-500 hover:bg-primary-500/10 transition-all transform hover:scale-110"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href={`mailto:${socialLinks.email}`}
              aria-label="Email"
              className="w-12 h-12 bg-dark-secondary border border-dark-accent rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:border-primary-500 hover:bg-primary-500/10 transition-all transform hover:scale-110"
            >
              <FaEnvelope size={24} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator - Moved to right side */}
      <motion.div
        className="absolute bottom-8 right-8 hidden md:block"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.8,
          delay: 1.2,
        }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-gray-500 text-xs uppercase tracking-wider" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop',
            }}
            className="w-6 h-10 border-2 border-gray-500 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1 h-3 bg-gray-500 rounded-full"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
