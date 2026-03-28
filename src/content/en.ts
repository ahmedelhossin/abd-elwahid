import { SiteContent } from "./types";

export const en: SiteContent = {
    ui: {
        portfolio: "Architecture Portfolio",
        nav: [
            { label: "About", href: "#about" },
            { label: "Works", href: "#works" }
        ],
        heroTitle: "Abdel-Wahed El-Wakil",
        heroText:
            "A leading architect reconnecting modern design with traditional Islamic architecture.",
        explore: "Explore",
        works: "Works",
        gallery: "Gallery",
        connection: "Connection"
    },

    aboutText: [
        "Egyptian architect influenced by Hassan Fathy.",
        "Focused on traditional architecture and environmental design."
    ],

    timeline: [
        {
            year: "1943",
            title: "Born",
            text: "Born in Cairo, Egypt."
        }
    ],

    projectGroups: [
        {
            title: "Residential",
            items: ["Halawa House", "Hamdy House"]
        }
    ],

    galleryItems: [
        {
            src: "/images/gallery/1.jpg",
            title: "Halawa House",
            subtitle: "Agami"
        }
    ],

    philosophy: [
        {
            title: "Local Materials",
            text: "Use of stone and traditional materials."
        }
    ],

    connectionCards: {
        mentor: {
            title: "Mentor",
            text: "Influenced by Hassan Fathy"
        },
        materials: {
            title: "Materials",
            text: "Shared use of local materials"
        },
        legacy: {
            title: "Legacy",
            text: "Extended traditional architecture globally"
        }
    }
};