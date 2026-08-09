import { CircleCheck, GraduationCap, BookOpen, Users } from 'lucide-react';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import educationImg from '../assets/EducationPage.png'

// Update this to wherever the photo lives in your project


const CHECKLIST = [
    'School supplies and learning materials for children',
    'Support for students from vulnerable families',
    'Education assistance that helps build future opportunities',
];

const SIDE_CARDS = [
    {
        title: 'School Support',
        description: 'Providing children with the learning tools they need to continue education.',
        Icon: GraduationCap,
    },
    {
        title: 'Learning Materials',
        description: 'Helping students access books, stationery, and essential school supplies.',
        Icon: BookOpen,
    },
    {
        title: 'Student Care',
        description: 'Supporting vulnerable students with dignity, encouragement, and opportunity.',
        Icon: Users,
    },
];

export default function Education() {
    return (
        <main className="flex-1">
             <Header />
            {/* ===== Hero ===== */}
            <section className="relative overflow-hidden max-w-full bg-hero pt-24 sm:pt-28 pb-12 sm:pb-16">
                {/*
                    v3-syntax fix: reference @theme color vars directly instead of
                    hsl(var(--x)), which resolves to nothing in Tailwind v4.
                */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute top-0 right-0 h-[280px] w-[280px] rounded-full opacity-[0.07]"
                    style={{
                        background: 'conic-gradient(from 45deg, var(--color-primary), var(--color-accent), var(--color-primary))',
                        filter: 'blur(40px)',
                    }}
                />

                {/*
                    animate-fade-up — add this keyframe to your global CSS if it
                    isn't already defined:

                    @keyframes fade-up {
                      from { opacity: 0; transform: translateY(16px); }
                      to { opacity: 1; transform: translateY(0); }
                    }
                    .animate-fade-up { animation: fade-up 0.6s ease-out both; }
                */}
                <div className="relative mx-auto w-full max-w-4xl px-5 sm:px-8 text-center animate-fade-up">
                    <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3.5 py-1.5 text-xs font-semibold tracking-wide text-primary">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Relief Program
                    </span>

                    <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight text-primary text-balance">
                        Education
                    </h1>

                    <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto">
                        Supporting students with learning materials, school essentials, and educational care.
                    </p>
                </div>
            </section>

            {/* ===== Detail ===== */}
            <section className="overflow-x-hidden pt-8 pb-16 sm:pt-10 sm:pb-20 bg-background">
                <div className="mx-auto max-w-5xl px-5 sm:px-8">
                    <div className="grid w-full max-w-full gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] items-start">
                        {/* Main card */}
                        <div className="rounded-[32px] border border-border/60 bg-card p-6 sm:p-7 shadow-capsule">
                            <div className="mb-7 overflow-hidden rounded-[28px] border border-border/60 shadow-soft">
                                <img
                                    src={educationImg}
                                    alt="Education Support"
                                    className="h-[320px] w-full object-cover transition-transform duration-700 hover:scale-105"
                                />
                            </div>

                            <span className="inline-flex items-center rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-primary">
                                Education Support
                            </span>

                            <h2 className="mt-5 font-display text-3xl sm:text-4xl font-semibold leading-tight text-primary">
                                Help children continue learning with dignity
                            </h2>

                            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                                Our Education program helps children access essential school supplies, learning
                                materials, and educational support. The goal is to reduce barriers to learning and
                                give students the tools they need to build a better future.
                            </p>

                            <div className="mt-7 space-y-3">
                                {CHECKLIST.map((item) => (
                                    <div key={item} className="flex items-start gap-3">
                                        <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                                        <p className="text-sm text-foreground/80">{item}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 flex flex-wrap gap-4">
                                <a
                                    className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                                    href="/donate"
                                >
                                    Donate Now
                                </a>
                                <a
                                    className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-primary transition hover:bg-secondary"
                                    href="/programs"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>

                        {/* Side cards */}
                        <div className="grid gap-4">
                            {SIDE_CARDS.map(({ title, description, Icon }) => (
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