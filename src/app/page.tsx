"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { useTheme } from "@/hooks/useTheme";
import { getContent } from "@/lib/getContent";

export default function Page() {
  const { lang, toggleLanguage } = useLanguage();
  const { isDark, toggleTheme } = useTheme();

  const content = getContent(lang);

  return (
    <main className="min-h-screen bg-white text-stone-900 dark:bg-stone-950 dark:text-stone-100">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <div className="flex flex-wrap gap-3">
          <button
            onClick={toggleLanguage}
            className="rounded-xl border px-4 py-2"
          >
            {lang === "en" ? "العربية" : "English"}
          </button>

          <button
            onClick={toggleTheme}
            className="rounded-xl border px-4 py-2"
          >
            {isDark ? "Light" : "Dark"}
          </button>
        </div>

        <div className="mt-10">
          <p className="text-sm uppercase tracking-[0.2em]">
            {content.ui.portfolio}
          </p>
          <h1 className="mt-4 text-4xl font-semibold">
            {content.ui.heroTitle}
          </h1>
          <p className="mt-4 max-w-2xl text-lg">
            {content.ui.heroText}
          </p>
        </div>
      </div>
    </main>
  );
}