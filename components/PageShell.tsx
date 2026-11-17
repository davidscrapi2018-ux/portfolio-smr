import Link from "next/link";
import { Background } from "@/components/Background";

export function PageShell({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="shell">
      <Background dim />
      <Link href="/" className="back-link">
        {"// VOLVER"}
      </Link>
      <main className="page">
        <p className="eyebrow">{`// ${eyebrow}`}</p>
        <h1 className="page-title">{title}</h1>
        <p className="page-subtitle">{subtitle}</p>
        <div className="page-body">{children}</div>
      </main>
    </div>
  );
}
