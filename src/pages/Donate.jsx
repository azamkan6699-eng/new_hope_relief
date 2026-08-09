import { useState } from 'react';
import { ShieldCheck, Heart, Repeat } from 'lucide-react';
import Header from '../Component/Header';
import Footer from '../Component/Footer';

const PRESET_AMOUNTS = [25, 50, 100, 250];

export default function Donate() {
    const [frequency, setFrequency] = useState('one-time'); // 'one-time' | 'monthly'
    const [selectedAmount, setSelectedAmount] = useState(null);
    const [customAmount, setCustomAmount] = useState('');

    const handlePresetClick = (amount) => {
        setSelectedAmount(amount);
        setCustomAmount('');
    };

    const handleCustomChange = (e) => {
        setCustomAmount(e.target.value);
        setSelectedAmount(null);
    };

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
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Give With Amanah
                    </span>

                    <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight text-primary text-balance">
                        Your Donation, Their Hope
                    </h1>

                    <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto">
                        100% donation policy. Every contribution is traced, reported, and delivered with dignity.
                    </p>
                </div>
            </section>

            {/* ===== Donation form ===== */}
            <section className="py-16 sm:py-20">
                <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
                    <div className="rounded-[28px] bg-card border border-border/60 shadow-soft p-6 sm:p-10">
                        <div className="flex items-center justify-between gap-4">
                            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-primary">
                                Choose Your Gift
                            </h2>
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 text-accent px-3 py-1 text-xs font-semibold">
                                <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" /> Secure
                            </span>
                        </div>

                        {/* Frequency toggle */}
                        <div className="mt-6 inline-flex rounded-full border border-border bg-secondary p-1">
                            <button
                                type="button"
                                onClick={() => setFrequency('one-time')}
                                className={
                                    frequency === 'one-time'
                                        ? 'rounded-full bg-card px-5 py-2 text-sm font-semibold text-primary shadow-soft'
                                        : 'rounded-full px-5 py-2 text-sm font-semibold text-muted-foreground hover:text-primary'
                                }
                            >
                                One-time
                            </button>
                            <button
                                type="button"
                                onClick={() => setFrequency('monthly')}
                                className={
                                    frequency === 'monthly'
                                        ? 'rounded-full bg-card px-5 py-2 text-sm font-semibold text-primary shadow-soft'
                                        : 'rounded-full px-5 py-2 text-sm font-semibold text-muted-foreground hover:text-primary'
                                }
                            >
                                Monthly
                            </button>
                        </div>

                        {/* Preset amounts */}
                        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                            {PRESET_AMOUNTS.map((amount) => (
                                <button
                                    key={amount}
                                    type="button"
                                    onClick={() => handlePresetClick(amount)}
                                    className={`rounded-2xl border py-4 font-display text-2xl font-semibold text-primary transition-all hover:-translate-y-0.5 hover:border-accent hover:bg-accent/5 ${selectedAmount === amount
                                            ? 'border-accent bg-accent/5'
                                            : 'border-border bg-background'
                                        }`}
                                >
                                    £{amount}
                                </button>
                            ))}
                        </div>

                        {/* Custom amount */}
                        <label className="mt-4 flex items-center gap-3 rounded-2xl border border-border bg-background px-4 py-3">
                            <span className="text-lg font-semibold text-primary">£</span>
                            <input
                                type="number"
                                placeholder="Other amount"
                                value={customAmount}
                                onChange={handleCustomChange}
                                className="flex-1 bg-transparent text-base focus:outline-none"
                            />
                        </label>

                        {/* Primary CTA */}
                        <button
                            type="button"
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 px-8 cta-pulse mt-6 w-full h-14 rounded-full bg-accent text-accent-foreground hover:bg-accent-glow shadow-cta text-base font-semibold"
                        >
                            <Heart className="h-5 w-5" aria-hidden="true" />
                            Donate Securely
                        </button>

                        {/* Secondary CTA */}
                        <button
                            type="button"
                            onClick={() => setFrequency('monthly')}
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border hover:text-accent-foreground px-8 mt-3 w-full h-12 rounded-full border-primary/20 bg-card text-primary hover:bg-secondary"
                        >
                            <Repeat className="h-4 w-4" aria-hidden="true" />
                            Start Monthly Giving
                        </button>

                        <p className="mt-6 text-center text-xs text-muted-foreground">
                            Encrypted payments · Charity Reg. 1121099 · 100% Donation Policy
                        </p>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}