import { cooperativas } from '@/data/cooperativas';
import eventosAgendaData from '@/data/eventos.json';
import memoriaEventosData from '@/data/memoria-eventos.json';
import { eventosGaleria } from '@/data/eventos';
import {
  esFichaBasica,
  esFichaDestacada,
  esPublicada,
} from '@/lib/cooperativa';
import { separarApoyos } from '@/lib/apoyo';
import { esEventoProximo, ordenarProximos, separarEventos } from '@/lib/evento';
import { esEventoGaleriaPublicado, ordenarEventosGaleria } from '@/lib/eventos-galeria';
import { esMemoriaPublicada, ordenarMemoriasPorFecha } from '@/lib/memoria';
import type { Apoyo, Cooperativa, EventoAgenda, EventoGaleria, MemoriaEvento } from '@/types';

function todasLasCooperativas(): Cooperativa[] {
  return cooperativas;
}

export function getCooperativas(): Cooperativa[] {
  return todasLasCooperativas().filter(esPublicada);
}

/** Cooperativas con ficha básica publicada (directorio futuro) */
export function getCooperativasBasicas(): Cooperativa[] {
  return getCooperativas().filter(esFichaBasica);
}

/** Cooperativas marcadas como destacadas y publicadas */
export function getCooperativasDestacadas(limite?: number): Cooperativa[] {
  const destacadas = getCooperativas().filter(esFichaDestacada);
  return limite ? destacadas.slice(0, limite) : destacadas;
}

/** Primera organización con ficha destacada publicada (SPACESIG en fase actual) */
export function getCooperativaDestacadaPrincipal(): Cooperativa | undefined {
  return getCooperativasDestacadas(1)[0];
}

export function getCooperativaBySlug(slug: string): Cooperativa | undefined {
  return getCooperativas().find((c) => c.slug === slug);
}

export function getGiros(): string[] {
  const giros = new Set(
    getCooperativasBasicas().map((c) => c.giro?.trim()).filter(Boolean) as string[]
  );
  return [...giros].sort((a, b) => a.localeCompare(b, 'es'));
}

export function getZonas(): string[] {
  const zonas = new Set(
    getCooperativasBasicas().map((c) => c.zona?.trim()).filter(Boolean) as string[]
  );
  return [...zonas].sort((a, b) => a.localeCompare(b, 'es'));
}

export function getEventos(): EventoAgenda[] {
  return (eventosAgendaData as EventoAgenda[]).filter(
    (e) => e.estatusPublicacion !== 'borrador' && e.estatusPublicacion !== 'archivado'
  );
}

export function getEventosAgenda(): { proximos: EventoAgenda[]; pasados: EventoAgenda[] } {
  return separarEventos(getEventos());
}

export function getEventosProximos(limite?: number): EventoAgenda[] {
  const proximos = ordenarProximos(getEventos().filter(esEventoProximo));
  return limite ? proximos.slice(0, limite) : proximos;
}

export function getEventosGaleria(): EventoGaleria[] {
  return ordenarEventosGaleria(eventosGaleria.filter(esEventoGaleriaPublicado));
}

export function getEventoGaleriaById(id: string): EventoGaleria | undefined {
  return getEventosGaleria().find((e) => e.id === id);
}

export function getApoyos(): Apoyo[] {
  // No publicar datos de ejemplo hasta contar con convocatorias oficiales validadas.
  return [];
}

export function getApoyosPagina(): {
  abiertos: Apoyo[];
  proximos: Apoyo[];
  cerrados: Apoyo[];
} {
  return separarApoyos(getApoyos());
}

export function getApoyosAbiertos(): Apoyo[] {
  return separarApoyos(getApoyos()).abiertos;
}

function todasLasMemorias(): MemoriaEvento[] {
  return memoriaEventosData as MemoriaEvento[];
}

export function getMemoriasEventos(): MemoriaEvento[] {
  return ordenarMemoriasPorFecha(todasLasMemorias().filter(esMemoriaPublicada));
}

export function getMemoriaEventoBySlug(slug: string): MemoriaEvento | undefined {
  return getMemoriasEventos().find((m) => m.slug === slug);
}
