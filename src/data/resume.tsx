import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Nazal Iqbal",
  initials: "NI",
  url: "https://nazal-iqbal.vercel.app/",
  location: "Kerala, India",
  locationLink: "https://maps.app.goo.gl/qVesH86vjPgZkWGd7",
  description:
    "Hi, I'm Nazal, a software developer passionate about building smart solutions that enhance user experiences and add a touch of joy to every interaction.",
  summary:
    "Hello, I'm Nazal Mohammed Iqbal, a Computer Science Engineering graduate from P.A College of Engineering. My journey into web development began with building small websites using HTML and CSS, igniting my passion for a career in this field. Over time, I have gained valuable experience working on various projects, specializing in technologies like React, Next.js, and Angular, while also expanding my proficiency in Node.js and Nest.js. Currently, I am based in Dubai, developing the main website for Token 13 and building a multi-chain Chrome extension wallet that enables users to buy, sell, exchange crypto, manage multiple wallets, and interact with decentralized applications (dApps). I am dedicated to crafting innovative solutions and leveraging technology to create impactful digital experiences.",
  avatarUrl: "/1.jpg",
  skills: [
    "React",
    "Next.js",
    "Angular",
    "HTML/CSS",
    "Javascript",
    "Typescript",
    "C#",
    "Node.js",
    ".NET",
    "SQL",
    "Python",
    "Chrome extension development",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    {
      href: "https://drive.google.com/file/d/1cOOBuTMuSli4fdH5o5G4W9tMWEcFLlcd/view?usp=sharing",
      icon: NotebookIcon,
      label: "Resume",
    },
  ],
  contact: {
    email: "nazaliqbal786@gmail.com",
    tel: "+916282810365",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Nazaliqbaal",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nazal-iqbaal/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:nazaliqbal786@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
      Whatsapp: {
        name: "Whatsapp",
        url: "https://api.whatsapp.com/send/?phone=6282810365&text&type=phone_number&app_absent=0",
        icon: Icons.whatsapp,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Token 13 Software L.L.C",
      href: "https://token13.net/",
      badges: [],
      location: "Dubai, UAE",
      title: "Web Developer, Software Development",
      logoUrl: "/token13.svg",
      start: "May 2025",
      end: "Present",
      description: [
        "Developing the official Token 13 website to showcase products and services with a responsive, user-centric design.",
        "Building a multi-chain Chrome extension wallet enabling users to buy, sell, exchange crypto, and manage multiple wallets securely.",
        "Implemented dApp interaction features to allow seamless connection with decentralized applications (DeFi, NFT, Web3 platforms).",
        "Focused on security, scalability, and smooth user experience in Web3 wallet development.",
      ],
      projects: [
        {
          name: "Token 13 Website",
          tasks: [
            "Developing a responsive and SEO-optimized website to showcase the company's products, services, and Web3 offerings.",
            "Implemented dynamic content management using modern frontend technologies including Next.js, React, Tailwind CSS, and Shadcn components.",
            "Ensured cross-device compatibility and performance optimization for high-traffic user engagement.",
            "Integrated analytics and tracking to monitor user interactions and improve website effectiveness.",
          ],
        },
        {
          name: "Token 13 Chrome Extension Wallet",
          tasks: [
            "Building a multi-chain wallet extension enabling users to buy, sell, exchange crypto, and manage multiple wallets securely.",
            "Implemented features for connecting and interacting with decentralized applications (dApps) including NFT marketplaces and DeFi platforms.",
            "Focused on security best practices, including encrypted storage and secure API communications.",
            "Ensured a smooth, intuitive, and scalable user experience while maintaining high performance for Web3 interactions.",
          ],
        },
      ],
    },
    {
      company: "Codecraft Technologies",
      href: "https://www.codecrafttech.com/",
      badges: [],
      location: "Office",
      title: "Engineer, Software Development",
      logoUrl: "/codecraft.jpg",
      start: "Sep 2022",
      end: "Jan 2025",
      description: [
        " Developed multiple projects related to reusable component creation and testing, fostering efficient andscalable solutions.",
        " Enhanced SEO for new and existing websites by adhering to best practices, boosting visibility andengagement.",
        " Integrated multiple payment gateways for an e-commerce website, refining the checkout experience.",
        " Managed the Asset Management project, overseeing asset allocation and utilization to optimizeresource efficiency",
        " Documented the migration to facilitate peer understanding and ease of work initiation. Conducted in depth peer code reviews to ensure high code quality.",
      ],
      projects: [
        {
          name: "Mangaluru Tourism",
          tasks: [
            " Led the creation and management of a comprehensive tourism website for Mangaluru, highlighting localcuisines, destinations, events, arts, and culture.",
            " Utilized Next.js, Strapi CMS, Tailwind CSS, Shadcn components, and Storybook for component testing to develop and enhance the website and ensured a dynamic, user-friendly interface and streamlined content management.",
            " Also Implemented features such as directions, email subscriptions to newsletters, and event booking in the website.",
            " Conducted thorough SEO, performance, and accessibility assessments using Lighthouse, achieving 100% scores, and confirmed the website was fully responsive",
          ],
        },
        {
          name: "Asset Management",
          tasks: [
            " Developed an Asset Management system to effectively manage, assign, and service company assets, ensuring smooth and efficient operations leading to improved resource utilization and operational efficiency.",
            " Contributed to developing reusable components using Radix UI, and Shadcn, and implemented features for assigning, creating, and tracking the history of assets social logins, authentication, authorization. asset services.",
            "Worked on creating APIs for listing, creating, updating, and deleting various assets using NestJS and Prisma.",
          ],
        },
        {
          name: "Semnox Payment Gateways",
          tasks: [
            "Integrated multiple payment gateways into the client's ecommerce website, ensuring seamless transaction capabilities across various platforms and enhancing user experience.",
            " Successfully migrated the payment gateway from the client's ASP website to their new Angular frontend, maintaining functionality and security standards during the transition.",
            " Integrated server-side functionality using C# to synchronize payment processes with the client's existing systems, ensuring robust backend support for transaction management.",
            "Documented the workflow for smooth integration and conducted rigorous testing for Quality Assurance (QA), ensuring all payment gateways functioned correctly and met business requirements.",
          ],
        },
        {
          name: " Continental Bal On",
          tasks: [
            "Developed and tested Angular components for the BalOn project at Continental, ensuring functionality and design consistency. Components were thoroughly assesed using Storybook, ensuring robustness and adherence to project specifications.",
          ],
        },
        {
          name: " IGoalZero",
          tasks: [
            " Integrated ERP systems into the existing IGZ project for module import and export functionalities",
            " Brought features including ERP authentication synchronization and updates, cron jobs for automated tasks, and authentication guarding using React and Redux.",
          ],
        },
      ],
    },

    {
      company: "Cognitive Solution",
      href: "http://cognitivesolution.in/",
      badges: [],
      location: "Toronto, ON",
      title: "Intern @Cognitive Solution",
      logoUrl: "/cognitive.jpg",
      start: "May 2017",
      end: "Aug 2017",
      description: [
        "Developed a robust e-commerce platform that allowed users to seamlessly list, browse, and purchase products.",
        "Utilized Python and Django to implement backend functionality, ensuring a secure and intuitive shopping experience.",
        "Focused on user interface design and experience, creating an engaging and efficient process for product discovery and checkout.",
      ],
      projects: [
        {
          name: "E-commerce Website Development",
          tasks: [
            " Built an e-commerce website enabling users to list, browse, checkout, and view products, leveraging Python and Django to create a seamless and intuitive shopping experience.",
          ],
        },
      ],
    },
  ],
  education: [
    {
      school: "P.A College of Engineering",
      href: "https://www.pace.edu.in/",
      degree: "Bachelor of Engineering in Computer Science (B.E)",
      logoUrl: "/PA.jpg",
      start: "2018",
      end: "2022",
    },
    {
      school: "Chinmaya Vidyalaya",
      href: "https://chinmayakasaragod.org/",
      degree: "Higher secondary level of education",
      logoUrl: "/chinmaya.jpg",
      start: "2016",
      end: "2018",
    },
    {
      school: "Apsara Public School",
      href: "https://www.apsarapublicschool.com/",
      degree: "Secondary level of education",
      logoUrl: "/apsara.png",
      start: "2014",
      end: "2016",
    },
  ],
  projects: [
    {
      title: "Visit Manglore",
      href: "https://visitmangalore.in/",
      dates: "June 2023 - Present",
      active: true,
      description:
        "An online platform that showcases the diverse attractions of Mangalore, a coastal city in Karnataka, India. It provides information on various aspects of the city, including upcoming events, popular restaurants, tourist destinations, festivals, and other activities by offering a user-friendly interface and comprehensive information.",
      technologies: [
        "Next.js",
        "Typescript",
        "Strapi",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://visitmangalore.in/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/visitmanglore.png",
    },
    {
      title: "TAC Design",
      href: "https://tacdesignlab.com/",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "A responsive website for TAC Design LAB, a sustainable architecture studio in Kerala, showcasing their philosophy, portfolio of projects, services, and client testimonials. The platform highlights eco-friendly design principles and innovative architecture practices through an intuitive and visually engaging interface.",
      technologies: ["NextJS", "Strapi", "TailwindCSS", "Shadcn UI"],
      links: [
        {
          type: "Website",
          href: "https://tacdesignlab.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/tac-bg.png",
    },
    {
      title: "Zeta Logistics",
      href: "https://zetadxb.com/",
      dates: "Jan 2025",
      active: true,
      description:
        "A responsive website for Zeta Logistics, a company providing logistics and transportation services in the UAE. The website showcases their services, portfolio of projects, and contact information.",
      technologies: ["React", "TailwindCSS", "EmailJS"],
      links: [
        {
          type: "Website",
          href: "https://zetadxb.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Nazaliqbaal/zeta",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/zeta-bg.png",
    },
    {
      title: "Leens Trading",
      href: "https://leenstrading.com/",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "A responsive website for Leens Trading, a company providing trading services in the UAE. The website showcases their products, bestsellers, and contact information.",
      technologies: ["React", "TailwindCSS", "EmailJS"],
      links: [
        {
          type: "Website",
          href: "https://leenstrading.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Nazaliqbaal/leens-trading",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/leens-bg.png",
    },
    {
      title: "Personal Finance Tracker",
      href: "https://personal-finance-tracker-nazal.vercel.app/",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Personal Finance Tracker is a simple web app that displays transactions, expenses, and income, helping users keep track of their finances effortlessly.",
      technologies: ["React", "Typescript", "Firebase", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://personal-finance-tracker-nazal.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Nazaliqbaal/personal-finance-tracker",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/pft-bg.png",
    },
    {
      title: "Blood Pressure Checker",
      href: "https://smartbp-checkbloodpressure.netlify.app/",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Blood Pressure State Checker is a web application designed to help users monitor their blood pressure readings using diastolic (dia) and systolic (sys) values.",
      technologies: ["Vanilla Javascript"],
      links: [
        {
          type: "Website",
          href: "https://smartbp-checkbloodpressure.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Nazaliqbaal/smart-bp-web-static",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/smartbp-bg.PNG",
    },
  ],
} as const;
