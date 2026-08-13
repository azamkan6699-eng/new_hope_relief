import { useEffect, useRef, useState } from 'react';
import { X, ShieldCheck, Copy, Check, Landmark, Heart } from 'lucide-react';

// Bank transfer details for New Hope Relief.
// Kept as a single source of truth so the numbers only live in one place.
const BANK_DETAILS = {
    bank: 'Barclays',
    accountName: 'New Hope Relief',
    accountNumber: '33318214',
    sortCode: '20-55-41',
    charityReg: '1121099',
};

// Plain text block used for the single "copy all" action
const COPY_ALL_TEXT = `Bank: ${BANK_DETAILS.bank}
Account Name: ${BANK_DETAILS.accountName}
Account Number: ${BANK_DETAILS.accountNumber}
Sort Code: ${BANK_DETAILS.sortCode}`;

function DetailRow({ label, value, large = false }) {
    return (
        <div
            className={
                large
                    ? 'rounded-2xl border-2 border-accent/30 bg-accent/[0.06] px-4 py-3.5 sm:px-5 sm:py-4'
                    : 'flex items-center justify-between gap-3 rounded-xl border border-border/60 bg-secondary/50 px-4 py-3'
            }
        >
            {large ? (
                <div className="min-w-0">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-accent">{label}</p>
                    <p className="mt-1 font-display text-2xl sm:text-3xl font-semibold tracking-wide text-primary tabular-nums truncate">
                        {value}
                    </p>
                </div>
            ) : (
                <div className="min-w-0">
                    <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">{label}</p>
                    <p className="mt-0.5 font-display text-base font-semibold text-primary tabular-nums truncate">{value}</p>
                </div>
            )}
        </div>
    );
}

export default function DonateModal({ isOpen, onClose }) {
    const panelRef = useRef(null);
    const [copied, setCopied] = useState(false);
    const timeoutRef = useRef(null);

    const handleCopyAll = async () => {
        try {
            await navigator.clipboard.writeText(COPY_ALL_TEXT);
        } catch {
            // Fallback for browsers without Clipboard API access (e.g. insecure context)
            const textarea = document.createElement('textarea');
            textarea.value = COPY_ALL_TEXT;
            textarea.style.position = 'fixed';
            textarea.style.opacity = '0';
            document.body.appendChild(textarea);
            textarea.focus();
            textarea.select();
            try {
                document.execCommand('copy');
            } catch {
                // Silently ignore — the values are still visible for manual copy
            }
            document.body.removeChild(textarea);
        }

        setCopied(true);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => setCopied(false), 2000);
    };

    // Lock background scroll and support Escape-to-close while open
    useEffect(() => {
        if (!isOpen) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleKeyDown);

        // Move focus into the dialog for keyboard/screen-reader users
        panelRef.current?.focus();

        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose]);

    useEffect(() => () => timeoutRef.current && clearTimeout(timeoutRef.current), []);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="donate-modal-title"
        >
            {/* Backdrop */}
            <div
                aria-hidden="true"
                onClick={onClose}
                className="absolute inset-0 bg-primary/40 backdrop-blur-sm animate-fade-up"
                style={{ animationDuration: '200ms' }}
            />

            <div
                ref={panelRef}
                tabIndex={-1}
                className="relative flex w-full sm:max-w-lg max-h-[92vh] flex-col overflow-hidden rounded-t-[28px] sm:rounded-[28px] bg-card shadow-capsule ring-1 ring-border/60 animate-fade-up focus:outline-none"
                style={{ animationDuration: '260ms' }}
            >
                {/* Decorative glow, matches Hero — safely clipped by the panel's overflow-hidden */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full opacity-[0.12]"
                    style={{
                        background: 'conic-gradient(from 45deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)))',
                        filter: 'blur(36px)',
                    }}
                />

                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close donation details"
                    className="absolute right-4 top-4 sm:right-5 sm:top-5 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-card/90 border border-border/60 text-primary shadow-soft hover:bg-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                    <X className="h-4.5 w-4.5" aria-hidden="true" />
                </button>

                {/* Scrollable content — x-axis locked, only y can ever scroll, and only if content genuinely exceeds max-h */}
                <div className="relative  px-5 py-7 sm:px-8 sm:py-9">
                    {/* Header */}
                    <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3.5 py-1.5 text-xs font-semibold tracking-wide text-primary">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        UK Charity Reg. {BANK_DETAILS.charityReg}
                    </span>

                    <div className="mt-4 flex items-center gap-3">
                        <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                            <Heart className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <h2
                            id="donate-modal-title"
                            className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-primary text-balance"
                        >
                            Donate by Bank Transfer
                        </h2>
                    </div>

                    {/* Bank details card */}
                    <div className="mt-7 rounded-2xl border border-border/60 bg-secondary/30 p-4 sm:p-5">
                        <div className="flex items-center gap-2 mb-4">
                            <Landmark className="h-4.5 w-4.5 text-accent" aria-hidden="true" />
                            <p className="text-xs font-semibold uppercase tracking-wider text-primary/80">
                                Account Details
                            </p>
                        </div>

                        <div className="space-y-3">
                            <DetailRow label="Bank" value={BANK_DETAILS.bank} />
                            <DetailRow label="Account Name" value={BANK_DETAILS.accountName} />
                            <DetailRow label="Account Number" value={BANK_DETAILS.accountNumber} large />
                            <DetailRow label="Sort Code" value={BANK_DETAILS.sortCode} />
                        </div>

                        {/* Single copy-all action */}
                        <button
                            type="button"
                            onClick={handleCopyAll}
                            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground shadow-cta transition-all hover:bg-accent-glow hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        >
                            {copied ? <Check className="h-4 w-4" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
                            <span>{copied ? 'Copied all details' : 'Copy all details'}</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}