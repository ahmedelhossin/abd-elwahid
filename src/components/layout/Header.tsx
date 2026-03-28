"use client";

import { useState } from "react";
import type { Lang } from "@/content/types";

type HeaderProps = {
    lang: Lang;
    isDark: boolean;
    onToggleLanguage: () => void;
    onToggleTheme: () => void;
};

export default function Header({
    lang,
    isDark,
    onToggleLanguage,
    onToggleTheme,
}: HeaderProps) {
    const [menuOpen, setMenuOpen] = useState(false);
    const isArabic = lang === "ar";

    const labels =
        lang === "en"
            ? {
                about: "About",
                works: "Works",
                approach: "Approach",
                architecture: "Architecture",
                awards: "Awards",
            }
            : {
                about: "نبذة",
                works: "الأعمال",
                approach: "المنهج",
                architecture: "العمارة",
                awards: "الجوائز",
            };

    const linkClass =
        "rounded-full px-4 py-2 text-sm text-stone-600 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-50 hover:text-stone-950 dark:text-stone-300 dark:hover:bg-white/10 dark:hover:text-white";

    const actionButtonClass =
        "rounded-xl border border-stone-300/80 bg-white/70 px-4 py-2 text-sm text-stone-900 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-300 hover:bg-white dark:border-stone-700 dark:bg-stone-900/80 dark:text-stone-100 dark:hover:border-amber-500/40 dark:hover:bg-stone-900";

    return (
        <header className="sticky top-0 z-40 border-b border-white/40 bg-white/70 backdrop-blur-xl dark:border-white/10 dark:bg-stone-950/70">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
                <div className="min-w-0">
                    <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-stone-500 dark:text-stone-400">
                        Architecture Portfolio
                    </p>
                    <h1 className="truncate text-lg font-semibold tracking-tight md:text-2xl">
                        Abdel-Wahed El-Wakil
                    </h1>
                </div>

                <nav className="hidden items-center gap-1 md:flex">
                    <a href="#about" className={linkClass}>{labels.about}</a>
                    <a href="#works" className={linkClass}>{labels.works}</a>
                    <a href="#approach" className={linkClass}>{labels.approach}</a>
                    <a href="#architecture" className={linkClass}>{labels.architecture}</a>
                    <a href="#awards" className={linkClass}>{labels.awards}</a>
                </nav>

                <div className="hidden items-center gap-2 md:flex">
                    <button onClick={onToggleLanguage} className={actionButtonClass}>
                        {isArabic ? "English" : "العربية"}
                    </button>

                    <button onClick={onToggleTheme} className={actionButtonClass}>
                        {isDark ? "Light" : "Dark"}
                    </button>
                </div>

                <button
                    onClick={() => setMenuOpen((prev) => !prev)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-stone-300/80 bg-white/70 text-stone-900 shadow-sm backdrop-blur transition hover:border-amber-300 hover:bg-white md:hidden dark:border-stone-700 dark:bg-stone-900/80 dark:text-stone-100 dark:hover:border-amber-500/40 dark:hover:bg-stone-900"
                    aria-label="Toggle menu"
                >
                    {menuOpen ? "✕" : "☰"}
                </button>
            </div>

            {menuOpen && (
                <div className="border-t border-stone-200/70 bg-white/90 px-6 py-4 backdrop-blur md:hidden dark:border-stone-800 dark:bg-stone-950/95">
                    <div className="flex flex-col gap-2">
                        <a href="#about" className="rounded-xl px-3 py-2 text-sm text-stone-700 transition hover:bg-amber-50 dark:text-stone-300 dark:hover:bg-white/10" onClick={() => setMenuOpen(false)}>{labels.about}</a>
                        <a href="#works" className="rounded-xl px-3 py-2 text-sm text-stone-700 transition hover:bg-amber-50 dark:text-stone-300 dark:hover:bg-white/10" onClick={() => setMenuOpen(false)}>{labels.works}</a>
                        <a href="#approach" className="rounded-xl px-3 py-2 text-sm text-stone-700 transition hover:bg-amber-50 dark:text-stone-300 dark:hover:bg-white/10" onClick={() => setMenuOpen(false)}>{labels.approach}</a>
                        <a href="#architecture" className="rounded-xl px-3 py-2 text-sm text-stone-700 transition hover:bg-amber-50 dark:text-stone-300 dark:hover:bg-white/10" onClick={() => setMenuOpen(false)}>{labels.architecture}</a>
                        <a href="#awards" className="rounded-xl px-3 py-2 text-sm text-stone-700 transition hover:bg-amber-50 dark:text-stone-300 dark:hover:bg-white/10" onClick={() => setMenuOpen(false)}>{labels.awards}</a>
                    </div>

                    <div className="mt-4 flex gap-2">
                        <button onClick={onToggleLanguage} className={actionButtonClass}>
                            {isArabic ? "English" : "العربية"}
                        </button>

                        <button onClick={onToggleTheme} className={actionButtonClass}>
                            {isDark ? "Light" : "Dark"}
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}
