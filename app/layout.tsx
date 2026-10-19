import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { IBM_Plex_Sans_Thai, Noto_Serif_Thai } from 'next/font/google'
import './globals.css'

const plexThai = IBM_Plex_Sans_Thai({
  subsets: ['thai', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-plex-thai',
  display: 'swap',
})

const serifThai = Noto_Serif_Thai({
  subsets: ['thai', 'latin'],
  weight: ['500', '600', '700'],
  variable: '--font-serif-thai',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'เซลล์: หน่วยพื้นฐานของชีวิต | สื่อการเรียนรู้ชีววิทยาเชิงลึก',
  description:
    'สื่อการเรียนรู้ชีววิทยาเรื่องเซลล์อย่างละเอียด ตั้งแต่ทฤษฎีเซลล์ กล้องจุลทรรศน์ ออร์แกเนลล์ เยื่อหุ้มเซลล์ การลำเลียงสาร การสื่อสารระหว่างเซลล์ การหายใจระดับเซลล์ จนถึงการแบ่งเซลล์ พร้อมข้อมูลเชิงลึกและแบบทดสอบ',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f7f3ea',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="th" className={`${plexThai.variable} ${serifThai.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
