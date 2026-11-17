import type { Metadata } from "next";
import { Space_Mono, Syncopate } from "next/font/google";
import "./globals.css";

const syncopate = Syncopate({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-display",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: "David Lozada — Técnico en Sistemas Microinformáticos y Redes",
    template: "%s — David Lozada",
  },
  description:
    "Portfolio de David Lozada, técnico en Sistemas Microinformáticos y Redes: montaje de equipos, sistemas operativos y redes. Buscando prácticas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${syncopate.variable} ${spaceMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
