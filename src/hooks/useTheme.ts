"use client";

import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";
import type { ThemeMode } from "@/types";

export function useTheme() {
    const [theme, setTheme] = useLocalStorage<ThemeMode>("site-theme", "light");

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        document.documentElement.style.colorScheme = theme;
    }, [theme]);

    return {
        theme,
        setTheme,
        isDark: theme === "dark",
        toggleTheme: () => setTheme((prev) => (prev === "light" ? "dark" : "light")),
    };
}
