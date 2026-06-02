export interface RedesCooperativa {
  facebook: string;
  instagram: string;
  tiktok: string;
  sitioWeb: string;
}

export interface ProgramaCooperativa {
  nombre: string;
  publico: boolean;
}

export type EstatusPublicacion = 'publicado' | 'borrador' | 'archivado';
export type TipoFichaCooperativa = 'destacada' | 'basica';

export interface CtaCooperativa {
  texto: string;
  href: string;
}

export interface Cooperativa {
  id: string;
  slug: string;
  nombre: string;
  /** Etiqueta visible: Empresa impulsora, Aliado tecnológico, Cooperativa, etc. */
  etiqueta?: string;
  nombreComercial: string;
  giro: string;
  subcategoria: string;
  descripcionCorta: string;
  descripcionLarga: string;
  zona: string;
  horario: string;
  whatsapp: string;
  correo: string;
  redes: RedesCooperativa;
  logo: string;
  imagenPrincipal: string;
  /** Alias de imagenPrincipal (ficha destacada) */
  imagenPortada?: string;
  galeria: string[];
  productosServicios: string[];
  /** Alias de productosServicios */
  servicios?: string[];
  diferenciador?: string;
  sitiosWeb?: string[];
  programas: ProgramaCooperativa[];
  destacada: boolean;
  tipoFicha: TipoFichaCooperativa;
  ctaEtiqueta?: string;
  ctaEnlace?: string;
  cta?: CtaCooperativa;
  estatusPublicacion: EstatusPublicacion;
  /** Si es false, no aparece en el directorio público aunque esté publicada */
  visible?: boolean;
}

export type TipoEvento =
  | 'Reunión'
  | 'Evento'
  | 'Capacitación'
  | 'Feria'
  | 'Convocatoria'
  | 'Apoyo';

export type ModalidadEvento = 'Presencial' | 'En línea' | 'Híbrida';
export type EstatusEvento = 'abierto' | 'cerrado' | 'finalizado';

/** Evento de agenda (calendario, registro, estatus) */
export interface EventoAgenda {
  id: string;
  titulo: string;
  tipo: TipoEvento;
  fechaInicio: string;
  fechaFin: string;
  horaInicio: string;
  horaFin: string;
  lugar: string;
  modalidad: ModalidadEvento;
  organizador: string;
  descripcion: string;
  requisitos: string[];
  linkRegistro: string;
  fechaLimite: string;
  estatus: EstatusEvento;
  estatusPublicacion?: EstatusPublicacion;
  etiquetaEstatus?: string;
  enlaceGaleria?: string;
}

/** Alias histórico — agenda */
export type Evento = EventoAgenda;

export interface GaleriaFotoEvento {
  src: string;
  alt: string;
  reservado?: boolean;
}

export interface ActividadEventoDetalle {
  titulo: string;
  descripcion: string;
}

export interface EventoFuente {
  titulo: string;
  institucion: string;
  tipo: string;
  url: string;
}

export type EventoVerificationStatus = 'pendiente' | 'parcialmente_verificado' | 'verificado';

/** Evento con galería fotográfica */
export interface EventoGaleria {
  id: string;
  titulo: string;
  tituloCorto?: string;
  subtitulo?: string;
  etiquetaEstatus?: string;
  fecha: string;
  fechaEtiqueta?: string;
  horarioEtiqueta?: string;
  lugar: string;
  sede?: string;
  direccion?: string;
  descripcion: string;
  descripcionLarga?: string;
  introRegistro?: string;
  tagline?: string;
  heroSubtitle?: string;
  quoteDestacada?: string;
  visualTheme?: 'default' | 'eesys';
  posterImage?: string;
  posterAlt?: string;
  /** @deprecated Usar posterImage */
  posterSrc?: string;
  gallerySlots?: number;
  actividades?: string[];
  actividadesDetalle?: ActividadEventoDetalle[];
  portada: string;
  fotografias: string[];
  galeriaFotos?: GaleriaFotoEvento[];
  verificationStatus?: EventoVerificationStatus;
  fuentes?: EventoFuente[];
  estatusPublicacion?: EstatusPublicacion;
}

export type EstatusApoyo = 'abierto' | 'próximo' | 'cerrado';

export interface Apoyo {
  id: string;
  titulo: string;
  institucion: string;
  descripcion: string;
  dirigidoA: string;
  requisitos: string[];
  fechaApertura: string;
  fechaCierre: string;
  linkOficial: string;
  responsableContacto: string;
  estatus: EstatusApoyo;
}

export type TipoMemoriaEvento =
  | 'Reunión'
  | 'Evento'
  | 'Capacitación'
  | 'Feria'
  | 'Convocatoria'
  | 'Apoyo'
  | 'Entrega'
  | 'Otro';

export type PlataformaVideo = 'youtube' | 'vimeo' | 'drive' | 'otro';
export type TipoDocumentoMemoria = 'PDF' | 'enlace' | 'presentación' | 'otro';

export interface GaleriaMemoriaItem {
  src: string;
  alt: string;
  credito: string;
}

export interface VideoMemoria {
  titulo: string;
  plataforma: PlataformaVideo;
  url: string;
  descripcion: string;
}

export interface DocumentoMemoria {
  titulo: string;
  url: string;
  tipo: TipoDocumentoMemoria;
}

export interface MemoriaEvento {
  id: string;
  slug: string;
  titulo: string;
  tipo: TipoMemoriaEvento;
  fecha: string;
  lugar: string;
  organizador: string;
  descripcion: string;
  cooperativasParticipantes: string[];
  imagenPortada: string;
  galeria: GaleriaMemoriaItem[];
  videos: VideoMemoria[];
  documentos: DocumentoMemoria[];
  autorizacionImagen: boolean;
  estatusPublicacion: 'publicado' | 'borrador';
  /** Enlace al registro en /eventos/ (evita duplicar contenido en /memoria/) */
  enlaceEvento?: string;
  /** Si es true, no genera página /memoria/[slug] */
  soloEnlaceEvento?: boolean;
}
