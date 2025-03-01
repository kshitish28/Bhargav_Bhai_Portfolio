import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import XIcon from "./../public/assets/icons/x.svg";
import InstagramIcon from "./../public/assets/icons/instagram.svg";
import FrontendIcon from "./../public/assets/icons/frontend.svg";
import ProblemSolvingIcon from "./../public/assets/icons/problem-solving.svg";
import FreelancerIcon from "./../public/assets/icons/freelance.svg";
import FullStackIcon from "./../public/assets/icons/full-stack.svg";


const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Cybersecurity Specialist",
    icon: <FullStackIcon />,
  },
  {
    title: "IT Auditor",
    icon: <FrontendIcon />,
  },
  {
    title: "Application Security Consultant",
    icon: <ProblemSolvingIcon />,
  },
  {
    title: "Network Security Professional",
    icon: <FreelancerIcon />,
  },
];

const technologies = {
  languages: [
    {
      name: "Java",
      icon: "/assets/tech/java.svg",
      link: "https://www.java.com/en/",
    },
    {
      name: "MySQL",
      icon: "/assets/tech/my-sql.png",
      link: "https://www.mysql.com/",
    },
  ],
  frameworks: [
    {
      name: "SailPoint IdentityNow",
      icon: "/assets/tech/SailPoint_logo.png",
      link: "https://www.sailpoint.com/products/identitynow",
    },
    {
      name: "OWASP Top 10",
      icon: "/assets/tech/Owasp.png",
      link: "https://owasp.org/www-project-top-ten/",
    },
    {
      name: "SANS 25",
      icon: "/assets/tech/sans.png",
      link: "https://www.sans.org/top25-software-errors/",
    },
    {
      name: "ISO 27001",
      icon: "/assets/tech/iso.png",
      link: "http://iso.org/standard/27001",
    },
  ],
  tools: [
    {
      name: "Burp Suite",
      icon: "/assets/tech/burp_suite.jpg",
      link: "https://portswigger.net/burp",
    },
    {
      name: "Postman",
      icon: "/assets/tech/postman.svg",
      link: "https://www.postman.com/",
    },
    {
      name: "SSL Labs",
      icon: "/assets/tech/SSL_Labs.png",
      link: "https://www.ssllabs.com/ssltest/",
    },
    {
      name: "Directory Buster",
      icon: "/assets/tech/directory_buster.png",
      link: "https://www.kali.org/tools/dirbuster/",
    },
  ],
  databases: [
    {
      name: "MySQL",
      icon: "/assets/tech/my-sql.png",
      link: "https://www.mysql.com/",
    },
    {
      name: "Oracle",
      icon: "/assets/tech/oracle.png",
      link: "https://www.oracle.com/in/",
    },
  ],
  environments: [
    {
      name: "Cybersecurity",
      icon: "/assets/tech/cybersecurity.png",
      link: "https://www.cisa.gov/topics/cybersecurity",
    },
    {
      name: "Penetration Testing",
      icon: "/assets/tech/penetration-testing.png",
      link: "https://owasp.org/www-community/penetration-testing",
    },
    {
      name: "Risk & Compliance Auditing",
      icon: "/assets/tech/risk-compliance.png",
      link: "https://www.isaca.org/resources/cobit",
    },
    {
      name: "ITGC Audits",
      icon: "/assets/tech/itgc-audit.png",
      link: "https://corporatefinanceinstitute.com/resources/compliance/it-general-controls-itgc/",
    },
  ],
};


