import { ImageResponse } from 'next/og'
 
// Route segment config
export const runtime = 'edge'
 
// Image metadata
export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'
 
// Image generation
export default function AppleIcon() {
  return new ImageResponse(
    (
      // Simple Apple icon with circle design
      <div
        style={{
          background: 'linear-gradient(135deg, #FFE599 0%, #D4AF37 50%, #B8860B 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '32px',
        }}
      >
        {/* Outer decorative circle */}
        <div
          style={{
            width: '140px',
            height: '140px',
            border: '3px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          {/* Inner circle */}
          <div
            style={{
              width: '80px',
              height: '80px',
              border: '3px solid white',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(255, 255, 255, 0.1)',
            }}
          >
            {/* YS text */}
            <div
              style={{
                color: 'white',
                fontSize: '36px',
                fontWeight: 'bold',
                fontFamily: 'serif',
              }}
            >
              YS
            </div>
          </div>
          
          {/* Simple petal decorations */}
          <div
            style={{
              position: 'absolute',
              top: '10px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '20px',
              height: '10px',
              background: 'rgba(255, 255, 255, 0.4)',
              borderRadius: '10px 10px 0 0',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '10px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '20px',
              height: '10px',
              background: 'rgba(255, 255, 255, 0.4)',
              borderRadius: '0 0 10px 10px',
            }}
          />
          <div
            style={{
              position: 'absolute',
              left: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '10px',
              height: '20px',
              background: 'rgba(255, 255, 255, 0.4)',
              borderRadius: '10px 0 0 10px',
            }}
          />
          <div
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '10px',
              height: '20px',
              background: 'rgba(255, 255, 255, 0.4)',
              borderRadius: '0 10px 10px 0',
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}