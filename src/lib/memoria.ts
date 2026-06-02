import type {
  DocumentoMemoria,
  GaleriaMemoriaItem,
  MemoriaEvento,
  VideoMemoria,
} from '@/types';

export const PLACEHOLDER_MEMORIA = '/images/logo-placeholder.png';

const IMG_ONERROR = "this.onerror=null;this.src='/images/logo-placeholder.png';";

export function imgOnErrorMemoria(): string {
  return IMG_ONERROR;
}

export function esMemoriaPublicada(memoria: MemoriaEvento): boolean {
  return memoria.estatusPublicacion === 'publicado';
}

export function textoSeguro(valor?: string | null, fallback = ''): string {
  return valor?.trim() ? valor.trim() : fallback;
}

export function resolverPortada(ruta?: string | null): string {
  return textoSeguro(ruta) || PLACEHOLDER_MEMORIA;
}

export function itemsGaleriaMemoria(memoria: MemoriaEvento): GaleriaMemoriaItem[] {
  return (memoria.galeria ?? []).filter((item) => item?.src?.trim());
}

export function itemsVideos(memoria: MemoriaEvento): VideoMemoria[] {
  return (memoria.videos ?? []).filter((v) => v?.url?.trim());
}

export function itemsDocumentos(memoria: MemoriaEvento): DocumentoMemoria[] {
  return (memoria.documentos ?? []).filter((d) => d?.url?.trim() && d?.titulo?.trim());
}

export function cooperativasParticipantes(memoria: MemoriaEvento): string[] {
  return (memoria.cooperativasParticipantes ?? []).filter((n) => n?.trim());
}

export function creditosGaleria(memoria: MemoriaEvento): string[] {
  const creditos = itemsGaleriaMemoria(memoria)
    .map((item) => item.credito?.trim())
    .filter(Boolean) as string[];
  return [...new Set(creditos)];
}

export function ordenarMemoriasPorFecha(memorias: MemoriaEvento[]): MemoriaEvento[] {
  return [...memorias].sort((a, b) => b.fecha.localeCompare(a.fecha));
}

function extraerYoutubeId(url: string): string | null {
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes('youtu.be')) {
      return parsed.pathname.slice(1).split('/')[0] || null;
    }
    if (parsed.hostname.includes('youtube.com')) {
      const id = parsed.searchParams.get('v');
      if (id) return id;
      const embed = parsed.pathname.match(/\/embed\/([^/?]+)/);
      if (embed) return embed[1];
      const shorts = parsed.pathname.match(/\/shorts\/([^/?]+)/);
      if (shorts) return shorts[1];
    }
  } catch {
    return null;
  }
  return null;
}

function extraerVimeoId(url: string): string | null {
  try {
    const parsed = new URL(url);
    if (!parsed.hostname.includes('vimeo.com')) return null;
    const match = parsed.pathname.match(/\/(\d+)/);
    return match?.[1] ?? null;
  } catch {
    return null;
  }
  return null;
}

function extraerDriveId(url: string): string | null {
  try {
    const parsed = new URL(url);
    const fileMatch = parsed.pathname.match(/\/file\/d\/([^/]+)/);
    if (fileMatch) return fileMatch[1];
    const openMatch = parsed.searchParams.get('id');
    if (openMatch) return openMatch;
  } catch {
    return null;
  }
  return null;
}

export function urlVideoEmbebido(video: VideoMemoria): string | null {
  const url = video.url?.trim();
  if (!url) return null;

  switch (video.plataforma) {
    case 'youtube': {
      const id = extraerYoutubeId(url);
      return id ? `https://www.youtube-nocookie.com/embed/${id}` : null;
    }
    case 'vimeo': {
      const id = extraerVimeoId(url);
      return id ? `https://player.vimeo.com/video/${id}` : null;
    }
    case 'drive': {
      const id = extraerDriveId(url);
      return id ? `https://drive.google.com/file/d/${id}/preview` : null;
    }
    default:
      return null;
  }
}

export function puedeEmbeberse(video: VideoMemoria): boolean {
  return urlVideoEmbebido(video) !== null;
}
