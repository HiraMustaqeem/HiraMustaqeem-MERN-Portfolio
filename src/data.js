export const EMAIL = "hiramustaqeem09@gmail.com";
export const LINKEDIN = "https://linkedin.com/in/hira-mustaqeem-a77256309";
export const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent(
  "Let's work together"
)}`;

// TODO: replace with your real CV link (Google Drive / Dropbox / hosted PDF)
export const CV_URL = "#";

export const skillGroups = [
  {
    code: "FE",
    title: "Frontend Development",
    items: [
      "JavaScript (ES6+)",
      "React.js",
      "React Hooks",
      "Context API",
      "HTML5 & CSS3",
      "Bootstrap",
      "Tailwind CSS",
      "Responsive Design",
      "Reusable Components",
    ],
  },
  {
    code: "BE",
    title: "Backend Development",
    items: ["Node.js", "Express.js", "RESTful APIs", "JWT Auth & Authorization"],
  },
  { code: "DB", title: "Database", items: ["MongoDB", "MongoDB Atlas"] },
  {
    code: "TL",
    title: "Tools & Version Control",
    items: ["API Integration", "Postman", "Git", "GitHub"],
  },
];

// TODO: replace "#" with your real GitHub repo / live demo / README links,
// and swap the image path for a real screenshot placed in /public/projects/
export const projects = [
  {
    index: "01",
    type: "Personal project",
    name: "Bookies",
    tagline: "E‑commerce bookstore",
    url: "bookies — e‑commerce bookstore",
    dates: "08/2026 – 08/2026",
    desc: "A dynamic bookstore where customers browse and purchase books through an intuitive, responsive interface. Built Add‑to‑Cart and Checkout flows, integrated MongoDB Atlas for data management, added secure role‑based authentication with JWT, and shipped an Admin Dashboard to manage books, users, and store operations.",
    stack: ["React.js", "Express.js", "MongoDB Atlas", "JWT", "Tailwind CSS"],
    badge: false,
    image: "/projects/bookies.png",
    github: "https://github.com/HiraMustaqeem/Bookies-E-commerce-Store",
    // live: "#",
    // readme: "#",
  },
  {
    index: "02",
    type: "Academic project",
    name: "Hotel Management System",
    tagline: "Full‑stack booking platform",
    url: "hotel-management-system — MERN platform",
    dates: "05/2026 – 06/2026",
    desc: "A full‑stack hotel management system supporting online and walk‑in bookings. Implemented role‑based authentication and authorization, real‑time room booking and availability, and dedicated Admin, Staff, and Guest dashboards — including a guest dashboard for managing reservations and account details.",
    stack: ["React.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
    badge: true,
    image: "/projects/HMS.png",
    github: "https://github.com/HiraMustaqeem/Hotel-Management-System-MERN",
    // live: "#",
    // readme: "#",
  },
];

export const eduItems = [
  { h: "Intermediate — Commerce", m: "Govt. College for Women, Karachi" },
  {
    h: "Matriculation — Computer Science",
    m: "Sindh Board of Secondary Education, Karachi",
  },
];

export const courseItems = [
  {
    h: "Advance Diploma in Software Engineering (ADSE)",
    m: "Aptech Metro Star Gate · 09/2023 – In Process",
  },
  {
    h: "Certificate in Information Technology",
    m: "Global Computer Institute · 2023",
  },
];
