export const CARD_DIMENSIONS = {
  height: 'h-88',
  thumbnailHeight: 'h-48',
  width: 'w-64',
} as const;

export const GRID_BREAKPOINTS = {
  mobile: 'col-span-4',
  tablet: 'md:col-span-6',
  desktop: 'lg:col-span-6',
} as const;

export const PLATFORM_NAMES = {
  oj: 'Online Judge',
  cf: 'Codeforces',
} as const;

export const CHIP_SIZES = {
  small: {
    padding: 'px-2 py-0.5',
    borderRadius: 'rounded-sm',
  },
  large: {
    padding: 'px-4 py-2',
    borderRadius: 'rounded-lg',
    shadow: 'shadow-sm',
  },
} as const;

export const LOGO_STYLES = {
  base: 'size-12 p-2 rounded-full',
  hover: 'hover:rounded-full hover:bg-slate-700 hover:stroke-yellow-500',
} as const;