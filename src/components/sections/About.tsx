import type { SiteContent } from "@/content/types";
import SectionShell from "@/components/layout/SectionShell";

type AboutProps = {
    content: SiteContent;
};

export default function About({ content }: AboutProps) {
    return (
        <SectionShell
            id="about"
            eyebrow={content.ui.about}
            title={content.ui.lifeAndTimeline}
        >
            <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
                <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm dark:border-stone-800 dark:bg-stone-900">
                    <h3 className="text-3xl font-semibold tracking-tight">
                        {content.ui.biography}
                    </h3>

                    <div className="mt-5 space-y-4 text-stone-700 dark:text-stone-300">
                        {content.aboutText.map((paragraph) => (
                            <p key={paragraph} className="leading-8">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>

                <div className="grid gap-4">
                    {content.timeline.map((item) => (
                        <div
                            key={`${item.year}-${item.title}`}
                            className="rounded-[1.6rem] border border-stone-200 bg-white p-6 shadow-sm dark:border-stone-800 dark:bg-stone-900"
                        >
                            <p className="text-sm uppercase tracking-[0.22em] text-stone-500 dark:text-stone-400">
                                {item.year}
                            </p>
                            <h3 className="mt-1 text-xl font-semibold tracking-tight">
                                {item.title}
                            </h3>
                            <p className="mt-3 leading-7 text-stone-700 dark:text-stone-300">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </SectionShell>
    );
}