/**
 * Catálogo de eventos del portal (fase simplificada).
 * Evento publicado: 2.º Encuentro de Economía Social y Solidaria (2do EESYS).
 *
 * Notas editoriales (no mostrar en UI):
 * - No publicar como convocatoria vigente.
 * - Conservar "2do EESYS" como nombre corto provisional.
 * - No afirmar organizadores específicos sin fuente oficial directa.
 * - No afirmar duración de dos días sin fuente oficial.
 */
export type EventStatus = 'realizado' | 'programado';
export type EventVerificationStatus = 'pendiente' | 'parcialmente_verificado' | 'verificado';

export interface EventGalleryImage {
  src: string;
  alt: string;
  reservado?: boolean;
}

export interface EventSource {
  title: string;
  institution: string;
  type: string;
  url: string;
}

export interface ActivityDetail {
  title: string;
  description: string;
}

export type EventVisualTheme = 'default' | 'eesys';

export interface PortalEvent {
  id: string;
  title: string;
  shortTitle: string;
  status: EventStatus;
  dateLabel: string;
  timeLabel: string;
  dateISO: string;
  venue: string;
  address: string;
  descriptionShort: string;
  descriptionLong: string;
  introRegistro?: string;
  tagline?: string;
  heroSubtitle?: string;
  quoteDestacada?: string;
  visualTheme?: EventVisualTheme;
  posterImage?: string;
  posterAlt?: string;
  /** @deprecated Usar posterImage */
  posterSrc?: string;
  gallerySlots?: number;
  activities: string[];
  activitiesDetail: ActivityDetail[];
  gallery: EventGalleryImage[];
  verificationStatus: EventVerificationStatus;
  sources: EventSource[];
  estatusPublicacion: 'publicado' | 'borrador' | 'archivado';
}

