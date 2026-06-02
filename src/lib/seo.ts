const SITE_NAME = 'Cooperativas Xochimilco';

export function buildPageTitle(pageTitle: string): string {
  if (pageTitle === SITE_NAME || pageTitle === 'Inicio') {
    return `${SITE_NAME} — Portal institucional`;
  }
  return `${pageTitle} | ${SITE_NAME}`;
}

export function pageCanonical(pathname: string, site?: URL | string): string | undefined {
  if (!site) return undefined;
  const base = typeof site === 'string' ? site : site.origin;
  const path = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return new URL(path, base).href;
}
