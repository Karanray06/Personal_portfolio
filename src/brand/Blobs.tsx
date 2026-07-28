import React from 'react';

export type ShapeType = 'circle' | 'kidney' | 'worm' | 'hook' | 'arc';
export type VariantType = 'outline' | 'outlineGlow' | 'solid' | 'glass' | 'ghost';

interface BlobProps {
  shape: ShapeType;
  variant: VariantType;
  className?: string;
}

export const BlobShape: React.FC<BlobProps> = ({ shape, variant, className = '' }) => {
  const uid = React.useId();
  const holoId = `holo-${uid}`;
  const glassId = `glass-${uid}`;
  const glowId = `glow-${uid}`;

  const isStrokeOnly = shape === 'worm' || shape === 'hook' || shape === 'arc';

  const getStyleProps = (): React.SVGAttributes<SVGElement> => {
    switch (variant) {
      case 'outline':
        return isStrokeOnly
          ? { stroke: 'currentColor', fill: 'none' }
          : { stroke: 'currentColor', strokeWidth: 4, fill: 'none' };
      case 'outlineGlow':
        return isStrokeOnly
          ? { stroke: 'currentColor', fill: 'none', filter: `url(#${glowId})` }
          : { stroke: 'currentColor', strokeWidth: 4, fill: 'none', filter: `url(#${glowId})` };
      case 'solid':
        return isStrokeOnly
          ? { stroke: `url(#${holoId})`, fill: 'none' }
          : { fill: `url(#${holoId})` };
      case 'glass':
        return isStrokeOnly
          ? { stroke: `url(#${holoId})`, fill: 'none', filter: `url(#${glassId})` }
          : { fill: `url(#${holoId})`, filter: `url(#${glassId})` };
      case 'ghost':
        return isStrokeOnly
          ? { stroke: `url(#${holoId})`, fill: 'none', opacity: 0.2 }
          : { fill: `url(#${holoId})`, opacity: 0.2 };
    }
  };

  const styleProps = getStyleProps();

  const renderShape = (extraProps?: React.SVGAttributes<SVGElement>) => {
    const merged = { ...styleProps, ...extraProps };
    switch (shape) {
      case 'circle':
        return <circle cx="50" cy="50" r="15" {...merged} />;
      case 'kidney':
        return <path d="M30 60 C30 20, 80 30, 70 70 C60 110, 30 100, 30 60 Z" {...merged} />;
      case 'worm':
        return <path d="M10 50 C 30 20, 70 80, 90 50" strokeWidth="20" strokeLinecap="round" {...merged} />;
      case 'hook':
        return <path d="M70 20 C 30 20, 20 80, 60 80 C 80 80, 80 50, 60 50" strokeWidth="20" strokeLinecap="round" {...merged} />;
      case 'arc':
        return <path d="M20 50 A 30 30 0 1 1 80 50" strokeWidth="15" strokeLinecap="round" {...merged} />;
    }
  };

  return (
    <svg
      viewBox="0 0 100 100"
      className={`overflow-visible ${className}`}
    >
      <defs>
        <linearGradient id={holoId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--flamingo)" />
          <stop offset="33%" stopColor="var(--azure)" />
          <stop offset="66%" stopColor="var(--springgreen)" />
          <stop offset="100%" stopColor="var(--lime)" />
        </linearGradient>

        {variant === 'glass' && (
          <filter id={glassId}>
            <feDropShadow dx="0" dy="5" stdDeviation="5" floodColor="#000" floodOpacity="0.2" />
            <feOffset dx="-2" dy="-2" in="SourceAlpha" result="offset" />
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite operator="out" in2="SourceAlpha" in="blur" result="inverse" />
            <feFlood floodColor="white" floodOpacity="0.7" result="color" />
            <feComposite operator="in" in2="inverse" in="color" result="highlight" />
            <feComposite operator="over" in2="SourceGraphic" in="highlight" />
          </filter>
        )}

        {variant === 'outlineGlow' && (
          <filter id={glowId}>
            <feGaussianBlur stdDeviation="8" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        )}
      </defs>

      {renderShape()}

      {variant === 'outlineGlow' && (
        <g opacity="0.3">
          {renderShape(
            isStrokeOnly
              ? { stroke: `url(#${holoId})`, filter: 'blur(10px)' }
              : { fill: `url(#${holoId})`, filter: 'blur(10px)', stroke: 'none' }
          )}
        </g>
      )}
    </svg>
  );
};
