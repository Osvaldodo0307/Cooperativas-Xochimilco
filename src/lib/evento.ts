import type { EstatusEvento, EventoAgenda } from '@/types';

export function parseFechaEvento(fechaISO: string): Date {
  return new Date(fechaISO + 'T12:00:00');
}

export function inicioHoy(): Date {
  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);
  return hoy;
}

/** Próximo si la fecha de fin es hoy o posterior */
export function esEventoProximo(evento: EventoAgenda): boolean {
  const fin = parseFechaEvento(evento.fechaFin || evento.fechaInicio);
  return fin >= inicioHoy();
}

export function ordenarProximos(eventos: EventoAgenda[]): EventoAgenda[] {
  return [...eventos].sort(
    (a, b) =>
      parseFechaEvento(a.fechaInicio).getTime() - parseFechaEvento(b.fechaInicio).getTime()
  );
}

export function ordenarPasados(eventos: EventoAgenda[]): EventoAgenda[] {
  return [...eventos].sort(
    (a, b) =>
      parseFechaEvento(b.fechaFin || b.fechaInicio).getTime() -
      parseFechaEvento(a.fechaFin || a.fechaInicio).getTime()
  );
}

export function separarEventos(eventos: EventoAgenda[]): {
  proximos: EventoAgenda[];
  pasados: EventoAgenda[];
} {
  const proximos = ordenarProximos(eventos.filter(esEventoProximo));
  const pasados = ordenarPasados(eventos.filter((e) => !esEventoProximo(e)));
  return { proximos, pasados };
}

export function tieneLinkRegistro(evento: EventoAgenda): boolean {
  return Boolean(evento.linkRegistro?.trim());
}

export function puedeRegistrarse(evento: EventoAgenda): boolean {
  return tieneLinkRegistro(evento) && evento.estatus === 'abierto';
}

export function requisitosEvento(evento: EventoAgenda): string[] {
  return (evento.requisitos ?? []).filter((r) => r?.trim());
}

export function lugarOModalidad(evento: EventoAgenda): string {
  const modalidad = evento.modalidad?.trim();
  const lugar = evento.lugar?.trim();

  if (modalidad === 'En línea' && !lugar) return modalidad;
  if (lugar && modalidad) return `${lugar} · ${modalidad}`;
  if (lugar) return lugar;
  if (modalidad) return modalidad;
  return '';
}

export const clasesEstatusEvento: Record<EstatusEvento, string> = {
  abierto: 'border border-xochimilco-green bg-white text-xochimilco-green',
  cerrado: 'bg-slate-100 text-slate-600',
  finalizado: 'bg-alcaldia-50 text-alcaldia-700 border border-alcaldia-200',
};

export const etiquetasEstatusEvento: Record<EstatusEvento, string> = {
  abierto: 'Abierto',
  cerrado: 'Cerrado',
  finalizado: 'Finalizado',
};
