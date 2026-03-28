import type { SiteContent } from "@/content/types";
import SectionShell from "@/components/layout/SectionShell";

type AwardsProps = {
    content: SiteContent;
};

export default function Awards({ content }: AwardsProps) {
    return (
        <SectionShell
            id="awards"
            eyebrow={content.ui.recognition}
            title={content.ui.professionalRecognition}
        >
            <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm dark:border-stone-800 dark:bg-stone-900">
                <p className="text-sm uppercase tracking-[0.25em] text-stone-500 dark:text-stone-400">
                    {content.ui.recognition}
                </p>
                <h3 className="mt-3 text-3xl tracking-tight">
                    {content.ui.awardsAndHonors}
                </h3>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                    {content.awards.map((award) => (
                        <div
                            key={award}
                            className="rounded-2xl border border-stone-200 bg-gradient-to-b from-stone-50 to-white px-5 py-4 text-stone-800 dark:border-stone-800 dark:from-stone-900 dark:to-stone-950 dark:text-stone-200"
                        >
                            {award}
                        </div>
                    ))}
                </div>
            </div>
        </SectionShell>
    );
}