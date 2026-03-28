import { SiteContent } from "@/content/types";

type HeroProps = {
    content: SiteContent;
    isArabic: boolean;
};

export default function Hero({ content, isArabic }: HeroProps) {
    return (
        <section className="mx-auto grid max-w-7xl gap-8 px-6 pb-14 pt-14 md:pb-20 md:pt-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className={isArabic ? "lg:order-2" : ""}>
                <div className="inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-4 py-1 text-sm text-stone-700 dark:border-amber-700/50 dark:bg-amber-500/10 dark:text-amber-100">
                    {content.ui.portfolio}
                </div>

                <h2 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                    {content.ui.heroTitle}
                </h2>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700 dark:text-stone-300">
                    {content.ui.heroText}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                    <a
                        href="#about"
                        className="inline-flex items-center justify-center rounded-2xl bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-800 dark:bg-white dark:text-stone-900 dark:hover:bg-stone-200"
                    >
                        {content.ui.exploreBiography}
                    </a>

                    <a
                        href="#works"
                        className="inline-flex items-center justify-center rounded-2xl border border-stone-300 bg-white/80 px-6 py-3 text-sm font-medium text-stone-900 transition hover:bg-stone-100 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-100 dark:hover:bg-stone-800"
                    >
                        {content.ui.viewProjects}
                    </a>
                </div>
            </div>

            <div className={isArabic ? "lg:order-1" : ""}>
                <div className="grid gap-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                        <div className="rounded-[1.5rem] border border-stone-200 bg-white p-5 shadow-sm dark:border-stone-800 dark:bg-stone-900">
                            <p className="text-sm text-stone-500 dark:text-stone-400">
                                {content.ui.born}
                            </p>
                            <p className="mt-2 text-2xl font-semibold">1943</p>
                            <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">
                                {content.ui.cairoEgypt}
                            </p>
                        </div>

                        <div className="rounded-[1.5rem] border border-stone-200 bg-white p-5 shadow-sm dark:border-stone-800 dark:bg-stone-900">
                            <p className="text-sm text-stone-500 dark:text-stone-400">
                                {content.ui.coreFocus}
                            </p>
                            <p className="mt-2 text-2xl font-semibold">{content.ui.heroStatFocusValue}</p>
                            <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">
                                {content.ui.traditionModernTechnique}
                            </p>
                        </div>

                        <div className="rounded-[1.5rem] border border-stone-200 bg-white p-5 shadow-sm dark:border-stone-800 dark:bg-stone-900">
                            <p className="text-sm text-stone-500 dark:text-stone-400">
                                {content.ui.knownFor}
                            </p>
                            <p className="mt-2 text-2xl font-semibold">{content.ui.heroStatKnownForValue}</p>
                            <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">
                                {content.ui.civicCulturalHousing}
                            </p>
                        </div>

                        <div className="rounded-[1.5rem] border border-stone-200 bg-white p-5 shadow-sm dark:border-stone-800 dark:bg-stone-900">
                            <p className="text-sm text-stone-500 dark:text-stone-400">
                                {content.ui.globalAwards}
                            </p>
                            <p className="mt-2 text-2xl font-semibold">{content.ui.heroStatAwardsValue}</p>
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