import ClosingCTASection from "../Component/ClosingCTASection";
import Footer from "../Component/Footer";
import Header from "../Component/Header";
import NewsSection from "../Component/NewsSection";

export default function News() {
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
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" /> News &amp; Updates
                    </span>

                    <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight text-primary text-balance">
                        From the Field
                    </h1>

                    <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto">
                        Real updates from real campaigns — stories of restored hope and verified relief.
                    </p>
                </div>
            </section>

            <NewsSection />
            <ClosingCTASection />
            <Footer />
        </main>
    );
}