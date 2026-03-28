import { SiteContent } from "./types";

export const ar: SiteContent = {
    ui: {
        portfolio: "ملف معماري",
        nav: [
            { label: "نبذة", href: "#about" },
            { label: "الأعمال", href: "#works" }
        ],
        heroTitle: "عبد الواحد الوكيل",
        heroText:
            "معماري أعاد ربط العمارة الحديثة بالعمارة الإسلامية التقليدية.",
        explore: "استكشف",
        works: "الأعمال",
        gallery: "المعرض",
        connection: "العلاقة"
    },

    aboutText: [
        "معماري مصري تأثر بحسن فتحي.",
        "يركز على العمارة التقليدية والبيئية."
    ],

    timeline: [
        {
            year: "1943",
            title: "الميلاد",
            text: "ولد في القاهرة."
        }
    ],

    projectGroups: [
        {
            title: "سكني",
            items: ["بيت حلاوة", "بيت حمدي"]
        }
    ],

    galleryItems: [
        {
            src: "/images/gallery/1.jpg",
            title: "بيت حلاوة",
            subtitle: "العجمي"
        }
    ],

    philosophy: [
        {
            title: "المواد المحلية",
            text: "استخدام الحجر والمواد التقليدية."
        }
    ],

    connectionCards: {
        mentor: {
            title: "الأستاذ",
            text: "تأثر بحسن فتحي"
        },
        materials: {
            title: "المواد",
            text: "استخدام مشترك للمواد المحلية"
        },
        legacy: {
            title: "الإرث",
            text: "تطوير العمارة التقليدية عالميًا"
        }
    }
};