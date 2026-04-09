import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Fatemeh Azadbakht — Senior Product & Visual Designer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div style={{
        background: '#111210',
        width: '100%', height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        padding: '72px 80px',
        position: 'relative',
      }}>
        {/* Teal left stripe */}
        <div style={{
          position: 'absolute', top: 0, left: 0,
          width: 6, height: '100%',
          background: '#4FA6A1', display: 'flex',
        }} />

        {/* FA. logo top left */}
        <div style={{
          position: 'absolute', top: 56, left: 80,
          fontSize: 24, color: 'white', display: 'flex',
          fontFamily: 'serif',
        }}>
          FA<span style={{ color: '#4FA6A1' }}>.</span>
        </div>

        {/* Toronto top right */}
        <div style={{
          position: 'absolute', top: 60, right: 80,
          fontSize: 12, color: 'rgba(255,255,255,0.35)',
          letterSpacing: '0.2em', display: 'flex',
        }}>
          TORONTO, CANADA
        </div>

        {/* Name */}
        <div style={{
          fontSize: 80, color: 'white',
          fontFamily: 'serif',
          lineHeight: 0.88,
          marginBottom: 24,
          display: 'flex',
          flexDirection: 'column',
        }}>
          <span style={{ fontWeight: 400 }}>Fatemeh</span>
          <span style={{
            fontWeight: 400,
            fontStyle: 'italic',
            color: 'transparent',
            WebkitTextStroke: '2px rgba(255,255,255,0.6)',
          }}>Azadbakht</span>
        </div>

        {/* Teal rule */}
        <div style={{
          width: 120, height: 1,
          background: '#4FA6A1',
          marginBottom: 20,
          display: 'flex',
        }} />

        {/* Title */}
        <div style={{
          fontSize: 22, color: '#4FA6A1',
          letterSpacing: '0.06em',
          marginBottom: 12,
          display: 'flex',
        }}>
          Senior Product &amp; Visual Designer
        </div>

        {/* Clients */}
        <div style={{
          fontSize: 16,
          color: 'rgba(255,255,255,0.38)',
          display: 'flex',
        }}>
          TD Bank · Law Society of Ontario · City of Toronto · 15+ Years
        </div>

        {/* Stats bottom right */}
        <div style={{
          position: 'absolute', bottom: 72, right: 80,
          display: 'flex', gap: 48,
        }}>
          {[['15+','Years'],['50+','Products'],['88K+','Users']].map(([n,l]) => (
            <div key={n} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontSize: 36, color: '#4FA6A1', fontWeight: 700, display: 'flex' }}>{n}</span>
              <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.15em', display: 'flex' }}>{l}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  )
}
