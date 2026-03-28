"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";

function readStoredValue<T>(key: string, initialValue: T): T {
    if (typeof window === "undefined") {
        return initialValue;
    }

    try {
        const item = window.localStorage.getItem(key);
        return item !== null ? (JSON.parse(item) as T) : initialValue;
    } catch {
        return initialValue;
    }
}

export function useLocalStorage<T>(key: string, initialValue: T) {
    const [value, setValue] = useState<T>(() => readStoredValue(key, initialValue));

    useEffect(() => {
        setValue(readStoredValue(key, initialValue));
    }, [key, initialValue]);

    useEffect(() => {
        if (typeof window === "undefined") {
            return;
        }

        try {
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch {}
    }, [key, value]);

    return [value, setValue] as const satisfies readonly [T, Dispatch<SetStateAction<T>>];
}
