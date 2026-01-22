import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';
import { projects } from '../data/projects';
import Button from '../components/ui/Button';
import ImageCarousel from '../components/ui/ImageCarousel';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen bg-dark-bg flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <Button onClick={() => navigate('/')}>Go Back Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-bg">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-gray-400 hover:text-primary-500 transition-colors mb-8"
        >
          <FaArrowLeft />
          <span>Back to Portfolio</span>
        </button>
      </div>

      {/* Hero Image / Carousel */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12"
      >
        {project.images && project.images.length > 0 ? (
          <ImageCarousel 
            images={project.images} 
            imageFit={project.imageFit || 'cover'}
            alt={project.title}
          />
        ) : project.image ? (
          <div className="relative overflow-hidden rounded-2xl aspect-video bg-dark-accent">
            <img
              src={project.image}
              alt={project.title}
              className={`w-full h-full ${project.imageFit === 'contain' ? 'object-contain' : 'object-cover'}`}
            />
          </div>
        ) : (
          <div className="relative overflow-hidden rounded-2xl aspect-video bg-dark-accent">
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-gray-500 text-9xl font-bold">{project.title[0]}</span>
            </div>
          </div>
        )}
      </motion.div>

      {/* Project Info */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {project.title}
          </h1>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 text-sm bg-dark-secondary text-gray-300 rounded-full border border-dark-accent"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Description */}
          <div className="prose prose-invert max-w-none mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">About the Project</h2>
            {project.longDescription && (
              <div className="space-y-4 text-gray-300">
                {project.longDescription.map((paragraph, index) => (
                  <p key={index} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            )}
          </div>

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Key Features</h2>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <span className="text-primary-500 mt-1">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Challenges & Solutions */}
          {project.challenges && project.challenges.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Challenges & Solutions</h2>
              <ul className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <span className="text-primary-500 mt-1">•</span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Links */}
          <div className="flex flex-wrap gap-4 pt-8 border-t border-dark-accent">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" className="flex items-center gap-2">
                  <FaGithub />
                  View Source Code
                </Button>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary" className="flex items-center gap-2">
                  <FaExternalLinkAlt />
                  View Live Demo
                </Button>
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;
