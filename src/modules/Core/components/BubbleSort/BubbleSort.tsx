import { ReactElement } from 'react'

import { bubbleSort } from '@/modules/Core/alghorithms/bubbleSort'
import { ResultView } from '@/modules/Core/components/ResultView'
import { AlgorithmComponentProps } from '@/modules/Core/types/interfaces'

const BubbleSort = ({ array, title }: AlgorithmComponentProps): ReactElement => {
  const start = performance.now()
  bubbleSort(array)
  const end = performance.now()

  return <ResultView elements={array.length} time={end - start} title={title} />
}

export default BubbleSort
