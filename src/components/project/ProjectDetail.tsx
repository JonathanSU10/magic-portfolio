import React, { useMemo } from "react";
import { 
  Column, 
  Row, 
  Heading, 
  Text, 
  Badge,
  Button,
  Icon
} from "@once-ui-system/core";
import { Project } from "@/types/project.types";
import Link from "next/link";

interface ProjectDetailProps {
  project: Project;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const renderMetrics = () => {
    if (!project.results?.metrics || project.results.metrics.length === 0) {
      return null;
    }

    return (
      <Column gap="16">
        <Heading as="h3" variant="heading-strong-m">
          Key Results
        </Heading>
        <Row gap="24" wrap>
          {project.results.metrics.map((metric, index) => (
            <Column key={index} gap="4">
              <Text variant="display-strong-s" onBackground="brand-strong">
                {metric.value}
              </Text>
              <Text variant="body-default-s" onBackground="neutral-medium">
                {metric.name}
              </Text>
              <Text variant="body-default-s" weight="strong" onBackground="success-strong">
                {metric.improvement}
              </Text>
            </Column>
          ))}
        </Row>
      </Column>
    );
  };

  const renderChallenges = () => {
    if (!project.challenges) return null;

    return (
      <Column gap="16">
        <Heading as="h3" variant="heading-strong-m">
          Challenges Addressed
        </Heading>
        <Column gap="12">
          {project.challenges.technical.length > 0 && (
            <Column gap="8">
              <Text variant="body-default-s" weight="strong">
                Technical Challenges
              </Text>
              <ul>
                {project.challenges.technical.map((challenge, index) => (
                  <li key={index}>
                    <Text variant="body-default-s" onBackground="neutral-medium">
                      {challenge}
                    </Text>
                  </li>
                ))}
              </ul>
            </Column>
          )}
          
          {project.challenges.business.length > 0 && (
            <Column gap="8">
              <Text variant="body-default-s" weight="strong">
                Business Challenges
              </Text>
              <ul>
                {project.challenges.business.map((challenge, index) => (
                  <li key={index}>
                    <Text variant="body-default-s" onBackground="neutral-medium">
                      {challenge}
                    </Text>
                  </li>
                ))}
              </ul>
            </Column>
          )}
        </Column>
      </Column>
    );
  };

  const renderKeyDecisions = () => {
    if (!project.solution?.keyDecisions || project.solution.keyDecisions.length === 0) {
      return null;
    }

    return (
      <Column gap="16">
        <Heading as="h3" variant="heading-strong-m">
          Key Technical Decisions
        </Heading>
        <Column gap="20">
          {project.solution.keyDecisions.map((decision, index) => (
            <Column key={index} gap="12" padding="16" border="neutral-alpha-weak" radius="m">
              <Text variant="body-default-m" weight="strong">
                {decision.decision}
              </Text>
              <Column gap="8">
                <Text variant="body-default-s" weight="strong" onBackground="neutral-strong">
                  Reasoning:
                </Text>
                <Text variant="body-default-s" onBackground="neutral-medium">
                  {decision.reason}
                </Text>
              </Column>
              {decision.alternatives.length > 0 && (
                <Column gap="8">
                  <Text variant="body-default-s" weight="strong" onBackground="neutral-strong">
                    Considered Alternatives:
                  </Text>
                  <ul>
                    {decision.alternatives.map((alt, altIndex) => (
                      <li key={altIndex}>
                        <Text variant="body-default-s" onBackground="neutral-medium">
                          {alt}
                        </Text>
                      </li>
                    ))}
                  </ul>
                </Column>
              )}
              {decision.tradeoffs && (
                <Column gap="8">
                  <Text variant="body-default-s" weight="strong" onBackground="neutral-strong">
                    Trade-offs:
                  </Text>
                  <Text variant="body-default-s" onBackground="neutral-medium">
                    {decision.tradeoffs}
                  </Text>
                </Column>
              )}
            </Column>
          ))}
        </Column>
      </Column>
    );
  };

  const renderTechnologies = () => {
    if (!project.technologies || project.technologies.length === 0) {
      return null;
    }

    // Group technologies by category
    const groupedTech = project.technologies.reduce((acc, tech) => {
      if (!acc[tech.category]) {
        acc[tech.category] = [];
      }
      acc[tech.category].push(tech);
      return acc;
    }, {} as Record<string, typeof project.technologies>);

    return (
      <Column gap="16">
        <Heading as="h3" variant="heading-strong-m">
          Technology Stack
        </Heading>
        <Column gap="20">
          {Object.entries(groupedTech).map(([category, techs]) => (
            <Column key={category} gap="12">
              <Text variant="body-default-s" weight="strong">
                {category}
              </Text>
              <Row gap="8" wrap>
                {techs.map((tech, index) => (
                  <Badge key={index}>
                    {tech.name}
                  </Badge>
                ))}
              </Row>
            </Column>
          ))}
        </Column>
      </Column>
    );
  };

