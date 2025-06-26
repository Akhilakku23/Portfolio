import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;



export const PROJECTS = [
 {
  title: "Personal Portfolio Website",
  image: project2,
  description:
    "A fully responsive portfolio site built to showcase my projects, technical skills, and professional journey. Features smooth scroll animations, dark/light mode toggle, and a contact form integrated with EmailJS for direct inquiries.",
  liveDemo: "https://akhiii-portfolio.netlify.app",
  repo: "https://github.com/akhilsaji/akhiii-portfolio",
  technologies: [
    "React.js",
    "Tailwind CSS",
    "Framer Motion"
  ],
  highlights: [
    "Implemented dark/light mode with persistent user preference via localStorage.",
    "Animated section entrances and hover effects using Framer Motion.",
    "Optimized images and code-splitting for sub-1 second First Contentful Paint.",
    "Deployed on Netlify with automated CI/CD from GitHub."
  ]
},

  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A full-stack web app for buying and selling clothes online. Users can browse apparel, filter by size or category, view product details, and place secure orders. Admins can manage inventory, track orders, and analyze sales. Built with a modern, responsive UI for a smooth fashion shopping experience.",
    technologies: ["React.js, Node.js, Express.js, MongoDB, React Router DOM, React Testing Library"],
  },
  
  {
    title: "Real-estate website",
    image: project3,
    description:
      "It is a responsive real-time property listing and management platform that includes features like, dynamic property listings, secure user authentication, and real-time data synchronization.",
    technologies: ["React.js, Node.js, Express.js, MongoDB, Auth0"],
  },
];

export const CONTACT = {
  address: "Thodupuzha,idukki,kerala ",
  phoneNo: "7909 2027 67 ",
  email: "akhilsaji0031@gmail.com",
};
