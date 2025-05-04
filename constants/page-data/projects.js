export const projectPageData = {
  title: "Project & Contributions",
  intro:
    "In this page. you can explore projects & other things that I have contributed, where ideas meet execution through clean code and thoughtful design. If you have any questions or want to collaborate, feel free to reach out!",
  projects: [
    {
      id: 1,
      cover: "/images/project_images/personal-page.png",
      showcases: ["/images/project_images/personal-page-showcase.png"],
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
        github: "https://github.com/Diptags/pradipta-personal-page",
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
      cover: "/images/project_images/pss-game.png",
      showcases: ["/images/project_images/pss-game-showcase.png"],
      flags: {
        is_full_version: true,
        is_show_repo_url: false,
        is_show_demo_url: true,
        is_show_contribution: true,
        is_show_features: true,
      },
      name: "Traffic Education Game",
      type: "Project Contributions - Team", // TODO: Make this into enum
      desc: "'Permisi, Surat Suratnya', is an educational purpose traffic road game. Built using Unity Game Engine with C# Programming Language. This is a project for preliminary round of GEMASTIK 12 (2019) Game Development competition category.",
      technologies: [
        {
          name: "Unity Game Engine",
          style: "badge_nextjs"
        },
      ],
      links: {
        github: "",
        live: "https://docs.google.com/document/d/1dMmky6VsDifmX38t8bbjtmTWeMjjJK70rtTqtzqSrkI/edit?usp=sharing"
      },
      details: {
        desc: `
          ‘Permisi, Surat-Suratnya’ is an educational traffic-themed road game developed using the Unity Game Engine and C# programming language.
          It was created as a submission for the preliminary round of the GEMASTIK 12 (2019) Game Development competition and has several levels inside the game.
          The game aims to educate players about traffic rules and regulations in a fun and engaging way, and it is designed to be both entertaining and informative.
          At that time, this project was a collaboration with my friends, and I was responsible for the intersection of UI design and programming aspects of the project.
        `,
        features: [
          "🎳 Several education material regarding traffic rules and regulations in Indonesia",
          "🎚️ Available in several difficulties",
          "📱 Quizes with points system",
          "🎈 Morale points system",
        ],
        contributions: [
          "Created the game UI design and layout in Unity scenes.",
          "Contributed in game design and implementation proposal development together with my team consisting of 3 persons to be submitted for the competition.",
          "Utilized design tools to create mock game user interfaces and implemented them in Unity.",
          "Collaborated in the MVP (Minimum Viable Product) game development."
        ],
      },
    },
    // {
    //   id: 3,
    //   cover: "/images/project_images/bvgc.png",
    //   showcases: ["/images/project_images/bvgc-showcase.png"],
    //   flags: {
    //     is_full_version: true,
    //     is_show_repo_url: false,
    //     is_show_demo_url: false,
    //     is_show_contribution: true,
    //     is_show_features: false,
    //   },
    //   name: "Shopee Buy Voucher Get Coins",
    //   type: "Project Contributions - Corporate", // TODO: Make this into enum
    //   desc: "Buy Voucher Get Coins is a shared library project utilized by multiple teams and projects to serve users seeking free coins through voucher purchases. It was developed using React (for Android) and React Native (for iOS).",
    //   technologies: [
    //     {
    //       name: "React",
    //       style: "badge_react"
    //     },
    //     {
    //       name: "React Native",
    //       style: "badge_react"
    //     },
    //   ],
    //   links: {
    //     github: "",
    //     live: ""
    //   },
    //   details: {
    //     desc: `
    //       Buy Voucher Get Coins is a shared library project utilized by multiple teams and projects to serve users seeking free coins through voucher purchases.
    //       It was developed using React (for Android) and React Native (for iOS).
    //       Moreover, behind the scene, this project also have surrounding systems, such as RN plugin, Iframe webpage, and internal dashboards that currently being used
    //       by locals and marketing teams to provide the best purchasable packages for end-user through in-game purchases.
    //     `,
    //     contributions: [
    //       "Served as a Frontend Engineer, responsible for developing requested features throughout the entire product lifecycle: from requirement gathering and development to deployment and maintenance.",
    //       "Handled feature requests, bug fixes, and integration support for tenant teams.",
    //       "Collaborated with PMs, designers, Backend, QA, TPM, and cross-functional stakeholders to turn Figma designs into polished, production-ready UI features.",
    //       "Add and improve project integration tests up to 85%.",
    //       "Developed FE technical documents & guidelines to assist many teams especially tenant teams."
    //     ],
    //     features: []
    //   },
    // },
    // {
    //   id: 4,
    //   cover: "/images/project_images/luckydraw.png",
    //   showcases: ["/images/project_images/luckydraw-showcase.png", "/images/project_images/luckydraw-showcase-2.png"],
    //   flags: {
    //     is_full_version: true,
    //     is_show_repo_url: false,
    //     is_show_demo_url: false,
    //     is_show_contribution: true,
    //     is_show_features: false,
    //   },
    //   name: "Shopee Lucky Draw",
    //   type: "Project Contributions - Corporate", // TODO: Make this into enum
    //   desc: "Shopee Lucky Draw is a gamification project that allows users to win prizes through participation, currently running on production and serving users from various regions. This project is developed using React, React Native and TypeScript.",
    //   technologies: [
    //     {
    //       name: "React",
    //       style: "badge_react"
    //     },
    //     {
    //       name: "React Native",
    //       style: "badge_react"
    //     },
    //   ],
    //   links: {
    //     github: "",
    //     live: ""
    //   },
    //   details: {
    //     desc: `
    //       Shopee Lucky Draw is a gamification project that allows users to win prizes through participation, currently running on production and serving users from various regions.
    //       This project is developed using React, React Native and TypeScript. Lucky Draw available in web iframe, React Native page, and microsite page.
    //     `,
    //     contributions: [
    //       "Served as a Frontend Engineer, responsible for developing requested features throughout the entire product development lifecycle",
    //       "Implemented URL routing workflow for redirection from the HTTPS URL to the project RN plugin inside the Shopee app",
    //       "Collaborated in improving the integration test coverage to reach 90%.",
    //       "Researched & Implemented an FE funnel monitoring for this project using Prometheus, Grafana & PromQL from tool usage research to production—tracking 30+ metrics (e.g., success rates, load times, user distribution, etc) to enable better issue detection, deployment diagnostics & performance optimization. Resulting in 20% improvements in success rate & loading time.",
    //       "Collaborated with PMs, designers, Backend, QA, TPM, and cross-functional stakeholders to turn Figma designs into polished, production-ready UI features.",
    //       "Developed various FE technical documents & guidelines to increase team productivity.",
    //       "Implemented PoC (Proof of Concept) RN E2E Visual Testing using Simulator, XCode, RN Testing Library, and internal tools.",
    //       "Involved in 9/11 Lucky Draw features, serving SEA + LATAM countries",
    //       "Specifically worked in Lucky Draw Wheel Game Mode that is often used in several SEA countries as their Business As Usual campaigns",
    //     ],
    //     features: []
    //   },
    // },
    // {
    //   id: 5,
    //   cover: "/images/project_images/luckydraw.png",
    //   showcases: ["/images/project_images/luckydraw-showcase.png", "/images/project_images/luckydraw-showcase-2.png"],
    //   flags: {
    //     is_full_version: true,
    //     is_show_repo_url: false,
    //     is_show_demo_url: false,
    //     is_show_contribution: true,
    //     is_show_features: false,
    //   },
    //   name: "Shopee Lucky Draw",
    //   type: "Project Contributions - Corporate", // TODO: Make this into enum
    //   desc: "Shopee Lucky Draw is a gamification project that allows users to win prizes through participation, currently running on production and serving users from various regions. This project is developed using React, React Native and TypeScript.",
    //   technologies: [
    //     {
    //       name: "React",
    //       style: "badge_react"
    //     },
    //     {
    //       name: "React Native",
    //       style: "badge_react"
    //     },
    //   ],
    //   links: {
    //     github: "",
    //     live: ""
    //   },
    //   details: {
    //     desc: `
    //       Shopee Lucky Draw is a gamification project that allows users to win prizes through participation, currently running on production and serving users from various regions.
    //       This project is developed using React, React Native and TypeScript. Lucky Draw available in web iframe, React Native page, and microsite page.
    //     `,
    //     contributions: [
    //       "Served as a Frontend Engineer, responsible for developing requested features throughout the entire product development lifecycle",
    //       "Implemented URL routing workflow for redirection from the HTTPS URL to the project RN plugin inside the Shopee app",
    //       "Collaborated in improving the integration test coverage to reach 90%.",
    //       "Researched & Implemented an FE funnel monitoring for this project using Prometheus, Grafana & PromQL from tool usage research to production—tracking 30+ metrics (e.g., success rates, load times, user distribution, etc) to enable better issue detection, deployment diagnostics & performance optimization. Resulting in 20% improvements in success rate & loading time.",
    //       "Collaborated with PMs, designers, Backend, QA, TPM, and cross-functional stakeholders to turn Figma designs into polished, production-ready UI features.",
    //       "Developed various FE technical documents & guidelines to increase team productivity.",
    //       "Implemented PoC (Proof of Concept) RN E2E Visual Testing using Simulator, XCode, RN Testing Library, and internal tools.",
    //       "Involved in 9/11 Lucky Draw features, serving SEA + LATAM countries",
    //       "Specifically worked in Lucky Draw Wheel Game Mode that is often used in several SEA countries as their Business As Usual campaigns",
    //     ],
    //     features: []
    //   },
    // },
  ],
  more_projects: "https://github.com/diptags?tab=repositories"
};
