export function DiaboloIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path d="M7 10 L20 24 L7 38" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M41 10 L28 24 L41 38" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="24" cy="24" r="5" fill="currentColor" />
    </svg>
  );
}

export function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 1c.6 4.6 2 6.9 6.5 7.5-4.5.6-5.9 2.9-6.5 7.5-.6-4.6-2-6.9-6.5-7.5C10 7.9 11.4 5.6 12 1Z" />
      <path d="M19.5 15.2c.3 2.1.9 3.1 3 3.4-2.1.3-2.7 1.3-3 3.4-.3-2.1-.9-3.1-3-3.4 2.1-.3 2.7-1.3 3-3.4Z" />
    </svg>
  );
}

export function StarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.5 14.9 9l7.1.7-5.4 4.7 1.6 6.9L12 17.6 5.8 21.3l1.6-6.9L2 9.7 9.1 9Z" />
    </svg>
  );
}

export function ArrowDownIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 3v16M12 19l6.5-6.5M12 19 5.5 12.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MailIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="2.5" y="4.5" width="19" height="15" rx="2" stroke="currentColor" strokeWidth="2.2" />
      <path d="m3.5 6.5 8.5 6.8 8.5-6.8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M6.2 3.2h2.9l1.4 4.3-2.2 1.5a12 12 0 0 0 5.9 5.9l1.5-2.2 4.3 1.4v2.9c0 1.1-1 2-2.1 1.7-8.5-1.4-14.7-7.6-16.1-16.1-.2-1.1.7-2 1.8-1.9Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SwooshIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 24" fill="none" className={className} aria-hidden="true">
      <path d="M2 20c20-16 40-16 96 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeDasharray="1 11" />
    </svg>
  );
}

export function BoltIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13 1 3.5 14h6L10 23l10.5-13.5h-6.2Z" />
    </svg>
  );
}
