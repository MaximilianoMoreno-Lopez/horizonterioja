# Horizonte Rioja, contexto para Claude Code

Web de la Asociación Juvenil Horizonte Rioja (Logroño, La Rioja). Astro 6 estático en GitHub Pages.
Tercera web de la red, junto a EstrellasDelSur y EstrellasEuropa. No mezclar identidades: Horizonte
no es Estrellas del Sur ni la continuación de sus proyectos.

## Base path
Sin dominio propio, la web vive en `/horizonterioja/`. En `.astro` usar siempre
`${base}/ruta/` con `base = import.meta.env.BASE_URL.replace(/\/$/, '')`. En Markdown los enlaces
internos llevan el prefijo a mano (`/horizonterioja/...`), así que hay que cambiarlos si llega el dominio.

## Datos
- Datos legales, junta y menú en `src/lib/site.js`. Fuentes: resolución de inscripción del
  15/12/2025 (n.º 1.008, Sección 3.ª), tarjeta NIF G26574194 y acta fundacional del 09/12/2025.
- Nunca publicar DNI, teléfonos ni domicilios particulares. El domicilio social es una vivienda,
  por eso la web solo dice "Logroño (La Rioja)".
- Rural Identities (KA210-YOU, ronda 1 de 2026, 60.000 EUR, 31/12/2026-30/12/2027), socias
  Anellodebole (IT) y Hawk Stars NGO (PT). El número de proyecto definitivo aún no está en la web.
- Todo lo financiado por Erasmus+ lleva el aviso `EUDisclaimer`. Falta el emblema oficial de la UE.

## Estilo de los textos
Sin guiones largos, sin emojis decorativos y sin abusar de los dos puntos. Español cercano.

## Deploy
Push a `main` → GitHub Actions → Pages (~2 min). Comprobar con `gh run list`.
