export const COLORS = {
  // Primary colors
  winterBlue: '#2C5F7C',
  lightBlue: '#4A90E2',
  purple: '#9B59B6',
  deepBlue: '#1E3A4F',

  // Text colors
  textPrimary: '#2C5F7C',
  textSecondary: '#5A7C8F',
  textTertiary: '#7A99AC',
  white: '#fff',

  // Background colors
  bgLight: '#E8F4F8',
  bgWhite: '#FFFFFF',
  bgLightBlue: '#F0F8FF',

  // Accent colors (for family members)
  accentBlue: '#4A90E2',
  accentPurple: '#9B59B6',
  accentPink: '#E91E63',
  accentTeal: '#20B2AA',
  accentBrown: '#8D6E63',
} as const;

export const GRADIENTS = {
  background: 'linear-gradient(180deg, #E8F4F8 0%, #FFFFFF 50%, #F0F8FF 100%)',
  hero: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  quote: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  footer: 'linear-gradient(135deg, #2C5F7C 0%, #1E3A4F 100%)',
  nameTag: 'linear-gradient(135deg, rgba(74, 144, 226, 0.1) 0%, rgba(155, 89, 182, 0.1) 100%)',
  nameTagText: 'linear-gradient(135deg, #4A90E2 0%, #9B59B6 100%)',
  highlightsBox:
    'linear-gradient(135deg, rgba(74, 144, 226, 0.05) 0%, rgba(155, 89, 182, 0.05) 100%)',
} as const;

export const FONTS = {
  family:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',

  // Font sizes
  size: {
    xs: '14px',
    sm: '16px',
    base: '18px',
    lg: '22px',
    xl: '24px',
    '2xl': '28px',
    '3xl': '32px',
    '4xl': '36px',
    '5xl': '42px',
    '6xl': '64px',
  },

  // Font weights
  weight: {
    light: '300',
    regular: '400',
    semibold: '600',
  },
} as const;

export const SPACING = {
  xs: '5px',
  sm: '10px',
  md: '20px',
  lg: '40px',
  xl: '60px',
  '2xl': '80px',
} as const;

export const RADIUS = {
  sm: '16px',
  md: '20px',
  lg: '30px',
  xl: '50px',
  full: '50%',
} as const;

export const SHADOWS = {
  card: '0 15px 35px',
  hero: '0 20px 60px rgba(102, 126, 234, 0.3)',
  quote: '0 15px 40px rgba(102, 126, 234, 0.2)',
  button: '0 4px 12px',
} as const;

export const ANIMATIONS = {
  transition: 'all 0.3s ease',
  transitionTransform: 'transform 0.3s ease',
} as const;

// Helper function to create member-specific gradient
export const getMemberGradient = (color: string) =>
  `linear-gradient(135deg, ${color} 0%, ${color}dd 100%)`;

// Helper function to create shadow with color
export const getShadowWithColor = (shadowBase: string, color: string, opacity = '40') =>
  `${shadowBase} ${color}${opacity}`;
