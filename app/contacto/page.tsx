import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { socials } from "@/components/Nav";
import { contact } from "@/data/contact";

export const metadata: Metadata = { title: "Contacto" };

function display(label: string, href: string) {
  if (label === "Email") return contact.email;
  return decodeURIComponent(href.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, ""));
}

export default function ContactoPage() {
  return (
    <PageShell eyebrow="CONTACTO" title="Contacto" subtitle="CANALES_ABIERTOS // ELIGE UNO">
      <p className="prose-lead">¿Un proyecto, una idea o una oferta? Escríbeme por donde prefieras.</p>
      <ul className="channels">
        {socials.map(({ href, label, Icon }) => (
          <li key={label}>
            <a
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="channel"
            >
              <Icon className="channel-icon" />
              <span className="channel-label">{label}</span>
              <span className="channel-value">{display(label, href)}</span>
            </a>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
