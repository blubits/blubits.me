export const CARD_DIMENSIONS = {
  height: "h-88",
  thumbnailHeight: "h-48",
  width: "w-full",
} as const;

export const GRID_BREAKPOINTS = {
  mobile: "col-span-4",
  tablet: "md:col-span-6",
  desktop: "lg:col-span-6",
} as const;

export const PLATFORM_NAMES = {
  oj: "Online Judge",
  cf: "Codeforces",
} as const;

export const CHIP_SIZES = {
  small: {
    padding: "px-2 py-0.5",
    borderRadius: "rounded-2xl", // Updated to match design language
  },
  large: {
    padding: "px-4 py-2",
    borderRadius: "rounded-3xl", // Updated to match design language
    border: "border border-slate-300",
  },
} as const;

export const LOGO_STYLES = {
  base: "size-12 p-2 rounded-full",
  hover: "hover:rounded-full hover:bg-slate-700 hover:stroke-yellow-500",
} as const;

// Unified button styles that match navbar curvature
export const BUTTON_STYLES = {
  // Base styles shared across all button variants
  base: [
    "inline-flex items-center justify-center gap-2",
    "font-medium",
    "transition-all duration-300 ease-out",
    "focus:outline-none focus:ring-2 focus:ring-offset-2",
    "-webkit-tap-highlight-color: transparent",
  ],

  // Border radius matching navbar design language
  radius: {
    // Primary radius - matches navbar curvature
    primary: "rounded-xl",
    // Secondary radius - slightly less curved
    secondary: "rounded-lg",
    // Compact radius - for smaller buttons
    compact: "rounded-md",
  },

  // Size variants
  size: {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  },

  // Visual variants
  variant: {
    // Primary - solid colored buttons
    primary: [
      "text-white",
      "bg-white/10",
      "border border-transparent",
      "hover:bg-white/15",
      "hover:backdrop-blur-md hover:backdrop-saturate-150",
      "hover:border-slate-300",
      "focus:border-slate-400",
      "focus:ring-blue-500",
    ],

    // Secondary - outlined buttons matching navbar glass style
    secondary: [
      "bg-white/20",
      "border border-slate-300",
      "backdrop-blur-xl backdrop-saturate-150",
      "text-black",
      "hover:backdrop-blur-md hover:backdrop-saturate-150",
      "hover:bg-white/25",
      "hover:border-slate-400",
      "focus:ring-blue-500",
    ],

    // Ghost - minimal buttons
    ghost: [
      "text-gray-700",
      "hover:bg-gray-100",
      "hover:text-gray-900",
      "border border-transparent hover:border-slate-300",
      "focus:ring-gray-500",
    ],

    // Danger - for destructive actions
    danger: [
      "bg-red-500 hover:bg-red-600",
      "text-white",
      "border border-transparent hover:border-red-300",
      "focus:ring-red-500",
    ],
  },
} as const;

// Tag styles that match the unified design language
export const TAG_STYLES = {
  // Base styles shared across all tag variants
  base: [
    "inline-flex items-center gap-x-1.5 self-start",
    "font-medium text-sm",
    "transition-all duration-300 ease-out",
    "border border-slate-200",
    "-webkit-tap-highlight-color: transparent",
  ],

  // Size variants
  size: {
    sm: "px-2.5 py-1 text-xs",
    md: "px-3 py-1.5 text-sm",
    lg: "px-4 py-2 text-base",
  },

  // Visual variants
  variant: {
    // Solid - traditional colored tags
    solid: ["text-white"],

    // Glass - matching navbar glassmorphism
    glass: [
      "bg-white/20",
      "border border-slate-300",
      "backdrop-blur-md backdrop-saturate-150",
      "text-black",
      "hover:bg-white/25",
      "hover:border-slate-400",
    ],

    // Subtle - minimal tags
    subtle: [
      "bg-gray-100",
      "text-gray-700",
      "hover:bg-gray-200",
      "hover:text-gray-900",
    ],

    // Code - for code-related tags
    code: [
      "bg-gray-800",
      "text-gray-100",
      "font-mono",
      "hover:bg-gray-700",
    ],
  },

  // Border radius matching design system
  radius: {
    primary: "rounded-3xl", // For main tags
    secondary: "rounded-2xl", // For smaller tags
    compact: "rounded-xl", // For very small tags
  },
} as const;
