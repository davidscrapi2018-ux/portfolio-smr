import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { DownloadIcon } from "@/components/icons";
import { contact } from "@/data/contact";
import { cv } from "@/data/cv";

export const metadata: Metadata = { title: "Currículum" };

export default function CurriculumPage() {
  return (
    <PageShell eyebrow="CURRÍCULUM" title="Currículum" subtitle="DAVID ELICER LOZADA LÓPEZ">
      <div className="prose">
        <p>{cv.summary}</p>
      </div>

      {contact.cvUrl && (
        <a href={contact.cvUrl} download className="button">
          <DownloadIcon className="button-icon" />
          Descargar CV (PDF)
        </a>
      )}

      <section className="block">
        <h2 className="block-title">Experiencia</h2>
        <ul className="now">
          {cv.experience.map((job) => (
            <li key={job.role + job.place}>
              <h3>{job.role}</h3>
              <p>{`${job.place} // ${job.period}`}</p>
              <ul className="cv-tasks">
                {job.tasks.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <section className="block">
        <h2 className="block-title">Formación</h2>
        <ul className="now">
          {cv.education.map((ed) => (
            <li key={ed.title}>
              <h3>{ed.title}</h3>
              <p>{`${ed.place} // ${ed.period}`}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="block">
        <h2 className="block-title">Aptitudes</h2>
        <ul className="chips">
          {cv.skills.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </section>

      <section className="block">
        <h2 className="block-title">Idiomas</h2>
        <ul className="chips">
          {cv.languages.map((l) => (
            <li key={l.name}>{`${l.name} — ${l.level}`}</li>
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
