import { ReactElement } from 'react'

import { quickSort } from '@/modules/Core/alghorithms/quickSort'
import { ResultView } from '@/modules/Core/components/ResultView'
import { AlgorithmComponentProps } from '@/modules/Core/types/interfaces'

const QuickSort = ({ array, title }: AlgorithmComponentProps): ReactElement => {
  const start = performance.now()
  quickSort(array, 0, array.length - 1)
  const end = performance.now()

  return <ResultView elements={array.length} time={end - start} title={title} />
}

export default QuickSort
