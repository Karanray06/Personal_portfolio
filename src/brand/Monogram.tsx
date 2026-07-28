import React from 'react';
import { BlobShape } from './Blobs';

interface MonogramProps {
  layout: 'compact' | 'scattered';
  className?: string;
  variant?: 'outline' | 'outlineGlow' | 'solid' | 'glass' | 'ghost';
}

export const Monogram: React.FC<MonogramProps> = ({ layout, className = '', variant = 'glass' }) => {
  if (layout === 'scattered') {
    return (
      <div className={`relative ${className}`}>
        <BlobShape shape="kidney" variant={variant} className="absolute w-32 h-32 top-10 left-10 rotate-45 text-[var(--color-muted)]" />
        <BlobShape shape="worm" variant={variant} className="absolute w-40 h-40 top-20 right-20 -rotate-12 text-[var(--color-muted)]" />
        <BlobShape shape="circle" variant={variant} className="absolute w-16 h-16 top-1/2 left-1/4 text-[var(--color-muted)]" />
        <BlobShape shape="hook" variant={variant} className="absolute w-36 h-36 bottom-20 left-1/3 rotate-90 text-[var(--color-muted)]" />
        <BlobShape shape="arc" variant={variant} className="absolute w-32 h-32 bottom-10 right-1/4 -rotate-45 text-[var(--color-muted)]" />
      </div>
    );
  }

  // Compact logotype
  return (
    <div className={`relative w-16 h-16 ${className}`}>
      {/* Arrange shapes tightly together */}
      <div className="absolute inset-0 flex items-center justify-center">
        <BlobShape shape="kidney" variant={variant} className="absolute w-12 h-12 -top-1 -left-2 rotate-[-20deg] text-[var(--text-on-dark)]" />
        <BlobShape shape="circle" variant={variant} className="absolute w-4 h-4 top-2 right-2 text-[var(--text-on-dark)]" />
        <BlobShape shape="hook" variant={variant} className="absolute w-10 h-10 bottom-0 left-2 rotate-[120deg] text-[var(--text-on-dark)]" />
        <BlobShape shape="worm" variant={variant} className="absolute w-12 h-12 bottom-1 right-0 rotate-[15deg] text-[var(--text-on-dark)]" />
      </div>
    </div>
  );
};