const experiences = [
  {
    title: "Senior IT Auditor",
    company_name: "ASA & Associates LLP",
    icon: "/assets/company/asa_logo.jpg",
    iconBg: "#E6DEDD",
    date: "November 2024 - Present",
    points: [
      "Conducting IT General Controls (ITGC) audits to assess access management, change management, and IT operations.",
      "Ensuring compliance with regulatory standards like SOC, SOX, and industry frameworks such as ISO 27001 and NIST.",
      "Identifying security gaps, recommending improvements, and supporting risk mitigation strategies.",
      "Collaborating with stakeholders to enhance IT security controls and ensure audit readiness.",
    ],
  },
  {
    title: "Associate Security Consultant - Application Security",
    company_name: "SecurEyes",
    icon: "/assets/company/secureyes_logo.jpg",
    iconBg: "#E6DEDD",
    date: "April 2023 – January 2024",
    points: [
      "Conducted grey box and black box security assessments for web applications, identifying vulnerabilities through manual penetration testing and automated scanning.",
      "Performed vulnerability assessments, secure configuration reviews, and remediation planning to enhance application security.",
      "Assessed applications against OWASP Top 10 and SANS 25 security risks, identifying threats like SQL injection, XSS, and URL manipulation.",
      "Conducted penetration testing for banking audits to ensure compliance with security standards and industry best practices.",
      "Documented over 25 vulnerability scan reports, improving remediation efficiency through clear and actionable insights.",
      "Worked with security tools such as Burp Suite, SQL Map, Directory Buster, and SSL Labs for in-depth security testing.",
      "Collaborated with cybersecurity teams to enhance security posture and improve vulnerability management processes.",
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
    name: "QuickEdit: AI-Powered Image & Video Editor",
    description:
      "QuickEdit is an AI-powered online image and video editor built using the Cloudinary AI API. It offers robust features for both images and videos, with user-friendly authentication and a tiered credit system. Enhance your media editing experience with cutting-edge AI tools!",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "shadcn",
        color: "orange-text-gradient",
      },
      {
        name: "cloudinary",
        color: "yellow-text-gradient",
      },
    ],
    image:
      "https://res.cloudinary.com/dqiqi75hm/image/upload/v1734187202/quickedit/dp6y8s8dstqfpq7svmj5.png",
    source_code_link: "https://github.com/Shivam-Sharma-1/QuickEdit",
    deployed_link: "https://quick-edit-app.vercel.app",
  },
  {
    name: "FigPro",
    description:
      "FigPro is a web-based collaborative design tool similar to Figma, built using Next.js, TypeScript, Tailwind CSS, and LiveBlocks API, Fabric.js. With FigPro, teams can seamlessly collaborate on designing interfaces in real-time with a plethora of features.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "fabricjs",
        color: "orange-text-gradient",
      },
      {
        name: "liveblocks",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/fig-pro.png",
    source_code_link: "https://github.com/Shivam-Sharma-1/FigPro",
    deployed_link: "https://fig-pro-github.vercel.app",
  },
  {
    name: "Facility Management System",
    description:
      "The Facility Management System is a comprehensive management solution developed using the MERN (MongoDB, Express.js, React, Node.js) stack. It allows users to book time slots in facilities and provides role-based access control for various functionalities.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "orange-text-gradient",
      },
      {
        name: "tanstack/react-query",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/facility-manager.png",
    source_code_link:
      "https://github.com/Shivam-Sharma-1/Facility-Management-System",
    deployed_link:
      "https://github.com/Shivam-Sharma-1/Facility-Management-System?tab=readme-ov-file#demo",
  },
];

const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/Shivam-Sharma-1",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/shivamsharma77607",
  },
  {
    id: "x",
    icon: <XIcon />,
    link: "https://twitter.com/Shivam_1_Sharma",
  },
  {
    id: "instagram",
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/_.shivam._.here._",
  },
];

const achievements = [
  {
    title: "Google Data Analytics Certification",
    description: "Earned the Google Data Analytics Certificate, demonstrating proficiency in data cleaning, visualization, SQL, and problem-solving using Google Sheets and Tableau.",
    issuedBy: "Google",
    date: "January 2025",
    certificateLink: "https://coursera.org/verify/google-data-analytics-cert"
  },
  {
    title: "Microsoft Certified: Power BI Data Analyst",
    description: "Achieved certification for Power BI, covering data modeling, visualization, and business intelligence strategies.",
    issuedBy: "Microsoft",
    date: "February 2025",
    certificateLink: "https://learn.microsoft.com/en-us/certifications/power-bi-data-analyst/"
  },
];

const heroTexts = [
  "Cybersecurity Specialist",
  500,
  "IT Auditor",
  500,
  "Penetration Tester",
  500,
  "Application Security Consultant",
  500,
  "Vulnerability Assessment Expert",
  500,
  "Risk & Compliance Analyst",
  500,
  "Security Engineer",
  500,
  "Identity & Access Management (IAM) Specialist",
  500,
  "Network Security Professional",
  500,
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socials,
  heroTexts,
  achievements,
};
