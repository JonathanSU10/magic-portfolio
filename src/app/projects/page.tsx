import { Flex, Meta, Schema, Heading, Text, Column, Row } from "@once-ui-system/core";
import { ProjectCard } from "@/components/project/ProjectCard";
import { projects } from "@/data";
import { baseURL, work } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

export default function Projects() {
  // Group projects by category
  const projectsByCategory = projects.reduce((acc, project) => {
    if (!acc[project.category]) {
      acc[project.category] = [];
    }
    acc[project.category].push(project);
    return acc;
  }, {} as Record<string, typeof projects>);

  const getCategoryTitle = (category: string) => {
    const titles: Record<string, string> = {
      'frontend': 'Frontend Development',
      'backend': 'Backend Development',
      'fullstack': 'Full Stack Development',
      'devops': 'DevOps & Infrastructure',
      'mobile': 'Mobile Development',
      'ai-ml': 'AI & Machine Learning'
    };
    return titles[category] || category;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long'
    });
  };

  return (
    <Flex maxWidth="l" gap="40" direction="column">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={work.title}
        description={work.description}
        path={work.path}
        image={`/api/og/generate?title=${encodeURIComponent(work.title)}`}
      />
      
      <Column gap="16" horizontal="center">
        <Heading as="h1" variant="display-strong-l" align="center">
          {work.title}
        </Heading>
        <Text variant="heading-default-xl" onBackground="neutral-medium" align="center">
          {work.description}
        </Text>
      </Column>

      <Column gap="40">
        {Object.entries(projectsByCategory).map(([category, categoryProjects]) => (
          <Column key={category} gap="24">
            <Column gap="8">
              <Heading as="h2" variant="heading-strong-l">
                {getCategoryTitle(category)}
              </Heading>
              <Text variant="body-default-m" onBackground="neutral-medium">
                {categoryProjects.length} project{categoryProjects.length !== 1 ? 's' : ''}
              </Text>
            </Column>
            
            <Column gap="32">
              {categoryProjects
                .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                .map((project) => (
                  <ProjectCard 
                    key={project.id} 
                    project={project} 
                    variant="detailed" 
                  />
                ))}
            </Column>
          </Column>
        ))}
      </Column>

      {/* Project Statistics */}
      <Column gap="24" horizontal="center" padding="32" border="neutral-alpha-weak" radius="m">
        <Heading as="h3" variant="heading-strong-m" align="center">
          Project Overview
        </Heading>
        <Row gap="32" wrap horizontal="center">
          <Column gap="4" align="center">
            <Text variant="display-strong-m" onBackground="brand-strong">
              {projects.length}
            </Text>
            <Text variant="body-default-s" onBackground="neutral-medium">
              Total Projects
            </Text>
          </Column>
          <Column gap="4" align="center">
            <Text variant="display-strong-m" onBackground="brand-strong">
              {new Set(projects.map(p => p.category)).size}
            </Text>
            <Text variant="body-default-s" onBackground="neutral-medium">
              Technology Categories
            </Text>
          </Column>
          <Column gap="4" align="center">
            <Text variant="display-strong-m" onBackground="brand-strong">
              {Math.max(...projects.map(p => new Date(p.date).getFullYear())) - 
                Math.min(...projects.map(p => new Date(p.date).getFullYear())) + 1}
            </Text>
            <Text variant="body-default-s" onBackground="neutral-medium">
              Years of Experience
            </Text>
          </Column>
        </Row>
      </Column>
    </Flex>
  );
}