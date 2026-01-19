import { TechnicalSkill } from "@/types/project.types";

export const technicalSkills: TechnicalSkill[] = [
  // Frontend Skills
  {
    category: "frontend",
    name: "React",
    proficiency: "expert",
    years: 6,
    lastUsed: "2024-01-15",
    examples: [
      "Built complex state management systems with Redux Toolkit",
      "Implemented design systems with Storybook and Chromatic",
      "Created custom hooks for complex business logic",
      "Optimized performance with React.memo and useMemo"
    ],
    projects: ["ecommerce-platform", "realtime-analytics-dashboard", "portfolio-website"],
    learningPath: "Started with class components, transitioned to hooks, now focusing on concurrent features and server components",
    whyInteresting: "The component-based architecture and ecosystem make it perfect for building maintainable, scalable user interfaces. Love the balance between flexibility and structure."
  },
  {
    category: "frontend",
    name: "Next.js",
    proficiency: "advanced",
    years: 3,
    lastUsed: "2024-01-15",
    examples: [
      "Implemented SSR and ISR for SEO optimization",
      "Built API routes for server-side data fetching",
      "Created middleware for authentication and logging",
      "Used App Router for better project structure"
    ],
    projects: ["ecommerce-platform", "portfolio-website"],
    learningPath: "Learned from pages router to app router, focusing on server components and edge runtime optimization",
    whyInteresting: "The full-stack framework approach with built-in optimizations makes it incredibly powerful for modern web applications. The balance between DX and performance is impressive."
  },
  {
    category: "frontend",
    name: "TypeScript",
    proficiency: "expert",
    years: 4,
    lastUsed: "2024-01-15",
    examples: [
      "Implemented complex generic types for reusable components",
      "Created type-safe API clients with automatic inference",
      "Built comprehensive design system with strict typing",
      "Used conditional types for advanced type manipulation"
    ],
    projects: ["ecommerce-platform", "realtime-analytics-dashboard", "design-system"],
    learningPath: "Started with basic types, progressed to advanced features like conditional types, generics, and type inference",
    whyInteresting: "Catches errors at compile time, provides excellent IDE support, and makes code more self-documenting. Essential for large-scale applications."
  },
  {
    category: "frontend",
    name: "CSS/Sass",
    proficiency: "advanced",
    years: 7,
    lastUsed: "2024-01-15",
    examples: [
      "Implemented CSS-in-JS with styled-components",
      "Created responsive design systems with CSS Grid and Flexbox",
      "Built accessible components following WCAG guidelines",
      "Used CSS custom properties for theme management"
    ],
    projects: ["ecommerce-platform", "design-system", "portfolio-website"],
    learningPath: "Evolved from basic CSS to modern CSS features, CSS-in-JS, and design systems",
    whyInteresting: "The cascade and specificity rules are fascinating. Modern CSS features like Grid and custom properties enable powerful layouts with clean code."
  },
  
  // Backend Skills
  {
    category: "backend",
    name: "Node.js",
    proficiency: "expert",
    years: 5,
    lastUsed: "2024-01-15",
    examples: [
      "Built microservices with Express and Fastify",
      "Implemented real-time communication with Socket.IO",
      "Created CLI tools for development workflows",
      "Optimized performance with clustering and worker threads"
    ],
    projects: ["ecommerce-platform", "realtime-analytics-dashboard", "api-gateway"],
    learningPath: "Started with basic Express apps, progressed to microservices architecture, now focusing on performance optimization",
    whyInteresting: "The event-driven, non-blocking I/O model is perfect for I/O intensive applications. The vast ecosystem and JavaScript familiarity make it very productive."
  },
  {
    category: "backend",
    name: "NestJS",
    proficiency: "advanced",
    years: 3,
    lastUsed: "2024-01-15",
    examples: [
      "Implemented clean architecture with modules and services",
      "Built GraphQL APIs with Apollo Server",
      "Created custom decorators for authentication",
      "Used interceptors for logging and error handling"
    ],
    projects: ["ecommerce-platform", "api-gateway"],
    learningPath: "Learned Angular-inspired architecture patterns, focusing on dependency injection and modular design",
    whyInteresting: "Brings Angular's architecture patterns to Node.js, making backend development more structured and maintainable. Excellent for enterprise applications."
  },
  {
    category: "backend",
    name: "Python",
    proficiency: "intermediate",
    years: 2,
    lastUsed: "2023-12-01",
    examples: [
      "Built data processing pipelines with Pandas",
      "Created ML models with scikit-learn",
      "Implemented automation scripts for DevOps",
      "Built REST APIs with FastAPI"
    ],
    projects: ["data-pipeline", "ml-model-deployment"],
    learningPath: "Started with basic scripting, moved to data science applications, now exploring web frameworks",
    whyInteresting: "Excellent for data science and machine learning applications. The syntax is clean and the ecosystem is rich for scientific computing."
  },
  
  // Database Skills
  {
    category: "database",
    name: "PostgreSQL",
    proficiency: "advanced",
    years: 4,
    lastUsed: "2024-01-15",
    examples: [
      "Designed complex schemas with proper normalization",
      "Implemented advanced indexing strategies",
      "Created stored procedures and triggers",
      "Used JSONB for flexible document storage"
    ],
    projects: ["ecommerce-platform", "realtime-analytics-dashboard", "user-management"],
    learningPath: "Started with basic CRUD operations, progressed to advanced features like window functions and JSON support",
    whyInteresting: "Powerful SQL engine with excellent performance, advanced features like window functions, and great support for both relational and document data."
  },
  {
    category: "database",
    name: "Redis",
    proficiency: "intermediate",
    years: 3,
    lastUsed: "2024-01-15",
    examples: [
      "Implemented session management and caching",
      "Built pub/sub systems for real-time updates",
      "Created rate limiting with sliding windows",
      "Used Redis Streams for event sourcing"
    ],
    projects: ["ecommerce-platform", "realtime-analytics-dashboard"],
    learningPath: "Started with basic caching, moved to advanced patterns like pub/sub and streams",
    whyInteresting: "In-memory data structure store with exceptional performance. The pub/sub and streaming capabilities make it perfect for real-time applications."
  },
  {
    category: "database",
    name: "MongoDB",
    proficiency: "intermediate",
    years: 2,
    lastUsed: "2023-08-15",
    examples: [
      "Designed flexible document schemas",
      "Implemented aggregation pipelines",
      "Used change streams for real-time updates",
      "Created geospatial queries for location-based features"
    ],
    projects: ["content-management", "location-service"],
    learningPath: "Started with basic document storage, progressed to advanced aggregation and geospatial queries",
    whyInteresting: "Flexible document model perfect for rapidly changing requirements. The aggregation framework is powerful for complex data transformations."
  },
  
  // DevOps Skills
  {
    category: "devops",
    name: "Docker",
    proficiency: "advanced",
    years: 3,
    lastUsed: "2024-01-15",
    examples: [
      "Created multi-stage builds for optimized images",
      "Implemented container orchestration with Docker Compose",
      "Built CI/CD pipelines with containerized builds",
      "Used Docker for local development environments"
    ],
    projects: ["ecommerce-platform", "microservices-architecture"],
    learningPath: "Started with basic containerization, progressed to multi-stage builds and orchestration",
    whyInteresting: "Consistent environments from development to production. The layer caching and multi-stage builds enable efficient deployment workflows."
  },
  {
    category: "devops",
    name: "Kubernetes",
    proficiency: "intermediate",
    years: 2,
    lastUsed: "2024-01-15",
    examples: [
      "Deployed microservices with Helm charts",
      "Implemented autoscaling with HPA",
      "Configured ingress controllers for traffic management",
      "Set up monitoring with Prometheus and Grafana"
    ],
    projects: ["ecommerce-platform", "kubernetes-migration"],
    learningPath: "Started with basic deployments, moved to advanced concepts like operators and custom resources",
    whyInteresting: "Powerful orchestration platform for containerized applications. The declarative approach and self-healing capabilities are game-changers for production systems."
  },
  {
    category: "devops",
    name: "AWS",
    proficiency: "advanced",
    years: 4,
    lastUsed: "2024-01-15",
    examples: [
      "Architected serverless applications with Lambda",
      "Implemented CI/CD with CodePipeline and CodeBuild",
      "Configured auto-scaling groups for EC2 instances",
      "Used CloudFront for CDN and edge computing"
    ],
    projects: ["ecommerce-platform", "serverless-api", "cloud-migration"],
    learningPath: "Started with basic EC2 and S3, progressed to advanced services like Lambda, ECS, and networking",
    whyInteresting: "Comprehensive cloud platform with services for every need. The pay-as-you-go model and global infrastructure make it perfect for scalable applications."
  },
  
  // Tools and Testing
  {
    category: "tools",
    name: "Git",
    proficiency: "expert",
    years: 7,
    lastUsed: "2024-01-15",
    examples: [
      "Implemented GitFlow workflow for team collaboration",
      "Created custom hooks for code quality checks",
      "Used rebase and cherry-pick for complex merges",
      "Implemented semantic versioning with conventional commits"
    ],
    projects: ["all-projects"],
    learningPath: "Started with basic commands, progressed to advanced workflows and automation",
    whyInteresting: "Distributed version control enables powerful collaboration workflows. The staging area concept and branching model are elegant solutions to code management."
  },
  {
    category: "testing",
    name: "Jest",
    proficiency: "advanced",
    years: 4,
    lastUsed: "2024-01-15",
    examples: [
      "Implemented unit tests with 90%+ coverage",
      "Created mock implementations for external dependencies",
      "Built integration tests for API endpoints",
      "Used snapshot testing for UI components"
    ],
    projects: ["ecommerce-platform", "design-system"],
    learningPath: "Started with basic unit tests, moved to advanced mocking and integration testing",
    whyInteresting: "Excellent testing framework with great developer experience. The snapshot testing feature is perfect for UI regression testing."
  },
  {
    category: "testing",
    name: "Cypress",
    proficiency: "intermediate",
    years: 2,
    lastUsed: "2024-01-15",
    examples: [
      "Implemented end-to-end tests for critical user flows",
      "Created custom commands for reusable test actions",
      "Built visual regression tests with Percy integration",
      "Used intercept for API mocking in tests"
    ],
    projects: ["ecommerce-platform", "user-portal"],
    learningPath: "Started with basic E2E tests, progressing to advanced patterns and visual testing",
    whyInteresting: "Real browser testing with excellent debugging capabilities. The time-travel debugging feature is invaluable for test development."
  }
];

