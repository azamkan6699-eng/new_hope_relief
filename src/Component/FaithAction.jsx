import treeImg from '../assets/about-tree.png'

const CHECK_ITEMS = [
    'Food aid & clean water projects',
    'Orphan & teacher sponsorship',
    'Educational & medical assistance',
    'Direct, accountable relief',
];

function CheckIcon() {
    return (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12 l4 4 L19 7" />
        </svg>
    );
}

export default function FaithAction() {
    return (
        <section id="about" className="relative py-20 sm:py-28">
            <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
                <div className="flex w-full flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    <div className="w-full lg:w-1/2 order-2 lg:order-1">
                        <div className="relative mx-auto w-full max-w-[520px]">
                            <div
                                aria-hidden="true"
                                className="absolute -inset-6 rounded-[36px] opacity-60"
                                style={{ background: 'radial-gradient(60% 50% at 50% 50%, hsl(var(--accent)/0.18), transparent 70%)' }}
                            />
                            <div className="relative overflow-hidden rounded-[28px] bg-card ring-1 ring-border/60 shadow-soft">
                                <img
                                    src={treeImg}
                                    alt="A tree growing from Islamic geometric soil with branches bearing homes, bread, water drops, books, and caring hands — symbolizing faith in action"
                                    width="1024"
                                    height="1024"
                                    loading="lazy"
                                    decoding="async"
                                    className="block h-auto w-full"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 order-1 lg:order-2">
                        <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3.5 py-1.5 text-xs font-semibold tracking-wide text-primary">
                            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> About New Hope Relief
                        </span>
                        <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-primary text-balance">
                            Faith In Action
                        </h2>
                        <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted-foreground max-w-xl">
                            NHR is an aid and development charity dedicated to serving those most in need,
                            wherever they may be. We provide humanitarian assistance, support community
                            development, and help create lasting change for individuals and families facing
                            hardship — because everyone deserves access to basic necessities, education,
                            healthcare, and the opportunity to build a better future.
                        </p>
                        <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {CHECK_ITEMS.map((item) => (
                                <li
                                    key={item}
                                    className="flex items-center gap-3 rounded-2xl bg-card/80 border border-border/60 px-4 py-3 shadow-soft"
                                >
                                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-accent/10 text-accent">
                                        <CheckIcon />
                                    </span>
                                    <span className="text-sm font-medium text-foreground/85">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-6 text-sm leading-relaxed text-muted-foreground max-w-xl">
                            NHR currently supports 10 educational institutions, including our flagship project
                            in Swat, Pakistan — Jamia Darul Uloom Swat and Jamia Public High School — helping
                            young people build the knowledge, values, and skills to benefit their communities.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}