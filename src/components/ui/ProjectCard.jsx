import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group relative bg-dark-secondary rounded-lg overflow-hidden border border-dark-accent hover:border-primary-500/50 transition-all duration-300"
    >
      {/* Project Image */}
      <Link to={`/project/${project.id}`}>
        <div className="relative overflow-hidden aspect-video cursor-pointer bg-dark-accent">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full bg-dark-accent flex items-center justify-center">
              <span className="text-gray-500 text-4xl font-bold">{project.title[0]}</span>
            </div>
          )}

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
        </div>
      </Link>

      {/* Content */}
      <div className="p-6">
        <Link to={`/project/${project.id}`}>
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-500 transition-colors cursor-pointer">
            {project.title}
          </h3>
        </Link>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs bg-dark-accent text-gray-300 rounded-full border border-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-primary-500 transition-colors"
            >
              <FaGithub className="text-lg" />
              <span className="text-sm">Code</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-accent-cyan transition-colors"
            >
              <FaExternalLinkAlt className="text-sm" />
              <span className="text-sm">Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
