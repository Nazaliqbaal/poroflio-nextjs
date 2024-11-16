import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Nazal Iqbal",
  initials: "DV",
  url: "https://dillion.io",
  location: "Kerala, India",
  locationLink: "https://maps.app.goo.gl/qVesH86vjPgZkWGd7",
  description:
    "A Frontend Engineer at Codecraft Technologies. I love building things and helping people by creating frontend designs that blend creativity with reliable user experiences!",
  summary:
    "Hello, I'm Nazal Mohammed Iqbal, a Computer Science Engineering graduate from P.A College of Engineering. My journey into web development began with building small websites using HTML and CSS, igniting my passion for a career in this field. Currently, I work as a web developer at Codecraft Technologies in Mangalore, where I have gained valuable experience on various projects. My expertise includes technologies such as React, Next.js, Angular, and .NET, along with a growing proficiency in Node.js and Nest.js. I am dedicated to crafting innovative solutions and leveraging technology to create impactful digital experiences.",
  avatarUrl: "/1.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Angular",
    "C#",
    "Node.js",
    ".NET",
    "SQL",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    {
      href: "https://www.canva.com/design/DAGI1WFvucQ/2aV2Rv3BF_7ZOegMm-rZ8A/edit",
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
      company: "Codecraft Technologies",
      href: "https://www.codecrafttech.com/",
      badges: [],
      location: "Office",
      title: "Engineer, Software Development",
      logoUrl: "/codecraft.jpg",
      start: "Sep 2022",
      end: "Mar 2025",
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
      end: "August 2017",
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
      end: "2028",
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
      title: "Movie OTT",
      href: "https://movie-ott-watch.netlify.app",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "Movie OTT streaming platform, offers an immersive entertainment experience. With this app, users can sign up and sign in, enabling them to search for their favorite movies, TV shows, and series.",
      technologies: ["Angular", "Typescript"],
      links: [
        {
          type: "Website",
          href: "https://movie-ott-watch.netlify.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Nazaliqbaal/OTT-App",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/movie-ott-bg.PNG",
      video: "",
    },
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
      video: "",
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
      video: "",
    },
    {
      title: "Truth or Dare!",
      href: "https://play-truth-or-dare.netlify.app/",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "This is a simple web-based 'Truth or Dare' game where users can play and enjoy the classic party game virtually.",
      technologies: ["Vanilla Javascript", "UI Verse"],
      links: [
        {
          type: "Website",
          href: "https://play-truth-or-dare.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/truth-dare-bg.PNG",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
