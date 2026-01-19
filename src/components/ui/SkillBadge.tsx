import React from "react";
import { Badge, Text, Column, Row } from "@once-ui-system/core";
import { TechnicalSkill } from "@/types/project.types";

interface SkillBadgeProps {
  skill: TechnicalSkill;
  showDetails?: boolean;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({ 
  skill, 
  showDetails = false 
}) => {
  // Get proficiency display text
  const getProficiencyDisplay = (proficiency: TechnicalSkill['proficiency']) => {
    switch (proficiency) {
      case 'expert': return 'Expert';
      case 'advanced': return 'Advanced';
      case 'intermediate': return 'Intermediate';
      case 'beginner': return 'Beginner';
      case 'learning': return 'Learning';
      default: return proficiency;
    }
  };

  // Get proficiency badge variant
  const getProficiencyVariant = (proficiency: TechnicalSkill['proficiency']) => {
    switch (proficiency) {
      case 'expert': return 'solid';
      case 'advanced': return 'outline';
      case 'intermediate': return 'ghost';
      default: return 'ghost';
    }
  };

  if (!showDetails) {
    return (
      <Badge>
        {skill.name}
      </Badge>
    );
  }

  return (
    <Column 
      gap="12" 
      padding="16" 
      border="neutral-alpha-weak" 
      radius="m"
      background="surface"
    >
      <Row gap="12" vertical="center" wrap>
        <Text variant="body-default-m" weight="strong">
          {skill.name}
        </Text>
        <Badge>
          {getProficiencyDisplay(skill.proficiency)}
        </Badge>
      </Row>
      
      <Row gap="16" wrap>
        <Text variant="body-default-s" onBackground="neutral-medium">
          {skill.years} years experience
        </Text>
        <Text variant="body-default-s" onBackground="neutral-medium">
          Last used: {new Date(skill.lastUsed).toLocaleDateString()}
        </Text>
      </Row>
      
      {skill.examples.length > 0 && (
        <Column gap="8">
          <Text variant="body-default-s" weight="strong" onBackground="neutral-strong">
            Examples:
          </Text>
          <ul>
            {skill.examples.slice(0, 2).map((example, index) => (
              <li key={index}>
                <Text variant="body-default-s" onBackground="neutral-medium">
                  {example}
                </Text>
              </li>
            ))}
          </ul>
        </Column>
      )}
      
      {skill.projects.length > 0 && (
        <Column gap="8">
          <Text variant="body-default-s" weight="strong" onBackground="neutral-strong">
            Used in projects:
          </Text>
          <Row gap="8" wrap>
            {skill.projects.slice(0, 3).map((project, index) => (
              <Badge key={index}>
                {project}
              </Badge>
            ))}
          </Row>
        </Column>
      )}
      
      <Text variant="body-default-s" onBackground="neutral-medium">
        {skill.whyInteresting}
      </Text>
    </Column>
  );
};