import React from 'react';

interface BrandMarkProps {
  className?: string;
  variant?: 'light-bg' | 'dark-bg' | 'mono';
  color?: string; // used for mono variant, defaults to currentColor
}

export const BrandMark: React.FC<BrandMarkProps> = ({ 
  className = '', 
  variant = 'light-bg',
  color = 'currentColor'
}) => {
  const uid = React.useId();
  const holoId = `holo-${uid}`;

  // Determine colors based on variant
  let outlineColor = '#45495d'; // dark outline for light bg
  if (variant === 'dark-bg') outlineColor = '#f3f2f9'; // light outline for dark bg
  if (variant === 'mono') outlineColor = color; // solid color for mono

  const isMono = variant === 'mono';
  
  // For mono, both fill and stroke of the gradient parts become the solid color
  const fillStyle = isMono ? color : `url(#${holoId})`;

  // We draw the shapes. 
  // For open strokes (worm, arc), we draw a thick background path for the outline, 
  // and a slightly thinner foreground path for the fill.
  // For closed shapes (dot, rings), we can just use SVG fill and stroke directly.
  
  const strokeWidthOutline = 4.5;
  const strokeWidthFill = 2.5;

  return (
    <svg 
      viewBox="0 0 100 100" 
      className={`overflow-visible ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {!isMono && (
          <linearGradient id={holoId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--flamingo, #ffb3c2)" />
            <stop offset="33%" stopColor="var(--azure, #99b9ff)" />
            <stop offset="66%" stopColor="var(--springgreen, #78ffd1)" />
            <stop offset="100%" stopColor="var(--lime, #f0ffa6)" />
          </linearGradient>
        )}
      </defs>

      {/* 1. Dot (top middle) */}
      <circle 
        cx="45" cy="22" r="3.5" 
        fill={fillStyle} 
        stroke={outlineColor} 
        strokeWidth="1.5" 
      />

      {/* 2. Worm (middle left) */}
      {/* Background outline */}
      <path 
        d="M 12 42 Q 20 32 28 42 T 42 42 Q 46 52 52 48" 
        fill="none" 
        stroke={outlineColor} 
        strokeWidth={strokeWidthOutline} 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      {/* Foreground fill */}
      <path 
        d="M 12 42 Q 20 32 28 42 T 42 42 Q 46 52 52 48" 
        fill="none" 
        stroke={fillStyle} 
        strokeWidth={strokeWidthFill} 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />

      {/* 3. Top-right Pinch Ring */}
      <path 
        d="M 60 25 C 60 15, 75 15, 80 25 C 85 35, 70 45, 60 38 C 55 35, 60 30, 60 25 Z M 63 26 C 62 29, 64 34, 68 35 C 72 36, 75 30, 72 25 C 69 20, 64 23, 63 26 Z" 
        fill={fillStyle} 
        stroke={outlineColor} 
        strokeWidth="1.5" 
        fillRule="evenodd"
      />

      {/* 4. Bottom-left Bean Ring */}
      <path 
        d="M 22 65 C 32 60, 42 65, 38 75 C 35 85, 20 85, 22 75 C 24 65, 22 65, 22 65 Z M 28 68 C 26 72, 28 78, 32 75 C 35 72, 33 65, 28 68 Z" 
        fill={fillStyle} 
        stroke={outlineColor} 
        strokeWidth="1.5" 
        fillRule="evenodd"
      />

      {/* 5. Bottom-right Thick Arc */}
      {/* Background outline */}
      <path 
        d="M 48 72 A 16 16 0 1 0 78 72" 
        fill="none" 
        stroke={outlineColor} 
        strokeWidth={strokeWidthOutline} 
        strokeLinecap="round" 
      />
      {/* Foreground fill */}
      <path 
        d="M 48 72 A 16 16 0 1 0 78 72" 
        fill="none" 
        stroke={fillStyle} 
        strokeWidth={strokeWidthFill} 
        strokeLinecap="round" 
      />

    </svg>
  );
};
