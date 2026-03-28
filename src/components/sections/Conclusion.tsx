import type { SiteContent } from "@/content/types";
import SectionShell from "@/components/layout/SectionShell";

type ConclusionProps = {
    content: SiteContent;
};

export default function Conclusion({ content }: ConclusionProps) {
    return (
        <SectionShell
            eyebrow={content.ui.conclusion}
            title={content.ui.legacyStatement}
            muted
        >
            <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm dark:border-stone-800 dark:bg-stone-900">
                <p className="text-sm uppercase tracking-[0.25em] text-stone-500 dark:text-stone-400">
                    {content.ui.conclusion}
                </p>
                <h3 className="mt-3 text-3xl tracking-tight md:text-4xl">
                    {content.ui.whyHisWorkMatters}
                </h3>
                <p className="mt-5 max-w-4xl leading-8 text-stone-700 dark:text-stone-300">
                    {content.conclusionText}
                </p>
            </div>
        </SectionShell>
    );
}