export const events: PortalEvent[] = [
  {
    id: '2do-encuentro-economia-social-solidaria-2026',
    title: '2.º Encuentro de Economía Social y Solidaria',
    shortTitle: '2do EESYS',
    status: 'realizado',
    dateLabel: 'Lunes 18 de mayo de 2026',
    timeLabel: '10:00 a 17:00 h',
    dateISO: '2026-05-18',
    venue: 'Centro Cultural Teatro Carlos Pellicer',
    address: 'Av. México 5682, Col. La Noria, Xochimilco, CDMX',
    descriptionShort:
      'Espacio de reunión, exposición y diálogo entre cooperativas, productores locales, artesanos e instituciones vinculadas con la economía social y solidaria.',
    descriptionLong:
      'El encuentro se desarrolló como una plataforma para reconocer y articular iniciativas productivas vinculadas con la economía social y solidaria en Xochimilco. Más que una actividad aislada, funcionó como un punto de contacto entre proyectos locales, ciudadanía e instituciones interesadas en fortalecer alternativas económicas con impacto comunitario.\n\nLa economía social y solidaria parte de una lógica distinta a la empresa convencional: prioriza la cooperación, la participación colectiva, la distribución justa de beneficios y el fortalecimiento del territorio. Bajo ese enfoque, el evento permitió abrir espacios de conversación, capacitación y comercialización para proyectos que buscan consolidarse dentro de la demarcación.\n\nEl registro de este encuentro permite conservar evidencia de las actividades realizadas y construir una base pública para futuras convocatorias, apoyos, encuentros y procesos de acompañamiento a cooperativas.',
    introRegistro:
      'El 2.º Encuentro de Economía Social y Solidaria fue un espacio de reunión, exposición y diálogo entre actores productivos de Xochimilco. Su propósito fue visibilizar el trabajo de cooperativas, productores locales, artesanos y proyectos comunitarios que forman parte de la economía social en la demarcación.\n\nA través de actividades de intercambio, venta directa, talleres y foros, el encuentro permitió fortalecer redes de colaboración, acercar información útil para las unidades económicas locales y promover modelos de organización basados en el trabajo colectivo, el arraigo territorial y el consumo local.\n\nEsta sección documenta el evento como parte de la memoria institucional del portal Cooperativas Xochimilco. La información será complementada con fotografías, materiales y registros oficiales conforme se integren nuevas evidencias.',
    tagline: 'Construyendo redes para el desarrollo local en Xochimilco',
    heroSubtitle:
      'Memoria institucional de un espacio de reunión, exposición y diálogo entre actores productivos de la demarcación.',
    quoteDestacada:
      'La economía social y solidaria prioriza la cooperación, la participación colectiva y el fortalecimiento del territorio.',
    visualTheme: 'eesys',
    posterImage: '/images/eventos/2do-eesys/cartel-2do-eesys.jpg',
    posterAlt: 'Cartel del 2.º Encuentro de Economía Social y Solidaria en Xochimilco',
    gallerySlots: 5,
    activities: [
      'Talleres orientados al fortalecimiento de capacidades productivas y organizativas.',
      'Foros de diálogo sobre economía social, cooperación y organización comunitaria.',
      'Exposiciones de iniciativas, productos y proyectos locales.',
      'Venta solidaria para visibilizar el trabajo de productores y artesanos.',
      'Vinculación territorial entre cooperativas, ciudadanía, productores e instituciones.',
    ],
    activitiesDetail: [
      {
        title: 'Talleres',
        description:
          'Actividades orientadas al fortalecimiento de capacidades productivas y organizativas.',
      },
      {
        title: 'Foros',
        description:
          'Espacios de diálogo sobre economía social, cooperación y organización comunitaria.',
      },
      {
        title: 'Exposiciones',
        description: 'Presentación de iniciativas, productos y proyectos locales.',
      },
      {
        title: 'Venta solidaria',
        description:
          'Comercialización directa para visibilizar el trabajo de productores y artesanos.',
      },
      {
        title: 'Vinculación territorial',
        description:
          'Encuentro entre cooperativas, ciudadanía, productores e instituciones.',
      },
    ],
    gallery: [
      {
        src: '/eventos/feria-cooperativas-2026/foto-01.jpg',
        alt: 'Fotografía 1 del 2.º Encuentro de Economía Social y Solidaria',
      },
      {
        src: '/eventos/feria-cooperativas-2026/foto-02.jpg',
        alt: 'Fotografía 2 del 2.º Encuentro de Economía Social y Solidaria',
      },
      {
        src: '/eventos/feria-cooperativas-2026/foto-03.jpg',
        alt: 'Fotografía 3 del 2.º Encuentro de Economía Social y Solidaria',
      },
      {
        src: '/eventos/feria-cooperativas-2026/foto-04.png',
        alt: 'Fotografía 4 del 2.º Encuentro de Economía Social y Solidaria',
      },
      {
        src: '/eventos/feria-cooperativas-2026/foto-05.jpg',
        alt: 'Fotografía 5 del 2.º Encuentro de Economía Social y Solidaria',
        reservado: true,
      },
    ],
    verificationStatus: 'parcialmente_verificado',
    sources: [
      {
        title: 'Xochimilco reunirá a productores y artesanos',
        institution: 'Radio Red Noticias',
        type: 'nota',
        url: 'https://redam.mx/noticias/noticentro/xochimilco-reunira-a-productores-y-artesanos/',
      },
      {
        title: 'Invitación CECATI 127 al 2do Encuentro de Economía Social y Solidaria',
        institution: 'CECATI 127',
        type: 'red social',
        url: 'https://www.facebook.com/cecati.cientoveintisiete/posts/cecati-127-te-invita-al-2do-encuentro-de-econom%C3%ADa-social-y-solidarialunes-18-de-/4415416142065108/',
      },
    ],
    estatusPublicacion: 'publicado',
  },
];

export const EVENTO_PRINCIPAL_ID = '2do-encuentro-economia-social-solidaria-2026';
