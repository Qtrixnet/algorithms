import { cx } from 'class-variance-authority'
import { ReactElement } from 'react'

const footerClassName = cx(
  // Блочная модель
  'p-4 flex items-center gap-8 justify-center',
  'mobile:flex-col mobile:gap-4',
  // Оформление
  'bg-blue-900',
)

const tgContainerClassName = cx(
  // Блочная модель
  'flex items-center gap-2 justify-center',
)

const tgIconClassName = cx(
  // Блочная модель
  'w-6 h-6',
  // Оформление
  'bg-tgIcon bg-center bg-contain',
)

export const Footer = (): ReactElement => {
  return (
    <footer className={footerClassName}>
      <p>Kirill Shashichev</p>
      <div className={tgContainerClassName}>
        <div className={tgIconClassName}></div>
        <p>@cyril_sv</p>
      </div>
    </footer>
  )
}
