type SectionShellProps = {
    id?: string;
    eyebrow?: string;
    title?: string;
    description?: string;
    children: React.ReactNode;
    muted?: boolean;
};

export default function SectionShell({
    id,
    eyebrow,
    title,
    description,
    children,
    muted = false,
}: SectionShellProps) {
    return (
        <section
            id={id}
            className={
                muted
                    ? "relative mx-auto max-w-7xl px-6 py-12 md:py-18"
                    : "relative mx-auto max-w-7xl px-6 py-12 md:py-18"
            }
        >
            {muted && (
                <div className="pointer-events-none absolute inset-x-6 inset-y-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-stone-100/70 via-white/50 to-amber-50/70 dark:from-white/[0.03] dark:via-white/[0.01] dark:to-amber-500/[0.04]" />
            )}

            {(eyebrow || title || description) && (
                <div className="mb-8 flex flex-col gap-3 md:mb-10 md:flex-row md:items-end md:justify-between">
                    <div>
                        {eyebrow && (
                            <p className="text-sm uppercase tracking-[0.25em] text-stone-500 dark:text-stone-400">
                                {eyebrow}
                            </p>
                        )}

                        {title && (
                            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                                {title}
                            </h2>
                        )}
                    </div>

                    {description && (
                        <p className="max-w-2xl text-sm leading-7 text-stone-600 dark:text-stone-400">
                            {description}
                        </p>
                    )}
                </div>
            )}

            {children}
        </section>
    );
}
