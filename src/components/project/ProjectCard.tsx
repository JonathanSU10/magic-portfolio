import React from "react";
import { Card, Column, Row, Heading, Text, Badge, SmartLink } from "@once-ui-system/core";
import { Project } from "@/types/project.types";

interface ProjectCardProps {
  project: Project;
  variant?: "compact" | "detailed";
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ 
  project, 
  variant = "detailed" 
}) => {
  const getCategoryColor = (category: Project['category']) => {
    const colorMap = {
      frontend: "accent",
      backend: "brand",
      fullstack: "cyan",
      devops: "red",
      mobile: "pink",
      "ai-ml": "yellow"
    };
    return colorMap[category] || "neutral";
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short'
    });
  };

  const formatMetrics = () => {
    if (!project.results?.metrics || project.results.metrics.length === 0) {
      return null;
    }
    
    return project.results.metrics.slice(0, 2).map((metric, index) => (
      <Text 
        key={index} 
        variant="body-default-s"
        weight="strong"
      >
        {metric.improvement} {metric.name}
      </Text>
    ));
  };

  const formatTechnologies = () => {
    if (!project.technologies || project.technologies.length === 0) {
      return null;
    }
    
    return project.technologies.slice(0, 3).map((tech, index) => (
      <Badge key={index}>
        {tech.name}
      </Badge>
    ));
  };

  if (variant === "compact") {
    return (
      <SmartLink href={`/projects/${project.slug}`} style={{ textDecoration: 'none' }}>
        <Card 
          border="neutral-alpha-weak"
          background="surface"
          radius="m"
          padding="16"
        >
        <Column gap="12">
          <Row gap="8" align="center">
            <Badge>
              {project.category}
            </Badge>
            <Text variant="body-default-s" onBackground="neutral-weak">
              {formatDate(project.date)}
            </Text>
          </Row>
          
          <Heading as="h3" variant="heading-strong-s">
            {project.title}
          </Heading>
          
          <Text variant="body-default-s" onBackground="neutral-medium">
            {project.shortDescription || project.description}
          </Text>
          
          {formatMetrics() && (
            <Row gap="16" wrap>
              {formatMetrics()}
            </Row>
          )}
        </Column>
        </Card>
      </SmartLink>
    );
  }

  // Detailed variant
  return (
    <SmartLink href={`/projects/${project.slug}`} style={{ textDecoration: 'none' }}>
      <Card 
        border="neutral-alpha-weak"
        background="surface"
        radius="m"
        padding="24"
      >
      <Column gap="20">
        <Row horizontal="between" vertical="start" gap="16">
          <Column gap="8">
            <Row gap="12" vertical="center" wrap>
              <Badge>
                {project.category}
              </Badge>
              <Text variant="body-default-s" onBackground="neutral-weak">
                {formatDate(project.date)}
              </Text>
              {project.featured && (
                <Badge>
                  Featured
                </Badge>
              )}
            </Row>
            
            <Heading as="h2" variant="heading-strong-l">
              {project.title}
            </Heading>
          </Column>
        </Row>
        
        <Text variant="body-default-m" onBackground="neutral-medium">
          {project.description}
        </Text>
        
        {project.problem?.businessProblem && (
          <Column gap="8">
            <Text variant="body-default-s" weight="strong" onBackground="neutral-strong">
              Business Problem
            </Text>
            <Text variant="body-default-s" onBackground="neutral-medium">
              {project.problem.businessProblem}
            </Text>
          </Column>
        )}
        
        {project.solution?.approach && (
          <Column gap="8">
            <Text variant="body-default-s" weight="strong" onBackground="neutral-strong">
              Solution Approach
            </Text>
            <Text variant="body-default-s" onBackground="neutral-medium">
              {project.solution.approach}
            </Text>
          </Column>
        )}
        
        {formatMetrics() && (
          <Column gap="12">
            <Text variant="body-default-s" weight="strong" onBackground="neutral-strong">
              Key Results
            </Text>
            <Row gap="24" wrap>
              {formatMetrics()}
            </Row>
          </Column>
        )}
        
        {formatTechnologies() && (
          <Column gap="12">
            <Text variant="body-default-s" weight="strong" onBackground="neutral-strong">
              Technologies
            </Text>
            <Row gap="8" wrap>
              {formatTechnologies()}
            </Row>
          </Column>
        )}
        
        <Row horizontal="between" vertical="center">
          <Text variant="body-default-s" onBackground="neutral-weak">
            Read case study →
          </Text>
          {project.links?.live && (
            <Badge>
              Live Demo
            </Badge>
          )}
        </Row>
      </Column>
      </Card>
    </SmartLink>
  );
};