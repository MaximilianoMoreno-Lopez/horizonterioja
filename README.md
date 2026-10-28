# Horizonte Rioja

Web de la Asociación Juvenil Horizonte Rioja. Está hecha con [Astro](https://astro.build) y se publica sola en GitHub Pages.

- Web: https://maximilianomoreno-lopez.github.io/horizonterioja/

## Trabajar en local

```bash
npm install      # solo la primera vez
npm run dev      # abre http://localhost:4321/horizonterioja/
npm run build    # genera la web en dist/
```

## Publicar

Cada push a `main` construye y publica la web con GitHub Actions (`.github/workflows/deploy.yml`) en unos 2 minutos.

La primera vez hay que activar Pages en GitHub, en **Settings → Pages → Build and deployment → Source: GitHub Actions**.

## Dónde está cada cosa

| Qué | Dónde |
| --- | --- |
| Datos de la asociación, junta y menú | `src/lib/site.js` |
| Páginas | `src/pages/` |
| Noticias (un `.md` por noticia) | `src/content/noticias/` |
| Colores y tipografía | `src/styles/global.css` |
| Imágenes | `public/images/` |

## Añadir una noticia

Crear `src/content/noticias/mi-noticia.md` con este encabezado.

```markdown
---
title: "Título"
date: "2027-03-15"
description: "Una o dos frases para la tarjeta y para Google."
---

Texto en Markdown.
```

## Dominio propio

Cuando haya dominio (por ejemplo `horizonterioja.org`):

1. En `astro.config.mjs`, poner `SITE` al dominio y `BASE` a `'/'`.
2. Crear `public/CNAME` con el dominio dentro.
3. En el proveedor del dominio, apuntar los DNS a GitHub Pages.
4. En Settings → Pages, escribir el dominio en **Custom domain** y activar **Enforce HTTPS**.
5. Cambiar la URL de `public/robots.txt` y los enlaces internos escritos a mano en las noticias (`/horizonterioja/...`).
