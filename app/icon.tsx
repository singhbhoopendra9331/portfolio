import { ImageResponse } from '@vercel/og';
import { siteConfig } from '@/lib/data';

export const runtime = 'edge';
export const size = { width: 512, height: 512 };
export const contentType = 'image/png';

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
          background: 'linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%)',
          borderRadius: '100px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: '260px',
            fontWeight: 800,
            color: 'white',
            letterSpacing: '-0.05em',
          }}
        >
          BS
        </div>
      </div>
    ),
    { ...size }
  );
}
