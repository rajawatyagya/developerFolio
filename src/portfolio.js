/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

/* eslint-disable */
// Portfolio content for developerFolio – filled from Yagya's resume only.
// No speculative additions.

const greeting = {
  username: "yagya singh",
  title: "Hi, I’m Yagya Singh",
  logo_name: "YagyaSingh",
  nickname: "",
  subTitle: `Senior Backend Engineer with 8+ years designing and scaling SaaS APIs and cloud-native architectures. Proven expertise in Python, SQLAlchemy, AioHttp, Pandas, NumPy, and Postgres for high-volume enterprise systems.`,
  resumeLink: "/resume/Yagya_Singh_Senior_Software_Developer.pdf", // put the PDF under public/resume/
  portfolio_repository: "https://github.com/rajawatyagya/developerFolio",
  githubProfile: "https://github.com/rajawatyagya",
  displayGreeting: true
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/rajawatyagya",
  linkedin: "https://www.linkedin.com/in/rajawatyagya/",
  gmail: "rajawatyagya@gmail.com",
  gitlab: "https://gitlab.com/rajawatyagya",
  facebook: "https://www.facebook.com/yagya.bits",
  display: true
};

const skillsSection = {
  title: "Core Skills",
  subTitle:
    "Backend-focused engineering for resilient, scalable systems; data wrangling and optimization with Python + SQL.",
  skills: [
    "Design & scaling of SaaS APIs and cloud-native architectures",
    "Python backends with SQLAlchemy, AioHttp, Asyncio, Redis",
    "Data engineering & analytics with Pandas and NumPy",
    "PostgreSQL, Oracle, SQL; performance tuning and profiling",
    "CI/CD, Git, containerized deployments; microservices patterns",
    "Applied quantitative thinking for financial engineering style problems (pricing/analytics mindset)",
    "Automation-first workflows (agents, tooling, internal platforms)"
  ],
  softwareSkills: [
    {skillName: "Python"},
    {skillName: "AioHttp"},
    {skillName: "SQLAlchemy"},
    {skillName: "Asyncio"},
    {skillName: "Redis"},
    {skillName: "Pandas"},
    {skillName: "NumPy"},
    {skillName: "PostgreSQL"},
    {skillName: "Oracle"},
    {skillName: "AWS"},
    {skillName: "Azure"},
    {skillName: "GCP"},
    {skillName: "Angular"},
    {skillName: "React Native"},
    {skillName: "CI/CD"},
    {skillName: "Git"},
    {skillName: "Docker"},
    {skillName: "Systems Design"},
    {skillName: "Observability"},
    {skillName: "Distributed Systems"}
  ],
  display: true
};

const techStack = {
  viewSkillBars: true,
  experience: [
    {Stack: "Python / Backend Architecture", progressPercentage: "90%"},
    {Stack: "Data (Pandas / NumPy / PostgreSQL)", progressPercentage: "85%"},
    {Stack: "Cloud (AWS / Azure / GCP)", progressPercentage: "80%"},
    {Stack: "CI/CD & DevOps", progressPercentage: "75%"}
  ],
  displayCodersrank: false
};

const openSource = {
  showGithubProfile: "true",
  display: true
};

