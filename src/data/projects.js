export const projects = [
  {
    id: 1,
    title: "TrendTracker",
    description: "A modern, responsive stock portfolio website with multiple features including charts, news, etc.",
    image: null, // Add your project screenshot path here
    techStack: ["React", "Tailwind CSS", "Vite", "Framer Motion"],
    githubUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "https://www.trendtracker.co",
    featured: true,
    longDescription: [
      "This portfolio website was designed to showcase my skills, projects, and professional journey in a clean and modern way. Built with React and styled with Tailwind CSS, it features smooth animations powered by Framer Motion.",
      "The site is fully responsive and optimized for performance, utilizing Vite for fast development and build times. It includes sections for my projects, education, skills, and a contact form integrated with EmailJS for direct communication.",
    ],
    features: [
      "Fully responsive design that works seamlessly on all devices",
      "Smooth scroll animations and interactive UI elements",
      "Contact form with EmailJS integration",
      "Dynamic project showcase with filtering capabilities",
      "Optimized for performance and SEO",
    ],
    challenges: [
      "One of the main challenges was creating a design that stands out while maintaining excellent performance.",
      "I focused on balancing visual appeal with fast load times by optimizing images and animations.",
    ],
  },
  {
    id: 2,
    title: "Computationally Exploring the Lowest-Energy Structures of Boron Nitride",
    description: "Leveraged Particle Swarm Optimization and Python to solve high-dimensional structural discovery problems, predicting stable atomic configurations for advanced materials.",
    image: "/project2_image.png",
    techStack: ["Python", "Linux", "High Performance Computing (HPC)"],
    featured: false,
    longDescription: [
      "This project was made possible by the FSU Undergraduate Research Opportunity Program (UROP) and Dr. Chen Huang at the FSU Department of Scientific Computing",
      "This involved developing a computational pipeline to solve a high-dimensional optimization problem: identifying the most stable atomic configurations of Boron Nitride. ",
      "I utilized Particle Swarm Optimization (PSO) and Density Functional Theory (DFT) to search a vast potential energy surface, managing the generation and analysis of ~900 structural candidates. ",
      "The findings, which identified the F-43m space group as the global energy minimum, were presented at the Undergraduate Research Opportunity Program (UROP) Presentation April 2025.",
    ],
    features: [
      "Heuristic Search Algorithms: Implemented the CALYPSO framework, leveraging PSO to navigate complex energy landscapes via a swarm intelligence approach rather than brute-force sampling.",
      "High-Performance Computing (HPC): Managed large-scale computational jobs using VASP (Vienna Ab initio Simulation Package) to perform parallelized quantum mechanical energy calculations.",
      "Python Data Pipeline: Developed scripts to automate the extraction of enthalpy data and structural parameters from output files, streamlining the analysis of nearly 1,000 data points.",
      "Structural Convergence: Successfully identified the 216th space group (F-43m) as the optimal solution, demonstrating the efficacy of evolutionary algorithms in material science.",
    ],
    challenges: [
      "Challenge: Legacy Codebase Integration. The initial implementation of the CALYPSO environment relied on a Python 2 codebase. This created significant environment conflicts, library dependencies issues, and runtime errors when integrated with modern HPC clusters.",
      "Solution: I performed an initial code audit to patch critical syntax errors and dependency mismatches to get the program operational. Later, I successfully migrated the workflow to a modernized Python 3 version, which resolved compatibility issues and improved the reliability of the data extraction scripts."
    ],
  },
  {
    id: 3,
    title: "Another Project",
    description: "An innovative web application showcasing creative problem-solving and clean code architecture.",
    image: null,
    techStack: ["JavaScript", "TypeScript", "Next.js", "PostgreSQL"],
    githubUrl: "https://github.com/yourusername/another-project",
    liveUrl: null,
    featured: false,
    longDescription: [
      "This web application demonstrates modern full-stack development practices using Next.js and TypeScript. The project emphasizes type safety, server-side rendering, and efficient data management.",
      "Built with scalability in mind, it features a PostgreSQL database for robust data persistence and includes comprehensive error handling and validation.",
    ],
    features: [
      "Server-side rendering for improved SEO and performance",
      "TypeScript for enhanced code quality and developer experience",
      "RESTful API design with comprehensive documentation",
      "PostgreSQL database with optimized queries",
      "Responsive design with mobile-first approach",
    ],
    challenges: [
      "Implementing complex state management while maintaining type safety across the entire stack.",
      "This resulted in a more maintainable and robust codebase with fewer runtime errors.",
    ],
  },
];
