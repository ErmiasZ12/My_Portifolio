import amazoncloneImg from "../assets/images/amazonclone.jpeg";
import applewebImg from "../assets/images/appleweb.jpeg";
import EvangadiForumImg from "../assets/images/EvangadiForum.jpeg";
import netflixImg from "../assets/images/Neflixclone.jpeg";
import portfolioLogoImg from "../assets/images/portifolio-screenshot.png";

const projects = [
  {
    title: "Amazon Clone",
    description:
      "E-commerce web app inspired by Amazon with product listing and cart.",
    tech: "React, Firebase, CSS",
    image: amazoncloneImg,
    demo: "https://amazonfrontend-ermi.netlify.app/",
    code: "https://github.com/ErmiasZ12/Amazon-Clone-Frontend.git",
  },
  {
    title: "Apple Website",
    description: "Apple website UI clone built with responsive design.",
    tech: "HTML, CSS, JavaScript",
    image: applewebImg,
    demo: " https://ermi-appl.netlify.app/",
    code: "https://github.com/ErmiasZ12/react-apple-vite-project.git",
  },
  {
    title: "Evangadi Forum",
    description: "Full-stack Q&A forum application.",
    tech: "React, Node.js, Express, MySQL",
    image: EvangadiForumImg,
    demo: "https://ermi-evangadi-forumm.netlify.app",
    code: "https://github.com/ErmiasZ12/evangadi-forum-personal.git",
  },
  {
    title: "Netflix Clone",
    description: "Netflix landing page clone with movie previews.",
    tech: "React, TMDB API",
    image: netflixImg,
    demo: "https://ermiasz12.github.io/Netflix-Clone-2025/",
    code: "https://github.com/ErmiasZ12/Netflix-Clone-2025.git",
  },
  {
    title: "My Portfolio",
    description:
      "This portfolio website built with React, Vite, and modern CSS",
    tech: "React, Vite, CSS, JavaScript",
    image: portfolioLogoImg,
    demo: "",
    code: "https://github.com/ErmiasZ12/My_Portifolio.git",
  },
];

export default projects;
