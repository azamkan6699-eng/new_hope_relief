import { useParams, Link, Navigate } from 'react-router-dom';
import { CircleCheck } from 'lucide-react';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import programsData from '../data/programsData';

export default function ProgramPage() {
    const { slug } = useParams();
    const program = programsData[slug];

    // Unknown slug (bad link / typo) -> send to the programs listing instead of a blank page
    if (!program) {
        return <Navigate to="/programs" replace />;
    }

    const {
        heroTitle,
        heroSubtitle,
        image,
        imageAlt,
        badge,
        heading,
        body,
        checklist,
        sideCards,
    } = program;

    return (
        <main className="flex-1">
            <Header />
            {/* ===== Hero ===== */}
            <section className="relative overflow-hidden max-w-full bg-hero pt-24 sm:pt-28 pb-12 sm:pb-16">
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute top-0 right-0 h-[280px] w-[280px] rounded-full opacity-[0.07]"
                    style={{
                        background: 'conic-gradient(from 45deg, var(--color-primary), var(--color-accent), var(--color-primary))',
                        filter: 'blur(40px)',
                    }}
                />

                <div className="relative mx-auto w-full max-w-4xl px-5 sm:px-8 text-center animate-fade-up">
                    <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3.5 py-1.5 text-xs font-semibold tracking-wide text-primary">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Relief Program
                    </span>

                    <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight text-primary text-balance">
                        {heroTitle}
                    </h1>

                    <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto">
                        {heroSubtitle}
                    </p>
                </div>
            </section>

            {/* ===== Detail ===== */}
            <section className="overflow-x-hidden pt-8 pb-16 sm:pt-10 sm:pb-20 bg-background">
                <div className="mx-auto max-w-5xl px-5 sm:px-8">
                    <div className="grid w-full max-w-full gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] items-start">
                        {/* Main card */}
                        <div className="rounded-[32px] border border-border/60 bg-card p-6 sm:p-7 shadow-capsule">
                            <div className="mb-7 overflow-hidden rounded-[28px] border border-border/60 bg-secondary/30 shadow-soft">
                                <img
                                    src={image}
                                    alt={imageAlt}
                                    className="w-full h-auto max-h-[480px] object-contain transition-transform duration-700 hover:scale-105"
                                />
                            </div>

                            <span className="inline-flex items-center rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-primary">
                                {badge}
                            </span>

                            <h2 className="mt-5 font-display text-3xl sm:text-4xl font-semibold leading-tight text-primary">
                                {heading}
                            </h2>

                            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                                {body}
                            </p>

                            <div className="mt-7 space-y-3">
                                {checklist.map((item) => (
                                    <div key={item} className="flex items-start gap-3">
                                        <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                                        <p className="text-sm text-foreground/80">{item}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 flex flex-wrap gap-4">
                                <Link
                                    className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                                    to="/donate"
                                >
                                    Donate Now
                                </Link>
                                <Link
                                    className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-primary transition hover:bg-secondary"
                                    to="/programs"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>

                        {/* Side cards */}
                        <div className="grid gap-4">
                            {sideCards.map(({ title, description, Icon }) => (
                                <div
                                    key={title}
                                    tabIndex={0}
                                    className="group cursor-pointer rounded-[28px] border border-border/60 bg-card p-5 shadow-soft transition-all duration-300 hover:border-accent/40 hover:shadow-capsule"
                                >
                                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:rotate-6">
                                        <Icon className="h-5 w-5" aria-hidden="true" />
                                    </span>
                                    <h3 className="mt-4 font-display text-xl font-semibold text-primary">{title}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}