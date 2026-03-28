"use client";

import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";
import type { Lang } from "@/content/types";

export function useLanguage() {
    const [lang, setLang] = useLocalStorage<Lang>("site-lang", "en");

    useEffect(() => {
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    }, [lang]);

    return {
        lang,
        setLang,
        isArabic: lang === "ar",
        toggleLanguage: () => setLang((prev) => (prev === "en" ? "ar" : "en")),
    };
}