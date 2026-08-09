import { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import Header from '../Component/Header';
import Footer from '../Component/Footer';

const CONTACT_CARDS = [
    {
        label: 'Contact',
        value: 'newhoperelief@gmail.com',
        href: 'mailto:newhoperelief@gmail.com',
        Icon: Mail,
    },
    {
        label: 'Address',
        value: '94 Abel Street, Burnley, Lancashire, UK, BB10 1QD',
        href: '#',
        Icon: MapPin,
    },
];

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');
        try {
            // Wire this up to your form endpoint (API route, Formspree, etc.)
            console.log('Contact form submission:', formData);
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (err) {
            setStatus('error');
        }
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
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Contact Us
                    </span>

                    <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight text-primary text-balance">
                        We&apos;d Love to Hear From You
                    </h1>

                    <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto">
                        Partnerships, media, family support — we respond within 24 hours, every day of the week.
                    </p>
                </div>
            </section>

            {/* ===== Contact cards + form ===== */}
            <section className="py-16 sm:py-20">
                <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                        {CONTACT_CARDS.map(({ label, value, href, Icon }) => (
                            <li key={label}>
                                <a
                                    href={href}
                                    className="group flex items-start gap-4 rounded-[20px] bg-card border border-border/60 p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-capsule"
                                >
                                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                        <Icon className="h-5 w-5" aria-hidden="true" />
                                    </span>
                                    <div>
                                        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                            {label}
                                        </div>
                                        <div className="mt-1 font-display text-lg font-semibold text-primary">
                                            {value}
                                        </div>
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>

                    <form
                        onSubmit={handleSubmit}
                        className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-[24px] bg-card border border-border/60 p-6 sm:p-10 shadow-soft"
                    >
                        <label className="flex flex-col gap-2 text-sm">
                            <span className="font-semibold text-primary">Name</span>
                            <input
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40"
                            />
                        </label>

                        <label className="flex flex-col gap-2 text-sm">
                            <span className="font-semibold text-primary">Email</span>
                            <input
                                type="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40"
                            />
                        </label>

                        <label className="sm:col-span-2 flex flex-col gap-2 text-sm">
                            <span className="font-semibold text-primary">Message</span>
                            <textarea
                                name="message"
                                required
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                className="rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40"
                            />
                        </label>

                        <div className="sm:col-span-2 flex items-center justify-end gap-4">
                            {status === 'success' && (
                                <span className="text-sm font-medium text-accent">Message sent — thank you!</span>
                            )}
                            {status === 'error' && (
                                <span className="text-sm font-medium text-destructive">
                                    Something went wrong. Please try again.
                                </span>
                            )}
                            <button
                                type="submit"
                                disabled={status === 'submitting'}
                                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 rounded-full bg-accent text-accent-foreground hover:bg-accent-glow shadow-cta h-12 px-7 font-semibold"
                            >
                                <Send className="h-4 w-4" aria-hidden="true" />
                                {status === 'submitting' ? 'Sending…' : 'Send Message'}
                            </button>
                        </div>
                    </form>
                </div>
            </section>
             <Footer />
        </main>
    );
}