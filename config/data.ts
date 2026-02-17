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
       cta_buttons: [
         { text: "View Projects", link: "#work" },
         { text: "Download Resume", link: "/resume.pdf" },
         { text: "Contact Me", link: "#contact" }
       ]
     },
     {
       id: "about",
       type: "about",
       title: "About Me",
       profile_image: "/assets/profile.png",
       content: "I’m Sunil, a full-stack developer from India.\n\nI build real-world web applications using Next.js, Node.js and MongoDB.\nCurrently working on production-level projects and preparing for software engineering roles.\n\nI enjoy solving real problems, building admin panels, and creating scalable backend systems.\n\nMy goal is to become a strong product-focused engineer."
     },
     {
       id: "tech_stack",
       type: "tech_stack",
       title: "Tech Stack I Work With",
       items: [
         { name: "Next.js", icon: "code" },
         { name: "React", icon: "layout" },
         { name: "Node.js", icon: "server" },
         { name: "MongoDB", icon: "database" },
         { name: "Tailwind", icon: "palette" },
         { name: "Git", icon: "github" },
         { name: "Vercel", icon: "zap" },
         { name: "REST APIs", icon: "api" }
       ]
     },
     {
       id: "expertise",
       type: "skills",
       title: "My Expertise",
       columns: [
         {
           title: "Frontend",
           description: "Building responsive and dynamic user interfaces.",
           stack: ["React", "Next.js", "Tailwind CSS", "JavaScript / TypeScript"]
         },
         {
           title: "Backend",
           description: "Developing scalable servers and secure authentication.",
           stack: ["Node.js", "Express.js", "REST APIs", "Authentication & Authorization"]
         },
         {
           title: "Database",
           description: "Designing efficient data models and managing databases.",
           stack: ["MongoDB", "PostgreSQL"]
         },
         {
           title: "Tools & Deployment",
           description: "Version control and cloud deployment workflows.",
           stack: ["Git & GitHub", "Vercel / Render", "REST API Integration"]
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
         }
       ]
     },
     {
       id: "experience_summary",
       type: "experience_summary",
       text: "Focused on building modern web applications with a strong emphasis on performance and user experience.",
       stats: [
         { label: "Projects Completed", value: "10+" },
         { label: "Clean Code", value: "100%" },
         { label: "Focus", value: "Next.js" }
       ]
     },
     {
       id: "contact",
       type: "contact_form",
       title: "Get in Touch",
       description: "I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.",
       location: "Punjab, India",
       email: "sunil@example.com",
       phone: "+91 XXXXX XXXXX",
       fields: ["Name", "Email", "Mobile Number", "Message"],
       social_links: {
         linkedin: "https://linkedin.com/in/sunil",
         github: "https://github.com/sunil0718",
         twitter: "https://twitter.com/sunil",
         whatsapp: "https://wa.me/916239970951"
       }
     },
     {
       id: "final_cta",
       type: "cta",
       title: "Ready to start your next project?",
       subtitle: "Let's collaborate to build something amazing together.",
       cta_buttons: [
         { text: "Contact Me", link: "#contact" },
         { text: "WhatsApp", link: "https://wa.me/916239970951" }
       ]
     }
   ],
  footer: {
    text: "© 2024 SUNIL",
    links: ["Privacy Policy", "Terms of Service"]
  }
};
