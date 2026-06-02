import { MAX_FOTOS_EVENTO } from '@/data/eventos';
import type { EventoGaleria, GaleriaFotoEvento } from '@/types';

export const PLACEHOLDER_EVENTO = '/images/logo-placeholder.png';

const IMG_ONERROR = "this.onerror=null;this.src='/images/logo-placeholder.png';";

export function imgOnErrorEvento(): string {
  return IMG_ONERROR;
}

export function textoSeguroEvento(valor?: string | null, fallback = ''): string {
  return valor?.trim() || fallback;
}

export function esEventoGaleriaPublicado(evento: EventoGaleria): boolean {
  return evento.estatusPublicacion !== 'borrador' && evento.estatusPublicacion !== 'archivado';
}

export function resolverPortadaEvento(evento: EventoGaleria): string {
  return evento.portada?.trim() || PLACEHOLDER_EVENTO;
}

export function fotografiasEvento(evento: EventoGaleria): string[] {
  return (evento.fotografias ?? []).filter((r) => r?.trim()).slice(0, MAX_FOTOS_EVENTO);
}

export function galeriaFotosEvento(evento: EventoGaleria): GaleriaFotoEvento[] {
  if (evento.galeriaFotos?.length) {
    return evento.galeriaFotos.filter((f) => f?.src?.trim() || f?.reservado);
  }
  return fotografiasEvento(evento).map((src, index) => ({
    src,
    alt: `${evento.titulo} — fotografía ${index + 1}`,
  }));
}

export function espaciosMemoriaEvento(evento: EventoGaleria): number {
  if (evento.gallerySlots && evento.gallerySlots > 0) {
    return evento.gallerySlots;
  }
  return galeriaFotosEvento(evento).length;
}

export function ordenarEventosGaleria(eventos: EventoGaleria[]): EventoGaleria[] {
  return [...eventos].sort((a, b) => b.fecha.localeCompare(a.fecha));
}
