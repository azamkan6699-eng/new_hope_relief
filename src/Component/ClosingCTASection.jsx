import { Heart, Repeat } from 'lucide-react';
import { Link } from 'react-router-dom';

// Update this to wherever the photo lives in your project
// (import from '../assets/...' if bundled, or a /public path string if served statically).
import cityImg from '../assets/closing-city.png'
import DonateModal from './DonateModal';
import { useState } from 'react';


export default function ClosingCTASection() {
    const [isDonateOpen, setIsDonateOpen] = useState(false);
    return (
        <section className="relative isolate overflow-hidden">
            <img
                src={cityImg}
                alt="Evening city skyline with homes glowing warmly, symbolizing families safe tonight"
                width="1920"
                height="1024"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
            />
            <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                    background: 'linear-gradient(rgba(14, 33, 57, 0.6), rgba(14, 33, 57, 0.85))',
                }}
            />

            <div className="relative mx-auto w-full max-w-4xl px-5 sm:px-8 py-24 sm:py-36 text-center">
                <span className="inline-flex items-center gap-2 rounded-full bg-card/10 backdrop-blur border border-card/20 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-primary-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Tonight, You Can Help
                </span>

                <h2 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight text-primary-foreground text-balance">
                    Give Hope Tonight
                </h2>

                <p className="mt-5 text-base sm:text-lg text-primary-foreground/85 max-w-xl mx-auto leading-relaxed">
                    Join a community built on mercy and service.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
                    <button
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cta-pulse h-14 rounded-full bg-accent text-accent-foreground hover:bg-accent-glow shadow-cta px-7 text-base font-semibold transition-transform hover:-translate-y-0.5"
                         type="button"
                        onClick={() => setIsDonateOpen(true)}
                    >
                        <Heart className="h-5 w-5" aria-hidden="true" />
                        Donate Securely
                    </button>
                    <Link
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border h-14 rounded-full border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary px-7 text-base font-semibold transition-transform hover:-translate-y-0.5"
                        to="/donate"
                    >
                        <Repeat className="h-4 w-4" aria-hidden="true" />
                        Start Monthly Giving
                    </Link>
                </div>
            </div>
            <DonateModal isOpen={isDonateOpen} onClose={() => setIsDonateOpen(false)} />
        </section>
    );
}