# Carga de fotografías — fase futura (Supabase)

Estado actual: las fotos de eventos se agregan en carpetas estáticas bajo `public/eventos/`.

## Estructura actual (estática)

```
public/eventos/
  {id-del-evento}/
    portada.jpg
    foto-01.jpg
    …
    foto-10.jpg   (máximo 10)
```

Registro de datos: `src/data/eventos.ts` → array `eventosGaleria`.

## Diseño propuesto con Supabase

| Recurso | Detalle |
|---------|---------|
| **Storage** | Bucket `event-photos` |
| **Tabla `eventos`** | id, titulo, fecha, lugar, descripcion, portada_url, estatus |
| **Tabla `evento_fotografias`** | id, evento_id, url, orden, alt, credito |
| **Roles** | `admin`, `editor` (RLS) |
| **Límites** | Máx. 10 fotografías por evento |
| **Validación** | MIME (`image/jpeg`, `image/webp`, `image/png`), peso máx. ej. 2 MB |

## Flujo futuro

1. Admin sube imágenes desde panel (no implementado).
2. API guarda en Storage y registra filas en `evento_fotografias`.
3. El front consulta URLs públicas o firmadas.
4. Misma UI: `GaleriaEventoFotografico.astro` consumiendo datos remotos.

## Cooperativas

El directorio de cooperativas sigue en `src/data/cooperativas.json` + `src/data/cooperativas.ts`.

- `tipoFicha: "destacada"` — ficha ampliada (una publicada por ahora).
- `tipoFicha: "basica"` — fichas compactas cuando haya datos completos.
