import { cx } from 'class-variance-authority'
import { ReactElement } from 'react'

interface Props {
  elements: number
  time: number
  title: string
}

const containerClassName = cx(
  // Блочная модель
  'grid grid-cols-3 gap-8 p-4',
  'mobile:grid-cols-1 mobile:gap-2',
  // Оформление
  'bg-white text-black',
)

const titleContainer = cx(
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

export const ResultView = ({ elements, time, title }: Props): ReactElement => {
  return (
    <div className={containerClassName}>
      <div className={titleContainer}>{title}</div>
      <div className={timeContainerClassName}>
        Время работы алгоритма: <span className={timeClassName}>{time} мс.</span>
      </div>
      <div>Кол-во элементов: {elements.toLocaleString()}</div>
    </div>
  )
}
