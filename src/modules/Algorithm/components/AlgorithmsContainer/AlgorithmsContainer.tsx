import { cx } from 'class-variance-authority'
import { ReactElement } from 'react'

interface Props {
  children: ReactElement | ReactElement[]
}

const containerClassName = cx(
  // Блочная модель
  'grid grid-cols-3 gap-4 p-4 pt-0',
  'tablet:grid-cols-2',
  'mobile:grid-cols-1',
)

const AlgorithmsContainer = ({ children }: Props): ReactElement => {
  return <div className={containerClassName}>{children}</div>
}

export default AlgorithmsContainer
