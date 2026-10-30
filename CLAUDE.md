# Horizonte Rioja, contexto para Claude Code

Web de la Asociación Juvenil Horizonte Rioja (Logroño, La Rioja). Astro 6 estático en GitHub Pages.
Tercera web de la red, junto a EstrellasDelSur y EstrellasEuropa. No mezclar identidades: Horizonte
no es Estrellas del Sur ni la continuación de sus proyectos.

## Dominio y rutas
La web vive en https://www.horizonterioja.eu (raíz del dominio). En `.astro` usar siempre
`${base}/ruta/` con `base = import.meta.env.BASE_URL.replace(/\/$/, '')`. En Markdown los enlaces
internos van desde la raíz (`/proyectos/...`).

## Datos
- Datos legales, junta y menú en `src/lib/site.js`. Fuentes: resolución de inscripción del
  15/12/2025 (n.º 1.008, Sección 3.ª), tarjeta NIF G26574194 y acta fundacional del 09/12/2025.
- Nunca publicar DNI, teléfonos ni domicilios particulares. El domicilio social es una vivienda,
  por eso la web solo dice "Logroño (La Rioja)".
- Rural Identities (KA210-YOU, ronda 1 de 2026, 60.000 EUR, 31/12/2026-30/12/2027), socias
  Anellodebole (IT) y Hawk Stars NGO (PT). Código de proyecto 2026-1-ES02-KA210-YOU-000458045 (convenio de subvención).
- Todo lo financiado por Erasmus+ lleva el aviso `EUDisclaimer` con el emblema oficial (`public/images/eu-cofinanciado.png`, el mismo que usa Estrellas del Sur); el pie lo muestra en todas las páginas.

## Logo
Opción "A · Amanecer entre viñas" (zip Logo en Drive): sol de arcos de colores sobre el horizonte con
surcos, y "horizonte / RIOJA" en Bricolage Grotesque 800/600. Vector en `src/components/Logo.astro`
(colores exactos #5B1A33, #B83A44, #E07A3B, #E9B342, #6E9A4D, #3C6A93, #2A1A22). No sustituirlo.

## Estilo de los textos
Sin guiones largos, sin emojis decorativos y sin abusar de los dos puntos. Español cercano.

## Deploy
Push a `main` → GitHub Actions → Pages (~2 min). Comprobar con `gh run list`.
