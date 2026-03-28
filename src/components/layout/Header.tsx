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
        "rounded-full px-4 py-2 text-sm text-stone-600 transition hover:bg-stone-100 hover:text-stone-900 dark:text-stone-300 dark:hover:bg-stone-800 dark:hover:text-white";

    return (
        <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-white/80 backdrop-blur-xl dark:border-stone-800 dark:bg-stone-950/80">
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
                    <a href="#about" className={linkClass}>
                        {labels.about}
                    </a>
                    <a href="#works" className={linkClass}>
                        {labels.works}
                    </a>
                    <a href="#approach" className={linkClass}>
                        {labels.approach}
                    </a>
                    <a href="#architecture" className={linkClass}>
                        {labels.architecture}
                    </a>
                    <a href="#awards" className={linkClass}>
                        {labels.awards}
                    </a>
                </nav>

                <div className="hidden items-center gap-2 md:flex">
                    <button
                        onClick={onToggleLanguage}
                        className="rounded-xl border border-stone-300 bg-white/80 px-4 py-2 text-sm text-stone-900 transition hover:bg-stone-100 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-100 dark:hover:bg-stone-800"
                    >
                        {lang === "en" ? "العربية" : "English"}
                    </button>

                    <button
                        onClick={onToggleTheme}
                        className="rounded-xl border border-stone-300 bg-white/80 px-4 py-2 text-sm text-stone-900 transition hover:bg-stone-100 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-100 dark:hover:bg-stone-800"
                    >
                        {isDark ? "Light" : "Dark"}
                    </button>
                </div>

                <button
                    onClick={() => setMenuOpen((prev) => !prev)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-stone-300 bg-white/80 text-stone-900 transition hover:bg-stone-100 md:hidden dark:border-stone-700 dark:bg-stone-900 dark:text-stone-100 dark:hover:bg-stone-800"
                    aria-label="Toggle menu"
                >
                    {menuOpen ? "✕" : "☰"}
                </button>
            </div>

            {menuOpen && (
                <div className="border-t border-stone-200 bg-white px-6 py-4 md:hidden dark:border-stone-800 dark:bg-stone-950">
                    <div className="flex flex-col gap-2">
                        <a
                            href="#about"
                            className="rounded-xl px-3 py-2 text-sm text-stone-700 hover:bg-stone-100 dark:text-stone-300 dark:hover:bg-stone-900"
                            onClick={() => setMenuOpen(false)}
                        >
                            {labels.about}
                        </a>
                        <a
                            href="#works"
                            className="rounded-xl px-3 py-2 text-sm text-stone-700 hover:bg-stone-100 dark:text-stone-300 dark:hover:bg-stone-900"
                            onClick={() => setMenuOpen(false)}
                        >
                            {labels.works}
                        </a>
                        <a
                            href="#approach"
                            className="rounded-xl px-3 py-2 text-sm text-stone-700 hover:bg-stone-100 dark:text-stone-300 dark:hover:bg-stone-900"
                            onClick={() => setMenuOpen(false)}
                        >
                            {labels.approach}
                        </a>
                        <a
                            href="#architecture"
                            className="rounded-xl px-3 py-2 text-sm text-stone-700 hover:bg-stone-100 dark:text-stone-300 dark:hover:bg-stone-900"
                            onClick={() => setMenuOpen(false)}
                        >
                            {labels.architecture}
                        </a>
                        <a
                            href="#awards"
                            className="rounded-xl px-3 py-2 text-sm text-stone-700 hover:bg-stone-100 dark:text-stone-300 dark:hover:bg-stone-900"
                            onClick={() => setMenuOpen(false)}
                        >
                            {labels.awards}
                        </a>
                    </div>

                    <div className="mt-4 flex gap-2">
                        <button
                            onClick={onToggleLanguage}
                            className="rounded-xl border border-stone-300 bg-white/80 px-4 py-2 text-sm text-stone-900 transition hover:bg-stone-100 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-100 dark:hover:bg-stone-800"
                        >
                            {lang === "en" ? "العربية" : "English"}
                        </button>

                        <button
                            onClick={onToggleTheme}
                            className="rounded-xl border border-stone-300 bg-white/80 px-4 py-2 text-sm text-stone-900 transition hover:bg-stone-100 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-100 dark:hover:bg-stone-800"
                        >
                            {isDark ? "Light" : "Dark"}
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}