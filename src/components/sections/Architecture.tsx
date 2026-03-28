import type { SiteContent } from "@/content/types";
import SectionShell from "@/components/layout/SectionShell";

type ArchitectureProps = {
    content: SiteContent;
    isArabic: boolean;
};

export default function Architecture({
    content,
    isArabic,
}: ArchitectureProps) {
    return (
        <SectionShell
            id="architecture"
            eyebrow={content.ui.architectureOverview}
            title={content.ui.knowledgeContext}
            muted
        >
            <div className="grid gap-6 lg:grid-cols-2">
                <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm dark:border-stone-800 dark:bg-stone-900">
                    <p className="text-sm uppercase tracking-[0.25em] text-stone-500 dark:text-stone-400">
                        {content.ui.architectureOverview}
                    </p>
                    <h3 className="mt-3 text-3xl tracking-tight">
                        {content.ui.mainTypesOfArchitecture}
                    </h3>

                    <div className="mt-6 grid gap-4">
                        {content.architectureTypes.map((item) => (
                            <div
                                key={item.name}
                                className="rounded-2xl border border-stone-200 bg-gradient-to-b from-stone-50 to-white p-5 dark:border-stone-800 dark:from-stone-900 dark:to-stone-950"
                            >
                                <h4 className="text-lg font-semibold">{item.name}</h4>
                                <p className="mt-3 leading-7 text-stone-700 dark:text-stone-300">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm dark:border-stone-800 dark:bg-stone-900">
                    <p className="text-sm uppercase tracking-[0.25em] text-stone-500 dark:text-stone-400">
                        {content.ui.historicalStyles}
                    </p>
                    <h3 className="mt-3 text-3xl tracking-tight">
                        {content.ui.architecturalTraditionsAcrossTime}
                    </h3>

                    <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
                        {content.styleCards.map((style) => (
                            <div
                                key={style}
                                className="flex min-h-24 items-center justify-center rounded-2xl border border-stone-200 bg-stone-50 px-4 py-6 text-center text-sm font-medium text-stone-800 dark:border-stone-800 dark:bg-stone-950 dark:text-stone-200"
                            >
                                {style}
                            </div>
                        ))}
                    </div>

                    <div className="my-6 h-px bg-stone-200 dark:bg-stone-800" />

                    <p className="leading-8 text-stone-700 dark:text-stone-300">
                        {isArabic
                            ? "يساعد هذا السياق المعماري الأوسع في وضع أعمال الوكيل داخل حوار تاريخي أكبر، خاصة علاقته بالعمارة الإسلامية والمحلية، حيث يتشكل التراث من المناخ والمجتمع والمعرفة الإنشائية والمكان."
                            : "This broader architectural context helps position El-Wakil’s work within a larger historical conversation—especially his relationship to Islamic and vernacular architecture, where tradition is shaped by climate, society, construction knowledge, and place."}
                    </p>
                </div>
            </div>
        </SectionShell>
    );
}