const bigProjects = {
  title: "Selected Work (representative)",
  subtitle:
    "High-level highlights from roles; specific repo links can be added later.",
  projects: [
    // Intentionally left generic—no project names/links in the resume PDF.
  ],
  display: true
};

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",
  achievementsCards: [
    {
      title: "Internet-scale SaaS APIs",
      subtitle:
        "Built & deployed APIs with high uptime and performance benchmarks.",
      footerLink: []
    },
    {
      title: "Infrastructure Cost Optimization",
      subtitle:
        "Reduced infra costs by ~25% through backend & transport algorithm optimization.",
      footerLink: []
    },
    {
      title: "Recognitions",
      subtitle:
        "Recognized for system scalability & architecture design in edtech, SaaS, and supply chain domains.",
      footerLink: []
    }
  ],
  display: true
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Backend Engineer",
      company: "JPMorgan Chase",
      // TODO: replace with an official logo file under src/assets/images/
      companylogo: require("./assets/images/codeInLogo.webp"),
      date: "Dec 2025 – Present",
      desc: "Bangalore, India",
      descBullets: [
        "Building and operating backend services for high-scale financial systems with a focus on reliability, security, and performance.",
        "Developing APIs and data pipelines with Python and SQL; improving observability and operational readiness.",
        "Collaborating with cross-functional teams to ship production-grade features with strong quality and change-management discipline."
      ]
    },
    {
      role: "Senior Software Developer",
      company: "Ernst & Young LLP",
      companylogo: require("./assets/images/ey_logo.png"),
      date: "Dec 2020 – Nov 2025",
      desc: "Bangalore, India",
      descBullets: [
        "Designed & scaled SaaS APIs in Python with SQLAlchemy, AioHttp, Pandas, and NumPy, deployed on AWS/Azure for internet-scale workloads.",
        "Production planning web app (Python, Angular, Postgres): cut production lead times by ~20% and reduced stockouts by ~15%.",
        "Real-time order management system (Angular + Python on AWS): improved precision in order allocation; supported 1M+ daily transactions.",
        "Truck load optimization engine (Python + analytics on Azure): reduced transportation costs by ~25% and improved delivery efficiency.",
        "Custom workflow orchestration (Asyncio, Redis, AioHttp): reduced process cycle times by ~50%; improved cross-team collaboration.",
        "Integrated GenAI-assisted validation modules into supply-chain pipelines to improve anomaly detection and reduce manual interventions."
      ]
    },
    {
      role: "Chief Technical Officer",
      company: "Iboxz Technologies Pvt. Ltd.",
      companylogo: require("./assets/images/iboxz_logo.png"),
      date: "Apr 2018 – Dec 2020",
      desc: "Bangalore, India",
      descBullets: [
        "Scalable SaaS microservices architecture with Django + GCP for modular growth and high availability.",
        "Backend APIs for edtech & developer tooling; modern CI/CD and containerized deployments.",
        "Established BDD testing frameworks, improving release confidence and reducing bug rates by ~30%.",
        "Collaborated with investors & stakeholders; secured product funding with robust backend architecture."
      ]
    },
    {
      role: "Assistant Manager",
      company: "National Payments Corporation of India (NPCI)",
      companylogo: require("./assets/images/npci_logo.png"),
      date: "Jul 2016 – Oct 2017",
      desc: "Hyderabad, India",
      descBullets: [
        "Managed mission-critical backends for UPI and IMPS (high availability, low latency).",
        "Optimized data center backend infrastructure and disaster recovery capabilities.",
        "Data analysis & backend optimization for FASTag, CTS, NACH at national scale."
      ]
    }
  ]
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Birla Institute of Technology & Science (BITS), Pilani",
      logo: "",
      subHeader: "Master of Science (MSc. Tech), Information Systems",
      duration: "2012 – 2016",
      desc: ""
    }
  ]
};

const contactInfo = {
  title: "Contact",
  subtitle:
    "Best reached by email. Add a calendar link here if you prefer scheduling.",
  number: "+91-9870434496",
  email_address: "yagya.s.rajawat@gmail.com",
  location: "Bangalore, India",
  display: true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const projectsHeader = {
  title: "Projects",
  description:
    "Add specific repos or case studies once you decide what to feature publicly.",
  avatar_image_path: "projects_image.svg"
};

const blogSection = {
  title: "Blog",
  subtitle:
    "If you publish posts, wire them here later; currently not configured.",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

const talkSection = {
  title: "Talks",
  subtitle: "Add talks here if you want this section visible.",
  talks: [],
  display: false
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [""],
  display: false // Set false to hide this section, defaults to true
};

const addressSection = {
  title: "Address",
  subtitle: "Bangalore, India",
  display: false
};

const twitterDetails = {
  userName: "",
  display: false
};
const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection,
  podcastSection
};
