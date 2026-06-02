/**
 * Paleta institucional — única fuente de verdad.
 * Importada por tailwind.config.mjs
 */
export const alcaldia = {
  50: '#F8F1F5',
  100: '#EBD7E1',
  200: '#D5AFC2',
  300: '#B87C9C',
  400: '#7A2A51',
  500: '#380C24',
  600: '#2F0A1F',
  700: '#27081A',
  800: '#1F0615',
  900: '#16040F',
};

export const xochimilco = {
  red: '#E41113',
  green: '#077443',
  'green-light': '#5DB133',
  yellow: '#EDE41B',
  orange: '#F59B0E',
  burgundy: '#380C24',
};

/** Paleta del 2do EESYS — identidad visual del encuentro */
export const eesys = {
  green: '#0D8A63',
  'green-dark': '#086C4E',
  yellow: '#F1E400',
  orange: '#F5A623',
  cream: '#FFF8EA',
  white: '#FFFFFF',
  ink: '#1F2937',
  border: '#D8E7DE',
  muted: '#5C6B66',
};

/** Clases usadas en @apply (global.css) y en lib/*.ts — deben existir en el build */
export const clasesSafelist = [
  /* alcaldia */
  'text-alcaldia-50',
  'text-alcaldia-100',
  'text-alcaldia-200',
  'text-alcaldia-500',
  'text-alcaldia-600',
  'text-alcaldia-700',
  'text-alcaldia-800',
  'text-alcaldia-900',
  'bg-alcaldia-50',
  'bg-alcaldia-100',
  'bg-alcaldia-500',
  'bg-alcaldia-600',
  'bg-alcaldia-700',
  'bg-alcaldia-800',
  'bg-alcaldia-900',
  'border-alcaldia-100',
  'border-alcaldia-200',
  'border-alcaldia-400',
  'border-alcaldia-500',
  'border-alcaldia-700',
  'border-alcaldia-800',
  'outline-alcaldia-500',
  'ring-alcaldia-500',
  'hover:bg-alcaldia-600',
  'hover:bg-alcaldia-800',
  'hover:border-alcaldia-800',
  'hover:text-alcaldia-700',
  'hover:text-alcaldia-800',
  'focus:border-alcaldia-500',
  'focus:ring-alcaldia-500/20',
  'focus-visible:outline-alcaldia-500',
  /* xochimilco */
  'text-xochimilco-red',
  'text-xochimilco-green',
  'bg-xochimilco-red',
  'bg-xochimilco-green',
  'bg-xochimilco-green-light',
  'bg-xochimilco-yellow',
  'border-xochimilco-green',
  'border-xochimilco-orange',
  'border-xochimilco-red',
  'outline-xochimilco-green',
  'hover:bg-xochimilco-green',
  'hover:brightness-90',
  'shadow-sm',
  'h-[300px]',
  'h-[340px]',
  'h-[360px]',
  'object-contain',
  'line-clamp-2',
  'line-clamp-3',
];