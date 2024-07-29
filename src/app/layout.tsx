import { cx } from 'class-variance-authority'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactElement, ReactNode } from 'react'

import { Header } from '@/modules/Core/components/Header'
import { Navigation } from '@/modules/Core/components/Navigation'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Визуализатор алгоритмов сортировки',
  description: 'Визуализирует работу алгоритмов сортировки',
}

const bodyClassName = cx(
  inter.className,
  // Блочная модель
  // 'flex flex-col min-h-dvh',
  // Оформление
  // 'bg-black text-white',
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
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  )
}

export default RootLayout