  const renderCodeSamples = () => {
    if (!project.implementation?.codeSamples || project.implementation.codeSamples.length === 0) {
      return null;
    }

    return (
      <Column gap="16">
        <Heading as="h3" variant="heading-strong-m">
          Code Implementation
        </Heading>
        <Column gap="20">
          {project.implementation.codeSamples.map((sample, index) => (
            <Column key={index} gap="12">
              <Text variant="body-default-m" weight="strong">
                {sample.title}
              </Text>
              {sample.description && (
                <Text variant="body-default-s" onBackground="neutral-medium">
                  {sample.description}
                </Text>
              )}
              <pre style={{
                background: 'var(--neutral-background-medium)',
                padding: '16px',
                borderRadius: '8px',
                overflow: 'auto',
                fontSize: '14px',
                fontFamily: 'var(--font-code)'
              }}>
                <code>{sample.code}</code>
              </pre>
              <Text variant="body-default-s" onBackground="neutral-medium">
                {sample.explanation}
              </Text>
            </Column>
          ))}
        </Column>
      </Column>
    );
  };

  const renderLessonsLearned = () => {
    if (!project.results?.lessonsLearned || project.results.lessonsLearned.length === 0) {
      return null;
    }

    return (
      <Column gap="16">
        <Heading as="h3" variant="heading-strong-m">
          Lessons Learned
        </Heading>
        <ul>
          {project.results.lessonsLearned.map((lesson, index) => (
            <li key={index} style={{ marginBottom: '8px' }}>
              <Text variant="body-default-s" onBackground="neutral-medium">
                {lesson}
              </Text>
            </li>
          ))}
        </ul>
      </Column>
    );
  };

  return (
    <Column gap="32">
      {/* Header Section */}
      <Column gap="16">
        <Row gap="12" vertical="center">
          <Badge>{project.category}</Badge>
          <Text variant="body-default-s" onBackground="neutral-weak">
            {formatDate(project.date)}
          </Text>
          {project.featured && (
            <Badge>Featured</Badge>
          )}
        </Row>
        
        <Heading as="h1" variant="display-strong-l">
          {project.title}
        </Heading>
        
        <Text variant="heading-default-xl" onBackground="neutral-medium">
          {project.description}
        </Text>
        
        {project.links && (
          <Row gap="16" marginTop="16">
            {project.links.live && (
              <Button 
                href={project.links.live} 
                variant="secondary" 
                suffixIcon="arrowUpRightFromSquare"
              >
                Live Demo
              </Button>
            )}
            {project.links.repository && (
              <Button 
                href={project.links.repository} 
                variant="secondary" 
                suffixIcon="github"
              >
                Repository
              </Button>
            )}
            {project.links.documentation && (
              <Button 
                href={project.links.documentation} 
                variant="secondary"
              >
                Documentation
              </Button>
            )}
          </Row>
        )}
      </Column>

      {/* Problem Context */}
      <Column gap="20">
        <Heading as="h2" variant="heading-strong-l">
          Problem Context
        </Heading>
        
        <Column gap="16">
          <Column gap="8">
            <Text variant="body-default-s" weight="strong">
              Business Context
            </Text>
            <Text variant="body-default-m" onBackground="neutral-medium">
              {project.problem.context}
            </Text>
          </Column>
          
          <Column gap="8">
            <Text variant="body-default-s" weight="strong">
              Business Problem
            </Text>
            <Text variant="body-default-m" onBackground="neutral-medium">
              {project.problem.businessProblem}
            </Text>
          </Column>
          
          {project.problem.userPainPoints.length > 0 && (
            <Column gap="8">
              <Text variant="body-default-s" weight="strong">
                User Pain Points
              </Text>
              <ul>
                {project.problem.userPainPoints.map((point, index) => (
                  <li key={index}>
                    <Text variant="body-default-s" onBackground="neutral-medium">
                      {point}
                    </Text>
                  </li>
                ))}
              </ul>
            </Column>
          )}
        </Column>
      </Column>

      {/* Solution Approach */}
      <Column gap="20">
        <Heading as="h2" variant="heading-strong-l">
          Solution Approach
        </Heading>
        
        <Column gap="16">
          <Column gap="8">
            <Text variant="body-default-s" weight="strong">
              Overall Approach
            </Text>
            <Text variant="body-default-m" onBackground="neutral-medium">
              {project.solution.approach}
            </Text>
          </Column>
          
          <Column gap="8">
            <Text variant="body-default-s" weight="strong">
              Architecture
            </Text>
            <Text variant="body-default-m" onBackground="neutral-medium">
              {project.solution.architecture}
            </Text>
          </Column>
        </Column>
      </Column>

      {/* Key Results */}
      {renderMetrics()}

      {/* Challenges */}
      {renderChallenges()}

      {/* Key Decisions */}
      {renderKeyDecisions()}

      {/* Technology Stack */}
      {renderTechnologies()}

      {/* Code Samples */}
      {renderCodeSamples()}

      {/* Lessons Learned */}
      {renderLessonsLearned()}

      {/* Business and Technical Impact */}
      {(project.results?.businessImpact || project.results?.technicalImpact) && (
        <Column gap="20">
          <Heading as="h2" variant="heading-strong-l">
            Impact
          </Heading>
          
          <Column gap="16">
            {project.results.businessImpact && (
              <Column gap="8">
                <Text variant="body-default-s" weight="strong">
                  Business Impact
                </Text>
                <Text variant="body-default-m" onBackground="neutral-medium">
                  {project.results.businessImpact}
                </Text>
              </Column>
            )}
            
            {project.results.technicalImpact && (
              <Column gap="8">
                <Text variant="body-default-s" weight="strong">
                  Technical Impact
                </Text>
                <Text variant="body-default-m" onBackground="neutral-medium">
                  {project.results.technicalImpact}
                </Text>
              </Column>
            )}
          </Column>
        </Column>
      )}
    </Column>
  );
};