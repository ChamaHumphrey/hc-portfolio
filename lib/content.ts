// ============ EDIT YOUR DETAILS HERE ============
// Leave a value as "" and the matching button is hidden or shown as "coming soon".
export const site = {
  name: "Humphrey Chama",
  title: "Computer Science Graduate | Software Developer | AI Integration",
  location: "Ndola, Copperbelt Province, Zambia",
  email: "chamahumphrey733@gmail.com",
  phone: "0975227275", // shown as 0975 227 275
  phoneIntl: "+260975227275", // used for the tap-to-call link
  linkedin: "", // full URL, e.g. "https://www.linkedin.com/in/your-name"
  github: "", // GitHub link removed so it is not shown on the website
  cvUrl: "/Humphrey-Chama-CV.pdf", // file lives in /public. Replace it with your own CV any time, keeping the same name.
  siteUrl: "https://your-site.vercel.app", // replace after deploying
};

export const nav = ["Home", "About", "Experience", "Projects", "Skills", "Leadership", "Contact"];

export const experience = [
  {
    type: "Employment",
    org: "Platinum Courier Services",
    role: "Customer Care Support / Office Customer Care Assistant",
    place: "Ndola, Zambia",
    points: [
      "Supported customer service and day-to-day office operations.",
      "Helped handle customer enquiries and operational issues in a busy courier environment.",
      "Worked where communication, organisation, accuracy and problem-solving mattered.",
      "Gained practical exposure to operational workflows and service delivery.",
      "Acted in a supervisory capacity when my supervisor was absent.",
    ],
  },
  {
    type: "Attachment",
    org: "Nchanga North General Hospital",
    role: "Attachment: billing system",
    place: "Copperbelt, Zambia",
    points: ["Practical exposure to an information system used in an organisational environment."],
  },
];

export type Project = {
  name: string; category: "AI" | "EdTech" | "Systems" | "Industry & Events"; role: string;
  description: string; problem?: string; contribution?: string; status?: string; tags?: string[]; demo?: string; code?: string;
};

export const projects: Project[] = [
  { name: "Nzelu AI", category: "AI", role: "Development team member",
    description: "A Zambian educational technology platform that supports teachers.",
    problem: "Giving teachers a faster way to get relevant answers from educational books.",
    contribution: "Connecting the backend to AI services so books can be processed and responses generated.",
    tags: ["Backend", "AI integration"] },
  { name: "BooxClash Learn", category: "EdTech", role: "Co-founder / project contributor",
    description: "A learning concept that aims to make K–12 education more engaging through interactive, game-based experiences." },
  { name: "Zikomarket", category: "Systems", role: "Co-founder",
    description: "A digital marketplace initiative that aims to connect people with products and marketplace services through technology." },
  { name: "PlanFi", category: "AI", role: "Co-founder / contributor",
    description: "An AI-powered teaching-assistant concept for Zambian teachers, aimed at supporting teaching workflows and educational tasks." },
  { name: "Smart Automatic Timetable", category: "Systems", role: "Project contributor", status: "In use",
    description: "A timetable management solution for organising academic scheduling." },
  { name: "ChristTech Academy Management System", category: "Systems", role: "Developer",
    description: "A management system built for an educational setting, applying software to information management and organisational processes." },
  { name: "Hospital Billing System", category: "Industry & Events", role: "Attachment exposure",
    description: "Practical industry exposure to a billing system at Nchanga North General Hospital." },
  { name: "AI Tutor Demonstration", category: "Industry & Events", role: "Presenter",
    description: "An AI tutor demonstration presented at the ICTAZ General Meeting in 2024, showing educational AI applications and explaining the technology to the audience." },
];

export const skills = [
  { group: "Backend development", strong: true, icon: "server", items: ["C#", "ASP.NET Core", "REST APIs", "API integration", "Software engineering fundamentals"] },
  { group: "Databases", strong: true, icon: "database", items: ["SQL", "MySQL", "SQL Server", "Database design and management"] },
  { group: "AI and integration", strong: true, icon: "brain", items: ["AI service integration", "Prompt engineering", "GitHub Copilot", "Claude Code", "DeepSeek", "AI-assisted coding and debugging"] },
  { group: "Data and analytics", strong: false, icon: "code", items: ["Python", "Data analysis fundamentals", "Power BI and dashboards", "Machine learning fundamentals"] },
  { group: "Core IT and computer science", strong: false, icon: "network", items: ["Cloud computing fundamentals", "Distributed and concurrent systems", "Web development", "Computer networks", "Operating systems"] },
];

export const leadership = [
  { role: "President", org: "ICTAZ Mukuba University Student Chapter" },
  { role: "Class Representative", org: "2025 graduating class" },
  { role: "Public Relations Advisor", org: "ZAYBRIF" },
  { role: "Co-founder", org: "Zikomarket" },
  { role: "Co-founder / contributor", org: "BooxClash Learn and PlanFi" },
];

export const education = [
  { title: "BSc Computer Science", org: "Mukuba University", note: "Graduated 2025, awarded with Merit" },
  { title: "Certificate in Leadership and Supervisory Skills Management", org: "TVTC", note: "" },
];
