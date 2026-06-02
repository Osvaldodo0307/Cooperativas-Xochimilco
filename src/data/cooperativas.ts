/**
 * Catálogo de organizaciones del portal (cooperativas + casos destacados).
 *
 * Carga y publicación: solo equipo administrador (sin formularios públicos).
 * Panel admin futuro; por ahora editar JSON y assets en repo.
 *
 * Ficha destacada actual: SPACESIG (Empresa impulsora / aliado tecnológico).
 * Assets: public/cooperativas/spacesig/
 *
 * Nueva cooperativa (ficha básica):
 * 1. Agregar entrada en cooperativas.json
 * 2. tipoFicha: "basica", etiqueta: "Cooperativa", estatusPublicacion: "publicado"
 * 3. Imágenes en public/images/cooperativas/ o public/cooperativas/{slug}/
 */
import cooperativasJson from './cooperativas.json';
import type { Cooperativa } from '@/types';

export const cooperativas: Cooperativa[] = cooperativasJson as Cooperativa[];

/** Caso destacado publicado (SPACESIG en fase actual) */
export const ORGANIZACION_DESTACADA_ID = 'spacesig';

export default cooperativas;
