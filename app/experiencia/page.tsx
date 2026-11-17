import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { ArrowIcon } from "@/components/icons";
import { experience } from "@/data/experience";

export const metadata: Metadata = { title: "Experiencia" };

export default function ExperienciaPage() {
  return (
    <PageShell eyebrow="ARCHIVO" title="Experiencia" subtitle="SISTEMAS // REDES // HARDWARE">
      <ol className="log">
        {experience.map((e, i) => (
          <li key={e.title} className="log-entry">
            <div className="log-meta">
              <span>{String(experience.length - i).padStart(3, "0")}</span>
              <span>{e.year}</span>
              <span>{e.where.toUpperCase()}</span>
            </div>
            <div className="log-content">
              <h2 className="log-title">
                {e.url ? (
                  <a href={e.url} target="_blank" rel="noopener noreferrer">
                    {e.title}
                    <ArrowIcon className="log-arrow" />
                  </a>
                ) : (
                  e.title
                )}
              </h2>
              <p className="log-text">{e.description}</p>
              <ul className="cv-tasks">
                {e.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
              <ul className="chips chips--small">
                {e.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
      <p className="log-end">{"> FIN_DEL_REGISTRO — buscando prácticas_"}</p>
    </PageShell>
  );
}
