import { cx } from 'class-variance-authority'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactElement, ReactNode } from 'react'

import { Header } from '@/modules/Core/components/Header'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Визуализатор алгоритмов сортировки',
  description: 'Визуализирует работу алгоритмов сортировки',
}

const bodyClassName = cx(inter.className, 'bg-black text-white')

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode
}>): ReactElement => {
  return (
    <html lang='ru'>
      <body className={bodyClassName}>
        <Header />
        {children}
      </body>
    </html>
  )
}

export default RootLayout
