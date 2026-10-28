# Horizonte Rioja

Web de la Asociación Juvenil Horizonte Rioja. Está hecha con [Astro](https://astro.build) y se publica sola en GitHub Pages.

- Web: https://www.horizonterioja.eu

## Trabajar en local

```bash
npm install      # solo la primera vez
npm run dev      # abre http://localhost:4321/
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

## Dominio

La web usa el dominio propio `www.horizonterioja.eu`, configurado en Settings → Pages → Custom domain con HTTPS
forzado. Como se publica con GitHub Actions, no hace falta fichero `CNAME`. Si algún día cambia el dominio, hay que
actualizar `SITE` en `astro.config.mjs`, la URL de `public/robots.txt` y el dominio en Settings → Pages.
