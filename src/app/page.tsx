"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Works from "@/components/sections/Works";
import Connection from "@/components/sections/Connection";
import About from "@/components/sections/About";
import Philosophy from "@/components/sections/Philosophy";
import Architecture from "@/components/sections/Architecture";
import Awards from "@/components/sections/Awards";
import Conclusion from "@/components/sections/Conclusion";
import { useLanguage } from "@/hooks/useLanguage";
import { useTheme } from "@/hooks/useTheme";
import { getContent } from "@/lib/getContent";

export default function Page() {
  const { lang, toggleLanguage, isArabic } = useLanguage();
  const { isDark, toggleTheme } = useTheme();

  const content = getContent(lang);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top,_rgba(217,119,6,0.14),_transparent_24%),radial-gradient(circle_at_85%_18%,_rgba(15,23,42,0.08),_transparent_22%),linear-gradient(180deg,_rgba(255,255,255,0.98)_0%,_rgba(250,250,249,1)_100%)] text-stone-900 transition-colors duration-500 dark:bg-[radial-gradient(circle_at_top,_rgba(217,119,6,0.18),_transparent_22%),radial-gradient(circle_at_85%_15%,_rgba(245,158,11,0.08),_transparent_18%),linear-gradient(180deg,_rgba(9,9,11,1)_0%,_rgba(17,17,17,1)_100%)] dark:text-stone-100">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.38),transparent)] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent)]" />
      <div className="pointer-events-none absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-amber-300/20 blur-3xl dark:bg-amber-400/10" />

      <Header
        lang={lang}
        isDark={isDark}
        onToggleLanguage={toggleLanguage}
        onToggleTheme={toggleTheme}
      />

      <Hero content={content} isArabic={isArabic} />
      <Works content={content} />
      <Connection content={content} />
      <About content={content} />
      <Philosophy content={content} isArabic={isArabic} />
      <Architecture content={content} isArabic={isArabic} />
      <Awards content={content} />
      <Conclusion content={content} />
      <Footer content={content} />
    </main>
  );
}
