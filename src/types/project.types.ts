/**
 * Project case study data structure for technical portfolio
 */

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription?: string;
  featured: boolean;
  date: string; // ISO date string
  category: 'frontend' | 'backend' | 'fullstack' | 'devops' | 'mobile' | 'ai-ml';
  
  // Problem context and business value
  problem: {
    context: string;
    businessProblem: string;
    userPainPoints: string[];
    stakeholders: string[];
    successMetrics: string[];
  };
  
  // Technical challenges and constraints
  challenges: {
    technical: string[];
    business: string[];
    constraints: string[];
  };
  
  // Solution approach and architecture
  solution: {
    approach: string;
    architecture: string;
    keyDecisions: Array<{
      decision: string;
      reason: string;
      alternatives: string[];
      tradeoffs: string;
    }>;
    designPatterns: string[];
  };
  
  // Technology stack with reasoning
  technologies: Array<{
    name: string;
    category: 'language' | 'framework' | 'database' | 'tool' | 'infrastructure' | 'testing';
    proficiency: 'expert' | 'advanced' | 'intermediate' | 'learning';
    reason: string;
    alternatives: string[];
  }>;
  
  // Results and impact
  results: {
    metrics: Array<{
      name: string;
      value: string;
      improvement: string;
    }>;
    businessImpact: string;
    technicalImpact: string;
    lessonsLearned: string[];
  };
  
  // Implementation details
  implementation: {
    keyFeatures: string[];
    technicalDecisions: Array<{
      decision: string;
      context: string;
      outcome: string;
    }>;
    codeSamples: Array<{
      title: string;
      description: string;
      code: string;
      language: string;
      explanation: string;
    }>;
  };
  
  // Media and links
  images?: Array<{
    src: string;
    alt: string;
    caption?: string;
  }>;
  links?: {
    live?: string;
    repository?: string;
    documentation?: string;
    demo?: string;
  };
}

export interface TechnicalSkill {
  category: 'frontend' | 'backend' | 'devops' | 'database' | 'tools' | 'cloud' | 'testing';
  name: string;
  proficiency: 'expert' | 'advanced' | 'intermediate' | 'beginner' | 'learning';
  years: number;
  lastUsed: string; // ISO date string
  examples: string[];
  projects: string[]; // Project IDs where this skill was used
  learningPath: string;
  whyInteresting: string;
}

export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string; // ISO date string
  endDate: string; // ISO date string or 'present'
  employmentType: 'full-time' | 'contract' | 'freelance' | 'internship';
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  projects: string[]; // Project IDs
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string; // ISO date string
  category: 'architecture' | 'problem-solving' | 'tutorials' | 'best-practices' | 'comparisons';
  tags: string[];
  readTime: number; // minutes
  featured: boolean;
}

// Helper types
export type SkillCategory = 'frontend' | 'backend' | 'devops' | 'database' | 'tools' | 'cloud' | 'testing';
export type ProficiencyLevel = 'expert' | 'advanced' | 'intermediate' | 'beginner' | 'learning';
export type ProjectCategory = 'frontend' | 'backend' | 'fullstack' | 'devops' | 'mobile' | 'ai-ml';