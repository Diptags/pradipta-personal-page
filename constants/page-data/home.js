import links from "./links";

export const homePageData = {
  // Profile Information
  photo: {
    url: "/images/profile.png",
    alt: "Rd Pradipta Gitaya Samadji",
  },

  // Text Content
  greeting: "Welcome aboard!",
  tagline: "I transform ideas into systems, content, design, and code.",
  intro: `
    I'm Rd Pradipta Gitaya Samiadji (Pradipta), a passionate Software Engineer, Writer, and Designer from Indonesia. 
    I turn ideas into functional code, create technical and blog content, and bring designs to life.
  `,

  // Current Status
  status: [
    "I am working on Frontend and Full Stack projects.",
    "Aiming to become a better Software Engineer.",
    "I enjoy writing and creating technical and blog content.",
    "I love bringing designs to life through code and creativity.",
  ],

  // Buttons and Links
  buttons: ["Get CV", "WhatsApp Me"],
  links: {
    resume: "https://docs.google.com/document/d/1bIwBNafZRC16bGgw83d2XkD6HMI2zxyScd-1ILAOnPA/edit?usp=sharing",
    whatsapp: "https://wa.link/tryppq",
  },
  socials: [
    {
      id: 1,
      name: "Linkedin",
      link: links.linkedin
    },
    {
      id: 2,
      name: "Github",
      link: links.github
    },
    {
      id: 3,
      name: "Gitlab",
      link: links.gitlab
    },
    {
      id: 4,
      name: "Instagram",
      link: links.instagram
    }
  ]
};
