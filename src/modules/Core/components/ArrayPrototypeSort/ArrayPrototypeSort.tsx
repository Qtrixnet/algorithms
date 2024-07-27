import { ReactElement } from 'react'

import { ResultView } from '@/modules/Core/components/ResultView'
import { AlgorithmComponentProps } from '@/modules/Core/types/interfaces'

const ArrayPrototypeSort = ({ title, array }: AlgorithmComponentProps): ReactElement => {
  const start = performance.now()
  array.sort((a, b) => a - b)
  const end = performance.now()

  return <ResultView elements={array.length} time={end - start} title={title} />
}

export default ArrayPrototypeSort
