import { cx } from 'class-variance-authority'
import { ReactElement } from 'react'

import { ComplexityNotation } from '@/modules/Core/types/types'

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
          <p>Лучший случай: Ω({omegaCase.notation})</p>
          <p>Средний случай: Θ({thetaCase.notation})</p>
          <p>Худший случай: О({bigOCase.notation})</p>
        </div>
        <p>Описание: {description}</p>
      </div>
      <div className={timeContainerClassName}>
        <p>
          Время работы алгоритма Ω (Лучший случай):{' '}
          <span className={timeClassName}>{omegaCase.time.toFixed(3)} мс.</span>
        </p>
        <p>
          Время работы алгоритма Θ (Средний случай):{' '}
          <span className={timeClassName}>{thetaCase.time.toFixed(3)} мс.</span>
        </p>
        <p>
          Время работы алгоритма О (Худший случай):{' '}
          <span className={timeClassName}>{bigOCase.time.toFixed(3)} мс.</span>
        </p>
      </div>
      <div>Кол-во элементов: {elements.toLocaleString()}</div>
    </div>
  )
}
