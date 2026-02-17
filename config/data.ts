export const userData = {
  site_title: "Portfolio of SUNIL",
  favicon: "/assets/logo.svg",
  theme: {
    color_palette: {
      primary: "#1D1F27",
      secondary: "#4ECCA3",
      accent: "#EFEFEF",
      background: "#FFFFFF",
      text: "#0A0A0A"
    },
    fonts: {
      heading: "Inter, sans-serif",
      body: "Open Sans, sans-serif"
    }
  },
  logo: "/assets/logo.svg",
  navigation: [
    { title: "Home", link: "#home" },
    { title: "About", link: "#about" },
    { title: "Expertise", link: "#expertise" },
    { title: "Projects", link: "#work" },
    { title: "Experience", link: "#experience" },
    { title: "Contact", link: "#contact" }
  ],
  sections: [
     {
       id: "home",
       type: "hero",
       title: "Full-Stack Developer specializing in Next.js & Node.js",
       subtitle: "I build fast, scalable web applications and admin dashboards.",
       description: "Focused on clean architecture, performance and real-world projects.",
       profile_image: "/assets/profile.png",
       cta_buttons: [
         { text: "View Projects", link: "#work", primary: false },
         { text: "Download Resume", link: "/resume.pdf", primary: true },
         { text: "Contact Me", link: "#contact", primary: false }
       ],
       badges: [
         "Full-Stack Development",
         "Next.js & React",
         "Node.js & MongoDB",
         "Scalable Architecture",
         "Admin Dashboards"
       ]
     },
     {
       id: "about",
       type: "about",
       title: "About Me",
       profile_image: "/assets/profile.png",
       content: "I'm Sunil, a full-stack developer from India.\n\nI build real-world web applications using Next.js, Node.js and MongoDB. Currently working on production-level projects and preparing for software engineering roles.\n\nI enjoy solving real problems, building admin panels, and creating scalable backend systems.\n\nMy goal is to become a strong product-focused engineer."
     },
     {
       id: "tech_stack",
       type: "tech_stack",
       title: "Technical Stack",
       description: "MY SUPERPOWERS",
       groups: [
         {
           category: "Frontend",
           description: "Building responsive and dynamic user interfaces.",
           items: ["React", "Next.js", "Tailwind CSS", "Javascript / Typescript"]
         },
         {
           category: "Backend",
           description: "Developing scalable servers and secure authentication.",
           items: ["Node.js", "Express.js", "REST APIs", "Authentication & Authorization"]
         },
         {
           category: "Database",
           description: "Designing efficient data models and managing databases.",
           items: ["MongoDB", "PostgreSQL"]
         },
         {
           category: "Tools & Deployment",
           description: "Version control and cloud deployment workflows.",
           items: ["Git & GitHub", "Vercel / Render", "REST API Integration"]
         }
       ]
     },
     {
       id: "work",
       type: "projects",
       title: "Featured Projects",
       description: "Personal and freelance projects built with production-grade technologies.",
       filters: ["All", "Full-Stack", "Backend", "Frontend"],
       projects: [
         {
           title: "Timetable Management System",
           categories: ["Full-Stack"],
           description: "Full-stack timetable generator with admin panel and role-based authentication.",
           features: [
             "Auto conflict detection",
             "Teacher & classroom management",
             "Secure login system"
           ],
           stack: ["Next.js", "Node.js", "MongoDB", "JWT"],
           images: ["/assets/projects/timetable.jpg"],
           project_link: "#",
           github_link: "#"
         },
          {
            title: "Kayess Internationals",
            categories: ["Full-Stack", "Frontend", "Backend"],
            description: "Premium B2B export platform for natural gums featuring a secure admin dashboard and integrated database for real-time lead and inventory management.",
            features: [
              "Secure Admin Dashboard",
              "Database-Driven Lead Management",
              "Global Product Showcase",
              "SEO & Performance Optimized"
            ],
            stack: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
            images: ["/assets/projects/kayess/hero-slide1.jpg", "/assets/projects/kayess/hero-slide2.jpg", "/assets/projects/kayess/hero-slide3.jpg"],
            project_link: "https://www.ksexim.com/",
            github_link: "#"
          }
       ]
     },
     {
       id: "experience",
       type: "work_experience",
       title: "Professional Experience",
       items: [
         {
           company: "Freelance & Personal Projects",
           role: "Full-Stack Developer",
           period: "2024 - Present",
           responsibilities: [
             "Built full-stack apps using Next.js & Node.js",
             "Developed authentication systems and dashboards",
             "Improved performance and user experience across projects"
           ]
         }
       ]
     },
     {
       id: "philosophy",
       type: "philosophy",
       quote: "Sometimes the best way to solve a problem is to help others.",
       author: "Sunil"
     },
     {
       id: "contact",
       type: "contact_form",
       title: "Get in Touch",
       description: "I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.",
       location: "Punjab, India",
       email: "sunil.cse.dev@gmail.com",
       phone: "+91 62399 70951",
       fields: ["Name", "Email", "Mobile Number", "Message"],
       social_links: {
         linkedin: "https://linkedin.com/in/sunil-cse",
         github: "https://github.com/sunil0718",
         twitter: "https://twitter.com/sunil",
         whatsapp: "https://wa.me/916239970951"
       }
     }
  ],
  footer: {
    text: "© 2024 SUNIL",
    links: ["Privacy Policy", "Terms of Service"]
  }
};
