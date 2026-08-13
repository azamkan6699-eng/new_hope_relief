import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Compass,
    HeartHandshake,
    Users,
    ShieldCheck,
    Activity,
    HandHeart,
    Droplets,
    GraduationCap,
    Truck,
    Stethoscope,
    Moon,
    ChartColumn,
    Earth,
    Newspaper,
    Mic,
    Calendar,
    Mail,
    MapPin,
    Heart,
    Menu,
    ChevronDown,
    Sparkles,
} from 'lucide-react';
import logoImg from '../assets/logo.png'
import DonateModal from './DonateModal';

const NAV_ITEMS = [
    {
        key: 'about',
        label: 'About',
        icon: Sparkles,
        href: '/about',
        heading: 'Our Mission',
        blurb: 'Faith-driven relief with dignity, transparency, and amanah at the core.',
        links: [
            { label: 'Who We Are', desc: 'Our story & values', href: '/about', icon: Compass },
            { label: 'Faith In Action', desc: 'Islamic ethical roots', href: '/about#faith', icon: HeartHandshake },
            { label: 'Our Team', desc: 'People behind the work', href: '/about#team', icon: Users },
            { label: 'Governance', desc: 'How we stay accountable', href: '/about#governance', icon: ShieldCheck },
        ],
    },
    {
        key: 'programs',
        label: 'Programs',
        icon: Activity,
        href: '/programs',
        heading: 'Active Campaigns',
        blurb: 'From Ramadan iftars to emergency response — six programs running now.',
        links: [
            { label: 'Food Security', desc: 'Monthly food packs', href: '/programs/family-food-pack', icon: HandHeart },
            { label: 'Water Projects', desc: 'Clean water access', href: '/programs/water-projects', icon: Droplets },
            { label: 'Education', desc: 'Books, kits, tuition', href: '/programs/education', icon: GraduationCap },
            { label: 'Emergency Relief', desc: 'Rapid deployment', href: '/programs/emergency-relief', icon: Truck },
            { label: 'Medical Aid', desc: 'Care & medicine', href: '/programs/medical-aid', icon: Stethoscope },
            { label: 'Seasonal Giving', desc: 'Ramadan, Eid, Qurbani', href: '/programs/seasonal-giving', icon: Moon },
        ],
    },
    {
        key: 'impact',
        label: 'Impact',
        icon: ChartColumn,
        href: '/impact',
        heading: 'Measured in Lives',
        blurb: '25,000+ families served across 18 communities — 100% donation policy.',
        links: [
            { label: 'By the Numbers', desc: 'Live impact metrics', href: '/impact#stats', icon: ChartColumn },
            { label: 'Communities Served', desc: 'Where we work', href: '/impact#communities', icon: Earth },
            { label: 'Trust & Amanah', desc: 'How we stay verified', href: '/impact#trust', icon: ShieldCheck },
            { label: 'Family Stories', desc: 'Voices from the field', href: '/impact#stories', icon: HeartHandshake },
        ],
    },
    {
        key: 'news',
        label: 'News',
        icon: Newspaper,
        href: '/news',
        heading: 'From the Field',
        blurb: 'Field reports, campaign updates, and stories of restored hope.',
        links: [
            { label: 'Latest Updates', desc: 'Recent posts', href: '/news#latest', icon: Newspaper },
            { label: 'Press Releases', desc: 'Official statements', href: '/news#press', icon: Mic },
            { label: 'Events', desc: 'Upcoming gatherings', href: '/news#events', icon: Calendar },
        ],
    },
    {
        key: 'contact',
        label: 'Contact',
        icon: Mail,
        href: '/contact',
        heading: 'Reach Our Team',
        blurb: 'We respond within 24 hours — for partnerships, media, or family support.',
        links: [
            { label: 'Contact', desc: 'newhoperelief@gmail.com', href: '/contact#email', icon: Mail },
            { label: 'Address', desc: '94 Abel Street, Burnley, Lancashire, UK, BB10 1QD', href: '/contact#visit', icon: MapPin },
        ],
    },
];

