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
    { title: "Expertise", link: "#expertise" },
    { title: "Projects", link: "#work" },
    { title: "Experience", link: "#experience" },
    { title: "Contact", link: "#contact" }
  ],
  sections: [
    {
      id: "home",
      type: "hero",
      title: "SUNIL",
      subtitle: "Software Engineer • Web-Developer • Full Stack Developer",
      description: "I build scalable web applications and modern digital experiences.",
      cta_buttons: [
        { text: "View My Work", link: "#work" },
        { text: "Contact Me", link: "#contact" }
      ]
    },
    {
      id: "social_proof",
      type: "social_proof",
      items: [
        { name: "Upwork", icon: "briefcase" },
        { name: "Fiverr", icon: "globe" },
        { name: "Freelancer", icon: "monitor" },
        { name: "Toptal", icon: "award" }
      ]
    },
    {
      id: "expertise",
      type: "skills",
      title: "My Expertise",
      columns: [
        {
          title: "Software Development",
          description: "Building robust and scalable applications with clean architecture.",
          stack: ["OOP", "System Design", "Java", "Python"]
        },
        {
          title: "Frontend Development",
          description: "Crafting responsive, accessible, and performant user interfaces.",
          stack: ["React", "Next.js", "Tailwind CSS", "TypeScript"]
        },
        {
          title: "Backend / Full Stack",
          description: "Developing secure APIs and managing database performance.",
          stack: ["Node.js", "PostgreSQL", "MongoDB", "GraphQL"]
        }
      ]
    },
    {
      id: "experience",
      type: "work_experience",
      title: "Work Experience",
      items: [
        {
          company: "Current Company",
          role: "Current Role",
          period: "2024 - Present",
          responsibilities: [
            "Led frontend team",
            "Improved performance by 40%"
          ]
        },
        {
          company: "Previous Company",
          role: "Senior Developer",
          period: "2019 - 2024",
          responsibilities: [
            "Built scalable apps",
            "Managed component library"
          ]
        }
      ]
    },
    {
      id: "philosophy",
      type: "philosophy",
      quote: "Sometimes the best way to solve a problem is to help others.",
      author: "Personal Philosophy"
    },
    {
      id: "work",
      type: "projects",
      title: "Featured Projects",
      description: "I’ve worked on multiple real-world web applications, helping businesses build scalable, user-friendly products.",
      filters: ["All", "Web", "Mobile", "Design"],
      projects: [
        {
          title: "Tryotel App",
          categories: ["Web", "Mobile"],
          description: "A comprehensive travel booking platform focusing on speed and usability.",
          images: ["/assets/projects/tryotel-1.jpg"],
          project_link: "/projects/tryotel"
        },
        {
          title: "Flight Local",
          categories: ["Web"],
          description: "B2B travel solution with custom dashboards.",
          images: ["/assets/projects/flightlocal.jpg"],
          project_link: "/projects/flightlocal"
        }
      ]
    },
    {
      id: "experience_summary",
      type: "experience_summary",
      text: "I’ve collaborated with clients worldwide to deliver scalable and user-focused digital solutions.",
      stats: [
        { label: "Years Experience", value: "5+" },
        { label: "Projects Delivered", value: "20+" },
        { label: "Happy Clients", value: "15+" }
      ]
    },
    {
      id: "testimonials",
      type: "testimonials",
      items: [
        {
          quote: "Sunil delivered exactly what we needed, ahead of schedule.",
          name: "Alex Johnson",
          role: "CTO, TechStart"
        },
        {
          quote: "The attention to detail in the UI was impressive.",
          name: "Sarah Williams",
          role: "Product Manager, CreativeAgency"
        }
      ]
    },
    {
      id: "final_cta",
      type: "cta",
      title: "Have a project in mind?",
      subtitle: "Let’s build something amazing together.",
      buttons: [
        { text: "Email Me", link: "mailto:hello@sunil.dev" },
        { text: "WhatsApp", link: "https://wa.me/916239970951" },
        { text: "Contact", link: "#contact" }
      ]
    },
    {
      id: "contact",
      type: "contact_form",
      title: "Contact",
      description: "Reach out for collaborations or just a friendly chat.",
      fields: ["Name", "Email", "Mobile Number", "Message"],
      social_links: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        github: "https://github.com",
        whatsapp: "https://wa.me/916239970951",
        instagram: "https://instagram.com"
      }
    }
  ],
  footer: {
    text: "© 2024 SUNIL",
    links: ["Privacy Policy", "Terms of Service"]
  }
};
