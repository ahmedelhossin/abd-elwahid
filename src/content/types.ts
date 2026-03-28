export type Lang = "en" | "ar";

export type NavItem = {
    label: string;
    href: string;
};

export type TimelineItem = {
    year: string;
    title: string;
    text: string;
};

export type ProjectGroup = {
    title: string;
    items: string[];
};

export type GalleryItem = {
    src: string;
    title: string;
    subtitle: string;
};

export type PhilosophyCard = {
    title: string;
    text: string;
};

export type ConnectionKey = "mentor" | "materials" | "legacy";

export type ConnectionCard = {
    title: string;
    text: string;
};

export type SiteContent = {
    ui: {
        portfolio: string;
        nav: NavItem[];
        heroTitle: string;
        heroText: string;
        explore: string;
        works: string;
        gallery: string;
        connection: string;
    };

    aboutText: string[];
    timeline: TimelineItem[];
    projectGroups: ProjectGroup[];
    galleryItems: GalleryItem[];
    philosophy: PhilosophyCard[];

    connectionCards: Record<ConnectionKey, ConnectionCard>;
};