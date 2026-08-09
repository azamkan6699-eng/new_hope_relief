const TRUST_FEATURES = [
    {
        title: 'Transparent Allocation Reports',
        description: 'Every pound traced and published.',
        icon: (
            <>
                <rect x="10" y="8" width="28" height="32" rx="3" />
                <path d="M16 18 H32 M16 24 H32 M16 30 H26" />
                <path d="M30 36 l3 3 l5-6" />
            </>
        ),
    },
    {
        title: 'Verified Field Distribution',
        description: 'On-the-ground verification of every delivery.',
        icon: (
            <>
                <path d="M24 6 L40 12 V24 c0 10-8 16-16 18 c-8-2-16-8-16-18 V12 z" />
                <path d="M17 24 l5 5 l9-11" />
            </>
        ),
    },
    {
        title: 'Faith-Based Ethical Governance',
        description: 'Decisions guided by amanah and integrity.',
        icon: (
            <>
                <path d="M8 40 H40" />
                <path d="M12 40 V22 M36 40 V22" />
                <path d="M18 40 V22 M30 40 V22" />
                <path d="M6 22 H42 L24 8 Z" />
            </>
        ),
    },
    {
        title: 'Local Community Networks',
        description: 'Trusted partners rooted in each community.',
        icon: (
            <>
                <circle cx="24" cy="24" r="4" />
                <circle cx="10" cy="12" r="3" />
                <circle cx="38" cy="12" r="3" />
                <circle cx="10" cy="36" r="3" />
                <circle cx="38" cy="36" r="3" />
                <path d="M12 14 L21 22 M36 14 L27 22 M12 34 L21 26 M36 34 L27 26" />
            </>
        ),
    },
    {
        title: 'Fast Response Systems',
        description: 'Rapid coordination when crisis strikes.',
        icon: <path d="M26 6 L12 26 H22 L20 42 L36 22 H26 Z" />,
    },
];

export default function TrustSection() {
    return (
        <section className="relative py-20 sm:py-28">
            <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
                <div className="flex w-full flex-col items-center text-center max-w-2xl mx-auto">
                    <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3.5 py-1.5 text-xs font-semibold tracking-wide text-primary">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Why People Trust Us
                    </span>
                    <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-primary text-balance">
                        Built On Amanah
                    </h2>
                    <p className="mt-4 text-base sm:text-lg text-muted-foreground">
                        Trust is earned through every transparent action, every verified delivery.
                    </p>
                </div>

                <ul className="mt-12 grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {TRUST_FEATURES.map((feature) => (
                        <li
                            key={feature.title}
                            className="group flex items-start gap-4 rounded-[20px] bg-card border border-border/60 p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-capsule"
                        >
                            <div className="relative inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary">
                                <svg
                                    viewBox="0 0 48 48"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-6 w-6 [&_path]:transition-all [&_path]:duration-700 group-hover:[&_path]:stroke-accent"
                                    aria-hidden="true"
                                >
                                    {feature.icon}
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-display text-lg font-semibold text-primary leading-snug">
                                    {feature.title}
                                </h3>
                                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                                    {feature.description}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}