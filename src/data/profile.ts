export const profile = {
  headlineName: "Jayasurya Pazhani",
  roleLine: "Software Engineer • Java Full Stack",
  location: "Canada",
  email: "pazhanijayasurya@gmail.com",
  links: {
    github: "https://github.com/Sparky1505",
    linkedin: "https://www.linkedin.com/in/jayasurya-pazhani",
    resume: "/resume/Jayasurya_Pazhani_Resume.pdf"
  },

projects: [
  {
    name: "Enterprise Order & Inventory Management System",
    description:
      "Full-stack system for managing orders, inventory, and user roles using RESTful APIs.",
    details: [
      "Designed and developed backend services using Java and Spring Boot.",
      "Implemented transactional order processing and relational data modeling with PostgreSQL.",
      "Ensured data consistency and integrity across order and inventory workflows."
    ],
    tech: ["Java", "Spring Boot", "PostgreSQL", "REST APIs"],
    links: {
      github: "",
      live: ""
    }
  },

  {
    name: "Job Application Tracking Platform",
    description:
      "Backend-driven platform to track job applications, interview stages, and application status.",
    details: [
      "Built backend services using Spring Boot to manage application lifecycle data.",
      "Implemented keyword-based resume–job matching to identify missing skills from job descriptions.",
      "Designed REST APIs to support tracking and status updates."
    ],
    tech: ["Java", "Spring Boot", "REST APIs"],
    links: {
      github: "",
      live: ""
    }
  },

{
  name: "Warzone – Turn-Based Strategy Game (Java CLI)",
  description:
    "Command-line, turn-based strategy game where players conquer territories and attack enemy bases.",
  details: [
    "Developed a Java-based command-line game implementing turn-based gameplay mechanics and rule validation.",
    "Designed core game logic to support player turns, territory control, and enemy base attacks.",
    "Implemented a tournament mode to simulate multiple automated games and determine winners based on game outcomes.",
    "Applied object-oriented design principles to structure game entities, actions, and state transitions.",
    "Focused on robustness and correctness through input validation and controlled game state updates."
  ],
  tech: ["Java", "Object-Oriented Design", "Command Line Interface"],
  links: {
    github: "",
    live: ""
  }
},

  {
    name: "SipTime – Chrome Extension",
    description:
      "Chrome extension to remind users to stay hydrated during long work or study sessions.",
    details: [
      "Built a lightweight Chrome extension using JavaScript to trigger periodic water reminders.",
      "Implemented background scripts and browser notifications for scheduled alerts.",
      "Designed a simple, distraction-free user experience focused on habit building."
    ],
    tech: ["JavaScript", "Chrome Extensions"],
    links: {
      github: "",
      live: ""
    }
  },

  {
    name: "Slot Machine Game (Pixi.js)",
    description:
      "Interactive slot machine game with animated reels and payout evaluation logic.",
    details: [
      "Implemented reel animations and symbol rendering using Pixi.js.",
      "Generated random reel positions from predefined reelset bands.",
      "Evaluated payouts and visually highlighted winning combinations."
    ],
    tech: ["JavaScript", "Pixi.js", "ES6"],
    links: {
      github: "https://github.com/Sparky1505",
      live: ""
    }
  }
],

experience: [
  {
    company: "Cognizant",
    role: "Software Engineer",
    dates: "Jan 2023 – Mar 2024",
    summary:
      "Backend-leaning full-stack engineer working on enterprise applications using Java, Spring Boot, and PostgreSQL in an Agile environment.",
    bullets: [
      "Developed and maintained 15+ backend REST APIs using Java and Spring Boot to support core enterprise application features.",
      "Implemented request validation, exception handling, and structured error responses to improve backend reliability and debuggability.",
      "Designed and managed relational data models using PostgreSQL to support transactional workflows across business entities.",
      "Integrated backend services with React and Angular frontends to deliver 10+ end-to-end features involving API consumption and data flow.",
      "Wrote and maintained backend unit tests using JUnit to validate business logic and reduce regression issues during releases.",
      "Collaborated with cross-functional teams in an Agile setup, participating in sprint planning, code reviews, and production issue resolution."
    ],
    tags: ["Java", "Spring Boot", "REST APIs", "PostgreSQL", "React", "JUnit"],
  },

  {
    company: "Lump Financial Services",
    role: "Frontend Engineer Intern",
    dates: "Jul 2024 – Aug 2024",
    summary:
      "Frontend intern contributing to user-facing workflows in a startup environment using React.",
    bullets: [
      "Built and shipped frontend components using React to support core user-facing workflows.",
      "Integrated frontend components with backend REST APIs, handling data rendering, loading states, and basic error scenarios.",
      "Collaborated closely with backend engineers and stakeholders to iterate on UI features based on functional and usability feedback."
    ],
    tags: ["React", "JavaScript", "REST APIs"],
  },

  {
    company: "Space Zee",
    role: "Frontend Developer Intern",
    dates: "Jun 2022 – Oct 2022",
    summary:
      "Frontend developer intern working on MERN stack applications for client-facing features.",
    bullets: [
      "Developed and maintained frontend components using React as part of a MERN stack.",
      "Integrated React components with Node.js and Express backend APIs.",
      "Contributed to production features used by end users while collaborating with the core development team."
    ],
    tags: ["React", "Node.js", "Express", "MongoDB"],
  },

  {
    company: "Cognizant",
    role: "Junior Software Engineer",
    dates: "May 2019 – Jun 2020",
    summary:
      "Early-career backend engineer contributing to Java-based systems in an Agile team.",
    bullets: [
      "Implemented backend features and data validations using Java and SQL.",
      "Assisted in resolving defects and delivering enhancements across development and testing cycles.",
      "Used JIRA to track issues and support iterative feature delivery in an Agile environment."
    ],
    tags: ["Java", "SQL", "Agile", "JIRA"],
  },
],


};
