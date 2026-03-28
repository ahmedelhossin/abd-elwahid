import type { SiteContent } from "@/content/types";

type FooterProps = {
    content: SiteContent;
};

export default function Footer({ content }: FooterProps) {
    return (
        <footer className="border-t border-white/40 bg-white/60 backdrop-blur-xl dark:border-white/10 dark:bg-stone-950/60">
            <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 md:flex-row md:items-center md:justify-between">
                <div>
                    <p className="font-medium text-stone-900 dark:text-stone-100">
                        Abdel-Wahed El-Wakil
                    </p>
                    <p className="text-sm text-stone-500 dark:text-stone-400">
                        {content.ui.architectureWebsiteConcept}
                    </p>
                </div>
                <p className="text-sm text-stone-500 dark:text-stone-400">
                    {content.ui.builtFrom}
                </p>
            </div>
        </footer>
    );
}
