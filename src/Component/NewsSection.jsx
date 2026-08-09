import { ArrowUpRight, Calendar } from 'lucide-react';

const NEWS_ITEMS = [
    {
        tag: 'Field Report',
        date: 'Apr 28, 2026',
        title: '300 Families Reached in Spring Food Drive',
        excerpt: 'Volunteers delivered fresh staples and hygiene kits across three districts in record time.',
        gradientClass: 'from-accent/20 to-accent/0',
        patternRadius: 20,
    },
    {
        tag: 'Campaign',
        date: 'Apr 14, 2026',
        title: 'Ramadan Iftar Program Closes With 42,000 Meals',
        excerpt: 'A community-funded campaign brought nightly meals to families across four cities.',
        gradientClass: 'from-primary/20 to-primary/0',
        patternRadius: 24,
    },
    {
        tag: 'Story',
        date: 'Mar 30, 2026',
        title: "A Widow's Path Back to Stability",
        excerpt: 'How long-term sponsorship rebuilt one family\'s daily life with dignity and hope.',
        // NOTE: original markup used `from-warm/40 to-warm/0` — this assumes a
        // `--color-warm` token exists in your @theme block. Add one (e.g. a soft
        // terracotta/amber) or swap this for an existing token like `accent`.
        gradientClass: 'from-warm/40 to-warm/0',
        patternRadius: 20,
    },
];

export default function NewsSection() {
    return (
        <section id="news" className="relative py-20 sm:py-28">
            <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
                <div className="flex w-full flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
                    <div className="max-w-xl">
                        <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3.5 py-1.5 text-xs font-semibold tracking-wide text-primary">
                            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> News &amp; Updates
                        </span>
                        <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-primary text-balance">
                            From the Field
                        </h2>
                        <p className="mt-4 text-base sm:text-lg text-muted-foreground">
                            Recent campaigns, stories, and reports from the communities we serve.
                        </p>
                    </div>
                    <a
                        href="/news"
                        className="group inline-flex items-center gap-2 self-start sm:self-auto rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:-translate-y-0.5"
                    >
                        All updates
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-12" aria-hidden="true" />
                    </a>
                </div>

                <ul className="mt-12 grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {NEWS_ITEMS.map((item) => (
                        <li key={item.title}>
                            <a
                                href="/news"
                                className="group relative flex h-full flex-col overflow-hidden rounded-[20px] bg-card border border-border/60 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-capsule"
                            >
                                <div
                                    aria-hidden="true"
                                    className={`relative h-40 sm:h-44 bg-gradient-to-br ${item.gradientClass}`}
                                >
                                    <svg
                                        className="absolute inset-0 h-full w-full opacity-30 mix-blend-multiply"
                                        viewBox="0 0 200 120"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="0.6"
                                    >
                                        <g className="text-primary">
                                            {[30, 58, 86, 114, 142, 170].map((cx) => (
                                                <circle key={cx} cx={cx} cy="60" r={item.patternRadius} />
                                            ))}
                                        </g>
                                    </svg>
                                    <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-card/90 backdrop-blur px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary">
                                        {item.tag}
                                    </span>
                                </div>

                                <div className="flex flex-1 flex-col p-6">
                                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                        <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                                        <time>{item.date}</time>
                                    </div>
                                    <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-primary group-hover:text-primary-glow transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                        {item.excerpt}
                                    </p>
                                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                                        Read story
                                        <ArrowUpRight
                                            className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                            aria-hidden="true"
                                        />
                                    </span>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}