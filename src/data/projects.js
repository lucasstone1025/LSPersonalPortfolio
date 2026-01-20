export const projects = [
  {
    id: 1,
    title: "TrendTracker",
    description: "An end-to-end stock monitoring application that enables users to track market trends, visualize live charts, and configure custom notification triggers for equity movements.",
    image: "/trendtracker_image.png",
    imageFit: "cover", // "cover" fills space, "contain" shows full image
    techStack: ["React", "JavaScript", "Node.js", "Python", "Docker"],
    githubUrl: "https://github.com/lucasstone1025/Stock-Portfolio-Tracker",
    liveUrl: "https://www.trendtracker.co",
    featured: true,
    longDescription: [
      "TrendTracker is a responsive financial tracking application designed to simplify market analysis and portfolio monitoring. ",
      "Built using a modern Client-Server architecture, the platform provides a centralized hub for viewing stock performance, analyzing real-time news via the yfinance library, and discovering new investment opportunities. ",
      "I engineered the system to bridge a React-driven frontend with a robust Node.js backend, utilizing a specialized Python script to handle complex data extraction and JSON parsing for stock metrics.",
    ],
    features: [
      "Dynamic Data Visualization: Implemented interactive charts and a responsive UI using React, ensuring seamless performance across mobile and desktop devices.",
      "Automated Alert System: Developed a custom notification engine that allows users to configure and receive SMS and Email alerts based on specific stock price triggers.",
      "Multi-Language Integration: Built a bridge between the Node.js server and Python scripts to fetch high-fidelity market data, leveraging the yfinance library for real-time news and fundamental analysis.",
      "Containerized Orchestration: Utilized Docker and Docker Compose to containerize the client and server environments, ensuring consistent deployment and streamlined dependency management.",
      "Self-Hosted on my home Linux server, with the domain trendtracker.co.",
    ],
    challenges: [
      "Challenge: Front-End Migration from EJS to React. The initial version of the project utilized EJS (Embedded JavaScript templates) for server-side rendering. As the application grew, managing state across multiple pages became cumbersome, leading to slow transitions and a fragmented user experience..",
      "Solution: I refactored the entire frontend into React, moving from a traditional multi-page application to a Single Page Application (SPA). This allowed for centralized state management (via AuthContext) and a much snappier, better user experience.",
    ],
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A modern, fully responsive portfolio website built with React and Tailwind CSS, featuring smooth animations, dynamic routing, and integrated contact functionality.",
    image: "/portfolio_image.png",
    techStack: ["React", "Tailwind CSS", "Vite"],
    githubUrl: "https://github.com/lucasstone1025/LSPersonalPortfolio",
    liveUrl: "https://www.lucasastone.com",
    featured: false,
    longDescription: [
      "This portfolio website serves as a comprehensive showcase of my technical skills, projects, and professional background. Built with modern web development practices, it demonstrates proficiency in React ecosystem tools and responsive design principles.",
      "The site leverages Vite for lightning-fast development and build times, Tailwind CSS for a utility-first styling approach, and Framer Motion for fluid animations that enhance user experience without compromising performance.",
      "The architecture emphasizes component reusability, clean code organization, and scalable file structure. Each section is modular, making it easy to update content and add new features as my portfolio grows.",
    ],
    features: [
      "Dynamic Routing: Implemented React Router to create individual project detail pages, allowing for deep-linking and improved navigation structure.",
      "Responsive Design System: Utilized Tailwind CSS with custom theme configuration to ensure pixel-perfect displays across mobile, tablet, and desktop viewports.",
      "Animation Framework: Integrated Framer Motion for smooth scroll animations, page transitions, and micro-interactions that enhance user engagement.",
      "Contact Integration: Configured EmailJS for serverless email functionality, enabling direct communication through a validated contact form.",
      "Component Architecture: Built a library of reusable UI components (buttons, cards, section titles) following atomic design principles.",
      "Performance Optimization: Implemented lazy loading, optimized image handling, and efficient rendering strategies to maintain high Lighthouse scores.",
    ],
  },
  {
    id: 3,
    title: "Computationally Exploring the Lowest-Energy Structures of Boron Nitride (Undergraduate Research)",
    description: "Leveraged Particle Swarm Optimization and Python to solve high-dimensional structural discovery problems, predicting stable atomic configurations for advanced materials.",
    image: "/project2_image.png",
    imageFit: "contain", // Shows full poster without cropping
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
];
