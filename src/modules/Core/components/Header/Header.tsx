import { cx } from 'class-variance-authority'
import { ReactElement } from 'react'

const headerClassName = cx(
  // Блочная модель
  'p-4',
  // Оформление
  'bg-blue-900',
  // Типографика
  'mobile:text-center',
)

export const Header = (): ReactElement => {
  return <header className={headerClassName}>Sort Visualizer</header>
}
