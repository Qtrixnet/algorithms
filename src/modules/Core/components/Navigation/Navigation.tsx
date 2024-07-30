'use client'

import { cva, cx } from 'class-variance-authority'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactElement } from 'react'

const navigationClassName = cx(
  // Блочная модель
  'p-6',
  'mobile:p-4',
)

const listClassName = cx(
  // Блочная модель
  'flex gap-4',
  'mobile:flex-col',
)

const linkClassName = cva(
  [
    // Блочная модель
    'px-8 py-3 rounded-lg block',
    // Оформление
    'bg-white hover:bg-black hover:text-white',
    // Типографика
    'text-center',
  ],
  {
    variants: {
      isActive: {
        true: 'bg-black text-white',
        false: '',
      },
    },
    defaultVariants: {
      isActive: false,
    },
  },
)

const Navigation = (): ReactElement => {
  const pathname = usePathname()

  return (
    <nav className={navigationClassName}>
      <ul className={listClassName}>
        <li>
          <Link className={linkClassName({ isActive: pathname === '/' })} href='/'>
            Алгоритмы сортировки
          </Link>
        </li>
        <li>
          <Link className={linkClassName({ isActive: pathname === '/searching' })} href='/searching'>
            Алгоритмы поиска
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
