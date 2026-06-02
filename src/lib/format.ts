import type { EventoAgenda } from '@/types';

const locale = 'es-MX';

export function formatFecha(fechaISO: string): string {
  if (!fechaISO?.trim()) return '';
  const fecha = new Date(fechaISO + 'T12:00:00');
  return fecha.toLocaleDateString(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function formatHora(hora: string): string {
  if (!hora?.trim()) return '';
  const [h, m] = hora.split(':');
  const date = new Date();
  date.setHours(Number(h), Number(m));
  return date.toLocaleTimeString(locale, {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
}

export function formatRangoFechas(fechaInicio: string, fechaFin: string): string {
  if (!fechaInicio?.trim()) return '';
  const inicio = formatFecha(fechaInicio);
  if (!fechaFin?.trim() || fechaFin === fechaInicio) return inicio;
  return `${inicio} – ${formatFecha(fechaFin)}`;
}

export function formatRangoHoras(horaInicio: string, horaFin: string): string {
  const inicio = formatHora(horaInicio);
  if (!inicio) return '';
  const fin = formatHora(horaFin);
  if (!fin || fin === inicio) return inicio;
  return `${inicio} – ${fin}`;
}

export function formatFechaEvento(evento: EventoAgenda): string {
  return formatRangoFechas(evento.fechaInicio, evento.fechaFin);
}

export function formatHoraEvento(evento: EventoAgenda): string {
  return formatRangoHoras(evento.horaInicio, evento.horaFin);
}

export function formatFechaSimple(fechaISO: string): string {
  return formatFecha(fechaISO);
}

