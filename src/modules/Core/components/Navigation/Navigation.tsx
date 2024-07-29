import { cx } from 'class-variance-authority'
import Link from 'next/link'
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

const linkClassName = cx(
  // Блочная модель
  'px-8 py-3 rounded-lg block',
  // Оформление
  'bg-blue-500 hover:bg-blue-600 text-white',
  // Типографика
  'text-center',
)

const Navigation = (): ReactElement => {
  return (
    <nav className={navigationClassName}>
      <ul className={listClassName}>
        <li>
          <Link className={linkClassName} href='/'>
            Главная
          </Link>
        </li>
        <li>
          <Link className={linkClassName} href='/sorting'>
            Алгоритмы сортировки
          </Link>
        </li>
        <li>
          <Link className={linkClassName} href='/searching'>
            Алгоритмы поиска
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
