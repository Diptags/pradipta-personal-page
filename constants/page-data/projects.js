export const projectPageData = {
  title: "Projects and Researches",
  intro:
    "In this page. you can explore my projects & researches, where ideas meet execution through clean code and thoughtful design. If you have any questions or want to collaborate, feel free to reach out!",
  projects: [
    {
      id: 1,
      is_full_version: true,
      cover: "/images/project_images/personal-page.png",
      name: "Personal Website",
      desc: "My personal portfolio website built with Next.js & Tailwind CSS. It showcases my skills, projects, and experiences. The design is simple yet elegant, showcasing my journey as a software engineer, writer, and designer.",
      technologies: [
        {
          name: "Next.js",
          style: "badge_nextjs"
        },
        {
          name: "TailwindCSS",
          style: "badge_tailwind"
        },
        {
          name: "React",
          style: "badge_react"
        },
        {
          name: "MongoDB",
          style: "badge_mongo"
        }
      ],
      links: {
        github: "https://github.com/fazle-rabbi-dev/fazle-rabbi-dev.vercel.app",
        live: "https://pradipta.xyz"
      },
      details: {
        title: "Personal Website",
        desc: `
          While developing my portfolio and documenting my work history, I initially faced challenges due to my limited design background.
          To tackle this, I drew inspiration from various sources and eventually built the site using Next.js, Tailwind CSS, React, and MongoDB.
          I took a hands-on approach, creating nearly everything from scratch—including the layout, content, visuals, and more.
          
          This experience deepened my appreciation for persistence and adaptability, reflecting my commitment to continuously improving in both software engineering and design.
          I'm proud of the result and plan to keep refining and enhancing it over time.
        `,
        features: [
          "🏠 Home - A warm introduction to who I am",
          "👤 About - A glimpse into my background and skill set",
          "💼 Projects - A showcase of my work and accomplishments",
          "📚 Blogs - Sharing thoughts, insights, and personal experiences",
          "📧 Contact - A simple way to get in touch with me",
        ]
      },
    },
  ],
  more_projects: "https://github.com/diptags?tab=repositories"
};
