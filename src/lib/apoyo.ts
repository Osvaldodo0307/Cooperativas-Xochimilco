import type { Apoyo, EstatusApoyo } from '@/types';

function parseFecha(fechaISO: string): Date {
  return new Date(fechaISO + 'T12:00:00');
}

export function requisitosApoyo(apoyo: Apoyo): string[] {
  return (apoyo.requisitos ?? []).filter((r) => r?.trim());
}

export function tieneLinkOficial(apoyo: Apoyo): boolean {
  return Boolean(apoyo.linkOficial?.trim());
}

export function ordenarAbiertos(apoyos: Apoyo[]): Apoyo[] {
  return [...apoyos].sort(
    (a, b) => parseFecha(a.fechaCierre).getTime() - parseFecha(b.fechaCierre).getTime()
  );
}

export function ordenarProximos(apoyos: Apoyo[]): Apoyo[] {
  return [...apoyos].sort(
    (a, b) => parseFecha(a.fechaApertura).getTime() - parseFecha(b.fechaApertura).getTime()
  );
}

export function ordenarCerrados(apoyos: Apoyo[]): Apoyo[] {
  return [...apoyos].sort(
    (a, b) => parseFecha(b.fechaCierre).getTime() - parseFecha(a.fechaCierre).getTime()
  );
}

export function separarApoyos(apoyos: Apoyo[]): {
  abiertos: Apoyo[];
  proximos: Apoyo[];
  cerrados: Apoyo[];
} {
  return {
    abiertos: ordenarAbiertos(apoyos.filter((a) => a.estatus === 'abierto')),
    proximos: ordenarProximos(apoyos.filter((a) => a.estatus === 'próximo')),
    cerrados: ordenarCerrados(apoyos.filter((a) => a.estatus === 'cerrado')),
  };
}

export const clasesEstatusApoyo: Record<EstatusApoyo, string> = {
  abierto: 'border border-xochimilco-green bg-white text-xochimilco-green',
  'próximo': 'bg-xochimilco-yellow text-alcaldia-900 border border-xochimilco-orange',
  cerrado: 'bg-alcaldia-50 text-alcaldia-700 border border-alcaldia-200',
};

export const etiquetasEstatusApoyo: Record<EstatusApoyo, string> = {
  abierto: 'Abierto',
  'próximo': 'Próximo',
  cerrado: 'Cerrado',
};
