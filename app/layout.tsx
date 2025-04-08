import './globals.css'
import type { Metadata } from 'next'
import { Header } from './layout/header'

export const metadata: Metadata = {
  title: 'Thiago Melo',
  description:
    'This is my portfolio, here I show some my experience and challenges during my journey as a software engineer',
  icons: '/logo_without_background.png'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`'bg-primary`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
