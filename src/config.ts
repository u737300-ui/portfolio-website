export interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    technologies: string;
    features: string[];
    image?: string;
    link?: string;
    status?: string;
}

export const config = {
    developer: {
        name: "Arslan",
        fullName: "Arslan Kharal",
        title: "Software Developer",
        description: "Building practical software applications, business systems and interactive digital experiences across mobile, desktop and web."
    },
    about: {
        title: "About Me",
        description: "I build practical software for real-world workflows, from business management applications and POS systems to modern websites and interactive digital experiences. My work spans Flutter, web development, backend systems, offline-first applications, LAN synchronization and 3D web experiences."
    },
    projects: [
        {
            id: 1,
            title: "AK Mobile Shop",
            category: "Business Software / POS",
            description: "A business management and POS system for mobile shops, covering inventory, IMEI tracking, sales, purchases, repairs, debts, suppliers and reporting.",
            technologies: "Flutter, Dart, PostgreSQL, REST API, Windows, Android",
            features: ["Mobile inventory and IMEI tracking", "Sales, purchases and repairs", "Expenses, debts and suppliers", "Reporting"],
            image: "/projects/ak-mobile-shop.webp",
            status: "Featured project"
        },
        {
            id: 2,
            title: "Intel Computer",
            category: "Web Design / 3D Interactive Website",
            description: "A cinematic interactive website created for Intel Computer, focused on computer hardware, computer accessories and woofers.",
            technologies: "React, TypeScript, Vite, Tailwind CSS, Three.js, React Three Fiber, WebGL",
            features: ["Cinematic 3D experience", "Interactive showroom", "Scroll-based storytelling", "Hardware, accessories and audio presentation"],
            image: "/projects/intelcomputer.jpg",
            status: "Featured project"
        },
        {
            id: 3,
            title: "House of Computers",
            category: "Web Design / Interactive Website",
            description: "A premium cinematic website concept for House of Computers, designed around computer hardware and a high-end editorial digital experience.",
            technologies: "Next.js, React, Three.js / 3D Web Experience",
            features: ["Product-focused visual design", "Cinematic presentation", "Responsive interaction", "Modern editorial layout"],
            image: "/projects/houseofcomputers.jpg",
            status: "Featured concept"
        },
        {
            id: 4,
            title: "Pharmacy POS",
            category: "Offline Business Software",
            description: "An offline-first pharmacy management and POS application for managing medicines, stock, sales, purchases and business operations.",
            technologies: "Flutter, Dart, Windows",
            features: ["Medicine inventory and stock", "Purchases and sales", "Customer records and expiry tracking", "Business reports"],
            image: "/projects/pharmacy-pos.webp",
            status: "Ongoing project"
        },
        { id: 5, title: "Misha Beauty Salon", category: "Landing Page", description: "Landing page built for a real salon client in Rahim Yar Khan, presenting services, gallery inspiration and appointment enquiries.", technologies: "Landing Page", features: ["Service categories and gallery inspiration", "WhatsApp appointment enquiry", "Location in Trust Colony, Rahim Yar Khan"], link: "https://mishasaloon.vercel.app", image: "/projects/misha-beauty-salon.jpg", status: "Live Demo" },
        {
            id: 6,
            title: "Ultimate Fitness",
            category: "Landing Page",
            description: "Gym landing page with a scroll-driven build animation, strength and conditioning programs, a look inside the space, and WhatsApp and directions CTAs.",
            technologies: "HTML, CSS, JavaScript",
            features: ["Scroll-driven build animation with replay", "Strength, conditioning & cardio sections", "The Space tour and location", "WhatsApp and Google Maps CTAs"],
            link: "https://raiarslan1744.github.io/ultimate-fitness-preview/",
            status: "Live Demo"
        },
        {
            id: 7,
            title: "Elite Tuition Provider",
            category: "Website Redesign",
            description: "Website redesign sample for a home-tuition provider in Ranchi and Lohardaga, with class search by subject, transparent monthly fees, and career courses in computer, AI, marketing and analytics.",
            technologies: "HTML, CSS, JavaScript",
            features: ["Class search by class & subject", "Transparent monthly fees", "Home, centre & online modes", "Career courses in computer, AI, marketing & analytics"],
            link: "https://u737300-ui.github.io/elite-tuition-sample/",
            status: "Live Demo"
        },
        {
            id: 8,
            title: "Aura Studio Photography",
            category: "Rebrand",
            description: "Rebrand sample for a photography studio in Cranbourne North, Melbourne, covering newborn, maternity and family sessions with session pricing and a booking enquiry form.",
            technologies: "HTML, CSS, JavaScript",
            features: ["Newborn, maternity & family sessions", "Session pricing from $590", "Studio & home sessions", "Online gallery & booking enquiry"],
            link: "https://u737300-ui.github.io/aura-studio-sample/",
            status: "Live Demo"
        },
        {
            id: 9,
            title: "Bella Tavola",
            category: "Landing Page",
            description: "Restaurant landing page demo for an Italian kitchen, with a seasonal menu, chef's specials, private dining and an online table reservation form.",
            technologies: "HTML, CSS, JavaScript",
            features: ["Seasonal Italian menu", "Chef's specials & wine pairings", "Private dining & events", "Online table reservation form"],
            link: "https://u737300-ui.github.io/bella-tavola-demo/",
            status: "Live Demo"
        },
        {
            id: 10,
            title: "Glow & Co.",
            category: "Landing Page",
            description: "Salon landing page demo with hair, nails, skin and makeup services, transparent pricing and a booking request form.",
            technologies: "HTML, CSS, JavaScript",
            features: ["Hair, nails, skin & makeup services", "Transparent pricing", "Online booking request form", "Gallery of recent work"],
            link: "https://u737300-ui.github.io/glow-co-demo/",
            status: "Live Demo"
        },
        {
            id: 11,
            title: "FitTrack",
            category: "Mobile App",
            description: "Flutter workout tracker, a demo mobile app for logging workouts and tracking progress.",
            technologies: "Flutter, Dart",
            features: ["Workout logging & tracking", "Flutter & Dart codebase", "Cross-platform mobile app", "Demo build"],
            link: "https://github.com/u737300-ui",
            status: "Demo"
        },
        {
            id: 12,
            title: "APEX ATHLETICS",
            category: "Landing Page",
            description: "Film-style dark cinematic landing page concept for a premium gym — parallax hero, bold typography, TRAIN HARD headline, WhatsApp join CTA; programs, coaching and membership sections.",
            technologies: "HTML, CSS, JavaScript",
            features: ["Parallax hero with bold TRAIN HARD headline", "Programs, coaching & membership sections", "WhatsApp join CTA", "Film-style dark cinematic design"],
            status: "Design Concept"
        },
    ] as Project[],
    contact: {
        email: "arslan100110011@gmail.com",
        github: null as string | null,
        linkedin: "https://www.linkedin.com/in/arslan-mohsin-b53580388/",
        instagram: "https://www.instagram.com/its.mr.ars/",
        whatsapp: "https://wa.me/923708340704",
        twitter: null as string | null
    },
    skills: {
        develop: {
            title: "APPLICATIONS",
            description: "Practical software for real workflows",
            details: "Building mobile and desktop applications with Flutter, plus modern web applications with React and TypeScript. I focus on clear interfaces, dependable workflows and useful software.",
            tools: ["Flutter", "Dart", "React", "TypeScript", "JavaScript", "HTML", "CSS"]
        },
        design: {
            title: "SYSTEMS",
            description: "Connected, resilient and interactive systems",
            details: "Working across REST APIs, PostgreSQL, authentication, offline-first behavior, LAN synchronization and interactive 3D experiences with Three.js and GSAP.",
            tools: ["REST APIs", "PostgreSQL", "Authentication", "Database systems", "Three.js", "React Three Fiber", "WebGL", "GSAP", "Next.js", "Tailwind CSS", "Git", "Vite", "Android Studio", "VS Code"]
        },
    },
};

