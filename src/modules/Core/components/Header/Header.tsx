import { cx } from 'class-variance-authority'
import { ReactElement } from 'react'

const headerClassName = cx(
  // Блочная модель
  'p-4',
  // Оформление
  'bg-blue-500',
)

const titleClassName = cx(
  // Оформление
  'text-white text-center',
  // Типографика
  'text-3xl font-black uppercase',
  'mobile:text-2xl',
)

const Header = (): ReactElement => {
  return (
    <header className={headerClassName}>
      <h1 className={titleClassName}>Algorithms Cheat Sheet</h1>
    </header>
  )
}

export default Header
