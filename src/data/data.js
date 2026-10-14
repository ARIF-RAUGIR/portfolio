export const navLinks = [
  { label: "ABOUT", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "PROJECTS", href: "#projects" },
  { label: "EDUCATION", href: "#education" },
  { label: "INTEREST", href: "#interest" },
  { label: "TESTIMONIALS", href: "#testimonials" },
  { label: "CONTACT", href: "#contact" },
];

export const skills = {
  Frontend: [
    { name: "React", level: 75 },
    { name: "HTML / CSS", level: 85 },
    { name: "JavaScript", level: 78 },
    { name: "Tailwind CSS", level: 80 },
  ],
  Backend: [
    { name: "Python", level: 88 },
    { name: "Django", level: 82 },
    { name: "Django REST Framework", level: 75 },
    { name: "Node.js", level: 55 },
  ],
  Database: [
    { name: "SQLite", level: 80 },
    { name: "PostgreSQL", level: 65 },
    { name: "MySQL", level: 60 },
  ],
  "Tools & DevOps": [
    { name: "Git & GitHub", level: 85 },
    { name: "Kali Linux", level: 78 },
    { name: "Burp Suite", level: 72 },
    { name: "Metasploit", level: 68 },
    { name: "Nmap", level: 80 },
  ],
};

export const projects = [
  {
    title: "Dr.Finder",
    desc: "Django healthcare web app with role-based authentication (patient, doctor, admin), location-based doctor search, and appointment management system.",
    tags: ["Django", "Python", "SQLite", "Auth"],
    badge: "Web Dev",
    color: "#06b6d4",
    link: "https://github.com/arif-raugir",
  },
  {
    title: "External Pentest Report",
    desc: "Simulated full external penetration test for a fictional client — scoping, passive/active recon, exploitation, and professional VAPT report as part of CADS012.",
    tags: ["Nmap", "Metasploit", "Burp Suite", "VAPT"],
    badge: "Security",
    color: "#f43f5e",
    link: "https://github.com/arif-raugir",
  },
  {
    title: "SARSA RL Research",
    desc: "Academic research paper on value-based reinforcement learning (SARSA algorithm) with mathematical worked examples, Q-table diagrams, and comparison to Q-learning.",
    tags: ["Python", "RL", "SARSA", "Research"],
    badge: "AI / ML",
    color: "#10b981",
    link: "https://github.com/arif-raugir",
  },
  {
    title: "JerseyNation BD",
    desc: "E-commerce platform for premium football jerseys — product listings, cart management, order tracking, and admin dashboard.",
    tags: ["Django", "Python", "E-commerce"],
    badge: "Web Dev",
    color: "#06b6d4",
    link: "https://github.com/arif-raugir",
  },
  {
    title: "8086 Assembly Programs",
    desc: "Collection of EMU8086 programs: ATM simulator, merit list sorter (bubble sort), base converter, and string tools. Demonstrates interrupts and addressing modes.",
    tags: ["8086", "Assembly", "EMU8086"],
    badge: "Systems",
    color: "#a3e635",
    link: "https://github.com/arif-raugir",
  },
  {
    title: "TryHackMe OSINT Labs",
    desc: "Structured cybersecurity labs covering OSINT, Google Dorking, Shodan, Meterpreter post-exploitation, and Nmap scanning with written reports per module.",
    tags: ["OSINT", "Shodan", "Meterpreter"],
    badge: "Security",
    color: "#f43f5e",
    link: "https://github.com/arif-raugir",
  },
];

export const experience = [
  {
    role: "Cybersecurity Intern (Self-directed)",
    company: "TryHackMe Platform",
    period: "2026 – Present",
    desc: "Completed structured labs on OSINT, network scanning, web app exploitation, and post-exploitation. Produced written reports for each module as portfolio evidence.",
  },
  {
    role: "Applied Penetration Testing Engineer",
    company: "CADS012 Course",
    period: "2025",
    desc: "End-to-end pentest engagement simulation — scoping, recon, exploitation, and professional report writing for a fictional external client.",
  },
];

export const education = [
  {
    degree: "Higher Secondary Certificate",
    school: "Royal Media College",
    period: "2022",
    desc: "Science Group. Completed higher secondary curriculum with a strong focus on mathematics and physics foundation.",
  },
  {
    degree: "B.Sc. in Computer Science",
    school: "Southeast University, Dhaka",
    period: "2023 – Present",
    desc: "Coursework: Cybersecurity, Penetration Testing, Computer Architecture, Cryptography, Data Mining, AI/ML, Web Development. Currently 4th year.",
  },
];

export const interests = [
  { icon: "🛡️", title: "Ethical Hacking", desc: "VAPT, CTF challenges, and vulnerability research." },
  { icon: "🤖", title: "AI & Machine Learning", desc: "RL algorithms, NLP, and multimodal AI exploration." },
  { icon: "⚙️", title: "Backend Systems", desc: "Designing scalable APIs and data-driven web apps." },
 
];
