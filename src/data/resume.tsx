import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Yash Avinash Makesar",
 
  initials: "YM",
  url: "https://github.com/yashmakesar07",
  location: "Pune, Maharashtra, India",
  locationLink: "",
  description:
    "Frontend Developer skilled in crafting modern, responsive web applications with a strong eye for design and user experience.",
  summary:
    "I’m a passionate Frontend Developer with experience in building scalable applications using React, Tailwind CSS, Ant Design, and modern deployment tools. During my internship, I contributed to building enterprise-grade applications and enjoy working on dynamic, user-centric projects.",
  avatarUrl: "/yash.png",
  skills: [
    "JavaScript",
    "HTML5",
    "CSS3",
    "React",
    "Tailwind CSS",
    "Ant Design",
    "WordPress",
    "Figma",
    "GitHub",
    "AWS Amplify",
    "Vercel",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "yashmakesar.02@gmail.com",
    tel: "+91-7559190532",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/yashmakesar07",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/yashmakesar",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/yashmakesar",
        icon: Icons.x,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "Bitsmith Technologies Pvt Ltd",
      href: "",
      badges: [],
      location: "Remote",
      title: "Frontend Developer Intern",
      logoUrl: "/bitsmith.png",
      start: "Oct 2022",
      end: "Sep 2023",
      description:
        "Developed and designed user-friendly web interfaces using React and Ant Design, improving user experience. Collaborated with back-end teams and stakeholders, wrote clean and maintainable code, and integrated CMS like WordPress to enhance content management.",
    },
  ],
  education: [
    {
      school: "Sinhgad College of Engineering, Pune", 
      href: "",
      degree: "B.E. in Computer Engineering - CGPA: 7.79",
      logoUrl: "/scoe.png",
      start: "2021",
      end: "2024",
    },
    {
      school: "Government Polytechnic Yavatmal",
      href: "",
      degree: "Diploma in Computer Engineering - 91.83%",
      logoUrl: "/poly.png",
      start: "2018",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "Bitsmith Classroom",
      href: "",
      dates: "Internship Project",
      active: true,
      description:
        "An ERP+LMS system for education institutes. Migrated UI from React Tabler to Ant Design, implemented real-time sync for 500+ users, and optimized performance reducing load time by 30%.",
      technologies: ["React", "Ant Design", "Redux Toolkit"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Dynamic Dashboard Widget Management",
      href: "",
      dates: "2023",
      active: true,
      description:
        "A customizable widget dashboard with Redux Toolkit for state management, deployed on Vercel for CI/CD integration.",
      technologies: ["React", "Redux Toolkit", "Vercel", "Tailwind CSS"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Short News Application",
      href: "",
      dates: "2023",
      active: true,
      description:
        "A mobile-first news app using ReactJS, Tailwind CSS, and TypeScript. Features swipe-based navigation with Swiper.js, basic Jest testing, and clean UI designed in Figma.",
      technologies: ["React", "Tailwind CSS", "TypeScript", "Swiper.js", "Figma", "Jest"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Property Rental Platform (RentSpot)",
      href: "",
      dates: "2024",
      active: true,
      description:
        "A responsive property rental platform allowing users to browse listings, use search and filters, add to cart, and complete bookings. Built with React and Redux Toolkit, and deployed on AWS Amplify and Vercel.",
      technologies: [
        "React",
        "Redux Toolkit",
        "Ant Design",
        "Axios",
        "React Router DOM",
        "Tailwind CSS",
        "JSON",
        "AWS Amplify",
        "Vercel"
      ],
      links: 
        { 
          type: "Website",
          href: "https://main.d7qk2k42is6wz.amplifyapp.com/",
          icon: <Icons.globe className="size-3" />,
        },
      image: "",
      video: "",
    },
    {
      title: "Code Editor for Online JavaScript",
      href: "",
      dates: "2024",
      active: true,
      description:
        "An online JavaScript code editor where users can write, execute, and view output in real time. Built with React for dynamic UI and local state management.",
      technologies: ["React", "JavaScript", "Tailwind CSS"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Note-Taking App",
      href: "",
      dates: "2024",
      active: true,
      description:
        "A simple note-taking app with Google login via Auth0. Users can create, edit, and delete notes, which are stored in localStorage for persistence.",
      technologies: ["React", "Auth0", "localStorage", "Tailwind CSS"],
      links: {
        type: "Website",
        href: "https://notes-take-sigma.vercel.app/",
        icon: <Icons.globe className="size-3" />,
      },
      image: "",
      video: "",
    },
  ],
  contributions: [
    {
      title: "Tooljet Open Source Contribution",
      description:
        "Contributed to Tooljet by restructuring a Markdown file into a table format for better readability. The PR was successfully merged into the main repo.",
      href: "https://github.com/ToolJet/ToolJet/pull/XXXX", // Replace with actual PR link if available
    },
  ],
} as const;
