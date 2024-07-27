import { ReactElement } from 'react'

import { insertionSort } from '@/modules/Core/alghorithms/insertionSort'
import { ResultView } from '@/modules/Core/components/ResultView'
import { AlgorithmComponentProps } from '@/modules/Core/types/interfaces'
import { measureTime } from '@/modules/Core/utils/measureTime'

const InsertionSort = ({ array, title }: AlgorithmComponentProps): ReactElement => {
  const time = measureTime(insertionSort, array)

  return <ResultView elements={array.length} time={time} title={title} />
}

export default InsertionSort
