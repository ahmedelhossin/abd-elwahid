export type Lang = "en" | "ar";
export type ThemeMode = "light" | "dark";
export type ConnectionKey = "mentor" | "materials" | "legacy";

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

export type ArchitectureType = {
  name: string;
  desc: string;
  icon: string;
};

export type PhilosophyCard = {
  title: string;
  text: string;
};

export type GalleryItem = {
  src: string;
  title: string;
  subtitle: string;
};

export type ConnectionCard = {
  title: string;
  text: string;
};

export type SiteContent = {
  ui: {
    portfolio: string;
    nav: NavItem[];

    heroBadge: string;
    heroTitle: string;
    heroText: string;
    exploreBiography: string;
    viewProjects: string;

    about: string;
    biography: string;

    designPhilosophy: string;

    selectedWorks: string;
    majorProjectCategories: string;

    architectureOverview: string;
    mainTypesOfArchitecture: string;
    historicalStyles: string;
    architecturalTraditionsAcrossTime: string;

    recognition: string;
    awardsAndHonors: string;

    conclusion: string;
    whyHisWorkMatters: string;

    architectureWebsiteConcept: string;
    builtFrom: string;

    darkMode: string;
    lightMode: string;
    language: string;

    born: string;
    coreFocus: string;
    knownFor: string;
    globalAwards: string;
    cairoEgypt: string;
    traditionModernTechnique: string;
    civicCulturalHousing: string;
    awardsNote: string;

    heroStatFocusValue: string;
    heroStatKnownForValue: string;
    heroStatAwardsValue: string;

    lifeAndTimeline: string;
    projectPortfolio: string;
    knowledgeContext: string;
    professionalRecognition: string;
    legacyStatement: string;

    worksGallery: string;
    nineSelectedWorks: string;

    hassanFathyConnection: string;
    mentorInfluence: string;
    openConnection: string;
    mentorTab: string;
    materialsTab: string;
    legacyTab: string;
  };

  aboutText: string[];
  timeline: TimelineItem[];
  projectGroups: ProjectGroup[];
  architectureTypes: ArchitectureType[];
  styleCards: string[];
  awards: string[];
  philosophyCards: PhilosophyCard[];
  galleryItems: GalleryItem[];
  connectionCards: Record<ConnectionKey, ConnectionCard>;
  conclusionText: string;
};