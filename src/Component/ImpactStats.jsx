import { useEffect, useRef, useState } from 'react';

const STATS = [
    { value: 25000, suffix: '+', label: 'Families Helped' },
    { value: 42000, suffix: '', label: 'Meals Distributed' },
    { value: 18, suffix: '', label: 'Communities Served' },
    { value: 100, suffix: '%', label: 'Direct Relief Reach' },
    { value: 24, suffix: '/7', label: 'Emergency Support' },
];

function useCountUp(target, active) {
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (!active) return;
        let frame;
        const duration = 1400;
        const start = performance.now();

        const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(target * eased));
            if (progress < 1) frame = requestAnimationFrame(tick);
        };

        frame = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frame);
    }, [active, target]);

    return value;
}

function Stat({ stat, active }) {
    const value = useCountUp(stat.value, active);
    return (
        <div className="flex flex-col items-center text-center">
            <div className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-primary">
                {value.toLocaleString()}
                <span className="text-accent">{stat.suffix}</span>
            </div>
            <div className="mt-2 text-sm font-medium text-muted-foreground">{stat.label}</div>
        </div>
    );
}

export default function ImpactStats() {
    const ref = useRef(null);
    const [active, setActive] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setActive(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="impact" className="relative py-20 sm:py-28">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.06]"
                style={{
                    backgroundImage:
                        'repeating-radial-gradient(circle at 50% 50%, hsl(var(--primary)) 0 1px, transparent 1px 32px)',
                }}
            />
            <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
                <div className="flex w-full flex-col items-center text-center max-w-2xl mx-auto">
                    <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3.5 py-1.5 text-xs font-semibold tracking-wide text-primary">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Our Impact
                    </span>
                    <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-primary text-balance">
                        Measured in Lives, Not Numbers
                    </h2>
                </div>
                <div ref={ref} className="mt-14 rounded-[28px] bg-card border border-border/60 shadow-soft p-8 sm:p-12">
                    <ul className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
                        {STATS.map((stat) => (
                            <li key={stat.label}>
                                <Stat stat={stat} active={active} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}