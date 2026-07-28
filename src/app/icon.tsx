import { ImageResponse } from 'next/og';
 
// Route segment config
export const runtime = 'edge';
 
// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';
 
// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'transparent',
        }}
      >
        <svg viewBox="0 0 100 100" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
          {/* We use just 2 shapes for the tight favicon: The Kidney and the Dot, in monochrome dark */}
          
          {/* Dot */}
          <circle cx="65" cy="25" r="10" fill="#2b2b33" />
          
          {/* Kidney shape simplified */}
          <path 
            d="M 25 75 C 45 65, 65 75, 55 95 C 45 115, 15 115, 20 95 C 25 75, 25 75, 25 75 Z" 
            fill="#2b2b33" 
            stroke="#2b2b33" 
            strokeWidth="8"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
