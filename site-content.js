// Portfolio content is intentionally centralized here so future metrics,
// project links, photos, and writing can be updated without touching layout code.
// TODO: add exact years of experience
// TODO: add additional approved quantified impact where public-safe
// TODO: add exact GitHub project links where available
// TODO: add Substack/writeup links for energy and data pipeline projects if available
// TODO: add approved production data / pipeline details only if cleared for public use

window.siteContent = {
  name: "Archit Mishra",
  email: "architmishra2004@gmail.com",
  links: {
    email: {
      label: "Start a Conversation",
      href: "mailto:architmishra2004@gmail.com",
      ariaLabel: "Email Archit Mishra",
    },
    linkedin: {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/archit--mishra/",
      ariaLabel: "Open Archit Mishra on LinkedIn in a new tab",
      external: true,
    },
    github: {
      label: "GitHub",
      href: "https://github.com/AMishradev",
      ariaLabel: "Open Archit Mishra on GitHub in a new tab",
      external: true,
    },
    substack: {
      label: "Substack",
      href: "https://substack.com/@archeetos",
      ariaLabel: "Open Archit's Substack in a new tab",
      external: true,
    },
  },
  nav: [
    { label: "Journey", href: "#journey" },
    { label: "Experience", href: "#experience" },
    { label: "Recommendations", href: "#recommendations" },
    { label: "Projects", href: "#projects" },
    { label: "Stack", href: "#arsenal" },
    { label: "Writing", href: "#writing" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    eyebrow: "Technical Builder · Business-Minded Operator",
    headline: "Hi, I'm Archit.",
    body:
      "I'm a Computer Science & Engineering graduate from UC Santa Cruz with experience across automotive software, enterprise applications, database engineering, and AI systems. I'm interested in moving fast, building unconventional 0-to-1 ideas, and working with ambitious people on mission-driven products.",
    identity:
      "CSE @ UC Santa Cruz · AI/Data Systems · Automotive Software · Enterprise Tools · 0-to-1 Builder",
    image: {
      src: "assets/ArchitMishraLinkedInProfilePic2026.jpg",
      alt: "Portrait of Archit Mishra",
    },
    ctas: ["email", "linkedin", "github", "substack"],
    signature:
      "Technical builder with business instinct, customer-facing judgment, and the discipline to turn ambiguous systems into working products.",
  },
  stats: [
    {
      value: "3",
      label: "Major Fortune 500 experiences landed in college",
      detail: "Honda R&D, Honda Finance, Skechers AI/Data",
    },
    {
      value: "3-5 days -> 5-10 sec",
      label: "Text-to-SQL POC query workflow acceleration",
    },
    {
      value: "100+",
      label: "Internal users for deployed Honda finance tool",
    },
    {
      value: "Full-Time Co-Op",
      label: "Worked full-time at Honda while enrolled in CSE",
    },
    {
      value: "Japan Leadership",
      label: "Presented Honda R&D prototype internationally",
    },
    {
      value: "CSE",
      label: "Computer Science & Engineering @ UC Santa Cruz",
    },
  ],
  journey: {
    kicker: "Journey",
    title: "The Journey",
    subtitle: "High agency, by design.",
    paragraphs: [
      "I grew up in Los Angeles in an immigrant family that lived through the post-9/11 era of debt, layoffs, and discrimination. That background shaped how I think about work: move quickly, take ownership, and do not wait for perfect permission to build.",
      "In high school, I chased unconventional ideas early - from trying to build a wind turbine on campus to starting a model rocket company. Most of those ideas were messy, but they gave me a bias toward action and taught me that bold ideas often start before you have the perfect credentials.",
      "I later went to UC Santa Cruz for Computer Science & Engineering, one of the university's most impacted and selective majors. At Santa Cruz, I began building a technical foundation across systems, software engineering, AI, databases, and product-driven engineering.",
      "During my first year, I landed a full-time Honda R&D Software Engineering Co-Op while continuing school, an experience that helped support me financially and gave me early exposure to automotive software, prototyping, and engineering inside a global company.",
      "I later continued at Honda through a full-time Captive Finance Applications Co-Op while still enrolled as a Computer Science & Engineering student. That experience pulled me closer to the business side of software - how internal tools, finance systems, and enterprise applications connect engineering work to real operational value.",
      "In early 2025, I stepped away from the standard academic schedule for a focused builder sprint on Homer, an AI voice translation product exploring real-time multilingual communication through web-based peer-to-peer calling and cloud translation APIs.",
      "In the summer of 2025, I went deeper technically as a Database Engineering / AI intern at Skechers. There, I worked with production-scale enterprise data, legacy IBM Informix infrastructure, AWS services, and internal AI tooling - including Natural Language to SQL workflows over wholesale and retail data tables.",
      "Today, my focus is combining deep technical ability with product ownership and customer-facing judgment. I believe technical knowledge plus business instinct creates a high-leverage position: someone who can understand the system, talk to users, define the problem, and build the solution.",
    ],
    items: [
      {
        label: "Los Angeles",
        title: "Early Builder Energy",
        body:
          "Unconventional high school projects: wind turbine concept, model rocket company, and early bias toward action.",
      },
      {
        label: "UC Santa Cruz",
        title: "Computer Science & Engineering",
        body:
          "Entered CSE, one of UCSC's most impacted and selective majors, building foundations in systems, AI, databases, and software engineering.",
      },
      {
        label: "Honda R&D",
        title: "Full-Time Co-Op While Enrolled",
        body:
          "Worked full-time in Honda R&D while continuing school, gaining early exposure to automotive software, prototyping, and engineering inside a global company.",
      },
      {
        label: "Honda Captive Finance",
        title: "Business Systems Exposure",
        body:
          "Continued at Honda through a full-time Captive Finance Applications Co-Op, building perspective on enterprise software and business operations.",
      },
      {
        label: "Homer",
        title: "0-to-1 Builder Sprint",
        body:
          "Stepped away from the standard academic schedule to pursue a real-time AI voice translation product using WebRTC and cloud speech translation APIs.",
      },
      {
        label: "Skechers Database Engineering / AI",
        title: "Enterprise AI + Data",
        body:
          "Worked with production-scale enterprise data, IBM Informix, AWS, and Natural Language to SQL workflows over wholesale and retail data tables.",
      },
      {
        label: "Now",
        title: "Technical + Business Leverage",
        body:
          "Focused on roles where software, AI systems, product ownership, and customer value intersect.",
      },
    ],
  },
  experience: {
    kicker: "Experience",
    title: "Where I've Operated.",
    items: [
      {
        company: "Skechers",
        role: "Database Engineering / AI Intern",
        dates: "Jun 2025 - Sep 2025",
        focus: "Enterprise AI · Text-to-SQL · Production Data · AWS · IBM Informix",
        description:
          "Worked with the Database Engineering / AI team on a Natural Language to SQL proof of concept for business users, connecting LLM workflows to enterprise wholesale and retail data systems.",
        badges: [
          "POC for Business Users",
          "3-5 Days -> 5-10 Sec",
          "AWS / Bedrock / Athena",
          "IBM Informix",
        ],
        bullets: [
          "Contributed to a Natural Language to SQL POC that reduced a query workflow from 3-5 business days to roughly 5-10 seconds for business-user exploration.",
          "Worked with legacy IBM Informix / UNL data as part of data conversion and analytics enablement workflows.",
          "Helped the system reason across Skechers wholesale and retail data tables.",
          "Used Python, AWS Lambda, S3, Athena, Glue, Amazon Bedrock LLMs, MongoDB, and SQL-oriented workflows.",
          "Supported internal experimentation around making enterprise data more accessible to non-technical business users.",
        ],
      },
      {
        company: "Homer",
        role: "Founder / Builder - AI Voice Translation",
        dates: "Jan 2025 - Jun 2025",
        focus: "Real-Time Voice Translation · WebRTC · Azure Speech APIs · Product Prototyping",
        description:
          "Temporarily stepped away from the standard academic schedule to pursue Homer, a real-time AI voice translation product exploring multilingual communication through web-based peer-to-peer calling.",
        badges: [
          "Founder / Builder Sprint",
          "WebRTC",
          "Azure Speech APIs",
          "Real-Time Translation",
          "Device-Agnostic Web App",
        ],
        links: [
          {
            label: "GitHub",
            href: "https://github.com/Homerrrrrrrrr/Rocket.Chat",
            ariaLabel: "Open Homer AI Voice Translation GitHub repository in a new tab",
            external: true,
          },
        ],
        bullets: [
          "Built Homer as a focused 0-to-1 product sprint around real-time multilingual voice translation.",
          "Designed a web-based, device-agnostic experience using peer-to-peer WebRTC calling.",
          "Integrated Microsoft Azure Speech-to-Text and voice translation APIs to support real-time translation workflows.",
          "Supported English, Hindi, Turkish, Spanish, and additional languages available through the underlying translation APIs.",
          "Worked across product concept, technical architecture, user experience, and implementation.",
          "Explored how AI speech systems could reduce friction in multilingual communication.",
        ],
      },
      {
        company: "American Honda Motor Co.",
        role: "Captive Finance Applications Co-Op",
        dates: "2024 - 2025",
        context: "Worked full-time while enrolled as a Computer Science & Engineering student.",
        focus: "Enterprise Applications · Finance Systems · Internal Tools · Business Workflow Software",
        description:
          "Developed and deployed an internal application for Honda's Captive Finance team, digitizing a manual request workflow used by internal business users.",
        badges: [
          "Deployed Internal Tool",
          "100+ Internal Users",
          "Captive Finance",
          "Workflow Digitization",
          "Full-Time Co-Op While Enrolled",
        ],
        bullets: [
          "Worked full-time at Honda while continuing as a CSE student at UC Santa Cruz.",
          "Developed and deployed an internal application used by 100+ internal workers.",
          "Digitized a manual form-based workflow where business users requested updates, fixes, or changes to financial systems.",
          "Automated request intake, form completion, stakeholder notification, and status visibility.",
          "Built a dashboard for stakeholders to track request/project status across the workflow.",
          "Strengthened understanding of how internal tools create operational leverage for business teams.",
        ],
      },
      {
        company: "American Honda Motor Co.",
        role: "R&D Software Engineering Co-Op",
        dates: "2023 - 2024",
        context: "Worked full-time while enrolled as a Computer Science & Engineering student.",
        focus: "Automotive Software · AAOS · R&D Prototyping · Infotainment UX",
        description:
          "Worked in Honda R&D on automotive software prototyping, including an Android Automotive OS infotainment concept exploring videogame controller input and in-car entertainment experiences.",
        badges: [
          "Honda R&D",
          "AAOS",
          "Raspberry Pi",
          "HID Controller Input",
          "Presented to Japan Leadership",
          "R&D Prototype",
        ],
        bullets: [
          "Worked full-time in Honda R&D while continuing as a CSE student at UC Santa Cruz.",
          "Explored flashing Android Automotive OS onto a Raspberry Pi with a monitor to mock an infotainment system.",
          "Built a Tesla-style videogame controller mockup/copy to explore HID input from videogame controllers inside a vehicle infotainment interface.",
          "Prototyped around the possibility of adding more interactive in-car entertainment experiences to Honda vehicles.",
          "Presented the prototype and concept to engineers, managers, and Japan leadership.",
          "Built confidence exploring unconventional product ideas inside a global automotive R&D environment.",
        ],
      },
    ],
  },
  recommendations: {
    kicker: "Recommendations",
    title: "Recommendations",
    subtitle: "What managers and mentors have said about working with me.",
    items: [
      {
        name: "Jake Kwon",
        title: "Sr. Principal Software Architect",
        company: "American Honda Motor Co.",
        relationship: "Direct Manager",
        date: "Aug 11, 2024",
        shortQuote:
          "Archit is a creative and proactive developer. What truly sets him apart is his ability to think beyond development, approaching challenges with a strong business mindset and broad perspective.",
        fullQuote:
          "It was a pleasure working with Archit. He's a creative and proactive developer, always looking for ways to improve and grow. His passion for learning showed in the high quality work he consistently delivered. What truly sets Archit apart is his ability to think beyond just development - he approaches challenges with a strong business mindset and a broad perspective. He'll be a valuable addition to any team!",
        note: "Full quote lightly cleaned for grammar/typos while preserving meaning.",
      },
      {
        name: "Ashutosh Khunte",
        title: "Engineering Director",
        company: "Skechers",
        relationship: "Direct Manager / Mentor",
        date: "Sep 8, 2025",
        shortQuote:
          "Archit contributed to the Natural Language to SQL project using AWS Lambda, S3, Athena, Glue, Bedrock LLMs, and Python. He learned quickly, delivered high-quality results, and showed strong initiative.",
        fullQuote:
          "I had the pleasure of mentoring Archit Mishra during his summer internship at Skechers, where he contributed to the Natural Language to SQL project, applying NLP techniques to an Operational Data Store (ODS) using AWS Lambda, S3, Athena, Glue, Bedrock LLMs, and Python. He learned quickly, delivered high-quality results, and actively collaborated with team members to solve complex challenges, showing strong problem-solving skills and initiative. I wish him the very best of luck in all his future endeavors.",
        note: "Full quote lightly cleaned for grammar/typos while preserving meaning.",
      },
    ],
  },
  projects: {
    kicker: "Projects",
    title: "Things I'm Building.",
    items: [
      {
        title: "Homer AI Voice Translation",
        description:
          "A real-time AI voice translation project for multilingual communication through web-based peer-to-peer calling.",
        expanded:
          "Homer explored how AI speech systems could make multilingual communication feel more natural. The product used WebRTC for peer-to-peer calling and Microsoft Azure speech APIs for speech-to-text and voice translation workflows.",
        badges: ["Public GitHub"],
        tags: [
          "WebRTC",
          "Azure Speech APIs",
          "AI Voice Translation",
          "Real-Time Translation",
          "Speech-to-Text",
          "Product Prototyping",
        ],
        links: [
          {
            label: "GitHub",
            href: "https://github.com/Homerrrrrrrrr/Rocket.Chat",
            ariaLabel: "Open Homer AI Voice Translation GitHub repository in a new tab",
            external: true,
          },
        ],
      },
      {
        title: "Reptile Systems - LA Hacks 2026",
        description:
          "A 3D agent-supported interactive system design tool built at LA Hacks 2026.",
        expanded:
          "Built during LA Hacks from April 24-26, 2026 with a four-person team including students from MIT, UC Berkeley, and UIUC. Reptile Systems explored how agents and 3D interfaces could help users design and reason about interactive systems.",
        meta: ["Main Developer", "4-person team with students from MIT, UC Berkeley, and UIUC", "LA Hacks 2026", "Apr 24-26, 2026"],
        badges: ["Hackathon Build", "3D Agentic Systems"],
        tags: [
          "React",
          "Three.js",
          "Agentverse",
          "Fetch AI",
          "Hackathon",
          "3D Interfaces",
          "Agentic Systems",
          "Education Technology",
        ],
        links: [
          {
            label: "GitHub",
            href: "https://github.com/AMishradev/reptilechemica",
            ariaLabel: "Open Reptile Systems GitHub repository in a new tab",
            external: true,
          },
        ],
      },
      {
        title: "Honda Captive Finance Internal Application",
        description:
          "A deployed internal application for Honda's Captive Finance team that digitized a manual request workflow for financial system updates and fixes.",
        expanded:
          "The application replaced an email/form-based process where business users requested updates or bug fixes to financial systems. It automated request intake, stakeholder notification, form completion, and gave stakeholders a dashboard for tracking request/project status.",
        badges: ["Deployed Internal Tool", "100+ Internal Users", "Internal / Confidential"],
        tags: [
          "Enterprise Software",
          "Internal Tools",
          "Finance Systems",
          "Workflow Automation",
          "Dashboards",
          "Honda",
        ],
        status: "Internal / Confidential",
      },
      {
        title: "Honda AAOS Videogame Controller Prototype",
        description:
          "A Honda R&D prototype exploring Tesla-style videogame controller input and infotainment interaction patterns.",
        expanded:
          "The project explored the possibility of adding interactive in-car entertainment experiences to Honda vehicles. The concept involved flashing Android Automotive OS onto a Raspberry Pi with a monitor to mock an infotainment system, then experimenting with HID input from videogame controllers and vehicle infotainment UI patterns.",
        badges: ["Presented to Japan Leadership", "R&D Prototype", "Internal"],
        tags: [
          "Honda R&D",
          "Android Automotive OS",
          "Raspberry Pi",
          "HID Input",
          "Infotainment",
          "Vehicle UX",
          "R&D Prototype",
        ],
        status: "Internal / R&D Prototype",
      },
      {
        title: "Skechers Natural Language to SQL POC",
        description:
          "An AI-powered Natural Language to SQL proof of concept for business users querying enterprise wholesale and retail data.",
        expanded:
          "The system explored how business users could ask questions of complex enterprise data without waiting through manual 3-5 business day query workflows. The POC reduced query exploration to roughly 5-10 seconds and reasoned over Skechers wholesale and retail data tables.",
        badges: ["POC for Business Users", "3-5 Days -> 5-10 Sec", "Enterprise AI"],
        tags: [
          "Python",
          "Amazon Bedrock",
          "AWS Lambda",
          "S3",
          "Athena",
          "AWS Glue",
          "MongoDB",
          "IBM Informix",
          "SQL",
          "Text-to-SQL",
          "Enterprise AI",
        ],
        status: "Internal / Enterprise AI POC",
      },
      {
        title: "Informix UNL to CSV Data Pipeline",
        description:
          "The world's first working UNL to CSV data pipeline for transforming legacy IBM Informix UNL exports into cleaner CSV data for analytics workflows.",
        expanded:
          "Built to make legacy Informix / UNL data easier to clean, move, and analyze across modern cloud/data workflows, with a practical path from obscure enterprise export formats into usable analytics-ready CSV files.",
        badges: ["Data Engineering", "Legacy Systems"],
        tags: [
          "Python",
          "IBM Informix",
          "UNL",
          "CSV",
          "ETL",
          "Data Engineering",
          "AWS S3",
          "Legacy Data Conversion",
        ],
        links: [
          {
            label: "Read Writeup",
            href: "https://archeetos.substack.com/p/building-ai-infrastructure-the-worlds?r=881hx5",
            ariaLabel: "Read the UNL to CSV data pipeline writeup on Substack in a new tab",
            external: true,
          },
        ],
      },
      {
        title: "Hydrogen + AI Data Center Site Planning Concept",
        description:
          "A 0-to-1 energy infrastructure concept exploring how geologic hydrogen, transport costs, and modular fuel cells could support lower-emission AI data centers.",
        expanded:
          "Explores the intersection of AI infrastructure, energy siting, geologic hydrogen, transportation economics, modular fuel cells, and data center power demand.",
        tags: [
          "Energy",
          "AI Infrastructure",
          "Hydrogen",
          "Data Centers",
          "Cost Modeling",
          "Site Planning",
          "Product Strategy",
        ],
        links: [
          {
            label: "Read Writeup",
            href: "https://archeetos.substack.com/p/geologic-hydrogen-to-power-ai-infrastructure?r=881hx5",
            ariaLabel: "Read the geologic hydrogen AI infrastructure writeup on Substack in a new tab",
            external: true,
          },
        ],
      },
    ],
  },
  arsenal: {
    kicker: "Stack",
    title: "Technical Stack",
    subtitle: "Tools, systems, and workflows I use to move from idea to execution.",
    groups: [
      {
        title: "AI / Agentic Tools",
        skills: [
          "Claude Pro",
          "OpenAI Codex",
          "ChatGPT",
          "Gemini CLI",
          "Cursor",
          "GitHub Copilot",
          "Llama",
          "Kimi",
          "Mistral",
        ],
      },
      {
        title: "Languages",
        skills: ["Python", "C++", "C", "SQL", "JavaScript / TypeScript"],
      },
      {
        title: "AI / Data",
        skills: [
          "Azure Speech APIs",
          "MongoDB",
          "IBM Informix",
          "AWS Glue",
          "AWS Athena",
          "AWS Lambda",
        ],
      },
      {
        title: "Web / Product",
        skills: [
          "React",
          "Next.js",
          "Express",
          "OpenAPI / Swagger",
          "Firebase",
          "Node.js",
          "TailwindCSS",
          "Three.js",
          "WebRTC",
          "Material UI",
        ],
      },
      {
        title: "Systems / Coursework",
        skills: [
          "Computer Architecture",
          "Embedded Operating Systems",
          "Data Structures & Algorithms",
          "Compiler Design",
          "Distributed Systems",
          "Multi-Agent Systems",
          "Machine Learning",
        ],
      },
    ],
  },
  principles: {
    kicker: "Operating System",
    title: "How I Operate.",
    items: [
      {
        title: "High Agency",
        body: "Bias toward action. I do not wait for perfect instructions when the problem is important.",
      },
      {
        title: "Technical Depth",
        body: "I can go from product idea to architecture, code, data model, and working prototype.",
      },
      {
        title: "Business Instinct",
        body: "I care about customers, workflows, distribution, and whether the system creates measurable value.",
      },
      {
        title: "Unconventional 0-to-1 Thinking",
        body:
          "I like exploring ideas before they are obvious - from automotive interfaces to enterprise AI tools to energy infrastructure.",
      },
      {
        title: "People Energy",
        body: "I get energy from talking to people, reaching out, learning fast, and building momentum around ideas.",
      },
      {
        title: "Mission-Oriented",
        body: "I'm looking for teams with ambition, urgency, and a real reason to exist.",
      },
    ],
  },
  writing: {
    kicker: "Writing",
    title: "Writing & Ideas",
    subtitle: "Where I think out loud about technology, business, energy, and systems.",
    body:
      "I write about the intersection of software, business history, infrastructure, energy, and emerging technology. Writing helps me sharpen ideas before turning them into products.",
    cta: {
      label: "Read my Substack",
      href: "https://substack.com/@archeetos",
      ariaLabel: "Open Archit's Substack in a new tab",
      external: true,
    },
    articles: [
      {
        title: "Building AI Infrastructure: The World's Most Boring File Format",
        href: "https://archeetos.substack.com/p/building-ai-infrastructure-the-worlds?r=881hx5",
      },
      {
        title: "How I Became the First Person to...",
        href: "https://archeetos.substack.com/p/how-i-became-the-first-person-to?r=881hx5",
      },
      {
        title: "Geologic Hydrogen to Power AI Infrastructure",
        href: "https://archeetos.substack.com/p/geologic-hydrogen-to-power-ai-infrastructure?r=881hx5",
      },
      {
        title: "How I Got Honda to Use My Marketing",
        href: "https://archeetos.substack.com/p/how-i-got-honda-to-use-my-marketing?r=881hx5",
      },
    ],
  },
  personal: {
    kicker: "The Full Picture",
    title: "More Than the Resume.",
    items: [
      {
        title: "Volleyball",
        body: "I've been playing since the age of 12 and have a deep passion for the game: competitive energy, team dynamics, and fast feedback loops.",
      },
      {
        title: "Business History",
        body:
          "Interested in industrialists, company-building, Standard Oil, Tata, and how ambitious organizations compound over time.",
      },
      {
        title: "Energy Infrastructure",
        body: "Exploring how hydrogen, power systems, and AI data centers could intersect.",
      },
      {
        title: "Manga",
        body: "I've been reading manga since a young age and have a deep appreciation for the art form.",
      },
    ],
    media: [
      {
        src: "assets/MeInFrontOfRockefellerArchiveCenter.jpg",
        alt: "Archit Mishra in front of the Rockefeller Archive Center",
        caption: "Me in front of the Rockefeller Archives",
      },
      {
        src: "assets/VagaBondInvincibleIsJustAWord.jpeg",
        alt: "A favorite panel from the manga Vagabond",
        caption: "My favorite panel from my favorite manga Vagabond",
      },
    ],
  },
  contact: {
    kicker: "Contact",
    title: "Let's Build Something Ambitious.",
    body:
      "I'm looking for roles and teams where technical depth, speed, ownership, and business judgment matter. If you're building something ambitious, I'd love to talk.",
    ctas: ["email", "linkedin", "github", "substack"],
    resume: {
      label: "Download My Resume",
      href: "assets/ArchitMishraResume-May2026.pdf",
      ariaLabel: "Download Archit Mishra's resume PDF",
      download: true,
    },
  },
  footer: {
  },
};
