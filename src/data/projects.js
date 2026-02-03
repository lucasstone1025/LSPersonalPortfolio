export const projects = [
  {
    id: 1,
    title: "TrendTracker",
    description: "An all-in-one finance management platform for tracking stocks, managing budgets, and achieving financial goals. Features real-time market data, bank account integration via Plaid API, and comprehensive budget analytics.",
    image: "/trendtracker_image.webp",
    images: [
      "/trendtracker_image.webp",
      "/trendtracker_image_2.webp",
      "/trendtracker_image_3.webp",
      "/trendtracker_image_4.webp",
    ],
    imageFit: "contain", // "cover" fills space, "contain" shows full image
    techStack: ["React 19", "Node.js 22", "Express 5", "PostgreSQL 15", "Plaid API", "Python", "Docker", "Twilio", "Finnhub API"],
    githubUrl: "https://github.com/lucasstone1025/Stock-Portfolio-Tracker",
    liveUrl: "https://www.trendtracker.co",
    featured: true,
    longDescription: [
      "TrendTracker is a comprehensive financial management platform that combines stock market tracking with personal budget management. ",
      "Built using a modern full-stack architecture with React 19 frontend and Node.js 22 backend, the platform provides real-time stock quotes, interactive charts, and automated budget tracking through Plaid API integration. ",
      "I engineered secure bank account linking, automatic transaction synchronization, AI-powered categorization, and comprehensive spending analytics to give users complete visibility into their financial health.",
    ],
    features: [
      "Real-Time Stock Tracking: Live stock quotes powered by Finnhub API with intelligent caching, interactive charts with multiple timeframes (1H, 1D, 1W, 1M, 3M, 6M), and technical indicators including RSI, MACD, and Bollinger Bands.",
      "Bank Account Integration: Securely connect bank accounts via Plaid API with automatic daily transaction synchronization, supporting multiple connected accounts with end-to-end encryption for sensitive financial data.",
      "Smart Budget Management: Set monthly or weekly spending limits by category with AI-powered transaction categorization, manual override capabilities, and real-time budget tracking with visual analytics.",
      "Automated Alert System: Configure price alerts for stocks with instant SMS/Email notifications via Twilio and Nodemailer, plus budget alerts that notify users when approaching or exceeding spending limits.",
      "Spending Analytics: Comprehensive visual insights into spending patterns with category breakdowns, trend analysis, and interactive charts powered by Recharts for data visualization.",
      "Security & Authentication: Multi-factor authentication with email/password or Google OAuth 2.0, AES-256-GCM encryption for sensitive data, rate limiting, security audit logs, and SMS phone verification.",
      "Containerized Deployment: Docker and Docker Compose setup for consistent deployment, self-hosted on home Linux server with domain trendtracker.co, and automated cron jobs for price updates and transaction syncing.",
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
    image: "/project2_image.webp",
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
