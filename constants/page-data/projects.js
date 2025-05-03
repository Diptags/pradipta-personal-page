export const projectPageData = {
  title: "Project & Contributions",
  intro:
    "In this page. you can explore projects & other things that I have contributed, where ideas meet execution through clean code and thoughtful design. If you have any questions or want to collaborate, feel free to reach out!",
  projects: [
    {
      id: 1,
      cover: "/images/project_images/personal-page.png",
      showcase: "/images/project_images/personal-page-showcase.png",
      flags: {
        is_full_version: true,
        is_show_repo_url: true,
        is_show_demo_url: true,
        is_show_contribution: false,
        is_show_features: true,
      },
      name: "Personal Website",
      type: "Personal Creation", // TODO: Make this into enum
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
        desc: `
          While developing my portfolio and documenting my work history, I initially faced challenges due to my limited design background.
          To tackle this, I drew inspiration from various sources and eventually built the site using Next.js, Tailwind CSS, React, and MongoDB.
          I took a hands-on approach, creating nearly everything from scratch—including the layout, content, visuals, and more.
          
          This experience deepened my appreciation for persistence and adaptability, reflecting my commitment to continuously improving in both software engineering and design.
          I'm proud of the result and plan to keep refining and enhancing it over time.
        `,
        contributions: [],  // Intentionally empty due to personal projects
        features: [
          "🏠 Home - A warm introduction to who I am",
          "👤 About - A glimpse into my background and skill set",
          "💼 Projects - A showcase of my work and accomplishments",
          "📚 Blogs - Sharing thoughts, insights, and personal experiences",
          "📧 Contact - A simple way to get in touch with me",
        ]
      },
    },
    {
      id: 2,
      cover: "/images/project_images/bvgc.png",
      showcase: "/images/project_images/bvgc-showcase.png",
      flags: {
        is_full_version: true,
        is_show_repo_url: false,
        is_show_demo_url: false,
        is_show_contribution: true,
        is_show_features: false,
      },
      name: "Shopee Buy Voucher Get Coins",
      type: "Project Contributions - Corporate", // TODO: Make this into enum
      desc: "Buy Voucher Get Coins is a shared library project utilized by multiple teams and projects to serve users seeking free coins through voucher purchases. It was developed using React (for Android) and React Native (for iOS).",
      technologies: [
        {
          name: "React",
          style: "badge_react"
        },
        {
          name: "React Native",
          style: "badge_react"
        },
      ],
      links: {
        github: "",
        live: ""
      },
      details: {
        desc: `
          Buy Voucher Get Coins is a shared library project utilized by multiple teams and projects to serve users seeking free coins through voucher purchases.
          It was developed using React (for Android) and React Native (for iOS).
          Moreover, behind the scene, this project also have surrounding systems, such as RN plugin, Iframe webpage, and internal dashboards that currently being used
          by locals and marketing teams to provide the best purchasable packages for end-user through in-game purchases
        `,
        contributions: [
          "Served as a Frontend Engineer, responsible for developing requested features throughout the entire product lifecycle: from requirement gathering and development to deployment and maintenance.",
          "Handled feature requests, bug fixes, and integration support for tenant teams.",
          "Collaborated with PMs, designers, Backend, QA, TPM, and cross-functional stakeholders to turn Figma designs into polished, production-ready UI features.",
          "Add and improve project integration tests up to 85%",
          "Developed FE technical documents & guidelines to assist many teams especially tenant teams."
        ],
        features: []
      },
    },
  ],
  more_projects: "https://github.com/diptags?tab=repositories"
};
