import { notFound } from "next/navigation";
import { Flex, Meta, Schema, Heading } from "@once-ui-system/core";
import { ProjectDetail } from "@/components/project/ProjectDetail";
import { getProjectBySlug } from "@/data";
import { baseURL } from "@/resources";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);
  
  if (!project) {
    return notFound();
  }

  return Meta.generate({
    title: project.title,
    description: project.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(project.title)}`,
    path: `/projects/${project.slug}`,
  });
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);
  
  if (!project) {
    return notFound();
  }

  return (
    <Flex maxWidth="l" gap="32" direction="column">
      <Schema
        as="article"
        baseURL={baseURL}
        title={project.title}
        description={project.description}
        path={`/projects/${project.slug}`}
        image={`/api/og/generate?title=${encodeURIComponent(project.title)}`}
      />
      
      <ProjectDetail project={project} />
    </Flex>
  );
}

// Generate static paths for all projects
export async function generateStaticParams() {
  const { getAllProjectSlugs } = await import("@/data");
  const slugs = getAllProjectSlugs();
  
  return slugs.map((slug) => ({
    slug,
  }));
}