// Helper functions
export const getSkillsByCategory = (category: TechnicalSkill['category']): TechnicalSkill[] => {
  return technicalSkills.filter(skill => skill.category === category);
};

export const getSkillsByProficiency = (proficiency: TechnicalSkill['proficiency']): TechnicalSkill[] => {
  return technicalSkills.filter(skill => skill.proficiency === proficiency);
};

export const getTopSkills = (count: number = 10): TechnicalSkill[] => {
  // Sort by proficiency level and years of experience
  const proficiencyOrder = {
    'expert': 4,
    'advanced': 3,
    'intermediate': 2,
    'beginner': 1,
    'learning': 0
  };
  
  return [...technicalSkills]
    .sort((a, b) => {
      const proficiencyDiff = proficiencyOrder[b.proficiency] - proficiencyOrder[a.proficiency];
      if (proficiencyDiff !== 0) return proficiencyDiff;
      return b.years - a.years;
    })
    .slice(0, count);
};

export const getSkillsForProject = (projectId: string): TechnicalSkill[] => {
  return technicalSkills.filter(skill => 
    skill.projects.includes(projectId) || skill.projects.includes("all-projects")
  );
};

export const getAllCategories = (): string[] => {
  return [...new Set(technicalSkills.map(skill => skill.category))];
};