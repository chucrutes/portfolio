import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { Footer } from './layout/footer'
import { Header } from './layout/header'

export const metadata: Metadata = {
  title: 'Thiago Melo',
  description:
    'This is my portfolio, here I show my experience and challenges during my journey as a software engineer.',
  keywords: [
    'software',
    'engineer',
    'engineering',
    'portfolio',
    'aws',
    'node',
    'express',
    'api',
    'next',
    'react',
    'hexagonal',
    'architecture',
    'solid',
    'dry'
  ],
  icons: '/logo_without_background.png'
}

const roboto = Roboto({ subsets: ['latin'] })

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={roboto.className}>
      <body className="w-full h-screen">
        <div className="h-full min-h-dvh grid grid-rows-[80px_1fr_60px] text-text">
          <Header />
          <main className="bg-gradient-to-b from-primary to-secondary pt-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
