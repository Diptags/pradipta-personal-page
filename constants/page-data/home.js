import links from "./links"

export const homePageData = {
  photo: {
    url: "/profile.png",
    alt: "Rd Pradipta Gitaya Samadji",
  },
  greeting: 'Welcome aboard!',
  tagline: "I transform ideas into systems, content, design, and code.",
  intro:
    "I'm Rd Pradipta Gitaya Samiadji, a passionate Software Engineer, Writer, and Designer from Indonesia. I turn ideas into functional systems, create technical and blog content, and bring designs to life through code.",
  status: [
    "I am working on Frontend and Full Stack projects.",
    "Currently on a mission to become a better Software Engineer.",
    "I enjoy writing and creating technical and blog content.",
    "I love bringing designs to life through code and creativity."
  ],
  socials: [
    {
      id: 1,
      name: "linkedin",
      link: links.linkedin
    },
    {
      id: 2,
      name: "github",
      link: links.github
    },
    {
      id: 3,
      name: "gitlab",
      link: links.gitlab
    }
  ],
  buttons: [
    "Download Resume",
    "My Work",
  ],
  resumelink: "https://docs.google.com/document/d/1p6R9KG3CNLVprYmi8uv_27uVoVy4W8IpolaG_Hodvow/edit?usp=sharing"
};
