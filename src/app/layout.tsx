import { cx } from 'class-variance-authority'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactElement, ReactNode } from 'react'

import { Header } from '@/modules/Core/components/Header'
import { Navigation } from '@/modules/Core/components/Navigation'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Algorithms cheat sheet',
  description: 'Сайт-шпаргалка по алгоритмам. Описывает область применения/сложность алгоритмов',
}

const bodyClassName = cx(inter.className, 'bg-gray-200')

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
