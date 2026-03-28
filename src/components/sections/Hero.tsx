import { SiteContent } from "@/content/types";

type HeroProps = {
    content: SiteContent;
    isArabic: boolean;
};

export default function Hero({ content, isArabic }: HeroProps) {
    return (
        <section
            dir={isArabic ? "rtl" : "ltr"}
            className={`mx-auto grid max-w-7xl gap-8 px-6 pb-14 pt-14 md:pb-20 md:pt-20 lg:gap-12 lg:items-center ${
                isArabic
                    ? "lg:grid-cols-[0.9fr_1.1fr]"
                    : "lg:grid-cols-[1.1fr_0.9fr]"
            }`}
        >
            <div className="min-w-0">
                <div className="inline-flex items-center rounded-full border border-amber-200/80 bg-amber-50/90 px-4 py-1.5 text-sm text-amber-900 shadow-sm backdrop-blur dark:border-amber-700/50 dark:bg-amber-500/10 dark:text-amber-100">
                    {content.ui.portfolio}
                </div>

                <h2 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.15] tracking-tight md:text-6xl">
                    {content.ui.heroTitle}
                </h2>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700 dark:text-stone-300">
                    {content.ui.heroText}
                </p>

                <div
                    className={`mt-8 flex flex-wrap gap-3 ${
                        isArabic ? "justify-end" : "justify-start"
                    }`}
                >
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

            <div className="min-w-0">
                <div className="rounded-[2rem] border border-white/40 bg-white/60 p-4 shadow-[0_20px_80px_rgba(0,0,0,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-stone-950/50 dark:shadow-black/30">
                    <div className="grid gap-4 sm:grid-cols-2">
                        <div className="group rounded-[1.5rem] border border-stone-200/60 bg-gradient-to-br from-white to-stone-50 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] dark:border-stone-800 dark:from-stone-900 dark:to-stone-950">
                            <p className="text-sm text-stone-500 dark:text-stone-400">
                                {content.ui.born}
                            </p>
                            <p className="mt-2 text-2xl font-semibold">1943</p>
                            <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">
                                {content.ui.cairoEgypt}
                            </p>
                        </div>

                        <div className="group rounded-[1.5rem] border border-stone-200/60 bg-gradient-to-br from-white to-amber-50/70 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] dark:border-stone-800 dark:from-stone-900 dark:to-amber-950/20">
                            <p className="text-sm text-stone-500 dark:text-stone-400">
                                {content.ui.coreFocus}
                            </p>
                            <p className="mt-2 text-2xl font-semibold">
                                {content.ui.heroStatFocusValue}
                            </p>
                            <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">
                                {content.ui.traditionModernTechnique}
                            </p>
                        </div>

                        <div className="group rounded-[1.5rem] border border-stone-200/60 bg-gradient-to-br from-white to-stone-50 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] dark:border-stone-800 dark:from-stone-900 dark:to-stone-950">
                            <p className="text-sm text-stone-500 dark:text-stone-400">
                                {content.ui.knownFor}
                            </p>
                            <p className="mt-2 text-2xl font-semibold">
                                {content.ui.heroStatKnownForValue}
                            </p>
                            <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">
                                {content.ui.civicCulturalHousing}
                            </p>
                        </div>

                        <div className="group rounded-[1.5rem] border border-stone-200/60 bg-gradient-to-br from-white to-amber-50/70 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] dark:border-stone-800 dark:from-stone-900 dark:to-amber-950/20">
                            <p className="text-sm text-stone-500 dark:text-stone-400">
                                {content.ui.globalAwards}
                            </p>
                            <p className="mt-2 text-2xl font-semibold">
                                {content.ui.heroStatAwardsValue}
                            </p>
                            <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">
                                {content.ui.awardsNote}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}