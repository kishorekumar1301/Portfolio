import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  hexaware,
  thirstyjson,
  materialui,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React JS Developer",
    icon: mobile,
  },
  {
    title: "UI/UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Python",
    icon: Python,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "MySQL",
    icon: MySQL,
  },
 
];

const experiences = [
  {
    team: "Automation",
    company_name: "Ohm Energy System Private Limited",
    icon: Ohm,
    iconBg: "#E6DEDD",
    date: "Dec 2025-june 2026 ",
    points: [
      "Developed ticket tracking webpages using HTML, CSS and Javascript that will help the internal teams to create, and track the issues.",
      "Provided L2 and L3 level support on their existing tools such as implementing enhancement and sorting out the bugs.",
      "Developed documentation webpages using HTML, CSS and Javascript for internal reference.",
      "Actively interacted with clients to gather requirements and understand problem statements for delivering effective solutions.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Hexaware Technologies",
    icon: hexaware,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - Mar 2024",
    points: [
      "Worked with a team of 10+ developers and developed a responsive web Application that is optimized for both desktop and mobile devices, increasing user engagement.",
      "Used React JS library to create a dynamic, interactive user interface that improved user experience.",
      "Integrated APIs to provide additional functionality and improve user experience.",
      "Utilized version control systems such as Git to manage code changes and collaborate with other developers.",
      "Followed Agile Methodology and used JIRA for Application Lifecycle Management.",
    ],
  },
  {
    title: "Trainee",
    company_name: "Hexaware Technologies",
    icon: hexaware,
    iconBg: "#E6DEDD",
    date: "Mar 2022 - Aug 2022",
    points: [
      "Developed a Hotel Management System with java as backend and react as frontend as a final assessment.",
      "Got trained in various technologies like MySQL, Java, HTML, CSS, and React JS.",
      "Got trained in softskills for a effective communication.",
    ],
  },
];

const testimonials = [
  {
    testimonial: "Had a wonderful experience working with Deepak.",
    name: "Arundathy",
    designation: "Project Manager",
    company: "Hexaware Technologies",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Really talented guy who gives his 100% efforts to the work what he's doing",
    name: "Tony Chris",
    designation: "Vertical Delivery Head",
    company: "Hexaware Technologies",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Deepak joined our team right after the training and proved his value right away",
    name: "Harika",
    designation: "Senior Software Engineer",
    company: "Hexaware Technologies",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "ThirstyJSON",
    description:
      "Web-based JSON editor where you can edit your json data in real time and download it in various formats like .csv, .json.  Also you can view your JSON in a clean and neat table format rather than as a json code, which no other competitors offers you",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "codemirror",
        color: "green-text-gradient",
      },
      {
        name: "material ui",
        color: "pink-text-gradient",
      },
    ],
    image: thirstyjson,
    source_code_link: "https://thirstyjson.dev/",
  },
];

export { services, technologies, experiences, testimonials, projects };
