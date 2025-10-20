import type { Metadata } from 'next'
import './globals.css'
import Image from 'next/image'
import logo from '../images/logo.png'
import CursorTrail from '@/components/CursorTrail'

export const metadata: Metadata = {
  title: 'Goutham Gourabathuni — Portfolio',
  description: 'Undergraduate portfolio showcasing projects, education, and certificates.',
  metadataBase: new URL('https://goutham-portfolio.vercel.app'),
  openGraph: {
    title: 'Goutham Gourabathuni — Portfolio',
    description: 'Projects, education, and certificates',
    type: 'website',
    url: 'https://goutham-portfolio.vercel.app'
  },
  icons: [
    { rel: 'icon', url: '/favicon.ico' },
    { rel: 'icon', type: 'image/png', url: '/logo.png' }
  ]
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>
        {/* Fixed top-left logo removed per request - now in navbar */}
        <CursorTrail />
        {children}
      </body>
    </html>
  )
}


