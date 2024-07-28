import { ReactElement } from 'react'

import { ResultView } from '@/modules/Core/components/ResultView'
import { AlgorithmComponentProps } from '@/modules/Core/types/interfaces'

const ArrayPrototypeSort = ({ array }: AlgorithmComponentProps): ReactElement => {
  const start = performance.now()
  array.sort((a, b) => a - b)
  const end = performance.now()

  return <ResultView elements={array.length} time={end - start} title='Array.prototype.sort()' />
}

export default ArrayPrototypeSort
