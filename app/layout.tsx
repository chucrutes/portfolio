import './globals.css'
import type { Metadata } from 'next'
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

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="w-full h-screen">
        <div className="h-full min-h-dvh grid grid-rows-[80px_1fr_80px] text-text">
          <Header />
          <main className="bg-gradient-to-b from-primary to-black py-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
