type IconProps = { className?: string };

function Svg({ className, children }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export const FolderIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M3 7a1 1 0 0 1 1-1h5l2 2h9a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z" />
  </Svg>
);

export const UserIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="8" r="3.6" />
    <path d="M5 20c.6-3.6 3.4-5.6 7-5.6s6.4 2 7 5.6" />
  </Svg>
);

export const MailIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3" y="5.5" width="18" height="13" rx="1.2" />
    <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
  </Svg>
);

export const FileIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M6 3h8l4 4v14H6Z" />
    <path d="M14 3v4h4M9 12h6M9 16h6" />
  </Svg>
);

export const GithubIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.4c0-1 .1-1.4-.5-2 2-.2 4-1 4-4.1 0-.9-.3-1.6-.9-2.2.1-.2.4-1.2-.1-2.5 0 0-.7-.2-2.5.9a8.6 8.6 0 0 0-4.5 0C6.7 6.6 6 6.8 6 6.8c-.5 1.3-.2 2.3-.1 2.5-.6.6-.9 1.3-.9 2.2 0 3.1 2 3.9 4 4.1-.4.4-.4.8-.5 1.4V21" />
  </Svg>
);

export const LinkedinIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3" y="3" width="18" height="18" rx="2.5" />
    <path d="M7.5 10.5V17M7.5 7.3v.01M11.5 17v-6.5M11.5 13.3c0-1.6 1-2.8 2.4-2.8s2.1 1 2.1 2.6V17" />
  </Svg>
);

export const InstagramIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <path d="M17.3 6.7v.01" />
  </Svg>
);

export const ArrowIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M7 17 17 7M9 7h8v8" />
  </Svg>
);

export const DownloadIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 19h14" />
  </Svg>
);
