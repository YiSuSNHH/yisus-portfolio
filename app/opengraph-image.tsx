import { ImageResponse } from 'next/og'
 
// Route segment config
export const runtime = 'edge'
 
// Image metadata
export const alt = 'YiSuS - Software Engineer Portfolio'
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'
 
// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      // Clean OG image
      <div
        style={{
          background: 'linear-gradient(135deg, #FFFEF5 0%, #F0F4F8 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          {/* Simple Logo Circle */}
          <div
            style={{
              width: '120px',
              height: '120px',
              background: 'linear-gradient(135deg, #FFE599 0%, #D4AF37 50%, #B8860B 100%)',
              borderRadius: '60px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '40px',
              border: '4px solid rgba(255, 255, 255, 0.3)',
              position: 'relative',
            }}
          >
            {/* Simple decorative elements */}
            <div
              style={{
                position: 'absolute',
                top: '-8px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '16px',
                height: '8px',
                background: 'rgba(255, 255, 255, 0.4)',
                borderRadius: '8px 8px 0 0',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '-8px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '16px',
                height: '8px',
                background: 'rgba(255, 255, 255, 0.4)',
                borderRadius: '0 0 8px 8px',
              }}
            />
            <div
              style={{
                position: 'absolute',
                left: '-8px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '8px',
                height: '16px',
                background: 'rgba(255, 255, 255, 0.4)',
                borderRadius: '8px 0 0 8px',
              }}
            />
            <div
              style={{
                position: 'absolute',
                right: '-8px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '8px',
                height: '16px',
                background: 'rgba(255, 255, 255, 0.4)',
                borderRadius: '0 8px 8px 0',
              }}
            />
            
            {/* YS text */}
            <div
              style={{
                color: 'white',
                fontSize: '48px',
                fontWeight: 'bold',
              }}
            >
              YS
            </div>
          </div>
          
          {/* Name */}
          <div
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #102A43 0%, #D4AF37 50%, #102A43 100%)',
              backgroundClip: 'text',
              color: 'transparent',
              marginBottom: '20px',
            }}
          >
            YiSuS
          </div>
          
          {/* Title */}
          <div
            style={{
              fontSize: '36px',
              color: '#486581',
              marginBottom: '20px',
            }}
          >
            Nguyen Huy Hung
          </div>
          
          {/* Description */}
          <div
            style={{
              fontSize: '28px',
              color: '#627D98',
              maxWidth: '800px',
              textAlign: 'center',
            }}
          >
            Software Engineer • Backend Developer • DDD Expert
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}