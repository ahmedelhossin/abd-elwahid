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
    <main className="min-h-screen bg-white text-stone-900 dark:bg-stone-950 dark:text-stone-100">
      <Header
        lang={lang}
        isDark={isDark}
        onToggleLanguage={toggleLanguage}
        onToggleTheme={toggleTheme}
      />

      <Hero content={content} isArabic={isArabic} />
      <Works content={content} />
      {/* <Gallery content={content} /> */}
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