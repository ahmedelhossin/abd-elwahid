import { SiteContent } from "@/content/types";

type HeroProps = {
    content: SiteContent;
    isArabic: boolean;
};

export default function Hero({ content, isArabic }: HeroProps) {
    return (
        <section className="relative mx-auto grid max-w-7xl gap-8 px-6 pb-16 pt-14 md:pb-24 md:pt-20 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div className={isArabic ? "text-right lg:order-2" : "text-left"}>
                <div className="inline-flex items-center rounded-full border border-amber-200/80 bg-amber-50/90 px-4 py-1.5 text-sm text-amber-900 shadow-sm backdrop-blur dark:border-amber-700/50 dark:bg-amber-500/10 dark:text-amber-100">
                    {content.ui.portfolio}
                </div>

                <h2 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                    {content.ui.heroTitle}
                </h2>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700 dark:text-stone-300">
                    {content.ui.heroText}
                </p>

                <div className={`mt-8 flex flex-wrap gap-3 ${isArabic ? "justify-start lg:justify-end" : "justify-start"}`}>
                    <a
                        href="#about"
                        className="inline-flex items-center justify-center rounded-2xl bg-stone-900 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-stone-900/10 transition-all duration-300 hover:-translate-y-1 hover:bg-stone-800 hover:shadow-xl hover:shadow-amber-500/15 dark:bg-white dark:text-stone-900 dark:hover:bg-stone-200"
                    >
                        {content.ui.exploreBiography}
                    </a>

                    <a
                        href="#works"
                        className="inline-flex items-center justify-center rounded-2xl border border-stone-300/80 bg-white/80 px-6 py-3 text-sm font-medium text-stone-900 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 hover:bg-white hover:shadow-lg hover:shadow-amber-500/10 dark:border-stone-700 dark:bg-stone-900/80 dark:text-stone-100 dark:hover:border-amber-500/40 dark:hover:bg-stone-900"
                    >
                        {content.ui.viewProjects}
                    </a>
                </div>
            </div>

            <div className={isArabic ? "lg:order-1" : ""}>
                <div className="rounded-[2rem] border border-white/50 bg-white/70 p-4 shadow-2xl shadow-stone-900/5 backdrop-blur dark:border-white/10 dark:bg-stone-950/55 dark:shadow-black/20">
                    <div className="grid gap-4 sm:grid-cols-2">
                        <div className="group rounded-[1.5rem] border border-stone-200/80 bg-gradient-to-br from-white to-stone-50 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-stone-800 dark:from-stone-900 dark:to-stone-950">
                            <p className="text-sm text-stone-500 dark:text-stone-400">{content.ui.born}</p>
                            <p className="mt-2 text-2xl font-semibold">1943</p>
                            <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">{content.ui.cairoEgypt}</p>
                        </div>

                        <div className="group rounded-[1.5rem] border border-stone-200/80 bg-gradient-to-br from-white to-amber-50/70 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-stone-800 dark:from-stone-900 dark:to-amber-950/20">
                            <p className="text-sm text-stone-500 dark:text-stone-400">{content.ui.coreFocus}</p>
                            <p className="mt-2 text-2xl font-semibold">{content.ui.heroStatFocusValue}</p>
                            <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">{content.ui.traditionModernTechnique}</p>
                        </div>

                        <div className="group rounded-[1.5rem] border border-stone-200/80 bg-gradient-to-br from-white to-stone-50 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-stone-800 dark:from-stone-900 dark:to-stone-950">
                            <p className="text-sm text-stone-500 dark:text-stone-400">{content.ui.knownFor}</p>
                            <p className="mt-2 text-2xl font-semibold">{content.ui.heroStatKnownForValue}</p>
                            <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">{content.ui.civicCulturalHousing}</p>
                        </div>

                        <div className="group rounded-[1.5rem] border border-stone-200/80 bg-gradient-to-br from-white to-amber-50/70 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-stone-800 dark:from-stone-900 dark:to-amber-950/20">
                            <p className="text-sm text-stone-500 dark:text-stone-400">{content.ui.globalAwards}</p>
                            <p className="mt-2 text-2xl font-semibold">{content.ui.heroStatAwardsValue}</p>
                            <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">{content.ui.awardsNote}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
