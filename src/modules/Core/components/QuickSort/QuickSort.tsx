import { ReactElement } from 'react'

import { quickSort } from '@/modules/Core/alghorithms/quickSort'
import { ResultView } from '@/modules/Core/components/ResultView'
import { AlgorithmComponentProps } from '@/modules/Core/types/interfaces'
import { measureTime } from '@/modules/Core/utils/measureTime'

const QuickSort = ({ array, title }: AlgorithmComponentProps): ReactElement => {
  const time = measureTime(quickSort, array)

  return <ResultView elements={array.length} time={time} title={title} />
}

export default QuickSort
