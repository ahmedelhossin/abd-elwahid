import type { SiteContent } from "./types";

export const en: SiteContent = {
    ui: {
        portfolio: "Architecture Portfolio",
        nav: [
            { label: "About", href: "#about" },
            { label: "Works", href: "#works" },
            { label: "Approach", href: "#approach" },
            { label: "Architecture", href: "#architecture" },
            { label: "Awards", href: "#awards" }
        ],

        heroBadge: "Traditional • Environmental • Timeless",
        heroTitle:
            "A landmark architect who reconnected modern building with Islamic tradition, craftsmanship, and climate wisdom.",
        heroText:
            "This website presents the life, philosophy, and architectural legacy of Abdel-Wahed El-Wakil, an Egyptian architect known for reviving traditional forms through locally grounded, culturally respectful, and environmentally sensitive design.",
        exploreBiography: "Explore Biography",
        viewProjects: "View Projects",

        about: "About",
        biography: "Biography",

        designPhilosophy: "Design Philosophy",

        selectedWorks: "Selected Works",
        majorProjectCategories: "Major project categories",

        architectureOverview: "Architecture Overview",
        mainTypesOfArchitecture: "Main types of architecture",
        historicalStyles: "Historical Styles",
        architecturalTraditionsAcrossTime: "Architectural traditions across time",

        recognition: "Recognition",
        awardsAndHonors: "Awards and honors",

        conclusion: "Conclusion",
        whyHisWorkMatters: "Why his work matters",

        architectureWebsiteConcept: "Architecture website concept in English",
        builtFrom: "Built from biography and architecture course materials.",

        darkMode: "Dark",
        lightMode: "Light",
        language: "العربية",

        born: "Born",
        coreFocus: "Core Focus",
        knownFor: "Known For",
        globalAwards: "Recognition",
        cairoEgypt: "Cairo, Egypt",
        traditionModernTechnique: "Tradition with modern technique",
        civicCulturalHousing: "Civic, cultural, and housing work",
        awardsNote: "Aga Khan, Driehaus, Arthur Ross",

        heroStatFocusValue: "Islamic & Vernacular",
        heroStatKnownForValue: "Mosques & Residences",
        heroStatAwardsValue: "Global Awards",

        lifeAndTimeline: "Life and timeline",
        projectPortfolio: "Project portfolio",
        knowledgeContext: "Knowledge and context",
        professionalRecognition: "Professional recognition",
        legacyStatement: "Legacy statement",

        worksGallery: "Works gallery",
        nineSelectedWorks: "Nine selected works and references",

        hassanFathyConnection: "Abdel-Wahed El-Wakil & Hassan Fathy",
        mentorInfluence: "Mentor connection and architectural influence",
        openConnection: "Explore the connection interactively",
        mentorTab: "Mentor",
        materialsTab: "Materials",
        legacyTab: "Legacy"
    },

    aboutText: [
        "Abdel-Wahed El-Wakil is a renowned Egyptian architect celebrated for restoring relevance to traditional Islamic architecture while using modern methods intelligently rather than imitatively. His work consistently respects local culture, craftsmanship, material authenticity, and environmental harmony.",
        "Educated at Ain Shams University and influenced by Hassan Fathy, El-Wakil built a career around architecture that responds to place. Instead of treating tradition as decoration, he treated it as a living design system shaped by climate, structure, and community."
    ],

    timeline: [
        {
            year: "1943",
            title: "Born in Cairo, Egypt",
            text: "Abdel-Wahed El-Wakil was born on 7 August 1943 in Cairo and later became one of the most recognized voices in traditional Islamic and environmentally responsive architecture."
        },
        {
            year: "1965",
            title: "Graduated with First Honours",
            text: "He earned his BSc in Architecture from Ain Shams University with Distinction and First Honours after studying in Egypt and being shaped by both engineering rigor and artistic thinking."
        },
        {
            year: "1967–1970",
            title: "Turn toward traditional architecture",
            text: "After meeting Hassan Fathy, El-Wakil shifted away from purely modernist work and embraced an architectural philosophy rooted in local materials, cultural continuity, and climate-aware construction."
        },
        {
            year: "1970s–1990s",
            title: "Major regional and international work",
            text: "He developed houses, palaces, mosques, and civic buildings across Egypt, Saudi Arabia, Kuwait, South Africa, Bahrain, Brunei, and the United States."
        },
        {
            year: "2024",
            title: "Arthur Ross Award",
            text: "His career was further recognized with the Arthur Ross Award for Excellence in the Classical Tradition, reflecting decades of influence in traditional and sustainable architecture."
        }
    ],

    projectGroups: [
        {
            title: "Residential Architecture",
            items: [
                "Halawa House, Agami near Alexandria",
                "Hamdy House near Cairo",
                "Chourbagy House",
                "Zahran Mansion",
                "Suleiman Palace in Jeddah",
                "Alireza Mansion in Riyadh",
                "Kandiel House in Jeddah",
                "Star Island residence in Miami"
            ]
        },
        {
            title: "Mosque Architecture",
            items: [
                "Corniche Mosque, Jeddah",
                "King Saud Mosque",
                "Harithy Mosque",
                "Azizeyah Mosque",
                "Quba Mosque reconstruction context",
                "Qiblatain Mosque",
                "Miqat Dhu al-Hulayfah Complex",
                "Yateem Mosque, Bahrain",
                "Kerk Street Mosque, Johannesburg",
                "Ash-Shaliheen Mosque, Brunei"
            ]
        },
        {
            title: "Public and Mixed-Use Projects",
            items: [
                "Souk Al-Dawoodiah in Medina",
                "Car showroom and offices in Jeddah",
                "Oxford Centre for Islamic Studies contribution",
                "Boutique hotel in El-Gouna",
                "Mixed-use residential project in Cairo",
                "Master-planning work in Qatar"
            ]
        }
    ],

    architectureTypes: [
        {
            name: "Residential Architecture",
            desc: "Design focused on homes, apartments, villas, and residential communities where comfort, privacy, and daily living quality are central.",
            icon: "building"
        },
        {
            name: "Commercial Architecture",
            desc: "Buildings for business and customer use such as offices, malls, hotels, and restaurants, where efficiency and brand image matter.",
            icon: "landmark"
        },
        {
            name: "Institutional Architecture",
            desc: "Public-service buildings including schools, hospitals, libraries, and government facilities designed for access and large-scale organization.",
            icon: "document"
        },
        {
            name: "Landscape Architecture",
            desc: "Outdoor design for parks, plazas, gardens, and waterfronts, connecting people with ecology and public space.",
            icon: "tree"
        },
        {
            name: "Urban Design and Planning",
            desc: "Planning cities, districts, streets, and transit systems to shape how communities function at a larger scale.",
            icon: "compass"
        },
        {
            name: "Sustainable Architecture",
            desc: "Architecture that reduces environmental impact through passive design, local materials, energy awareness, and long-term resilience.",
            icon: "award"
        }
    ],

    styleCards: [
        "Ancient Egyptian",
        "Greek",
        "Roman",
        "Islamic",
        "Gothic",
        "Renaissance",
        "Baroque",
        "Neoclassical",
        "Modern",
        "Postmodern",
        "Contemporary",
        "Vernacular"
    ],

    awards: [
        "Aga Khan Award for the Agamy Beach House (1980)",
        "King Fahd Award for Research in Islamic Architecture (1985)",
        "Honorary Fellow of the American Institute of Architects (1986)",
        "Second Aga Khan Award for the Corniche Mosque in Jeddah (1989)",
        "Richard H. Driehaus Prize for classical architecture (2008/2009)",
        "Arthur Ross Award for Excellence in the Classical Tradition (2024)"
    ],

    philosophyCards: [
        {
            title: "Local Materials",
            text: "Stone, brick, earth, and regionally meaningful materials are not only aesthetic choices but environmental and cultural decisions."
        },
        {
            title: "Human-Centered Space",
            text: "Courtyards, atriums, shade, privacy, and natural ventilation shape a more livable and socially grounded architecture."
        },
        {
            title: "Tradition as Knowledge",
            text: "Traditional forms such as domes, vaults, arches, and brick construction are used as intelligent systems, not nostalgic symbols."
        }
    ],

    galleryItems: [
        {
            src: "/images/gallery/halawa-house.jpg",
            title: "Halawa House",
            subtitle: "Agami near Alexandria"
        },
        {
            src: "/images/gallery/hamdy-house.jpg",
            title: "Hamdy House",
            subtitle: "Weekend house near Cairo"
        },
        {
            src: "/images/gallery/chourbagy-house.jpg",
            title: "Chourbagy House",
            subtitle: "Townhouse model using traditional design"
        },
        {
            src: "/images/gallery/suleiman-palace.jpg",
            title: "Suleiman Palace",
            subtitle: "Jeddah residential landmark"
        },
        {
            src: "/images/gallery/corniche-mosque.jpg",
            title: "Corniche Mosque",
            subtitle: "Jeddah mosque work"
        },
        {
            src: "/images/gallery/king-saud-mosque.jpg",
            title: "King Saud Mosque",
            subtitle: "Large-scale mosque architecture"
        },
        {
            src: "/images/gallery/quba-mosque.jpg",
            title: "Quba Mosque",
            subtitle: "Historic mosque reconstruction context"
        },
        {
            src: "/images/gallery/oxford-centre.jpg",
            title: "Oxford Centre for Islamic Studies",
            subtitle: "Cross-cultural architectural contribution"
        },
        {
            src: "/images/gallery/el-gouna-hotel.jpg",
            title: "Boutique Hotel in El-Gouna",
            subtitle: "Recent Egyptian project reference"
        }
    ],

    connectionCards: {
        mentor: {
            title: "Mentorship and turning point",
            text: "El-Wakil’s meeting with Hassan Fathy changed the direction of his career. After already producing modern-style buildings, he chose to study under Fathy and moved toward architecture rooted in local knowledge, craft, and climate response."
        },
        materials: {
            title: "Shared material and environmental logic",
            text: "Both architects treated local materials as architectural intelligence rather than compromise. Mud, brick, stone, courtyards, vaults, and passive environmental thinking became part of a broader method for building meaningfully within place."
        },
        legacy: {
            title: "From influence to independent legacy",
            text: "While El-Wakil was deeply influenced by Hassan Fathy, he expanded that foundation into a wide body of work across houses, mosques, civic buildings, and international commissions, proving that traditional architecture could remain globally relevant and structurally ambitious."
        }
    },

    conclusionText:
        "Abdel-Wahed El-Wakil’s architecture demonstrates that tradition and innovation are not opposites. His buildings show how architecture can be technically modern while still remaining culturally meaningful, environmentally responsive, and deeply humane. His legacy is not only visual—it is methodological."
};