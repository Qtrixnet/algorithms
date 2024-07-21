import { cx } from 'class-variance-authority'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactElement, ReactNode } from 'react'

import { Footer } from '@/modules/Core/components/Footer'
import { Header } from '@/modules/Core/components/Header'

import './globals.css'

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
  'grow flex flex-col',
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
        <main className={mainClassName}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
