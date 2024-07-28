import { cx } from 'class-variance-authority'
import { ReactElement } from 'react'

const containerClassName = cx(
  // Блочная модель
  'grid grid-cols-3 gap-8 p-4',
  'mobile:grid-cols-1 mobile:gap-2',
  // Оформление
  'bg-white text-black',
)

const titleClassName = cx(
  // Оформление
  'font-bold',
)

const timeContainerClassName = cx(
  // Блочная модель
  'flex flex-col gap-1',
)

const timeClassName = cx(
  // Оформление
  'text-red-500 font-bold',
)

interface Props {
  complexity?: string
  elements: number
  subtitle?: string
  time: number
  title: string
}

export const ResultView = ({ elements, time, title, complexity, subtitle }: Props): ReactElement => {
  return (
    <div className={containerClassName}>
      <div>
        <p className={titleClassName}>{title}</p>
        {complexity && <p>Сложность: {complexity}</p>}
        {subtitle && <p>Используется: {subtitle}</p>}
      </div>
      <div className={timeContainerClassName}>
        Время работы алгоритма: <span className={timeClassName}>{time.toFixed(3)} мс.</span>
      </div>
      <div>Кол-во элементов: {elements.toLocaleString()}</div>
    </div>
  )
}
