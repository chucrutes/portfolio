import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { Footer } from './layout/footer'
import { Header } from './layout/header'
import { keywords } from '../../config/keywords'
import { getLocale } from 'next-intl/server'
import { NextIntlClientProvider } from 'next-intl'

export const metadata: Metadata = {
  title: 'Thiago Melo',
  description:
    'This is my portfolio, here I show my experience and challenges during my journey as a software engineer.',
  keywords,
  icons: '/logo_without_background.png'
}

const roboto = Roboto({ subsets: ['latin'] })

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const locale = await getLocale()

  return (
    <html lang={locale} className={roboto.className}>
      <body className="w-full h-screen">
        <div className="h-full min-h-dvh grid grid-rows-[80px_1fr_60px] text-text">
          <NextIntlClientProvider>
            <Header />
            <main className="bg-gradient-to-b from-primary to-secondary py-8">
              {children}
            </main>
            <Footer />
          </NextIntlClientProvider>
        </div>
      </body>
    </html>
  )
}
