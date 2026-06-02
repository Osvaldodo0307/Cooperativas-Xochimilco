export interface SpacesigDemo {
  id: string;
  title: string;
  category: string;
  url: string;
  previewImage: string;
  previewAlt: string;
  allowIframe: boolean;
  description: string;
}

export const SPACESIG_DEMOS_BASE = '/images/spacesig/demos';
export const SPACESIG_DEMO_PLACEHOLDER = `${SPACESIG_DEMOS_BASE}/preview-placeholder.svg`;

export const SPACESIG_DEMOS_INTRO =
  'Explora algunos proyectos digitales desarrollados por SPACESIG, orientados a geoportales, aplicaciones web, visualización de datos y plataformas administrativas.';

export const spacesigDemos: SpacesigDemo[] = [
  {
    id: 'geoxochi',
    title: 'GeoXochi',
    category: 'Geoportal territorial',
    url: 'https://geoxochi.netlify.app/',
    previewImage: `${SPACESIG_DEMOS_BASE}/geoxochi-preview.jpg`,
    previewAlt: 'Vista previa del geoportal GeoXochi desarrollado por SPACESIG',
    allowIframe: true,
    description:
      'Geoportal orientado a la visualización de información territorial, capas geoespaciales, indicadores y herramientas de consulta para análisis urbano y gestión territorial.',
  },
  {
    id: 'oc-club',
    title: 'OC Club',
    category: 'Aplicación web administrativa',
    url: 'https://oc-club.netlify.app/',
    previewImage: `${SPACESIG_DEMOS_BASE}/oc-club-preview.jpg`,
    previewAlt: 'Vista previa de la aplicación administrativa OC Club desarrollada por SPACESIG',
    allowIframe: true,
    description:
      'Plataforma web para gestión de gimnasio, usuarios, membresías, clases, reservas y administración operativa mediante una interfaz moderna y responsiva.',
  },
  {
    id: 'spacesig',
    title: 'SPACESIG',
    category: 'Sitio institucional y servicios digitales',
    url: 'https://spacesig.com/',
    previewImage: `${SPACESIG_DEMOS_BASE}/spacesig-preview.jpg`,
    previewAlt: 'Vista previa del sitio institucional SPACESIG',
    allowIframe: true,
    description:
      'Portal institucional de SPACESIG para presentar servicios de desarrollo web, geoportales, dashboards, geomarketing, automatización e inteligencia territorial.',
  },
];
