import type { SiteContent } from "@/content/types";
import SectionShell from "@/components/layout/SectionShell";

type PhilosophyProps = {
    content: SiteContent;
    isArabic: boolean;
};

export default function Philosophy({ content, isArabic }: PhilosophyProps) {
    return (
        <SectionShell
            id="approach"
            eyebrow={content.ui.designPhilosophy}
            title={isArabic ? "الرؤية المعمارية" : "Architectural vision"}
            muted
        >
            <div className="overflow-hidden rounded-[2rem] border border-stone-800 bg-stone-900 shadow-xl">
                <div className="border-b border-white/10 px-8 py-8 md:px-10">
                    <p className="text-sm uppercase tracking-[0.25em] text-stone-400">
                        {content.ui.designPhilosophy}
                    </p>
                    <h3 className="mt-3 max-w-4xl text-3xl font-semibold tracking-tight text-stone-50 md:text-4xl">
                        {isArabic
                            ? "عمارة متجذرة في الثقافة والمناخ والحرفة"
                            : "Architecture rooted in culture, climate, and craft"}
                    </h3>
                </div>

                <div className="grid gap-4 p-8 md:grid-cols-3 md:p-10">
                    {content.philosophyCards.map((card) => (
                        <div
                            key={card.title}
                            className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 text-stone-100"
                        >
                            <h4 className="text-xl font-semibold">{card.title}</h4>
                            <p className="mt-3 leading-7 text-stone-300">{card.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </SectionShell>
    );
}