export default function Header() {
    const [openDesktop, setOpenDesktop] = useState(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileAccordion, setMobileAccordion] = useState(null);

    const [isDonateOpen, setIsDonateOpen] = useState(false);

    // Called by every navigational Link so the mega menu / mobile menu
    // closes immediately on click, instead of waiting for onMouseLeave.
    const closeAllMenus = () => {
        setOpenDesktop(null);
        setMobileOpen(false);
        setMobileAccordion(null);
    };

    return (
        <header className="fixed inset-x-0 top-0 z-50 transition-all duration-500 pt-4 sm:pt-6">
            <nav
                aria-label="Primary"
                className="shadow-2xl mx-auto flex w-[calc(100%-1.5rem)] max-w-6xl items-center justify-between gap-4 rounded-[20px] glass-capsule px-4 py-2 sm:px-4 sm:py-2.5 transition-all duration-500"
            >
                {/* Logo */}
                <Link className="flex items-center gap-2 shrink-0" aria-label="New Hope Relief home" to="/" onClick={closeAllMenus}>
                    <img
                        src={logoImg}
                        alt="New Hope Relief"
                        className="h-9 sm:h-10 w-auto object-contain"
                        width="180"
                        height="40"
                    />
                </Link>

                {/* Desktop nav */}
                <div className="hidden lg:flex items-center">
                    <div className="relative hidden lg:block" onMouseLeave={() => setOpenDesktop(null)}>
                        <ul className="flex items-center gap-1">
                            {NAV_ITEMS.map((item) => (
                                <li key={item.key} className="relative">
                                    <button
                                        type="button"
                                        aria-haspopup="true"
                                        aria-expanded={openDesktop === item.key}
                                        onMouseEnter={() => setOpenDesktop(item.key)}
                                        onClick={() => setOpenDesktop(openDesktop === item.key ? null : item.key)}
                                        className="relative rounded-full px-4 py-2 text-sm font-medium transition-colors text-foreground/80 hover:text-primary hover:bg-secondary"
                                    >
                                        <span className="inline-flex items-center gap-1.5">
                                            {item.label}
                                            <span
                                                className={`h-1 w-1 rounded-full bg-accent transition-opacity ${openDesktop === item.key ? 'opacity-100' : 'opacity-0'
                                                    }`}
                                            />
                                        </span>
                                    </button>

                                    {/*
                                        FIX 1: pt-3 (padding) instead of mt-3 (margin).
                                        Padding is part of this element's hoverable box, so the
                                        cursor never leaves a real DOM node while crossing the
                                        gap between the nav button and the dropdown card below.
                                    */}
                                    <div
                                        className={`absolute left-1/2 top-full z-40 pt-3 w-[calc(100vw-2rem)] max-w-[680px] -translate-x-1/2 origin-top transition-all duration-200 ${openDesktop === item.key
                                            ? 'opacity-100 translate-y-0 pointer-events-auto'
                                            : 'opacity-0 -translate-y-2 pointer-events-none'
                                            }`}
                                        role="menu"
                                        aria-label={`${item.label} menu`}
                                    >
                                        <div className="glass-capsule overflow-hidden rounded-[24px] p-3">
                                            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                                                <Link
                                                    className="group relative col-span-1 sm:col-span-2 overflow-hidden rounded-[18px] p-5 text-primary-foreground transition-transform hover:-translate-y-0.5"
                                                    to={item.href}
                                                    onClick={closeAllMenus}
                                                    style={{
                                                        /*
                                                          FIX 2: reference the @theme color variables
                                                          directly (they already hold full hsl(...)
                                                          values in Tailwind v4). Wrapping them in an
                                                          extra hsl(var(--x)) looked for a different,
                                                          undeclared variable and silently rendered
                                                          no background at all.
                                                        */
                                                        background:
                                                            'radial-gradient(120% 80% at 0% 0%, color-mix(in srgb, var(--color-accent) 40%, transparent), transparent 60%), linear-gradient(135deg, var(--color-primary), var(--color-primary-glow))',
                                                    }}
                                                >
                                                    <div className="relative">
                                                        <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-foreground/15 backdrop-blur">
                                                            <item.icon className="h-5 w-5" aria-hidden="true" />
                                                        </span>
                                                        <h3 className="mt-4 font-display text-xl font-semibold leading-tight">{item.heading}</h3>
                                                        <p className="mt-2 text-sm text-primary-foreground/85 leading-relaxed">{item.blurb}</p>
                                                        <span className="mt-5 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-accent-glow">
                                                            Explore →
                                                        </span>
                                                    </div>
                                                </Link>
                                                <ul className="col-span-1 sm:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-1.5 min-w-0">
                                                    {item.links.map((link) => (
                                                        <li key={link.label}>
                                                            <Link
                                                                className="group flex items-start gap-3 rounded-2xl p-3 transition-colors hover:bg-secondary/80"
                                                                role="menuitem"
                                                                to={link.href}
                                                                onClick={closeAllMenus}
                                                            >
                                                                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                                                                    <link.icon className="h-4.5 w-4.5" aria-hidden="true" />
                                                                </span>
                                                                <div className="min-w-0">
                                                                    <div className="text-sm font-semibold text-primary truncate">{link.label}</div>
                                                                    <div className="text-xs text-muted-foreground truncate">{link.desc}</div>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <button
                        className="items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hidden sm:inline-flex rounded-full bg-accent text-accent-foreground hover:bg-accent-glow shadow-cta cta-pulse h-10 px-5 font-semibold"
                        type="button"
                        onClick={() => setIsDonateOpen(true)}
                    >
                        <Heart aria-hidden="true" /> Donate
                    </button>
                    <button
                        type="button"
                        className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                        aria-label="Open menu"
                        aria-expanded={mobileOpen}
                        onClick={() => setMobileOpen((v) => !v)}
                    >
                        <Menu className="h-5 w-5" />
                    </button>
                </div>
            </nav>

            {/* Mobile menu */}
            <div
                className={`lg:hidden mx-auto mt-2 w-[calc(100%-1.5rem)] max-w-6xl overflow-hidden rounded-[20px] glass-capsule transition-all duration-300 ${mobileOpen ? 'max-h-[80vh] opacity-100 p-2 overflow-y-auto' : 'max-h-0 opacity-0 p-0 border-transparent'
                    }`}
            >
                <ul className="flex flex-col gap-1">
                    {NAV_ITEMS.map((item) => (
                        <li key={item.key} className="rounded-2xl bg-card/40">
                            <button
                                type="button"
                                className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold text-primary"
                                aria-expanded={mobileAccordion === item.key}
                                onClick={() => setMobileAccordion(mobileAccordion === item.key ? null : item.key)}
                            >
                                <span className="inline-flex items-center gap-2">
                                    <item.icon className="h-4 w-4 text-accent" aria-hidden="true" />
                                    {item.label}
                                </span>
                                <ChevronDown
                                    className={`h-4 w-4 transition-transform ${mobileAccordion === item.key ? 'rotate-180' : ''}`}
                                />
                            </button>
                            <div
                                className={`grid transition-all duration-300 ${mobileAccordion === item.key ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                                    }`}
                            >
                                <div className="overflow-hidden">
                                    <ul className="px-2 pb-3 flex flex-col gap-1">
                                        <li>
                                            <Link
                                                className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-semibold text-primary hover:bg-secondary"
                                                to={item.href}
                                                onClick={closeAllMenus}
                                            >
                                                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                                                Overview
                                            </Link>
                                        </li>
                                        {item.links.map((link) => (
                                            <li key={link.label}>
                                                <Link
                                                    className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-foreground/85 hover:bg-secondary hover:text-primary"
                                                    to={link.href}
                                                    onClick={closeAllMenus}
                                                >
                                                    <link.icon className="h-4 w-4 text-accent shrink-0" aria-hidden="true" />
                                                    {link.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </li>
                    ))}
                    <li className="pt-1">
                        <Link
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 px-4 py-2 w-full rounded-full bg-accent text-accent-foreground hover:bg-accent-glow shadow-cta h-11 font-semibold"
                            to="/donate"
                            onClick={closeAllMenus}
                        >
                            <Heart aria-hidden="true" /> Donate Now
                        </Link>
                    </li>
                </ul>
            </div>
            <DonateModal isOpen={isDonateOpen} onClose={() => setIsDonateOpen(false)} />
        </header>
    );
}