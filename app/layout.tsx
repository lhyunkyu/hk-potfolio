import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: '이삭줍는 개발자 이현규 - 포트폴리오',
  description: '사용자 경험과 코드의 완벽한 조화를 추구하는 풀스택 개발자 이현규의 포트폴리오입니다.',
  generator: 'v0.app',
  icons: {
    icon: '/fhrhhhh.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
