import SectionTitle from '../ui/SectionTitle';
import ProjectCard from '../ui/ProjectCard';
import { projects } from '../../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>My Projects</SectionTitle>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Here are some of the projects I've built to learn and grow as a developer.
          Each project represents a step forward in my journey.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
