const navLinks = [
    {
      id: 1,
      name: "Projects",
      type: "finder",
    },
    {
      id: 3,
      name: "Contact",
      type: "contact",
    },
    {
      id: 4,
      name: "Resume",
      type: "resume",
    },
  ];
  
  const navIcons = [
    {
      id: 1,
      img: "/icons/wifi.svg",
    },
    {
      id: 2,
      img: "/icons/search.svg",
    },
    {
      id: 3,
      img: "/icons/user.svg",
    },
    {
      id: 4,
      img: "/icons/mode.svg",
    },
  ];
  
  const dockApps = [
    {
      id: "finder",
      name: "Portfolio", // was "Finder"
      icon: "finder.png",
      canOpen: true,
    },
    {
      id: "contact",
      name: "Contact", // or "Get in touch"
      icon: "contact.png",
      canOpen: true,
    },
    {
      id: "terminal",
      name: "Skills", // was "Terminal"
      icon: "terminal.png",
      canOpen: true,
    },
    {
      id: "trash",
      name: "Archive", // was "Trash"
      icon: "trash.png",
      canOpen: true,
    },
  ];
  
  const blogPosts = [
    {
      id: 1,
      date: "Sep 2, 2025",
      title:
        "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
      image: "/images/blog1.png",
      link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
    },
    {
      id: 2,
      date: "Aug 28, 2025",
      title: "The Ultimate Guide to Mastering Three.js for 3D Development",
      image: "/images/blog2.png",
      link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
    },
    {
      id: 3,
      date: "Aug 15, 2025",
      title: "The Ultimate Guide to Mastering GSAP Animations",
      image: "/images/blog3.png",
      link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
    },
  ];
  
  const techStack = [
    {
      category: "Frontend",
      items: ["React.js", "Next.js", "TypeScript"],
    },
    {
      category: "Mobile",
      items: ["React Native", "Expo"],
    },
    {
      category: "Styling",
      items: ["Tailwind CSS", "Sass", "CSS"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "NestJS", "Hono"],
    },
    {
      category: "Database",
      items: ["MongoDB", "PostgreSQL"],
    },
    {
      category: "Dev Tools",
      items: ["Git", "GitHub", "Docker"],
    },
  ];
  
  const socials = [
    {
      id: 1,
      text: "Github",
      icon: "/icons/github.svg",
      bg: "#f4656b",
      link: "https://github.com/coder-JOT",
    },
    {
      id: 4,
      text: "LinkedIn",
      icon: "/icons/linkedin.svg",
      bg: "#05b6f6",
      link: "https://www.linkedin.com/in/inderjot-singh-chawla/",
    },
  ];
  
  const photosLinks = [
    {
      id: 1,
      icon: "/icons/gicon1.svg",
      title: "Library",
    },
    {
      id: 2,
      icon: "/icons/gicon2.svg",
      title: "Memories",
    },
    {
      id: 3,
      icon: "/icons/file.svg",
      title: "Places",
    },
    {
      id: 4,
      icon: "/icons/gicon4.svg",
      title: "People",
    },
    {
      id: 5,
      icon: "/icons/gicon5.svg",
      title: "Favorites",
    },
  ];
  
  const gallery = [
    {
      id: 1,
      img: "/images/gal1.png",
    },
    {
      id: 2,
      img: "/images/gal2.png",
    },
    {
      id: 3,
      img: "/images/gal3.png",
    },
    {
      id: 4,
      img: "/images/gal4.png",
    },
  ];
  
  export {
    navLinks,
    navIcons,
    dockApps,
    blogPosts,
    techStack,
    socials,
    photosLinks,
    gallery,
  };
  
  const WORK_LOCATION = {
    id: 1,
    type: "work",
    name: "Work",
    icon: "/icons/work.svg",
    kind: "folder",
    children: [
      // ▶ Project 1
      {
        id: 5,
        name: "Mac-Os Portfolio Website",
        icon: "/images/folder.png",
        kind: "folder",
        position: "top-5 left-4", // icon position inside Finder
        windowPosition: "top-[5vh] left-1", // optional: Finder window position
        children: [
          {
            id: 1,
            name: "Mac-os portfolio.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-5 left-40",
            description: [
              "This macOS-inspired portfolio is an interactive desktop environment built entirely in the browser.",
              "Instead of a traditional scrolling website, it delivers an immersive OS experience with draggable windows, a functional dock, and native-feeling applications like Finder, Terminal, and Contact.",
              "Think of it like having macOS running in your browser-complete with window management, smooth GSAP animations, and a fully interactive file system.",
              "It's built with React, GSAP, Tailwind CSS, and Zustand, showcasing advanced state management, component architecture, and attention to detail in creating a pixel-perfect macOS experience.",
            ],
          },
          {
            id: 2,
            name: "macos_portfolio.com",
            icon: "/images/safari.png",
            kind: "file",
            fileType: "url",
            href: "erinderjot.tech",
            position: "top-10",
          },
          {
            id: 4,
            name: "home.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-52 right-80",
            imageUrl: "/images/project-1.png",
          },
        ],
      },
  
      // ▶ Project 2
      {
        id: 6,
        name: "Laundry Website",
        icon: "/images/folder.png",
        kind: "folder",
        position: "top-52 right-80",
        windowPosition: "top-[20vh] left-7",
        children: [
          {
            id: 1,
            name: "Laundry Business Website.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-5 right-10",
            description: [
             "Laundry Express is a convenient service platform designed to take the hassle out of your daily chores with door-to-door laundry solutions.",
             "Instead of spending hours washing and folding, you get professional care including hygienic washing, delicate dry cleaning, and expert ironing delivered right to your home.",
             "Think of it like a personal valet for your wardrobe-ensuring your clothes are fresh, wrinkle-free, and treated with care so you can focus on what matters most.",
             "It features a clean, modern interface with intuitive navigation and clear service cards, making it effortless to schedule a pickup from any device."
            ],
          },
          {
            id: 2,
            name: "book-laundry.com",
            icon: "/images/safari.png",
            kind: "file",
            fileType: "url",
            href: "https://coder-jot.github.io/laundry/",
            position: "top-20",
          },
          {
            id: 3,
            name: "Book Laundry.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-26 right-60",
            imageUrl: "/images/project-2.png",
          },
        ],
      },
    ],
  };
  
  const ABOUT_LOCATION = {
    id: 2,
    type: "about",
    name: "About me",
    icon: "/icons/info.svg",
    kind: "folder",
    children: [
      {
        id: 1,
        name: "me.png",
        icon: "/images/image.png",
        kind: "file",
        fileType: "img",
        position: "top-10 left-5",
        imageUrl: "/images/inder-2.jpg",
      },
      {
        id: 2,
        name: "casual-me.png",
        icon: "/images/image.png",
        kind: "file",
        fileType: "img",
        position: "top-28 right-72",
        imageUrl: "/images/inder.jpg",
      },
      {
        id: 4,
        name: "about-me.txt",
        icon: "/images/txt.png",
        kind: "file",
        fileType: "txt",
        position: "top-50 left-5",
        subtitle: "Meet the Developer Behind the Code",
        image: "/images/inder-3.jpg",
        description: [
          "Hey! I’m Inderjot 👋, a full-stack software developer passionate about building robust, scalable systems that solve real-world problems.",
          "I'm proficient across multiple tech stacks-from backend technologies like Java, C++, C#, Python, and Spring Boot, to frontend frameworks like React.js-allowing me to architect end-to-end solutions.",
          "My expertise extends beyond coding: I specialize in system design, crafting scalable architectures that handle growth, and I'm deeply committed to Data Structures & Algorithms, ensuring optimal performance and efficient problem-solving, and writing code that doesn’t need a search party to debug.",
          "Whether it's designing microservices, optimizing database queries, or building intuitive user interfaces, I bring a holistic approach to software development-writing clean, maintainable code that stands the test of time.",
        ],
      },
    ],
  };
  
  const RESUME_LOCATION = {
    id: 3,
    type: "resume",
    name: "Resume",
    icon: "/icons/file.svg",
    kind: "folder",
    children: [
      {
        id: 1,
        name: "Resume.pdf",
        icon: "/images/pdf.png",
        kind: "file",
        fileType: "pdf",
        href: "/files/resume.pdf",
      },
    ],
  };
  
  const TRASH_LOCATION = {
    id: 4,
    type: "trash",
    name: "Trash",
    icon: "/icons/trash.svg",
    kind: "folder",
    children: [
      {
        id: 1,
        name: "trash1.png",
        icon: "/images/image.png",
        kind: "file",
        fileType: "img",
        position: "top-10 left-10",
        imageUrl: "/images/trash-1.png",
      },
      {
        id: 2,
        name: "trash2.png",
        icon: "/images/image.png",
        kind: "file",
        fileType: "img",
        position: "top-40 left-80",
        imageUrl: "/images/trash-2.png",
      },
    ],
  };
  
  export const locations = {
    work: WORK_LOCATION,
    about: ABOUT_LOCATION,
    resume: RESUME_LOCATION,
    trash: TRASH_LOCATION,
  };
  
  const INITIAL_Z_INDEX = 1000;
  
  const WINDOW_CONFIG = {
    finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    trash: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  };
  
  export { INITIAL_Z_INDEX, WINDOW_CONFIG };