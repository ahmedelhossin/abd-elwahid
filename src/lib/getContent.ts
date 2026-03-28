import { en } from "@/content/en";
import { ar } from "@/content/ar";
import type { Lang, SiteContent } from "@/content/types";

export function getContent(lang: Lang): SiteContent {
    return lang === "ar" ? ar : en;
}