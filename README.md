# Cooperativas Xochimilco

Sitio institucional con Astro, Tailwind CSS y datos en JSON.

## Estructura

```
src/
  components/     # UI reutilizable
  data/           # cooperativas.json, eventos.json, apoyos.json
  layouts/        # BaseLayout.astro
  lib/            # Acceso a datos
  pages/          # Rutas del sitio
  styles/         # global.css (Tailwind)
public/
  images/
    cooperativas/ # Fotos por cooperativa
    eventos/      # Imágenes de agenda
    logo-placeholder.png
```

## Desarrollo local

```bash
npm install
npm run dev
```

Abre `http://localhost:4321`.

Si `npm install` falla por certificados SSL en Windows:

```powershell
$env:NODE_OPTIONS="--use-system-ca"
npm install
```

## Agregar cooperativa

Edita `src/data/cooperativas.json`. Opcional: `"imagen": "/images/cooperativas/mi-foto.jpg"`.

## Build

```bash
npm run build
npm run preview
```
