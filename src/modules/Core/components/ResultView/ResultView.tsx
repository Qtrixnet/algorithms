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

type Notations = 'n' | 'log*n' | 'n^2' | '?'

interface ComplexityNotation {
  notation: Notations
  time: number
}

interface Props {
  bigOCase: ComplexityNotation
  description: string
  elements: number
  omegaCase: ComplexityNotation
  thetaCase: ComplexityNotation
  title: string
}

export const ResultView = ({ elements, title, bigOCase, omegaCase, thetaCase, description }: Props): ReactElement => {
  return (
    <div className={containerClassName}>
      <div>
        <h3 className={titleClassName}>{title}</h3>
        <div>
          <p>Лучший случай: Ω({omegaCase.notation}). Когда массив отсортирован</p>
          <p>Средний случай: Θ({thetaCase.notation}). Для случайного набора данных</p>
          <p>Худший случай: О({bigOCase.notation}). Когда массив отсортирован в обратном порядке</p>
        </div>
        {description && <p>Использование: {description}</p>}
      </div>
      <div className={timeContainerClassName}>
        Время работы алгоритма Ω (Лучший случай): <span className={timeClassName}>{omegaCase.time.toFixed(3)} мс.</span>
        Время работы алгоритма Θ (Средний случай):
        <span className={timeClassName}>{thetaCase.time.toFixed(3)} мс.</span>
        Время работы алгоритма О (Худший случай): <span className={timeClassName}>{bigOCase.time.toFixed(3)} мс.</span>
      </div>
      <div>Кол-во элементов: {elements.toLocaleString()}</div>
    </div>
  )
}
