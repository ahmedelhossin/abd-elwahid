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
                    ? "mx-auto max-w-7xl px-6 py-10 md:py-16 bg-stone-50/60 dark:bg-white/[0.02]"
                    : "mx-auto max-w-7xl px-6 py-10 md:py-16"
            }
        >
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