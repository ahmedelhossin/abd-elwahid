import { SiteContent } from "@/content/types";
import SectionShell from "@/components/layout/SectionShell";

type WorksProps = {
    content: SiteContent;
};

export default function Works({ content }: WorksProps) {
    return (
        <SectionShell
            id="works"
            eyebrow={content.ui.selectedWorks}
            title={content.ui.projectPortfolio}
            description={content.ui.majorProjectCategories}
        >
            <div className="grid gap-6 lg:grid-cols-3">
                {content.projectGroups.map((group) => (
                    <div
                        key={group.title}
                        className="group rounded-[2rem] border border-stone-200/80 bg-white/75 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-amber-200 hover:shadow-xl hover:shadow-stone-900/5 dark:border-stone-800 dark:bg-stone-900/80 dark:hover:border-amber-500/20"
                    >
                        <h3 className="text-xl font-semibold tracking-tight transition-colors group-hover:text-amber-700 dark:group-hover:text-amber-300">
                            {group.title}
                        </h3>

                        <ul className="mt-4 space-y-3">
                            {group.items.map((item) => (
                                <li
                                    key={item}
                                    className="rounded-xl border border-stone-200/80 bg-gradient-to-r from-stone-50 to-white px-4 py-3 text-sm leading-6 text-stone-700 transition-all duration-300 hover:border-amber-200 hover:bg-amber-50/60 dark:border-stone-800 dark:bg-gradient-to-r dark:from-stone-950 dark:to-stone-900 dark:text-stone-300 dark:hover:border-amber-500/20 dark:hover:bg-amber-500/5"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </SectionShell>
    );
}
