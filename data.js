/**
 * ============================================================
 *  PORTFOLIO DATA — Edit everything here, nothing else needed
 * ============================================================
 */
const DATA = {

  /* ── Personal ─────────────────────────────────────────── */
  name: "ABDELLAH OUMINA",
  title: "Automotive Diagnostic Engineer",
  subtitle: "Problem Solver · Python Developer",
  image: "assets/my_picture.jpg",
  cvLink: "https://drive.google.com/uc?export=download&id=1591Fu_TkMZaJ3SEC4PIXWKi7fgHlCCXN",

  contact: {
    email: "abdellah.oumina@gmail.com",
    phone: "+212 655-743-571",
    location: "Rabat, Morocco",
    linkedin: "https://www.linkedin.com/in/abdellah-oumina",
    github: "https://github.com/abdellah-oumina",
    website: "https://abdellah-oumina.com/my_resume",
  },

  summary: `Automotive Diagnostic Engineer with <strong>4+ years of experience</strong> in diagnostic software at <strong>Stellantis</strong>. Highly skilled in ECU requirement analysis and development, communication protocols (UDS, KWP2000, CAN, LIN, DoIP), I specialize in identifying technical bottlenecks and building innovative internal tools that eliminate manual errors, accelerate validation cycles, and significantly boost team productivity.`,

  /* ── Stats (shown on hero) ───────────────────────────── */
  stats: [
    { value: "4+", label: "Years in Automotive Diagnostic" },
    { value: "8+", label: "Stellantis Automotive Diagnostic Solutions" },
    { value: "30%", label: "Time Reduction (Analysis/Dev/Validation)" },
    { value: "20%", label: "Productivity Increase" },
  ],

  /* ── Experience ──────────────────────────────────────── */
  experience: [
    {
      title: "Automotive Engineer – Stellantis",
      company: "AFD Tech",
      location: "Rabat, Morocco · Hybrid",
      period: "September 2025 – Present",
      timeline: [
        {
          period: "Sept 2025 – Present",
          role: "Diagnostic Software Engineer",
          items: [
            "Analysis and resolution of non-compliant behaviors in diagnostic operations, including spare part replacement/compatibility, software downloads, configuration.",
            "Monitoring, testing, and validation of new releases of the DIAGBOX diagnostic tool.",
            "Development and deployment of temporary (palliative) solutions for the after-sales network on affected vehicles.",
            "Analysis of ECU communication frames in accordance with OBD standards (UDS, KWP2000) over CAN and LIN networks.",
            "Interpretation and analysis of communication logs based on ECU technical specifications.",
            "Communication of incidents to developers/experts via JIRA and resolution follow-up.",
          ],
        },
      ],
    },
    {
      title: "Automotive Diagnostic Engineer – Stellantis",
      company: "Capgemini",
      location: "Casablanca, Morocco · Hybrid",
      period: "March 2022 – August 2025",
      timeline: [
        {
          period: "March 2022 – August 2025",
          role: "Automotive Software Engineer",
          items: [
            "Expertise in DIAGBOX and WiTECH diagnostic tools for Stellantis vehicles.",
            "Full proficiency in the V-model lifecycle, from requirements gathering to final delivery.",
            "Analysis and processing of ECU technical data, including DTC Matrix, DOTE, ODX messaging, and PAG.",
            "Development of diagnostic modules using DSD, GPC, and Flowchart environments.",
            "Execution of automated unit tests using the SPY&SIM simulator, ensuring compliance with development standards.",
            "Management of anomalies through JIRA, including log analysis, issue reproduction, and implementation of corrective actions.",
          ],
        },
        {
          period: "",
          role: "Key Achievements",
          items: [
            "Enhanced DIAGBOX and WiTECH diagnostic tools through the development of custom internal tools (see Projects section).",
            "Reduced analysis, development, and validation timelines by 30% through process optimization and automation.",
            "Increased team efficiency by 20%",
          ],
        },
      ],
    },
  ],

  /* ── Projects ────────────────────────────────────────── */
  projects: [
    {
      name: "iTraceTool",
      icon: "assets/Projects/iTraceTool/icon.png",
      tech: ["Python", "flutter"],
      description: "Application for interpretation and visualization of encrypted <strong>DIAGBOX</strong> logs. Provides an intuitive interface to analyze complex diagnostic data, generate test scripts, track data and flowcharts, and display key vehicle info (VIN, architecture...).",
      screenshots: Array.from({ length: 14 }, (_, i) => `assets/Projects/iTraceTool/screenshot-${i + 1}.png`),
    },
    {
      name: "Spy-Tracker For Unit-Test",
      icon: "assets/Projects/Spy-Tracker/icon.png",
      tech: ["NodeJS", "ElectronJS", "JavaScript"],
      description: "Frame tracking tool between <strong>DIAGBOX</strong> and <strong>Spy&SIM</strong>. Captures and analyzes every request sent by DIAGBOX to the ECU, automatically generating accurate responses — accelerating unit tests and reducing validation errors.",
      screenshots: Array.from({ length: 3 }, (_, i) => `assets/Projects/Spy-Tracker/screenshot-${i + 1}.png`),
    },
    {
      name: "COMREPA Extension",
      icon: "assets/Projects/COMREPA-Extension/icon.png",
      tech: ["JavaScript", "HTML", "CSS"],
      description: "Innovative Chrome/Edge extension to optimize navigation and access to key information in a Stellantis project context.<br><br><strong>HUDSON_FIXER</strong>: Resolves navigation issues on the Stellantis Hudson site.<br><strong>FLOWCHART_DOC</strong>: User guide for flowcharts in D2C.<br><strong>DOCINFO_DIRECTORY</strong>: Organizes RCDs & CRAs.<br><strong>JIRA_EXT & SHAREPOINT_EXT</strong>: Simplified access to project data.",
      screenshots: Array.from({ length: 5 }, (_, i) => `assets/Projects/COMREPA-Extension/screenshot-${i + 1}.png`),
    },
    {
      name: "FL-Maker",
      icon: "assets/Projects/FL-Maker/icon.png",
      tech: ["Python", "flet"],
      description: "Automated <strong>Delivery Note (Fiche de Livraison)</strong> generator in D2Center. Automatically monitors projects and files, providing a detailed report of each addition, deletion, or modification with the file name, modification type, revision number, and description.",
      screenshots: Array.from({ length: 6 }, (_, i) => `assets/Projects/FL-Maker/screenshot-${i + 1}.png`),
    },
    {
      name: "Search Engine",
      icon: "assets/Projects/Search-Engine-For-Automotive-labels/icon.png",
      tech: ["python", "tkinter"],
      description: "Specialized tool to quickly locate and suggest the most relevant automotive labels. Allows users to search for any term or parameter, ensuring consistency and efficiency during the preparation of delivery files.",
      screenshots: Array.from({ length: 3 }, (_, i) => `assets/Projects/Search-Engine-For-Automotive-labels/screenshot-${i + 1}.png`),
    },
    {
      name: "Jira-Table-Creator",
      icon: "assets/Projects/Jira-Table-Creator/icon.png",
      tech: ["NodeJS", "ElectronJS", "JavaScript", "HTML", "CSS"],
      description: "Application to generate Markup tables ready to integrate into JIRA. Intuitive interface allowing customization of table appearance (color, font, formatting) to ensure clarity and readability.",
      screenshots: Array.from({ length: 5 }, (_, i) => `assets/Projects/Jira-Table-Creator/screenshot-${i + 1}.png`),
    },
    {
      name: "Excel Columns Mapper",
      icon: "assets/Projects/Excel-Columns-Mapping/icon.png",
      tech: ["NodeJS", "ElectronJS", "JavaScript", "HTML", "CSS"],
      description: "Simplifies data transfer between Excel files regardless of column order. Includes a custom JavaScript code editor to process and transform data before transfer — enabling advanced automation.",
      screenshots: Array.from({ length: 7 }, (_, i) => `assets/Projects/Excel-Columns-Mapping/screenshot-${i + 1}.png`),
    },
    {
      name: "Smart-Home System",
      icon: "assets/Projects/Smart-Home-Control-App/icon.png",
      tech: ["Firebase", "Kotlin", "PCB","Android Studio"],
      description: "End of studies project (PFE): complete home automation control system with Android application, Firebase real-time database, and custom PCB for residential automation.",
      screenshots: Array.from({ length: 12 }, (_, i) => `assets/Projects/Smart-Home-Control-App/screenshot-${i + 1}.png`),
    },
  ],

  /* ── Skills ──────────────────────────────────────────── */
  skills: [
    {
      category: "Automotive Diagnostic",
      icon: "fa-car",
      items: ["Digalyser", "DIAGBOX", "WiTech", "ODXVIEWER", "CANdelaStudio", "DOTI", "SPY&SIM", "Corvet", "DOCINFO", "D2CENTER"],
    },
    {
      category: "Protocols & Standards",
      icon: "fa-network-wired",
      items: ["UDS", "KWP2000", "Bus CAN", "Bus LIN"],
    },
    {
      category: "Programming",
      icon: "fa-code",
      items: ["Python", "JavaScript", "Java / Kotlin", "C / C++", "Flutter / Dart", "HTML", "CSS", "SQL", "XML", "JSON"],
    },
    {
      category: "Frameworks & Libs",
      icon: "fa-layer-group",
      items: ["NodeJS", "ElectronJS", "Flask", "Selenium", "PyQt"],
    },
    {
      category: "Tools & DevOps",
      icon: "fa-tools",
      items: ["Git", "TortoiseSVN", "JIRA", "SharePoint", "VS Code", "PyCharm", "LabVIEW"],
    },
    {
      category: "Key Competencies",
      icon: "fa-lightbulb",
      items: ["Automotive Diagnostic", "Task Automation", "Data Analysis", "V-Model", "Problem Solving",],
    },
  ],

  /* ── Education ───────────────────────────────────────── */
  education: [
    {
      degree: "Master of Engineering",
      field: "Embedded Systems & Robotics",
      institution: "University of Sciences & Technologies",
      period: "2018 – 2020",
      location: "Hoceima, Morocco",
    },
    {
      degree: "Bachelor's Degree",
      field: "Electronics & Industrial Computing",
      institution: "University of Sciences",
      period: "2018",
      location: "Meknès, Morocco",
    },
  ],

  /* ── Certificates ────────────────────────────────────── */
  certificates: [
    {
      name: "Automate the Boring Stuff with Python Programming",
      date: "2021",
      organization: "Udemy",
      link: "https://www.udemy.com/certificate/UC-855fd3a1-41ee-4836-b74d-0f7e63a87c24/",
    },
    {
      name: "Data Structure and Algorithms Analysis",
      date: "2022",
      organization: "Udemy",
      link: "https://www.udemy.com/certificate/UC-b384e862-9ff5-4cb5-bd12-3280ffe91e78/",
    },
    {
      name: "Flutter & Dart – The Complete Guide",
      date: "2023",
      organization: "Udemy",
      link: "https://www.udemy.com/",
    },
  ],

  /* ── Languages ───────────────────────────────────────── */
  languages: [
    { lang: "Arabic", level: "Native" },
    { lang: "French", level: "Professional" },
    { lang: "English", level: "Technical" },
  ],
};
