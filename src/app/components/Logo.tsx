/** "P." lettermark. Same artwork as src/app/icon.svg (favicon) — keep both in sync. */
export function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden>
      <defs>
        <linearGradient id="logo-gradient" x1="17" y1="11" x2="42" y2="54" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#8b5cf6" />
          <stop offset="0.5" stopColor="#38bdf8" />
          <stop offset="1" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill="#0b0d12" />
      <rect x="0.75" y="0.75" width="62.5" height="62.5" rx="15.25" stroke="#fff" strokeOpacity="0.1" strokeWidth="1.5" />
      <path
        d="M21 50V15h12.5a11 11 0 0 1 0 22H21"
        stroke="url(#logo-gradient)"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="45" cy="47" r="5" fill="#67e8f9" />
    </svg>
  );
}
