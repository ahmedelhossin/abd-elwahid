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
                        className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm dark:border-stone-800 dark:bg-stone-900"
                    >
                        <h3 className="text-xl font-semibold tracking-tight">
                            {group.title}
                        </h3>

                        <ul className="mt-4 space-y-3">
                            {group.items.map((item) => (
                                <li
                                    key={item}
                                    className="rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm leading-6 text-stone-700 dark:border-stone-800 dark:bg-stone-950 dark:text-stone-300"
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