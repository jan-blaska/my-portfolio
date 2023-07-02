import {
    fortytwoprague,
    fitsoft,
    primakurzy,
    scrimba,  
    mobile,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    mongodb,
    git,
    figma,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "Kdo jsem",
    },
    {
      id: "work",
      title: "Dosavadní studium",
    },
    {
      id: "contact",
      title: "Kontakt",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "UX / UI Designer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Úvod do jazyka C",
      company_name: "42 Prague / CS50",
      icon: fortytwoprague,
      iconBg: "#F9F9F9",
      date: "Listopad 2022 - Leden 2023",
      points: [
        "Úspěšně zakončený Piscine pod taktovkou 42 Prague, základy programování.",
        "Paralelně online studium CS50 na Harvardské univerzitě.",
        "Dále prohlubování základů. Práce s gitem.",
        "Úvod do administrace v Linuxu.",
      ],
    },
    {
      title: "Základy tvorby internetových stránek",
      company_name: "Scrimba",
      icon: scrimba,
      iconBg: "#F1FBF4",
      date: "Únor 2023",
      points: [
        "Úvod do HTML5 a CSS3.",
        "JavaScript, TypeScript.",
      ],
    },
    {
      title: "Programátor www aplikací",
      company_name: "Prima kurzy",
      icon: primakurzy,
      iconBg: "#E8E6E1",
      date: "Březen 2023",
      points: [
        "HTML5, CSS3",
        "JavaScript, PHP.",
        "MySQL.",
        "Finální projekt hotel Prima kurzy.",
      ],
    },
    {
      title: "Front-end programátor",
      company_name: "fitSoft",
      icon: fitsoft,
      iconBg: "#F2C932",
      date: "Duben 2023 - současnost",
      points: [
        "React, Next.js, Three.js.",
        "Figma, Adobe Illustrator, Adobe Photoshop.",
        "Podílení se na projektu pro investiční společnost Advans NP.",
        "Projekt pro hudební skupinu Wooden Ships.",
        "Práce na portfoliu firmy fitSoft.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "white",
        },
        {
          name: "mongodb",
          color: "white",
        },
        {
          name: "tailwind",
          color: "white",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "white",
        },
        {
          name: "restapi",
          color: "white",
        },
        {
          name: "scss",
          color: "white",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "white",
        },
        {
          name: "supabase",
          color: "white",
        },
        {
          name: "css",
          color: "white",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };