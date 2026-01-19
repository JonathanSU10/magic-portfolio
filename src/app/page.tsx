import {
  Avatar,
  Button,
  Column,
  Heading,
  Icon,
  IconButton,
  Media,
  Tag,
  Text,
  Meta,
  Schema,
  Row,
  Grid,
} from "@once-ui-system/core";
import { baseURL, about, person, social } from "@/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import React from "react";
import { workExperience, technicalSkills, getTotalYearsOfExperience } from "@/data";
import { SkillBadge } from "@/components/ui/SkillBadge";

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(about.title)}`,
    path: "/",
  });
}

export default function Home() {
  const structure = [
    {
      title: about.intro.title,
      display: about.intro.display,
      items: [],
    },
    {
      title: about.work.title,
      display: about.work.display,
      items: about.work.experiences.map((experience) => experience.company),
    },
    {
      title: about.studies.title,
      display: about.studies.display,
      items: about.studies.institutions.map((institution) => institution.name),
    },
    {
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.skills.map((skill) => skill.title),
    },
  ];
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path="/"
        image={`/api/og/generate?title=${encodeURIComponent(about.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      {about.tableOfContent.display && (
        <Column
          left="0"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          s={{ hide: true }}
        >
          <TableOfContents structure={structure} about={about} />
        </Column>
      )}
      <Row fillWidth s={{ direction: "column"}} horizontal="center">
        {about.avatar.display && (
          <Column
            className={styles.avatar}
            top="64"
            fitHeight
            position="sticky"
            s={{ position: "relative", style: { top: "auto" } }}
            xs={{ style: { top: "auto" } }}
            minWidth="160"
            paddingX="l"
            paddingBottom="xl"
            gap="m"
            flex={3}
            horizontal="center"
          >
            <Avatar src={person.avatar} size="xl" />
            <Row gap="8" vertical="center">
              <Icon onBackground="accent-weak" name="globe" />
              {person.location}
            </Row>
            {person.languages && person.languages.length > 0 && (
              <Row wrap gap="8">
                {person.languages.map((language, index) => (
                  <Tag key={index} size="l">
                    {language}
                  </Tag>
                ))}
              </Row>
            )}
          </Column>
        )}
        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          <Column
            id={about.intro.title}
            fillWidth
            minHeight="160"
            vertical="center"
            marginBottom="32"
          >
            {about.calendar.display && (
              <Row
                fitWidth
                border="brand-alpha-medium"
                background="brand-alpha-weak"
                radius="full"
                padding="4"
                gap="8"
                marginBottom="m"
                vertical="center"
                className={styles.blockAlign}
                style={{
                  backdropFilter: "blur(var(--static-space-1))",
                }}
              >
                <Icon paddingLeft="12" name="calendar" onBackground="brand-weak" />
                <Row paddingX="8">Schedule a call</Row>
                <IconButton
                  href={about.calendar.link}
                  data-border="rounded"
                  variant="secondary"
                  icon="chevronRight"
                />
              </Row>
            )}
            <Heading className={styles.textAlign} variant="display-strong-xl">
              {person.name}
            </Heading>
            <Text
              className={styles.textAlign}
              variant="display-default-xs"
              onBackground="neutral-weak"
            >
              {person.role}
            </Text>
            {social.length > 0 && (
              <Row
                className={styles.blockAlign}
                paddingTop="20"
                paddingBottom="8"
                gap="8"
                wrap
                horizontal="center"
                fitWidth
                data-border="rounded"
              >
                {social
                      .filter((item) => item.essential)
                      .map(
                  (item) =>
                    item.link && (
                      <React.Fragment key={item.name}>
                        <Row s={{ hide: true }}>
                          <Button
                            key={item.name}
                            href={item.link}
                            prefixIcon={item.icon}
                            label={item.name}
                            size="s"
                            weight="default"
                            variant="secondary"
                          />
                        </Row>
                        <Row hide s={{ hide: false }}>
                          <IconButton
                            size="l"
                            key={`${item.name}-icon`}
                            href={item.link}
                            icon={item.icon}
                            variant="secondary"
                          />
                        </Row>
                      </React.Fragment>
                    ),
                )}
              </Row>
            )}
          </Column>

          {about.intro.display && (
            <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="xl">
              {about.intro.description}
            </Column>
          )}

          {about.work.display && (
            <>
              <Heading as="h2" id={about.work.title} variant="display-strong-s" marginBottom="m">
                {about.work.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {about.work.experiences.map((experience, index) => (
                  <Column key={`${experience.company}-${experience.role}-${index}`} fillWidth>
                    <Row fillWidth horizontal="between" vertical="end" marginBottom="4">
                      <Text id={experience.company} variant="heading-strong-l">
                        {experience.company}
                      </Text>
                      <Text variant="heading-default-xs" onBackground="neutral-weak">
                        {experience.timeframe}
                      </Text>
                    </Row>
                    <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
                      {experience.role}
                    </Text>
                    <Column as="ul" gap="16">
                      {experience.achievements.map(
                        (achievement: React.ReactNode, index: number) => (
                          <Text
                            as="li"
                            variant="body-default-m"
                            key={`${experience.company}-${index}`}
                          >
                            {achievement}
                          </Text>
                        ),
                      )}
                    </Column>
                    {experience.images && experience.images.length > 0 && (
                      <Grid columns={2} s={{ columns: 1 }} fillWidth paddingTop="m" paddingLeft="40" gap="12">
                        {experience.images.map((image, index) => (
                          <Column
                            key={index}
                            border="neutral-medium"
                            radius="m"
                          >
                            <Media
                              enlarge
                              radius="m"
                              aspectRatio={`${image.width} / ${image.height}`}
                              objectFit="contain"
                              alt={image.alt}
                              src={image.src}
                            />
                          </Column>
                        ))}
                      </Grid>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.studies.display && (
            <>
              <Heading as="h2" id={about.studies.title} variant="display-strong-s" marginBottom="m">
                {about.studies.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {about.studies.institutions.map((institution, index) => (
                  <Column key={`${institution.name}-${index}`} fillWidth gap="4">
                    <Text id={institution.name} variant="heading-strong-l">
                      {institution.name}
                    </Text>
                    <Text variant="heading-default-xs" onBackground="neutral-weak">
                      {institution.description}
                    </Text>
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.technical.display && (
            <>
              <Heading
                as="h2"
                id={about.technical.title}
                variant="display-strong-s"
                marginBottom="40"
              >
                {about.technical.title}
              </Heading>
              <Column fillWidth gap="l">
                {about.technical.skills.map((skill, index) => (
                  <Column key={`${skill}-${index}`} fillWidth gap="4">
                    <Text id={skill.title} variant="heading-strong-l">
                      {skill.title}
                    </Text>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {skill.description}
                    </Text>
                    {skill.tags && skill.tags.length > 0 && (
                      <Row wrap gap="8" paddingTop="8">
                        {skill.tags.map((tag, tagIndex) => (
                          <Tag key={`${skill.title}-${tagIndex}`} size="l" prefixIcon={tag.icon}>
                            {tag.name}
                          </Tag>
                        ))}
                      </Row>
                    )}
                    {skill.images && skill.images.length > 0 && (
                      <Grid columns={2} s={{ columns: 1 }} fillWidth paddingTop="m" gap="12">
                        {skill.images.map((image, index) => (
                          <Column
                            key={index}
                            border="neutral-medium"
                            radius="m"
                          >
                            <Media
                              enlarge
                              radius="m"
                              aspectRatio={`${image.width} / ${image.height}`}
                              objectFit="contain"
                              alt={image.alt}
                              src={image.src}
                            />
                          </Column>
                        ))}
                      </Grid>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}

          {/* Technical Experience Section - Hidden */}
          {/* <Column gap="40">
            <Heading
              as="h2"
              variant="display-strong-s"
              marginBottom="m"
            >
              Professional Experience
            </Heading>
            <Column gap="32">
              {workExperience.map((experience, index) => (
                <Column key={index} gap="16">
                  <Column gap="8">
                    <Heading as="h3" variant="heading-strong-m">
                      {experience.role}
                    </Heading>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {experience.company} • {experience.location} • {experience.startDate} to {experience.endDate}
                    </Text>
                  </Column>
                  
                  <Text variant="body-default-m">
                    {experience.description}
                  </Text>
                  
                  <Column gap="12">
                    <Text variant="body-default-s" weight="strong">
                      Key Responsibilities:
                    </Text>
                    <ul>
                      {experience.responsibilities.slice(0, 3).map((resp, respIndex) => (
                        <li key={respIndex}>
                          <Text variant="body-default-s" onBackground="neutral-medium">
                            {resp}
                          </Text>
                        </li>
                      ))}
                    </ul>
                  </Column>
                  
                  <Column gap="12">
                    <Text variant="body-default-s" weight="strong">
                      Key Achievements:
                    </Text>
                    <ul>
                      {experience.achievements.slice(0, 2).map((achievement, achIndex) => (
                        <li key={achIndex}>
                          <Text variant="body-default-s" onBackground="neutral-medium">
                            {achievement}
                          </Text>
                        </li>
                      ))}
                    </ul>
                  </Column>
                  
                  <Column gap="12">
                    <Text variant="body-default-s" weight="strong">
                      Technologies Used:
                    </Text>
                    <Row gap="8" wrap>
                      {experience.technologies.slice(0, 6).map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          style={{
                            background: 'var(--neutral-alpha-weak)',
                            padding: '4px 12px',
                            borderRadius: '16px',
                            fontSize: '14px'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </Row>
                  </Column>
                </Column>
              ))}
            </Column>
          </Column> */}

          {/* Technical Skills Section - Hidden */}
          {/* <Column gap="40">
            <Heading
              as="h2"
              variant="display-strong-s"
              marginBottom="m"
            >
              Technical Skills
            </Heading>
            <Column gap="24">
              <Text variant="body-default-m" onBackground="neutral-medium">
                {getTotalYearsOfExperience()}+ years of professional development experience
              </Text>
              
              <Column gap="32">
                {technicalSkills.map((skill) => (
                  <SkillBadge 
                    key={skill.name} 
                    skill={skill} 
                    showDetails={true} 
                  />
                ))}
              </Column>
            </Column>
          </Column> */}
        </Column>
      </Row>
    </Column>
  );
}