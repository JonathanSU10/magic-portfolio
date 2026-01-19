import { WorkExperience } from "@/types/project.types";

export const workExperience: WorkExperience[] = [
  {
    id: "senior-fullstack-engineer",
    company: "TechFlow Solutions",
    role: "Senior Full Stack Engineer",
    location: "San Francisco, CA",
    startDate: "2022-03-15",
    endDate: "present",
    employmentType: "full-time",
    description: "Leading development of scalable web applications and mentoring junior developers. Focus on architecture decisions and technical leadership.",
    responsibilities: [
      "Architect and implement microservices-based solutions for enterprise clients",
      "Lead technical design sessions and code reviews for team of 8 developers",
      "Mentor junior developers through pair programming and technical guidance",
      "Collaborate with product managers to translate business requirements into technical solutions",
      "Implement CI/CD pipelines and establish coding standards across projects",
      "Conduct performance optimization and scalability assessments"
    ],
    achievements: [
      "Reduced application load time by 60% through architecture redesign and caching strategies",
      "Implemented automated testing suite that increased code coverage from 45% to 85%",
      "Led successful migration of legacy monolith to microservices architecture",
      "Mentored 5 junior developers who were promoted within 18 months",
      "Established technical documentation standards adopted company-wide"
    ],
    technologies: [
      "React", "Node.js", "TypeScript", "PostgreSQL", "Redis", 
      "Docker", "Kubernetes", "AWS", "GraphQL", "Next.js"
    ],
    projects: ["ecommerce-platform", "realtime-analytics-dashboard", "api-gateway"]
  },
  {
    id: "fullstack-developer",
    company: "InnovateLab",
    role: "Full Stack Developer",
    location: "Austin, TX",
    startDate: "2020-06-01",
    endDate: "2022-03-14",
    employmentType: "full-time",
    description: "Developed and maintained web applications for various clients across different industries. Focused on delivering high-quality, maintainable code.",
    responsibilities: [
      "Develop responsive web applications using React and Node.js",
      "Design and implement RESTful APIs with proper authentication and authorization",
      "Collaborate with UX/UI designers to implement pixel-perfect interfaces",
      "Write unit and integration tests to ensure code quality and reliability",
      "Participate in agile development processes including sprint planning and retrospectives",
      "Troubleshoot and debug production issues in a timely manner"
    ],
    achievements: [
      "Delivered 15+ client projects on time and within budget",
      "Implemented design system that reduced development time by 30%",
      "Created reusable component library adopted by 3 different project teams",
      "Improved application performance by 45% through optimization techniques",
      "Received 'Developer of the Year' award for exceptional code quality"
    ],
    technologies: [
      "React", "Node.js", "JavaScript", "MongoDB", "Express", 
      "Sass", "Git", "Jest", "Webpack", "REST APIs"
    ],
    projects: ["user-portal", "content-management", "dashboard-analytics"]
  },
  {
    id: "frontend-developer",
    company: "DigitalCraft",
    role: "Frontend Developer",
    location: "Remote",
    startDate: "2019-01-15",
    endDate: "2020-05-31",
    employmentType: "contract",
    description: "Specialized in creating modern, responsive user interfaces with focus on performance and accessibility. Worked with various startups and established companies.",
    responsibilities: [
      "Build responsive and accessible user interfaces using modern JavaScript frameworks",
      "Implement state management solutions with Redux and Context API",
      "Optimize web applications for maximum speed and scalability",
      "Ensure cross-browser compatibility and responsive design",
      "Collaborate with backend developers to integrate frontend with REST APIs",
      "Participate in code reviews and contribute to frontend best practices"
    ],
    achievements: [
      "Developed 12 client websites with 98%+ Lighthouse performance scores",
      "Implemented accessibility improvements that achieved WCAG 2.1 AA compliance",
      "Created component library that reduced development time by 40%",
      "Optimized build process reducing bundle size by 35%",
      "Mentored 3 intern developers in frontend best practices"
    ],
    technologies: [
      "React", "JavaScript", "CSS3", "HTML5", "Redux", 
      "Sass", "Webpack", "Jest", "Cypress", "Figma"
    ],
    projects: ["portfolio-website", "landing-pages", "component-library"]
  },
  {
    id: "software-engineer-intern",
    company: "DataTech Systems",
    role: "Software Engineering Intern",
    location: "Seattle, WA",
    startDate: "2018-06-01",
    endDate: "2018-12-31",
    employmentType: "internship",
    description: "Gained hands-on experience in software development lifecycle and contributed to production applications. Focused on learning industry best practices and modern development tools.",
    responsibilities: [
      "Assist in developing and maintaining web applications",
      "Write clean, well-documented code following company coding standards",
      "Participate in daily standups and sprint planning meetings",
      "Debug and fix issues reported by QA team",
      "Learn and apply software engineering best practices",
      "Contribute to technical documentation and user guides"
    ],
    achievements: [
      "Successfully contributed to 3 production releases",
      "Implemented feature that improved user experience ratings by 15%",
      "Created automated test scripts that reduced manual testing time by 50%",
      "Received outstanding internship evaluation from engineering manager",
      "Offered full-time position (declined to pursue other opportunities)"
    ],
    technologies: [
      "JavaScript", "Python", "HTML/CSS", "Git", "JIRA", 
      "Jenkins", "MySQL", "Bootstrap", "jQuery"
    ],
    projects: ["internal-dashboard", "data-visualization-tool"]
  }
];

// Helper functions
export const getCurrentPosition = (): WorkExperience | undefined => {
  return workExperience.find(exp => exp.endDate === "present");
};

export const getExperienceByCompany = (company: string): WorkExperience[] => {
  return workExperience.filter(exp => exp.company.toLowerCase().includes(company.toLowerCase()));
};

export const getExperienceByRole = (role: string): WorkExperience[] => {
  return workExperience.filter(exp => exp.role.toLowerCase().includes(role.toLowerCase()));
};

export const getRecentExperience = (years: number = 5): WorkExperience[] => {
  const cutoffDate = new Date();
  cutoffDate.setFullYear(cutoffDate.getFullYear() - years);
  
  return workExperience.filter(exp => {
    const endDate = exp.endDate === "present" ? new Date() : new Date(exp.endDate);
    return endDate >= cutoffDate;
  });
};

export const getTotalYearsOfExperience = (): number => {
  const today = new Date();
  let totalMonths = 0;
  
  workExperience.forEach(exp => {
    const startDate = new Date(exp.startDate);
    const endDate = exp.endDate === "present" ? today : new Date(exp.endDate);
    
    const months = (endDate.getFullYear() - startDate.getFullYear()) * 12 + 
                   (endDate.getMonth() - startDate.getMonth());
    totalMonths += months;
  });
  
  return Math.floor(totalMonths / 12);
};

export const getExperienceByTechnology = (technology: string): WorkExperience[] => {
  return workExperience.filter(exp => 
    exp.technologies.some(tech => 
      tech.toLowerCase().includes(technology.toLowerCase())
    )
  );
};

export const getTimeline = (): WorkExperience[] => {
  return [...workExperience].sort((a, b) => {
    // Sort by start date (newest first)
    return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
  });
};