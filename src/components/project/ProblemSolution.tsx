import React from "react";
import { Column, Row, Heading, Text, Badge } from "@once-ui-system/core";
import { Project } from "@/types/project.types";

interface ProblemSolutionProps {
  problem: Project['problem'];
  solution: Project['solution'];
  challenges: Project['challenges'];
}

export const ProblemSolution: React.FC<ProblemSolutionProps> = ({ 
  problem, 
  solution,
  challenges
}) => {
  return (
    <Column gap="32">
      {/* Problem Section */}
      <Column gap="20">
        <Heading as="h2" variant="heading-strong-l">
          Problem Context
        </Heading>
        
        <Column gap="24">
          <Column gap="12">
            <Text variant="body-default-s" weight="strong">
              Business Context
            </Text>
            <Text variant="body-default-m" onBackground="neutral-medium">
              {problem.context}
            </Text>
          </Column>
          
          <Column gap="12">
            <Text variant="body-default-s" weight="strong">
              Business Problem
            </Text>
            <Text variant="body-default-m" onBackground="neutral-medium">
              {problem.businessProblem}
            </Text>
          </Column>
          
          {problem.userPainPoints.length > 0 && (
            <Column gap="12">
              <Text variant="body-default-s" weight="strong">
                User Pain Points
              </Text>
              <ul>
                {problem.userPainPoints.map((point, index) => (
                  <li key={index}>
                    <Text variant="body-default-s" onBackground="neutral-medium">
                      {point}
                    </Text>
                  </li>
                ))}
              </ul>
            </Column>
          )}
          
          {problem.stakeholders.length > 0 && (
            <Column gap="12">
              <Text variant="body-default-s" weight="strong">
                Key Stakeholders
              </Text>
              <Row gap="8" wrap>
                {problem.stakeholders.map((stakeholder, index) => (
                  <Badge key={index}>
                    {stakeholder}
                  </Badge>
                ))}
              </Row>
            </Column>
          )}
          
          {problem.successMetrics.length > 0 && (
            <Column gap="12">
              <Text variant="body-default-s" weight="strong">
                Success Metrics
              </Text>
              <ul>
                {problem.successMetrics.map((metric, index) => (
                  <li key={index}>
                    <Text variant="body-default-s" onBackground="neutral-medium">
                      {metric}
                    </Text>
                  </li>
                ))}
              </ul>
            </Column>
          )}
        </Column>
      </Column>

      {/* Challenges Section */}
      {challenges && (
        <Column gap="20">
          <Heading as="h2" variant="heading-strong-l">
            Challenges
          </Heading>
          
          <Column gap="24">
            {challenges.technical.length > 0 && (
              <Column gap="12">
                <Text variant="body-default-s" weight="strong">
                  Technical Challenges
                </Text>
                <ul>
                  {challenges.technical.map((challenge, index) => (
                    <li key={index}>
                      <Text variant="body-default-s" onBackground="neutral-medium">
                        {challenge}
                      </Text>
                    </li>
                  ))}
                </ul>
              </Column>
            )}
            
            {challenges.business.length > 0 && (
              <Column gap="12">
                <Text variant="body-default-s" weight="strong">
                  Business Challenges
                </Text>
                <ul>
                  {challenges.business.map((challenge, index) => (
                    <li key={index}>
                      <Text variant="body-default-s" onBackground="neutral-medium">
                        {challenge}
                      </Text>
                    </li>
                  ))}
                </ul>
              </Column>
            )}
            
            {challenges.constraints.length > 0 && (
              <Column gap="12">
                <Text variant="body-default-s" weight="strong">
                  Key Constraints
                </Text>
                <ul>
                  {challenges.constraints.map((constraint, index) => (
                    <li key={index}>
                      <Text variant="body-default-s" onBackground="neutral-medium">
                        {constraint}
                      </Text>
                    </li>
                  ))}
                </ul>
              </Column>
            )}
          </Column>
        </Column>
      )}

      {/* Solution Section */}
      {solution && (
        <Column gap="20">
          <Heading as="h2" variant="heading-strong-l">
            Solution Approach
          </Heading>
          
          <Column gap="24">
            <Column gap="12">
              <Text variant="body-default-s" weight="strong">
                Overall Approach
              </Text>
              <Text variant="body-default-m" onBackground="neutral-medium">
                {solution.approach}
              </Text>
            </Column>
            
            <Column gap="12">
              <Text variant="body-default-s" weight="strong">
                Architecture
              </Text>
              <Text variant="body-default-m" onBackground="neutral-medium">
                {solution.architecture}
              </Text>
            </Column>
            
            {solution.designPatterns.length > 0 && (
              <Column gap="12">
                <Text variant="body-default-s" weight="strong">
                  Design Patterns Used
                </Text>
                <Row gap="8" wrap>
                  {solution.designPatterns.map((pattern, index) => (
                    <Badge key={index}>
                      {pattern}
                    </Badge>
                  ))}
                </Row>
              </Column>
            )}
            
            {solution.keyDecisions.length > 0 && (
              <Column gap="12">
                <Text variant="body-default-s" weight="strong">
                  Key Technical Decisions
                </Text>
                <Column gap="16">
                  {solution.keyDecisions.map((decision, index) => (
                    <Column key={index} gap="8" padding="16" border="neutral-alpha-weak" radius="m">
                      <Text variant="body-default-m" weight="strong">
                        {decision.decision}
                      </Text>
                      <Text variant="body-default-s" onBackground="neutral-medium">
                        {decision.reason}
                      </Text>
                      {decision.alternatives.length > 0 && (
                        <Column gap="4">
                          <Text variant="body-default-s" weight="strong" onBackground="neutral-strong">
                            Considered alternatives:
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
                        <Column gap="4">
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
            )}
          </Column>
        </Column>
      )}
    </Column>
  );
};