import { Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTASection() {
    return (
        <section className="relative py-20 sm:py-28">
            <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
                <div
                    className="relative overflow-hidden rounded-[32px] p-8 sm:p-14 lg:p-20 text-center shadow-capsule"
                    style={{
                        /*
                            Reference @theme color vars directly with color-mix instead
                            of the v3-only hsl(var(--x)/alpha) syntax (see Header fix).
                        */
                        background:
                            'radial-gradient(80% 80% at 20% 20%, color-mix(in srgb, var(--color-accent) 18%, transparent), transparent 60%), radial-gradient(80% 80% at 80% 80%, color-mix(in srgb, var(--color-primary) 22%, transparent), transparent 60%), linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-glow) 100%)',
                    }}
                >
                    {/*
                        Floating background ornaments. These use the animate-float-soft
                        utility — add the keyframes below to your global CSS / @theme
                        if they aren't already defined:

                        @keyframes float-soft {
                          0%, 100% { transform: translateY(0) rotate(0deg); }
                          50% { transform: translateY(-14px) rotate(4deg); }
                        }
                        .animate-float-soft { animation: float-soft 8s ease-in-out infinite; }
                    */}
                    <svg
                        aria-hidden="true"
                        className="pointer-events-none absolute -left-10 -top-10 h-56 w-56 text-accent-foreground/10 animate-float-soft"
                        viewBox="0 0 100 100"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="0.6"
                    >
                        <g transform="translate(50 50)">
                            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
                                <polygon
                                    key={deg}
                                    points="0,-40 9,-9 40,0 9,9 0,40 -9,9 -40,0 -9,-9"
                                    transform={`rotate(${deg})`}
                                />
                            ))}
                        </g>
                    </svg>
                    <svg
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-12 -bottom-12 h-64 w-64 text-accent-foreground/10 animate-float-soft"
                        viewBox="0 0 100 100"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="0.6"
                        style={{ animationDelay: '1.5s' }}
                    >
                        <g transform="translate(50 50)">
                            {[0, 11.25, 22.5, 33.75, 45, 56.25, 67.5, 78.75].map((deg) => (
                                <rect key={deg} x="-30" y="-30" width="60" height="60" transform={`rotate(${deg})`} />
                            ))}
                        </g>
                    </svg>

                    <div className="relative mx-auto max-w-2xl">
                        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-primary-foreground text-balance">
                            Turn Compassion Into Real Relief
                        </h2>
                        <p className="mt-5 text-base sm:text-lg text-primary-foreground/85 leading-relaxed">
                            Your donation becomes food, shelter, care, and hope.
                        </p>

                        <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
                            <Link
                                className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cta-pulse h-14 rounded-full bg-accent text-accent-foreground hover:bg-accent-glow shadow-cta px-7 text-base font-semibold transition-transform hover:-translate-y-0.5"
                                to="/donate"
                            >
                                <Heart className="h-5 w-5" aria-hidden="true" />
                                Donate Today
                            </Link>
                            <Link
                                className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border h-14 rounded-full border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary px-7 text-base font-semibold transition-transform hover:-translate-y-0.5"
                                to="/impact"
                            >
                                See Impact
                                <ArrowRight className="h-4 w-4" aria-hidden="true" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}