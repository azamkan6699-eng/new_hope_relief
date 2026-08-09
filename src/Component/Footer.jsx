import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import logoImg from '../assets/logo.png';

const NAV_LINKS = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Programs', href: '/programs' },
    { label: 'Impact', href: '/impact' },
    { label: 'News', href: '/news' },
    { label: 'Donate', href: '/donate' },
    { label: 'Contact', href: '/contact' },
];

const CONTACT_ITEMS = [
    { icon: Mail, content: 'hello@newhoperelief.org', href: 'mailto:hello@newhoperelief.org' },
    { icon: Phone, content: '+44 (0) 123 456 7890', href: 'tel:+441234567890' },
    { icon: MapPin, content: '123 Hope Street, London, UK', href: null },
];

// Custom-drawn social icons (not lucide) — preserved exactly from the inspected markup.
const SOCIAL_LINKS = [
    {
        label: 'Instagram',
        href: '#',
        icon: (
            <>
                <rect x="8" y="8" width="32" height="32" rx="8" />
                <circle cx="24" cy="24" r="7" />
                <circle cx="33" cy="15" r="1.5" fill="currentColor" />
            </>
        ),
    },
    {
        label: 'Facebook',
        href: '#',
        icon: <path d="M28 10 h6 v8 h-6 c-2 0-3 1-3 3 v5 h9 l-1 8 h-8 V42 H17 V34 h-5 v-8 h5 v-6 a8 8 0 0 1 8-8 z" />,
    },
    {
        label: 'LinkedIn',
        href: '#',
        icon: (
            <>
                <rect x="8" y="8" width="32" height="32" rx="4" />
                <path d="M16 20 V34 M16 16 V16.01" />
                <path d="M22 34 V22 M22 26 a4 4 0 0 1 8 0 V34" />
            </>
        ),
    },
    {
        label: 'X',
        href: '#',
        icon: <path d="M10 8 L38 40 M38 8 L10 40" />,
    },
];

// Reusable underline-on-hover link, matching the exact ::after animation
// used throughout the footer (nav links + legal links).
function FooterLink({ href, children, small = false }) {
    return (
        <a
            className={`relative inline-block py-1 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-px after:w-full after:scale-x-0 after:origin-right after:bg-accent after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left ${small ? '!text-xs' : ''}`}
            href={href}
        >
            {children}
        </a>
    );
}

export default function Footer() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Wire this up to your newsletter provider (Mailchimp, ConvertKit, etc.)
        console.log('Newsletter signup:', email);
        setEmail('');
    };

    return (
        <footer id="contact" className="relative bg-primary text-primary-foreground">
            <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 py-16 sm:py-20">
                <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Logo + blurb + socials */}
                    <div className="lg:col-span-1">
                        <div className="inline-flex items-center gap-2 rounded-2xl bg-primary-foreground/10 backdrop-blur p-2">
                            <img src={logoImg} alt="New Hope Relief" className="h-10 w-auto" width="120" height="40" />
                        </div>
                        <p className="mt-5 text-sm leading-relaxed text-primary-foreground/80 max-w-xs">
                            Serving families through faith, compassion, and trusted relief.
                        </p>
                        <div className="mt-6 flex items-center gap-2">
                            {SOCIAL_LINKS.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground transition-all hover:bg-accent hover:text-accent-foreground hover:-translate-y-0.5"
                                >
                                    <svg
                                        viewBox="0 0 48 48"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="h-5 w-5"
                                    >
                                        {social.icon}
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Nav */}
                    <div>
                        <h3 className="font-display text-base font-semibold text-primary-foreground">Navigate</h3>
                        <ul className="mt-5 flex flex-col gap-1.5">
                            {NAV_LINKS.map((link) => (
                                <li key={link.label}>
                                    <FooterLink href={link.href}>{link.label}</FooterLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-display text-base font-semibold text-primary-foreground">Contact</h3>
                        <ul className="mt-5 flex flex-col gap-3 text-sm text-primary-foreground/80">
                            {CONTACT_ITEMS.map((item) => (
                                <li key={item.content} className="flex items-start gap-3">
                                    <item.icon className="h-4 w-4 mt-0.5 text-accent shrink-0" aria-hidden="true" />
                                    {item.href ? (
                                        <a href={item.href} className="hover:text-primary-foreground">
                                            {item.content}
                                        </a>
                                    ) : (
                                        <span>{item.content}</span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="font-display text-base font-semibold text-primary-foreground">Stay Updated</h3>
                        <p className="mt-5 text-sm text-primary-foreground/80">
                            Quarterly updates on impact and field reports.
                        </p>
                        <form
                            onSubmit={handleSubmit}
                            className="mt-4 flex w-full items-center gap-2 rounded-full bg-primary-foreground/10 backdrop-blur p-1.5 border border-primary-foreground/15"
                        >
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Your email"
                                aria-label="Email address"
                                className="flex-1 bg-transparent px-4 py-2 text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="rounded-full bg-accent text-accent-foreground px-4 py-2 text-sm font-semibold hover:bg-accent-glow transition-colors"
                            >
                                Join
                            </button>
                        </form>
                    </div>
                </div>

                <hr className="mt-14 border-primary-foreground/15" />

                <div className="mt-6 flex w-full flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-primary-foreground/70">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                        <span>© 2026 New Hope Relief</span>
                        <span className="hidden sm:inline opacity-50">·</span>
                        <span>Registered Charity No. XXXXXXX</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                        <FooterLink href="/privacy-policy" small>Privacy Policy</FooterLink>
                        <FooterLink href="/terms" small>Terms</FooterLink>
                        <span className="opacity-70">Built for community impact</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}