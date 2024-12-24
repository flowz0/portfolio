import { StaticImageData } from "next/image";
import ProjectImgDDDC from "@/public/img/project-dddc.png";
import NodeJSBlog from "@/public/img/nodejs-blog.png";
import DuctPond from "@/public/img/duckpond.png";
import WeatherApp from "@/public/img/WeatherApp.png";
import AdventureGame from "@/public/img/adventuregame.png";

export interface ProjectData {
  id: number;
  img: string | StaticImageData;
  title: string;
  desc: string;
  challenges?: string;
  lessons?: string;
  site?: string;
  code?: string;
  date: string;
}

const projectsData: ProjectData[] = [
  {
    id: 1,
    img: DuctPond,
    title: "Social Media Platform",
    desc: "Developed a full-stack social media platform as part of a paid internship, collaborating with a team of 10 developers. The platform allowed users to create accounts, post text updates, interact with posts via likes and comments, and manage profiles. Key features included user authentication, a dynamic feed, and responsive design. The project was built using a MERN stack (MongoDB, Express, React, Node.js), Git for version control, and Agile methodologies for efficient collaboration.",
    challenges: "Coordinating with a large team required mastering Git workflows and resolving frequent merge conflicts. Implementing robust user authentication and authorization with secure storage of sensitive data. Ensuring seamless responsiveness across a range of devices while handling performance bottlenecks.",
    lessons: "Strengthened my understanding of the MERN stack and RESTful APIs. Improved my ability to work in a fast-paced team environment, communicate effectively, and manage project timelines. Gained experience with Agile methodologies, version control, and deployment processes.",
    code: "https://github.com/FrancescaImmediato/dev-duckies-sm-proj-front",
    date: "2024-6-10"
  },
  {
    id: 2,
    img: ProjectImgDDDC,
    title: "Duct Daddy Duct Cleaning",
    desc: "Designed and developed a marketing landing page for a local HVAC cleaning business. The page featured clear branding, a compelling call-to-action, and sections showcasing services, customer reviews, and a contact form. Built with responsive design using HTML, CSS (Flexbox/Media Queries), and JavaScript to ensure cross-device compatibility.",
    challenges: "Translating client requirements into an engaging and functional design that matched their branding. Ensuring accessibility for all users, including those with visual impairments, while adhering to SEO best practices. Testing across multiple browsers and devices to achieve consistent performance.",
    lessons: "Best practices for client communication to gather clear requirements and iterate on feedback. Using tools like Lighthouse to improve web performance and accessibility scores. Strategies for optimizing images and assets to ensure fast load times on mobile devices.",
    site: "https://www.ductdaddykc.com/",
    code: "https://github.com/flowz0/dddc",
    date: "2024-12-09"
  },
  {
    id: 3,
    img: NodeJSBlog,
    title: "Blog Site",
    desc: "Built a dynamic blog site with user authentication, CRUD operations for posts, and an admin dashboard for managing content. Technologies used included MongoDB for data storage, Express for server-side logic, Node.js for backend development, and EJS for templating. The site incorporated responsive design principles to provide a seamless experience across devices.",
    challenges: "Structuring the database schema to support categories, tags, and user roles (e.g., admins and contributors). Ensuring secure user authentication with hashed passwords and validation. Implementing pagination for efficient browsing of blog posts.",
    lessons: "Designing relational and non-relational database schemas for scalability and performance. Implementing middleware in Express for error handling and authentication. Writing modular, maintainable code for a scalable application.",
    code: "https://github.com/flowz0/nodejs-blog",
    date: "2024-11-15"
  },
  {
    id: 4,
    img: WeatherApp,
    title: "Weather App",
    desc: "Created a weather app that fetches real-time weather data for user-searched locations using the OpenWeatherAPI. The app featured a clean, intuitive UI with a search bar, detailed weather cards, and visual icons representing weather conditions. Built with React and integrated third-party APIs for data retrieval.",
    challenges: "Handling asynchronous API calls while managing error states (e.g., invalid locations or failed network requests). Optimizing the user interface to display weather data clearly and responsively. Managing rate-limiting constraints imposed by the API.",
    lessons: "API integration and handling edge cases like empty responses or errors. Using React hooks like useEffect for managing side effects and useState for dynamic UI updates. Debugging and improving user feedback for better error handling and interaction flow.",
    code: "https://github.com/bflows/open-weather-api-project",
    date: "2024-3-29"
  },
  {
    id: 5,
    img: AdventureGame,
    title: "Adventure Game",
    desc: "Designed and developed a text-based adventure game using JavaScript, HTML, and CSS to create an interactive storytelling experience. Players navigate through a branching storyline with choices that lead to different outcomes, showcasing dynamic decision-making and basic game mechanics. The project features a clean UI, user input validation, and modular code to handle various game states.",
    challenges: "Structuring the storyline with branching paths while maintaining readability and scalability in the codebase. Managing game states, including player progress, inventory, and decision tracking, without introducing bugs. Creating engaging feedback for user actions to enhance immersion despite the text-based format.",
    lessons: "Using JavaScript objects and arrays to store and manage game data efficiently. Developing logic for dynamic decision trees and crafting a modular code structure for scalability. Enhancing user engagement through well-designed feedback loops and polished UI elements.",
    code: "https://github.com/flowz0/js-role-playing-game",
    date: "2024-9-10"
  },
];

export default projectsData;