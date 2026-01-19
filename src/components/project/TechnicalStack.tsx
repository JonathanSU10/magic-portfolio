import React from "react";
import { Column, Row, Heading, Text, Badge } from "@once-ui-system/core";
import { Project } from "@/types/project.types";

interface TechnicalStackProps {
  technologies: Project['technologies'];
  title?: string;
}

export const TechnicalStack: React.FC<TechnicalStackProps> = ({ 
  technologies, 
  title = "Technology Stack" 
}) => {
  if (!technologies || technologies.length === 0) {
    return null;
  }

  // Group technologies by category
  const groupedTech = technologies.reduce((acc, tech) => {
    if (!acc[tech.category]) {
      acc[tech.category] = [];
    }
    acc[tech.category].push(tech);
    return acc;
  }, {} as Record<string, typeof technologies>);

  // Get proficiency badge variant
  const getProficiencyVariant = (proficiency: string) => {
    switch (proficiency) {
      case 'expert': return 'solid';
      case 'advanced': return 'outline';
      case 'intermediate': return 'ghost';
      default: return 'ghost';
    }
  };

  return (
    <Column gap="20">
      <Heading as="h3" variant="heading-strong-m">
        {title}
      </Heading>
      
      <Column gap="24">
        {Object.entries(groupedTech).map(([category, techs]) => (
          <Column key={category} gap="12">
            <Text variant="body-default-s" weight="strong">
              {category.replace('-', ' ')}
            </Text>
            
            <Column gap="16">
              {techs.map((tech, index) => (
                <Column key={index} gap="8" padding="12" border="neutral-alpha-weak" radius="m">
                  <Row gap="12" vertical="center" wrap>
                    <Text variant="body-default-m" weight="strong">
                      {tech.name}
                    </Text>
                    <Badge>
                      {tech.proficiency}
                    </Badge>
                  </Row>
                  
                  {tech.reason && (
                    <Text variant="body-default-s" onBackground="neutral-medium">
                      {tech.reason}
                    </Text>
                  )}
                  
                  {tech.alternatives && tech.alternatives.length > 0 && (
                    <Column gap="4">
                      <Text variant="body-default-s" weight="strong" onBackground="neutral-strong">
                        Considered alternatives:
                      </Text>
                      <Row gap="8" wrap>
                        {tech.alternatives.map((alt, altIndex) => (
                          <Badge key={altIndex}>
                            {alt}
                          </Badge>
                        ))}
                      </Row>
                    </Column>
                  )}
                </Column>
              ))}
            </Column>
          </Column>
        ))}
      </Column>
    </Column>
  );
};