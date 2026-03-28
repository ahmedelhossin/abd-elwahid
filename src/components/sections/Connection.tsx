"use client";

import { useState } from "react";
import type { ConnectionKey, SiteContent } from "@/content/types";
import SectionShell from "@/components/layout/SectionShell";

type ConnectionProps = {
    content: SiteContent;
};

export default function Connection({ content }: ConnectionProps) {
    const [active, setActive] = useState<ConnectionKey>("mentor");

    const tabs: Array<{ key: ConnectionKey; label: string }> = [
        { key: "mentor", label: content.ui.mentorTab },
        { key: "materials", label: content.ui.materialsTab },
        { key: "legacy", label: content.ui.legacyTab },
    ];

    const current = content.connectionCards[active];

    return (
        <SectionShell
            eyebrow={content.ui.hassanFathyConnection}
            title={content.ui.mentorInfluence}
            description={content.ui.openConnection}
        >
            <div className="grid gap-6 lg:grid-cols-[0.35fr_0.65fr]">
                <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm dark:border-stone-800 dark:bg-stone-900">
                    <div className="flex flex-col gap-3">
                        {tabs.map((tab) => {
                            const isActive = active === tab.key;

                            return (
                                <button
                                    key={tab.key}
                                    type="button"
                                    onClick={() => setActive(tab.key)}
                                    className={
                                        isActive
                                            ? "rounded-2xl border border-amber-300 bg-amber-50 px-4 py-4 text-start text-sm font-medium text-stone-900 dark:border-amber-500/40 dark:bg-amber-500/10 dark:text-amber-100"
                                            : "rounded-2xl border border-stone-200 bg-stone-50 px-4 py-4 text-start text-sm font-medium text-stone-700 transition hover:bg-white dark:border-stone-800 dark:bg-stone-950 dark:text-stone-300 dark:hover:bg-stone-900"
                                    }
                                >
                                    {tab.label}
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm dark:border-stone-800 dark:bg-stone-900">
                    <p className="text-sm uppercase tracking-[0.25em] text-stone-500 dark:text-stone-400">
                        {content.ui.hassanFathyConnection}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
                        {current.title}
                    </h3>
                    <p className="mt-5 leading-8 text-stone-700 dark:text-stone-300">
                        {current.text}
                    </p>
                </div>
            </div>
        </SectionShell>
    );
}