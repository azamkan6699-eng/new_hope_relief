import { ArrowRight } from 'lucide-react';

const PROGRAMS = [
    {
        title: 'Medical Aid',
        description: 'Help cover treatment, medicines, and urgent healthcare needs.',
        href: '/programs/medical-aid',
        icon: (
            <>
                <rect x="8" y="14" width="32" height="26" rx="4" />
                <path d="M24 20 V34 M17 27 H31" />
                <path d="M18 14 V10 h12 v4" />
            </>
        ),
    },
    {
        title: 'Sponsor a Teacher',
        description: 'Support teachers dedicated to guiding and educating communities.',
        href: '/programs/sponsor-a-teacher',
        icon: (
            <>
                <path d="M4 22 L24 12 L44 22 L24 32 Z" />
                <path d="M12 26 V36 c0 2 6 4 12 4 s12-2 12-4 V26" />
                <path d="M40 24 V34" />
            </>
        ),
    },
    {
        title: 'Sponsor a Student',
        description: 'Provide educational support and basic learning needs for students.',
        href: '/programs/sponsor-a-student',
        icon: (
            <>
                <path d="M4 22 L24 12 L44 22 L24 32 Z" />
                <path d="M12 26 V36 c0 2 6 4 12 4 s12-2 12-4 V26" />
                <path d="M40 24 V34" />
            </>
        ),
    },
    {
        title: 'Water Well',
        description: 'Provide clean and safe water to communities lacking basic necessities.',
        href: '/programs/water-projects',
        icon: (
            <>
                <path d="M24 6 C 14 18 12 24 12 30 a12 12 0 0 0 24 0 c0-6-2-12-12-24z" />
                <path d="M18 30 a6 6 0 0 0 6 6" />
            </>
        ),
    },
    {
        title: 'Sponsor a Widow',
        description: 'Help vulnerable widows cover their essential living needs.',
        href: '/programs/sponsor-a-widow',
        icon: (
            <>
                <circle cx="24" cy="24" r="16" />
                <path d="M24 16 V32" />
                <path d="M16 24 H32" />
                <path d="M8 8 L12 12 M40 8 L36 12" />
            </>
        ),
    },
    {
        title: 'Family Food Pack',
        description: 'Deliver essential food supplies to families in need.',
        href: '/programs/family-food-pack',
        icon: (
            <>
                <path d="M10 18 L24 12 L38 18 V38 L24 44 L10 38 Z" />
                <path d="M10 18 L24 24 L38 18" />
                <path d="M24 24 V44" />
                <path d="M17 15 L31 21" />
            </>
        ),
    },
];

export default function ProgramsSection() {
    return (
        <section id="programs" className="relative py-20 sm:py-28 bg-muted/40">
            <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
                <div className="flex w-full flex-col items-center text-center max-w-2xl mx-auto">
                    <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3.5 py-1.5 text-xs font-semibold tracking-wide text-primary">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Programs
                    </span>
                    <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-primary text-balance">
                        Relief Programs
                    </h2>
                    <p className="mt-4 text-base sm:text-lg text-muted-foreground">
                        Targeted, accountable, and built around real family needs.
                    </p>
                </div>

                <ul className="mt-12 grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {PROGRAMS.map((program) => (
                        <li
                            key={program.title}
                            className="group relative overflow-hidden rounded-[28px] bg-card border border-border/60 p-6 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-capsule hover:border-accent/40"
                        >
                            {/*
                                Hover glow: reference the @theme color var directly with
                                color-mix instead of the v3-only hsl(var(--accent)/0.18)
                                syntax, which resolves to nothing in Tailwind v4.
                            */}
                            <div
                                aria-hidden="true"
                                className="absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                                style={{
                                    background:
                                        'radial-gradient(circle, color-mix(in srgb, var(--color-accent) 18%, transparent), transparent 70%)',
                                }}
                            />

                            <div className="relative flex items-start gap-4">
                                <div className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-[24px] bg-gradient-to-br from-accent/15 to-primary/10 text-primary transition-all duration-500 group-hover:rotate-[-6deg] group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                                    <svg
                                        viewBox="0 0 48 48"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="h-7 w-7"
                                        aria-hidden="true"
                                    >
                                        {program.icon}
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-display text-2xl font-semibold text-primary transition-colors duration-300 group-hover:text-accent">
                                        {program.title}
                                    </h3>
                                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                        {program.description}
                                    </p>
                                </div>
                            </div>

                            <a
                                className="relative mt-6 flex items-center justify-between border-t border-border/60 pt-5"
                                href={program.href}
                            >
                                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                    Learn more
                                </span>
                                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-primary transition-all duration-300 group-hover:translate-x-1 group-hover:bg-accent group-hover:text-accent-foreground">
                                    <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}