import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ArrowRight, ShieldCheck, Truck, Users } from 'lucide-react';
import heroImg from '../assets/hero-relief.png'
import DonateModal from './DonateModal';


export default function Hero() {
    const [isDonateOpen, setIsDonateOpen] = useState(false);

    return (
        <section id="top" className="relative bg-hero overflow-hidden pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-24 shadow-2xl">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-24 -right-24 h-[480px] w-[480px] rounded-full opacity-[0.08]"
                style={{
                    background: 'conic-gradient(from 45deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)))',
                    filter: 'blur(40px)',
                }}
            />
            <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
                <div className="flex w-full flex-col lg:flex-row lg:items-center gap-10 lg:gap-14">
                    <div className="flex w-full flex-col lg:w-1/2 animate-fade-up">
                        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-secondary px-3.5 py-1.5 text-xs font-semibold tracking-wide text-primary">
                            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                            Trusted Islamic Charity · Charity Reg. 1121099
                        </span>
                        <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight text-primary text-balance">
                            Give Relief.{' '}
                            <span className="relative whitespace-nowrap">
                                Restore Hope.
                                <svg
                                    aria-hidden="true"
                                    viewBox="0 0 220 12"
                                    className="absolute -bottom-2 left-0 h-2 w-full text-accent"
                                    preserveAspectRatio="none"
                                >
                                    <path d="M2 8 Q 60 1, 110 6 T 218 4" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                                </svg>
                            </span>
                        </h1>
                        <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-muted-foreground">
                            New Hope Relief serves families facing hardship through transparent giving, compassionate aid delivery,
                            and values rooted in <em className="font-display not-italic text-primary/90">amanah</em> and mercy.
                        </p>
                        <div id="donate" className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                            <button
                                type="button"
                                onClick={() => setIsDonateOpen(true)}
                                className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cta-pulse h-14 rounded-full bg-accent text-accent-foreground hover:bg-accent-glow shadow-cta px-7 text-base font-semibold transition-transform hover:-translate-y-0.5"
                            >
                                <Heart className="h-5 w-5" aria-hidden="true" />
                                Donate Now
                            </button>
                            <Link
                                className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border hover:text-black h-14 rounded-full border-primary/20 bg-card/60 backdrop-blur px-7 text-base font-semibold text-primary hover:bg-secondary transition-transform hover:-translate-y-0.5"
                                to="/impact"
                            >
                                View Impact
                                <ArrowRight className="h-4 w-4 text-black" aria-hidden="true" />
                            </Link>
                        </div>
                        <ul className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                            <li className="flex items-center gap-3 rounded-2xl bg-card/70 backdrop-blur px-4 py-3 shadow-soft border border-border/60">
                                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                                    <ShieldCheck className="h-4.5 w-4.5" aria-hidden="true" />
                                </span>
                                <span className="text-sm font-medium text-foreground/85">Secure Donations</span>
                            </li>
                            <li className="flex items-center gap-3 rounded-2xl bg-card/70 backdrop-blur px-4 py-3 shadow-soft border border-border/60">
                                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                                    <Truck className="h-4.5 w-4.5" aria-hidden="true" />
                                </span>
                                <span className="text-sm font-medium text-foreground/85">Verified Distribution</span>
                            </li>
                            <li className="flex items-center gap-3 rounded-2xl bg-card/70 backdrop-blur px-4 py-3 shadow-soft border border-border/60">
                                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                                    <Users className="h-4.5 w-4.5" aria-hidden="true" />
                                </span>
                                <span className="text-sm font-medium text-foreground/85">Family Focused Relief</span>
                            </li>
                        </ul>
                    </div>

                    <div className="w-full lg:w-1/2 animate-fade-up" style={{ animationDelay: '120ms' }}>
                        <div className="relative w-full">
                            <div
                                aria-hidden="true"
                                className="absolute -inset-6 rounded-[32px] opacity-70"
                                style={{ background: 'radial-gradient(60% 50% at 50% 40%, hsl(var(--accent)/0.18), transparent 70%)' }}
                            />
                            <div className="relative overflow-hidden rounded-[28px] shadow-capsule ring-1 ring-border/60 bg-card">
                                <img
                                    src={heroImg}
                                    alt="Volunteers from New Hope Relief delivering aid parcels and school supplies to a smiling family beside a relief van in a residential neighborhood at sunrise"
                                    className="block h-auto w-full object-cover"
                                    width="1280"
                                    height="1280"
                                    fetchPriority="high"
                                    decoding="async"
                                />
                            </div>
                            <div className="hidden sm:flex absolute -left-3 bottom-6 items-center gap-3 rounded-2xl bg-card/95 backdrop-blur px-4 py-3 shadow-capsule border border-border/60 animate-float-soft">
                                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                                    <Heart className="h-5 w-5" aria-hidden="true" />
                                </span>
                                <div>
                                    <p className="text-xs text-muted-foreground leading-tight">Families Served</p>
                                    <p className="font-display text-lg font-semibold text-primary leading-tight">12,400+</p>
                                </div>
                            </div>
                            <div
                                className="hidden sm:flex absolute -right-2 top-6 items-center gap-2 rounded-full bg-accent text-accent-foreground px-4 py-2 shadow-cta animate-float-soft"
                                style={{ animationDelay: '1.2s' }}
                            >
                                <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                                <span className="text-xs font-semibold tracking-wide">100% Donation Policy</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <DonateModal isOpen={isDonateOpen} onClose={() => setIsDonateOpen(false)} />
        </section>
    );
}