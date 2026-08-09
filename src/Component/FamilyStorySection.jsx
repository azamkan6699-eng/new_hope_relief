// Update this import to match wherever the photo lives in your project
// (e.g. `import storyImg from '../assets/story-doorway.webp'` if it's bundled,
// or just use the string path below if it's served from /public).
import storyImg from '../assets/story-doorway.png'

export default function FamilyStorySection() {
    return (
        <section className="relative py-20 sm:py-28">
            <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
                <div className="flex w-full flex-col lg:flex-row items-center gap-10 lg:gap-16">
                    <div className="w-full lg:w-1/2 order-1 lg:order-1">
                        <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3.5 py-1.5 text-xs font-semibold tracking-wide text-primary">
                            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> A Family's Story
                        </span>

                        <svg
                            aria-hidden="true"
                            className="mt-6 h-10 w-10 text-accent"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M9 7H5a2 2 0 00-2 2v4a2 2 0 002 2h2v2a2 2 0 01-2 2H4v2h1a4 4 0 004-4V7zm10 0h-4a2 2 0 00-2 2v4a2 2 0 002 2h2v2a2 2 0 01-2 2h-1v2h1a4 4 0 004-4V7z" />
                        </svg>

                        <blockquote className="mt-4 font-display text-2xl sm:text-3xl lg:text-4xl leading-snug font-medium text-primary text-balance">
                            They arrived with food, kindness, and dignity when we needed help most.
                        </blockquote>

                        <figcaption className="mt-6 flex items-center gap-3">
                            <span className="inline-block h-px w-10 bg-accent" />
                            <span className="text-sm font-semibold tracking-wide text-muted-foreground">
                                Supported Family
                            </span>
                        </figcaption>
                    </div>

                    <div className="w-full lg:w-1/2 order-2 lg:order-2">
                        <div className="relative mx-auto w-full max-w-[560px]">
                            <div
                                aria-hidden="true"
                                className="absolute -inset-6 rounded-[36px] opacity-70"
                                style={{
                                    background:
                                        'radial-gradient(60% 50%, rgba(232, 179, 125, 0.25), transparent 70%)',
                                }}
                            />
                            <div className="relative overflow-hidden rounded-[28px] ring-1 ring-border/60 shadow-capsule bg-card">
                                <img
                                    src={storyImg}
                                    alt="Silhouette of a family standing together under the warm light of a doorway, symbolizing dignity and hope"
                                    width="1280"
                                    height="896"
                                    loading="lazy"
                                    decoding="async"
                                    className="block h-auto w-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}