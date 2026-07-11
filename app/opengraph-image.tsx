import { ImageResponse } from '@vercel/og';
import { siteConfig } from '@/lib/data';

export const runtime = 'edge';
export const alt = `${siteConfig.name} — ${siteConfig.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '80px',
          background:
            'linear-gradient(135deg, #0a0a14 0%, #13132a 50%, #0a0a14 100%)',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Decorative gradient orbs */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            left: '-100px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-150px',
            right: '-100px',
            width: '450px',
            height: '450px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(6,182,212,0.18) 0%, transparent 70%)',
            display: 'flex',
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '8px 20px',
            borderRadius: '999px',
            border: '1px solid rgba(255,255,255,0.15)',
            background: 'rgba(255,255,255,0.05)',
            color: '#67e8f9',
            fontSize: '20px',
            fontWeight: 600,
            marginBottom: '32px',
          }}
        >
          <div
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: '#22d3ee',
              display: 'flex',
            }}
          />
          Available for new projects
        </div>

        {/* Name */}
        <div
          style={{
            display: 'flex',
            fontSize: '72px',
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
          }}
        >
          Bhoopendra Singh
        </div>

        {/* Title */}
        <div
          style={{
            display: 'flex',
            marginTop: '20px',
            fontSize: '32px',
            fontWeight: 500,
            color: '#a5b4fc',
            lineHeight: 1.3,
          }}
        >
          Full-Stack JavaScript Developer
        </div>

        {/* Tech row */}
        <div
          style={{
            display: 'flex',
            marginTop: '40px',
            gap: '16px',
            fontSize: '22px',
            color: 'rgba(255,255,255,0.6)',
          }}
        >
          <span>Next.js</span>
          <span style={{ color: '#6366f1' }}>•</span>
          <span>React</span>
          <span style={{ color: '#6366f1' }}>•</span>
          <span>TypeScript</span>
          <span style={{ color: '#6366f1' }}>•</span>
          <span>Node.js</span>
        </div>

        {/* URL */}
        <div
          style={{
            display: 'flex',
            marginTop: 'auto',
            fontSize: '24px',
            color: 'rgba(255,255,255,0.4)',
          }}
        >
          zoro-dev.com/bhoopendra
        </div>
      </div>
    ),
    { ...size }
  );
}
