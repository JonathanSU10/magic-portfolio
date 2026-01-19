import { Project } from "@/types/project.types";

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "Enterprise E-commerce Platform",
    slug: "enterprise-ecommerce-platform",
    description: "A scalable, high-performance e-commerce platform serving 10M+ monthly users with complex inventory management and real-time pricing.",
    shortDescription: "Scalable e-commerce platform for enterprise clients",
    featured: true,
    date: "2024-03-15",
    category: "fullstack",
    
    problem: {
      context: "The client needed to migrate from a legacy monolithic e-commerce system that was struggling with performance during peak traffic periods and couldn't handle their growing product catalog of 500K+ items.",
      businessProblem: "High cart abandonment rates (65%) due to slow page loads during sales events, and inability to scale for Black Friday traffic which was 10x normal volume.",
      userPainPoints: [
        "Page load times exceeding 8 seconds during peak hours",
        "Frequent checkout failures during high traffic",
        "Inventory sync delays causing overselling",
        "Poor mobile experience affecting 40% of users"
      ],
      stakeholders: [
        "Product Management - needed faster feature deployment",
        "Operations - required 99.9% uptime during sales events",
        "Marketing - wanted better analytics for campaign optimization",
        "Customer Support - needed tools to handle scaling issues"
      ],
      successMetrics: [
        "Reduce page load time to < 2 seconds",
        "Achieve 99.9% uptime during peak traffic",
        "Handle 50K concurrent users",
        "Decrease cart abandonment by 40%"
      ]
    },
    
    challenges: {
      technical: [
        "Microservices architecture design for high scalability",
        "Real-time inventory synchronization across multiple warehouses",
        "Payment processing at scale with fraud detection",
        "Search and recommendation engine optimization"
      ],
      business: [
        "Zero downtime migration from legacy system",
        "Maintaining SEO rankings during transition",
        "Training 50+ staff on new admin interface",
        "Compliance with PCI-DSS standards"
      ],
      constraints: [
        "Budget limitation of $500K for initial phase",
        "Must integrate with 15 existing enterprise systems",
        "9-month delivery timeline",
        "Team of 8 developers with mixed experience levels"
      ]
    },
    
    solution: {
      approach: "Implemented a cloud-native microservices architecture using event-driven design with eventual consistency patterns. Used a strangler fig pattern for gradual migration while maintaining business continuity.",
      architecture: "Event-driven microservices with CQRS pattern, distributed caching layer, and service mesh for inter-service communication. Implemented circuit breakers and bulkheads for resilience.",
      keyDecisions: [
        {
          decision: "Choose Node.js with NestJS for backend services",
          reason: "Team expertise, excellent performance for I/O bound operations, and rich ecosystem for e-commerce features",
          alternatives: ["Java Spring Boot", "Go", "Python Django"],
          tradeoffs: "Sacrificed some memory efficiency for development speed and team productivity"
        },
        {
          decision: "Implement event sourcing for order management",
          reason: "Audit trail requirements, ability to rebuild state, and support for complex business workflows",
          alternatives: ["Traditional CRUD with transactions", "CQRS without event sourcing"],
          tradeoffs: "Increased complexity in event handling and eventual consistency management"
        },
        {
          decision: "Use Redis for session management and caching",
          reason: "High performance, persistence options, and pub/sub capabilities for real-time features",
          alternatives: ["Memcached", "In-memory Node.js cache"],
          tradeoffs: "Additional operational complexity but significant performance gains"
        }
      ],
      designPatterns: [
        "CQRS (Command Query Responsibility Segregation)",
        "Event Sourcing",
        "Circuit Breaker",
        "Bulkhead",
        "Strangler Fig (for migration)"
      ]
    },
    
    technologies: [
      {
        name: "Node.js/NestJS",
        category: "framework",
        proficiency: "expert",
        reason: "Team expertise and excellent performance for I/O bound operations. NestJS provides excellent architecture patterns and TypeScript support.",
        alternatives: ["Java Spring Boot", "Go"]
      },
      {
        name: "React/Next.js",
        category: "framework",
        proficiency: "advanced",
        reason: "Server-side rendering for SEO, excellent performance, and component-based architecture for maintainability.",
        alternatives: ["Vue.js", "Angular"]
      },
      {
        name: "PostgreSQL",
        category: "database",
        proficiency: "advanced",
        reason: "ACID compliance for financial transactions, JSON support for flexible product data, and excellent query performance.",
        alternatives: ["MySQL", "MongoDB"]
      },
      {
        name: "Redis",
        category: "database",
        proficiency: "intermediate",
        reason: "High-performance caching, session storage, and pub/sub for real-time inventory updates.",
        alternatives: ["Memcached", "Elasticsearch"]
      },
      {
        name: "Kubernetes",
        category: "infrastructure",
        proficiency: "intermediate",
        reason: "Container orchestration for scaling microservices, rolling updates, and self-healing capabilities.",
        alternatives: ["Docker Swarm", "AWS ECS"]
      },
      {
        name: "AWS",
        category: "infrastructure",
        proficiency: "advanced",
        reason: "Comprehensive cloud services, global infrastructure, and enterprise support for compliance requirements.",
        alternatives: ["Google Cloud", "Azure"]
      }
    ],
    
    results: {
      metrics: [
        {
          name: "Page Load Time",
          value: "1.2 seconds",
          improvement: "85% improvement from 8 seconds"
        },
        {
          name: "Uptime During Peak",
          value: "99.95%",
          improvement: "99.95% uptime vs previous 95%"
        },
        {
          name: "Concurrent Users",
          value: "75K",
          improvement: "50% increase from 50K target"
        },
        {
          name: "Cart Abandonment",
          value: "32%",
          improvement: "49% reduction from 65%"
        }
      ],
      businessImpact: "Enabled $50M annual revenue growth through improved conversion rates and ability to handle Black Friday traffic. Reduced operational costs by 30% through automated scaling.",
      technicalImpact: "System now handles 10x traffic with sub-2-second response times. Event sourcing provides complete audit trail for compliance. Microservices architecture enables independent scaling of services.",
      lessonsLearned: [
        "Event-driven architecture requires significant upfront investment in infrastructure and monitoring",
        "Gradual migration strategy with strangler fig pattern minimized business risk",
        "Invest in comprehensive observability from day one",
        "Team training on microservices patterns was critical for success"
      ]
    },
    
    implementation: {
      keyFeatures: [
        "Real-time inventory synchronization across 12 warehouses",
        "Personalized product recommendations using collaborative filtering",
        "Fraud detection using machine learning models",
        "Progressive web app for offline shopping experience"
      ],
      technicalDecisions: [
        {
          decision: "Implement service mesh with Istio",
          context: "Needed advanced traffic management and security between microservices",
          outcome: "Achieved fine-grained traffic control and automatic mTLS encryption"
        },
        {
          decision: "Use GraphQL for frontend API",
          context: "Frontend needed flexible data fetching to avoid over-fetching",
          outcome: "Reduced data transfer by 40% and improved frontend performance"
        }
      ],
      codeSamples: [
        {
          title: "Event Handler for Inventory Updates",
          description: "Real-time inventory synchronization using Redis pub/sub",
          language: "typescript",
          code: `@Injectable()
export class InventoryService {
  constructor(
    private readonly redis: RedisService,
    private readonly eventBus: EventBus
  ) {
    this.redis.subscribe('inventory-updates', this.handleInventoryUpdate.bind(this));
  }

  private async handleInventoryUpdate(message: InventoryUpdateEvent) {
    // Validate inventory constraints
    const isValid = await this.validateInventory(message);
    
    if (isValid) {
      // Update local cache
      await this.updateCache(message);
      
      // Publish event for dependent services
      this.eventBus.publish(new InventoryUpdatedEvent(message));
    } else {
      // Handle inventory conflict
      this.eventBus.publish(new InventoryConflictEvent(message));
    }
  }
}`,
          explanation: "This event-driven approach ensures real-time inventory consistency across all services while maintaining system resilience through proper error handling and validation."
        }
      ]
    },
    
    images: [
      {
        src: "/images/projects/ecommerce/architecture-diagram.png",
        alt: "E-commerce platform architecture diagram"
      },
      {
        src: "/images/projects/ecommerce/dashboard.png",
        alt: "Admin dashboard showing real-time metrics"
      }
    ],
    
    links: {
      live: "https://enterprise-ecommerce-demo.com",
      repository: "https://github.com/company/ecommerce-platform",
      documentation: "https://docs.ecommerce-platform.com"
    }
  },
  
  {
    id: "realtime-analytics-dashboard",
    title: "Real-time Analytics Dashboard",
    slug: "realtime-analytics-dashboard",
    description: "A high-performance analytics dashboard processing 1M+ events per second with sub-second query response times for business intelligence.",
    shortDescription: "Real-time analytics processing 1M+ events/second",
    featured: true,
    date: "2023-11-20",
    category: "backend",
    
    problem: {
      context: "Marketing team needed real-time insights from user behavior data to optimize campaigns, but existing batch processing system had 6-hour delays.",
      businessProblem: "Marketing campaigns were optimized based on outdated data, resulting in 25% lower conversion rates than potential.",
      userPainPoints: [
        "6-hour delay in campaign performance data",
        "Inability to respond to real-time market trends",
        "Complex SQL queries taking minutes to execute",
        "Manual report generation process"
      ],
      stakeholders: [
        "Marketing Team - needed real-time campaign insights",
        "Product Management - wanted user behavior analytics",
        "Executive Leadership - required real-time business metrics",
        "Data Science - needed streaming data for ML models"
      ],
      successMetrics: [
        "Sub-second query response times",
        "Process 1M+ events per second",
        "99.9% data accuracy",
        "Reduce report generation time by 90%"
      ]
    },
    
    challenges: {
      technical: [
        "Stream processing at scale with exactly-once semantics",
        "Complex windowing operations for time-based aggregations",
        "Integration with existing data warehouse",
        "Real-time alerting system for anomaly detection"
      ],
      business: [
        "Training non-technical users on new dashboard interface",
        "Data governance and access control implementation",
        "Budget constraints for infrastructure scaling",
        "Integration with 20+ existing data sources"
      ],
      constraints: [
        "Existing PostgreSQL warehouse as source of truth",
        "Team size of 4 developers for 6-month timeline",
        "Budget of $200K for initial implementation",
        "Must support historical data analysis alongside real-time"
      ]
    },
    
    solution: {
      approach: "Implemented lambda architecture combining batch and stream processing layers. Used Apache Kafka for stream ingestion with Apache Flink for complex event processing and real-time analytics.",
      architecture: "Three-tier architecture: Ingestion layer (Kafka), Stream processing layer (Flink), and Serving layer (Apache Druid with PostgreSQL fallback for historical data).",
      keyDecisions: [
        {
          decision: "Use Apache Kafka for event streaming",
          reason: "Battle-tested at scale, exactly-once delivery semantics, and excellent integration ecosystem",
          alternatives: ["Apache Pulsar", "AWS Kinesis", "Google Pub/Sub"],
          tradeoffs: "Operational complexity vs performance and reliability"
        },
        {
          decision: "Implement Apache Druid for real-time analytics",
          reason: "Sub-second query performance on time-series data, columnar storage, and native support for real-time ingestion",
          alternatives: ["ClickHouse", "Elasticsearch", "InfluxDB"],
          tradeoffs: "Higher memory usage but exceptional query performance"
        },
        {
          decision: "Node.js API layer with PostgreSQL connection pooling",
          reason: "Team familiarity and good performance for API gateway pattern with existing database",
          alternatives: ["Python/FastAPI", "Go/Gin", "Java/Spring WebFlux"],
          tradeoffs: "Memory overhead vs development productivity"
        }
      ],
      designPatterns: [
        "Lambda Architecture",
        "Event Sourcing",
        "CQRS",
        "Fan-out pattern for data distribution"
      ]
    },
    
    technologies: [
      {
        name: "Apache Kafka",
        category: "infrastructure",
        proficiency: "advanced",
        reason: "Enterprise-grade streaming platform with proven track record, exactly-once semantics, and robust ecosystem integration.",
        alternatives: ["AWS Kinesis", "Google Pub/Sub"]
      },
      {
        name: "Apache Flink",
        category: "framework",
        proficiency: "intermediate",
        reason: "Stateful stream processing with exactly-once guarantees, complex event processing capabilities, and good performance.",
        alternatives: ["Apache Storm", "Spark Streaming"]
      },
      {
        name: "Apache Druid",
        category: "database",
        proficiency: "intermediate",
        reason: "Columnar storage optimized for time-series analytics, sub-second query performance, and real-time ingestion capabilities.",
        alternatives: ["ClickHouse", "TimescaleDB"]
      },
      {
        name: "Node.js/Express",
        category: "framework",
        proficiency: "expert",
        reason: "Team expertise, excellent performance for API gateway pattern, and rich ecosystem for integration.",
        alternatives: ["Python/FastAPI", "Go/Gin"]
      },
      {
        name: "PostgreSQL",
        category: "database",
        proficiency: "advanced",
        reason: "Existing data warehouse, ACID compliance, and excellent analytical query performance for historical data.",
        alternatives: ["MySQL", "Amazon Redshift"]
      },
      {
        name: "Docker/Kubernetes",
        category: "infrastructure",
        proficiency: "intermediate",
        reason: "Containerization for consistent deployment and orchestration for scaling stream processing jobs.",
        alternatives: ["AWS ECS", "Nomad"]
      }
    ],
    
    results: {
      metrics: [
        {
          name: "Event Processing Rate",
          value: "1.2M events/second",
          improvement: "120x improvement from batch processing"
        },
        {
          name: "Query Response Time",
          value: "0.3 seconds",
          improvement: "99.5% improvement from 60 seconds"
        },
        {
          name: "Data Accuracy",
          value: "99.95%",
          improvement: "Improved from 98% with batch processing"
        },
        {
          name: "Report Generation Time",
          value: "2 minutes",
          improvement: "90% reduction from 20 minutes"
        }
      ],
      businessImpact: "Marketing campaigns improved by 35% conversion rates through real-time optimization. Executive decision-making accelerated with real-time business metrics dashboard.",
      technicalImpact: "System processes 1.2M events/second with sub-second latency. Lambda architecture provides both real-time insights and historical analysis capabilities.",
      lessonsLearned: [
        "Stream processing requires significant upfront investment in monitoring and observability",
        "Data modeling for stream processing differs significantly from batch processing",
        "Exactly-once semantics are critical for business-critical applications",
        "Gradual rollout with shadow traffic helped identify performance bottlenecks"
      ]
    },
    
    implementation: {
      keyFeatures: [
        "Real-time campaign performance monitoring",
        "User behavior funnel analysis with drop-off detection",
        "Anomaly detection for business metrics",
        "Custom dashboard builder for marketing teams"
      ],
      technicalDecisions: [
        {
          decision: "Implement exactly-once processing with Kafka transactions",
          context: "Financial data accuracy requirements for campaign attribution",
          outcome: "Achieved 99.95% data accuracy with no duplicate processing"
        },
        {
          decision: "Use materialized views in Druid for common queries",
          context: "Frequent dashboard queries needed sub-second response times",
          outcome: "Reduced 90% of queries to under 100ms response time"
        }
      ],
      codeSamples: [
        {
          title: "Flink Stream Processing Job",
          description: "Real-time event aggregation with windowing operations",
          language: "java",
          code: `public class CampaignAnalyticsJob {
    public static void main(String[] args) throws Exception {
        StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();
        
        // Kafka source for user events
        FlinkKafkaConsumer<UserEvent> kafkaConsumer = new FlinkKafkaConsumer<>(
            "user-events",
            new UserEventSchema(),
            kafkaProps
        );
        
        DataStream<UserEvent> events = env.addSource(kafkaConsumer);
        
        // Windowed aggregation for campaign metrics
        DataStream<CampaignMetrics> campaignMetrics = events
            .keyBy(event -> event.getCampaignId())
            .window(TumblingEventTimeWindows.of(Time.minutes(5)))
            .aggregate(new CampaignAggregator())
            .name("campaign-metrics-aggregation");
        
        // Real-time alerts for anomaly detection
        campaignMetrics
            .keyBy(metrics -> metrics.getCampaignId())
            .process(new AnomalyDetector())
            .addSink(new AlertSink())
            .name("anomaly-detection");
        
        env.execute("Campaign Analytics Job");
    }
}`,
          explanation: "This Flink job processes user events in real-time, aggregates campaign metrics in 5-minute windows, and detects anomalies for immediate alerts. The exactly-once processing ensures data accuracy for business-critical metrics."
        }
      ]
    },
    
    images: [
      {
        src: "/images/projects/analytics/architecture.png",
        alt: "Real-time analytics architecture diagram"
      },
      {
        src: "/images/projects/analytics/dashboard.png",
        alt: "Real-time campaign performance dashboard"
      }
    ],
    
    links: {
      repository: "https://github.com/company/analytics-dashboard",
      documentation: "https://docs.analytics-platform.com"
    }
  }
];

// Helper functions
export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

export const getProjectsByCategory = (category: Project['category']): Project[] => {
  return projects.filter(project => project.category === category);
};

export const getAllProjectSlugs = (): string[] => {
  return projects.map(project => project.slug);
};