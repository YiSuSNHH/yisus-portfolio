import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'YiSuS Portfolio - Nguyen Huy Hung',
    short_name: 'YiSuS',
    description: 'Software Engineer specializing in educational technology and financial platforms. Expert in DDD, Clean Architecture, and modern backend development.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FFFEF5',
    theme_color: '#D4AF37',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon.svg',
        type: 'image/svg+xml',
        sizes: 'any',
      },
      {
        src: '/apple-icon?<generated>',
        type: 'image/png',
        sizes: '180x180',
      },
    ],
  }
}