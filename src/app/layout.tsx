import { cx } from 'class-variance-authority'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactElement, ReactNode } from 'react'

import { Footer } from '@/modules/Core/components/Footer'
import { Header } from '@/modules/Core/components/Header'

import './globals.css'

import { Navigation } from '@/modules/Core/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Визуализатор алгоритмов сортировки',
  description: 'Визуализирует работу алгоритмов сортировки',
}

const bodyClassName = cx(
  inter.className,
  // Блочная модель
  'flex flex-col min-h-dvh',
  // Оформление
  'bg-black text-white',
)

const mainClassName = cx(
  // Блочная модель
  'grow flex',
)

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode
}>): ReactElement => {
  return (
    <html lang='ru'>
      <body className={bodyClassName}>
        <Header />
        <main className={mainClassName}>
          <Navigation />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
