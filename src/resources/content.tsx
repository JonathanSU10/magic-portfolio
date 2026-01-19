import { About, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Jo",
  lastName: "Su",
  name: `Jonathan Supriadi`,
  role: "Developer",
  avatar: "/images/avatar.png",
  email: "jonathansupriadi10@gmail.com",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bahasa"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Contact me via email</>,
  description: <>Let's connect and collaborate on your next big idea</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/JonathanSU10",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/jonathan-supriadi-4b7550251",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/jo_spd_i/",
    essential: false,
  },
  {
    name: "Email",
    icon: "email",
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=jonathansupriadi10@gmail.com",
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building scalable web applications and digital solutions</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-component-library",
  },
  subline: (
    <>
    I'm Jo, a Developer at <Text as="span" size="xl" weight="strong">ONCE UI</Text>, where I build scalable <br /> web applications. After hours, I develop my own projects.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I’m a web developer focused on building maintainable web systems across backend logic and modern interfaces, with growing experience and strong interest in integrating AI-driven features into practical applications.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experience",
    experiences: [
      {
        company: "Freelance",
        timeframe: "2025 - Present",
        role: "Web Developer",
        achievements: [
          <>Created several web based information systems as part of academic and internship projects.</>,
          <>Gained hands on experience in system analysis, backend development, and basic UI structuring.</>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Project 1",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Musi Charitas Catholic University",
        description: <>Information System</>,
      },
      {
        name: "Build the Future",
        description: <>Studied online marketing and personal branding.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Web Development",
        description: (
          <>Building backend-focused web applications for operational needs, with emphasis on CRUD reliability, data validation, and business workflow implementation. Experienced in developing admin dashboards and internal tools used in real systems.</>
        ),
        tags: [
          {
            name: "PHP",
            icon: "php",
          },
          {
            name: "TypeScript",
            icon: "typescript",
          },
          {
            name: "React",
            icon: "react",
          },
          {
            name: "CodeIgniter",
            icon: "codeigniter",
          },
          {
            name: "Laravel",
            icon: "laravel",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-02/dash.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-02/login.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-02/home.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-02/product.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Machine Learning",
        description: (
          <>Designing relational schemas for scheduling, production, orders, and receivables. Focused on consistency, foreign key validation, and predictable data flow.</>
        ),
        tags: [
          {
            name: "PostgreSQL",
            icon: "postgresql",
          },
          {
            name: "MySQL",
            icon: "mysql",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-03/ml.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Data Analysis & Implementation",
        description: (
          <>Applying basic data analysis and AI concepts through academic projects and experimentation. Familiar with exploratory data analysis, feature preparation, and introductory model usage.</>
        ),
        tags: [
          {
            name: "Python",
            icon: "python",
          },
        ],
        // optional: leave the array empty if you don't want to display images
          images: [
          {
            src: "/images/projects/project-04/vs.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
           {
            src: "/images/projects/project-04/tele.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Data Mining & Data Processing",
        description: (
          <>Performing data mining and data scraping using Python to collect, clean, and prepare datasets for analysis. Experienced in handling structured datasets and extracting useful patterns for academic and exploratory purposes.</>
        ),
        tags: [
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "Web Scraping",
            icon: "spider",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
    ],
  },
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Web development projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpeg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.png",
      alt: "image",
      orientation: "vertical",
    },
    
  ],
};

export { person, social, newsletter, home, about, work, gallery };
