/**
 * Eventos con galería — derivados de src/data/events.ts
 * Cartel: public/images/eventos/2do-eesys/cartel-2do-eesys.jpg
 * Fotos: public/eventos/feria-cooperativas-2026/foto-01 … foto-05
 */
import { events, type PortalEvent } from '@/data/events';
import type { EventoGaleria, EventoFuente, GaleriaFotoEvento, ActividadEventoDetalle } from '@/types';

const MAX_FOTOS = 10;

/** @deprecated Usar events[].gallery */
export function rutasFotografiasEvento(carpeta: string, cantidad: number): string[] {
  const total = Math.min(Math.max(cantidad, 0), MAX_FOTOS);
  return Array.from({ length: total }, (_, i) => {
    const num = String(i + 1).padStart(2, '0');
    return `/eventos/${carpeta}/foto-${num}.jpg`;
  });
}

function mapPortalEventToGaleria(evento: PortalEvent): EventoGaleria {
  const galeriaFotos: GaleriaFotoEvento[] = evento.gallery.map((item) => ({
    src: item.src,
    alt: item.alt,
    reservado: item.reservado,
  }));

  const posterImage =
    evento.posterImage?.trim() || evento.posterSrc?.trim() || '';

  const fuentes: EventoFuente[] = evento.sources.map((s) => ({
    titulo: s.title,
    institucion: s.institution,
    tipo: s.type,
    url: s.url,
  }));

  const actividadesDetalle: ActividadEventoDetalle[] = (evento.activitiesDetail ?? []).map(
    (a) => ({
      titulo: a.title,
      descripcion: a.description,
    })
  );

  return {
    id: evento.id,
    titulo: evento.title,
    tituloCorto: evento.shortTitle,
    etiquetaEstatus: evento.status === 'realizado' ? 'Evento realizado' : 'Próximamente',
    fecha: evento.dateISO,
    fechaEtiqueta: evento.dateLabel,
    horarioEtiqueta: evento.timeLabel,
    lugar: evento.venue,
    sede: evento.venue,
    direccion: evento.address,
    descripcion: evento.descriptionShort,
    descripcionLarga: evento.descriptionLong,
    introRegistro: evento.introRegistro,
    tagline: evento.tagline,
    heroSubtitle: evento.heroSubtitle,
    quoteDestacada: evento.quoteDestacada,
    visualTheme: evento.visualTheme,
    posterImage,
    posterAlt: evento.posterAlt,
    posterSrc: posterImage,
    gallerySlots: evento.gallerySlots,
    actividades: evento.activities,
    actividadesDetalle,
    portada: posterImage || galeriaFotos[0]?.src || '',
    fotografias: galeriaFotos.map((f) => f.src),
    galeriaFotos,
    verificationStatus: evento.verificationStatus,
    fuentes,
    estatusPublicacion: evento.estatusPublicacion,
  };
}

export const eventosGaleria: EventoGaleria[] = events
  .filter((e) => e.estatusPublicacion === 'publicado')
  .map(mapPortalEventToGaleria);

export { MAX_FOTOS as MAX_FOTOS_EVENTO, events as eventosPortal };
