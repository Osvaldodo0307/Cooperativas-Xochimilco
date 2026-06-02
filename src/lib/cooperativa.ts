import type { Cooperativa, ProgramaCooperativa, RedesCooperativa } from '@/types';

export const PLACEHOLDER_LOGO = '/images/logo-placeholder.png';
export const PLACEHOLDER_IMAGEN = '/images/logo-placeholder.png';

const IMG_ONERROR = "this.onerror=null;this.src='/images/logo-placeholder.png';";

export function imgOnErrorAttr(): string {
  return IMG_ONERROR;
}

export function esPublicada(cooperativa: Cooperativa): boolean {
  if (cooperativa.visible === false) return false;
  return cooperativa.estatusPublicacion === 'publicado';
}

export function esFichaDestacada(cooperativa: Cooperativa): boolean {
  return cooperativa.tipoFicha === 'destacada' || cooperativa.destacada === true;
}

export function esFichaBasica(cooperativa: Cooperativa): boolean {
  return cooperativa.tipoFicha === 'basica' && !esFichaDestacada(cooperativa);
}

export function resolverImagen(ruta?: string | null): string {
  const valor = ruta?.trim();
  return valor ? valor : PLACEHOLDER_IMAGEN;
}

export function resolverLogo(cooperativa: Cooperativa): string {
  return resolverImagen(cooperativa.logo);
}

export function resolverImagenPrincipal(cooperativa: Cooperativa): string {
  return resolverImagen(cooperativa.imagenPortada || cooperativa.imagenPrincipal);
}

export function itemsGaleria(cooperativa: Cooperativa): string[] {
  return (cooperativa.galeria ?? []).filter((ruta) => ruta?.trim());
}

export function serviciosLista(cooperativa: Cooperativa): string[] {
  const lista = cooperativa.servicios ?? cooperativa.productosServicios ?? [];
  return lista.filter((item) => item?.trim());
}

export function sitiosWebLista(cooperativa: Cooperativa): string[] {
  const urls = [...(cooperativa.sitiosWeb ?? [])];
  const sitioRed = cooperativa.redes?.sitioWeb?.trim();
  if (sitioRed && !urls.includes(sitioRed)) urls.unshift(sitioRed);
  return urls.filter((u) => u?.trim());
}

export function etiquetaPublica(cooperativa: Cooperativa): string {
  if (cooperativa.etiqueta?.trim()) return cooperativa.etiqueta.trim();
  return esFichaDestacada(cooperativa) ? 'Caso destacado' : 'Cooperativa';
}

export function diferenciadorTexto(cooperativa: Cooperativa): string {
  return cooperativa.diferenciador?.trim() ?? '';
}

export function programasPublicos(cooperativa: Cooperativa): ProgramaCooperativa[] {
  return (cooperativa.programas ?? []).filter((p) => p?.publico && p?.nombre?.trim());
}

/** @deprecated Usar serviciosLista */
export function productosServicios(cooperativa: Cooperativa): string[] {
  return serviciosLista(cooperativa);
}

export function redesConEnlace(redes?: RedesCooperativa | null): { red: string; url: string }[] {
  if (!redes) return [];
  const mapa: { red: string; url: string }[] = [];
  if (redes.facebook?.trim()) mapa.push({ red: 'Facebook', url: redes.facebook.trim() });
  if (redes.instagram?.trim()) mapa.push({ red: 'Instagram', url: redes.instagram.trim() });
  if (redes.tiktok?.trim()) mapa.push({ red: 'TikTok', url: redes.tiktok.trim() });
  if (redes.sitioWeb?.trim()) mapa.push({ red: 'Sitio web', url: redes.sitioWeb.trim() });
  return mapa;
}

export function enlaceWhatsapp(numero?: string | null): string | null {
  const limpio = numero?.replace(/\D/g, '');
  if (!limpio) return null;
  return `https://wa.me/${limpio}`;
}

export function resolverCta(cooperativa: Cooperativa): { etiqueta: string; url: string } | null {
  if (cooperativa.cta?.href?.trim()) {
    return {
      etiqueta: cooperativa.cta.texto?.trim() || 'Contactar',
      url: cooperativa.cta.href.trim(),
    };
  }
  const url = cooperativa.ctaEnlace?.trim();
  if (!url) {
    const wa = enlaceWhatsapp(cooperativa.whatsapp);
    if (wa) {
      return { etiqueta: cooperativa.ctaEtiqueta?.trim() || 'Contactar', url: wa };
    }
    const correo = cooperativa.correo?.trim();
    if (correo) {
      return {
        etiqueta: cooperativa.ctaEtiqueta?.trim() || 'Solicitar información',
        url: `mailto:${correo}`,
      };
    }
    return null;
  }
  return {
    etiqueta: cooperativa.ctaEtiqueta?.trim() || 'Solicitar información',
    url,
  };
}

export function textoSeguro(valor?: string | null, fallback = ''): string {
  return valor?.trim() || fallback;
}

export function urlAbsoluta(ruta: string, site: URL | string): string {
  if (ruta.startsWith('http://') || ruta.startsWith('https://')) return ruta;
  const base = typeof site === 'string' ? site : site.origin;
  return new URL(ruta, base).href;
}

export function etiquetaTipoFicha(cooperativa: Cooperativa): string {
  return etiquetaPublica(cooperativa);
}
