import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'BITPIA - AI 직원 솔루션',
    template: '%s | BITPIA',
  },
  description: '복잡한 서류 업무부터 메일 대응까지, 당신의 비즈니스를 실행하는 AI 직원을 만들어 드립니다.',
  openGraph: {
    title: 'BITPIA - AI 직원 솔루션',
    description: '복잡한 서류 업무부터 메일 대응까지, 당신의 비즈니스를 실행하는 AI 직원을 만들어 드립니다.',
    url: baseUrl,
    siteName: 'BITPIA',
    locale: 'ko_KR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="ko"
      className={cx(
        'text-neutral-800 bg-[#f9fafb] dark:text-white dark:bg-neutral-900',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased">
        <main className="flex-auto min-w-0 flex flex-col">
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
