# Portfolio

Personal portfolio site. Next.js (App Router) + TypeScript + Tailwind CSS. Fully static — no backend, database, or CMS.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editar contenido

Todo el contenido vive en `data/`:

- `data/experience.ts` — experiencia (la más reciente primero): `title`, `year`, `where`, `description`, `details`, `tags`, `url?`.
- `data/about.ts` — rol, bio, stack y "Ahora mismo".
- `data/contact.ts` — email, redes y `cvUrl`.

### Añadir el CV

Copia el PDF a `public/` (p. ej. `public/cv-david-lozada.pdf`) y pon
`cvUrl: "/cv-david-lozada.pdf"` en `data/contact.ts`. Mientras esté vacío,
`/curriculum` muestra "Próximamente".

### Cambiar el fondo

Sustituye `public/lain.jpg` (se muestra en escala de grises con grano y scanlines).
