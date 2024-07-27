import { ReactElement } from 'react'

import { insertionSort } from '@/modules/Core/alghorithms/insertionSort'
import { ResultView } from '@/modules/Core/components/ResultView'
import { AlgorithmComponentProps } from '@/modules/Core/types/interfaces'

const InsertionSort = ({ array, title }: AlgorithmComponentProps): ReactElement => {
  const start = performance.now()
  insertionSort(array)
  const end = performance.now()

  return <ResultView elements={array.length} time={end - start} title={title} />
}

export default InsertionSort
