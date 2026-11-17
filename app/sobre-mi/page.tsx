import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { about } from "@/data/about";

export const metadata: Metadata = { title: "Sobre mí" };

export default function SobreMiPage() {
  return (
    <PageShell eyebrow="SOBRE MÍ" title="David Lozada" subtitle={about.role.toUpperCase()}>
      <div className="prose">
        {about.bio.map((para) => (
          <p key={para}>{para}</p>
        ))}
      </div>

      <section className="block">
        <h2 className="block-title">Stack</h2>
        <ul className="chips">
          {about.stack.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </section>

      <section className="block">
        <h2 className="block-title">Ahora mismo</h2>
        <ul className="now">
          {about.now.map((n) => (
            <li key={n.title}>
              <h3>{n.title}</h3>
              <p>{n.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <footer className="page-footer">
        <Link href="/experiencia" className="term-link">{"// VER EXPERIENCIA"}</Link>
        <Link href="/contacto" className="term-link">{"// CONTACTO"}</Link>
      </footer>
    </PageShell>
  );
}
