import { cx } from 'class-variance-authority'
import Link from 'next/link'
import { ReactElement } from 'react'

const navigationClassName = cx('bg-red-500')

export const Navigation = (): ReactElement => {
  return (
    <nav className={navigationClassName}>
      <ul>
        <li>
          <Link href='/bubble-sorting'>Пузырьковая сортировка</Link>
        </li>
      </ul>
    </nav>
  )
}
