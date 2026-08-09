const ICON_PROPS = {
    viewBox: '0 0 48 48',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.6',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className: 'h-7 w-7',
    'aria-hidden': 'true',
};

const COMMUNITIES = [
    {
        title: 'Families in Crisis',
        desc: 'Stable shelter, food, and care for households facing hardship.',
        icon: (
            <svg {...ICON_PROPS}>
                <path d="M8 24 L24 10 L40 24" />
                <path d="M12 22 V40 H36 V22" />
                <path d="M20 40 V30 H28 V40" />
                <path d="M30 8 a6 6 0 1 0 4 10 a5 5 0 1 1 -4 -10 z" />
            </svg>
        ),
    },
    {
        title: 'Orphans & Widows',
        desc: 'Long-term sponsorship rooted in dignity and protection.',
        icon: (
            <svg {...ICON_PROPS}>
                <path d="M24 36 C 16 30 10 25 10 19 a6 6 0 0 1 11-3 a6 6 0 0 1 11 3 c0 6-6 11-14 17z" />
                <path d="M6 38 c4 4 8 4 12 4" />
                <path d="M42 38 c-4 4-8 4-12 4" />
            </svg>
        ),
    },
    {
        title: 'Refugee Support',
        desc: 'Safe pathways with shelter, supplies, and community.',
        icon: (
            <svg {...ICON_PROPS}>
                <path d="M6 40 Q 18 30 24 34 T 42 26" />
                <path d="M30 24 L40 24 L40 14 L30 14 Z" />
                <path d="M35 24 V18" />
                <circle cx="14" cy="22" r="3" />
                <path d="M11 40 V30 l3-4 l3 4 V40" />
            </svg>
        ),
    },
    {
        title: 'Elderly Assistance',
        desc: 'Health, warmth, and companionship for seniors in need.',
        icon: (
            <svg {...ICON_PROPS}>
                <circle cx="24" cy="14" r="4" />
                <path d="M18 40 V26 a6 6 0 0 1 12 0 V40" />
                <path d="M30 28 c4 0 6 3 6 6" />
                <path d="M18 28 c-4 0-6 3-6 6" />
                <path d="M14 38 h20" />
            </svg>
        ),
    },
    {
        title: 'Education Access',
        desc: 'Books, kits, and tuition that open new horizons.',
        icon: (
            <svg {...ICON_PROPS}>
                <path d="M8 34 V18 c4-2 8-2 16 2 c8-4 12-4 16-2 V34 c-4-2-8-2-16 2 c-8-4-12-4-16-2z" />
                <path d="M24 22 V40" />
                <path d="M14 12 a10 10 0 0 1 20 0" />
                <path d="M10 12 h2 M36 12 h2 M24 6 V8" />
            </svg>
        ),
    },
    {
        title: 'Emergency Response',
        desc: 'Fast deployment when disaster strikes communities.',
        icon: (
            <svg {...ICON_PROPS}>
                <circle cx="24" cy="24" r="16" />
                <path d="M24 16 V32" />
                <path d="M16 24 H32" />
                <path d="M8 8 L12 12 M40 8 L36 12" />
            </svg>
        ),
    },
];

export default function CommunitiesServed() {
    return (
        <section className="relative py-20 sm:py-28 bg-muted/40">
            <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
                <div className="flex w-full flex-col items-center text-center max-w-2xl mx-auto">
                    <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3.5 py-1.5 text-xs font-semibold tracking-wide text-primary">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Who We Serve
                    </span>
                    <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-primary text-balance">
                        Communities We Serve
                    </h2>
                    <p className="mt-4 text-base sm:text-lg text-muted-foreground">
                        Real relief, delivered with care to those who need it most.
                    </p>
                </div>
                <ul className="mt-12 grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {COMMUNITIES.map((item, i) => (
                        <li
                            key={item.title}
                            className="group relative flex flex-col gap-4 rounded-[20px] bg-card border border-border/60 p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-capsule"
                            style={{ animationDelay: `${i * 60}ms` }}
                        >
                            <div className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                                {item.icon}
                                <span className="absolute -inset-1 rounded-2xl bg-accent/0 group-hover:bg-accent/10 transition-colors" />
                            </div>
                            <div>
                                <h3 className="font-display text-xl font-semibold text-primary">{item.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                            </div>
                            <span className="absolute right-5 top-5 h-1.5 w-1.5 rounded-full bg-accent/70" />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}