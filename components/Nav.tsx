import Link from "next/link";
import { contact } from "@/data/contact";
import {
  FileIcon,
  FolderIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  UserIcon,
} from "@/components/icons";

export const pages = [
  { href: "/experiencia", label: "Experiencia", Icon: FolderIcon },
  { href: "/sobre-mi", label: "Sobre mí", Icon: UserIcon },
  { href: "/contacto", label: "Contacto", Icon: MailIcon },
  { href: "/curriculum", label: "Currículum", Icon: FileIcon },
];

export const socials = [
  { href: contact.github, label: "GitHub", Icon: GithubIcon },
  { href: contact.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
  { href: contact.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: `mailto:${contact.email}`, label: "Email", Icon: MailIcon },
];

export function SideNav() {
  return (
    <nav className="side-nav side-nav--left" aria-label="Secciones">
      {pages.map(({ href, label, Icon }, i) => (
        <Link key={href} href={href} className="nav-link" style={{ animationDelay: `${0.9 + i * 0.12}s` }}>
          <Icon className="nav-icon" />
          <span>{label}</span>
        </Link>
      ))}
    </nav>
  );
}

export function SocialNav() {
  return (
    <nav className="side-nav side-nav--right" aria-label="Redes">
      {socials.map(({ href, label, Icon }, i) => (
        <a
          key={label}
          href={href}
          className="social-link"
          title={label}
          aria-label={label}
          target={href.startsWith("mailto:") ? undefined : "_blank"}
          rel="noopener noreferrer"
          style={{ animationDelay: `${0.9 + i * 0.12}s` }}
        >
          <Icon className="social-icon" />
        </a>
      ))}
    </nav>
  );
}
