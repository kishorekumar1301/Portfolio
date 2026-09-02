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


 
 
];

const experiences = [
  {
    title: "Automation Team Intern",
    company_name: "Ohm Energy System Private Limited",
    
    iconBg: "#E6DEDD",
    date: "Dec 2025-june 2026 ",
    points: [
      "Supported front-facing RTU (Remote Terminal Unit) software operations and system monitoring tools using Java and Python Participated in UI/system testing, bug fixing, and performance enhancement to increase software reliability", 
    ],
  },
  {
    title: "Industrial intern",
    company_name: "Integral coach factory",
    
    iconBg: "#E6DEDD",
    
    points: [
      "Studied embedded train networking systems and UI monitoring architectures used in Kavach safety tech." 
    ]
    },
 
 
];

const testimonials = [
 
  
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
