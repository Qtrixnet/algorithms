import { ReactElement } from 'react'

import { quickSort } from '@/modules/Core/alghorithms/quickSort'
import { ResultView } from '@/modules/Core/components/ResultView'
import { AlgorithmComponentProps } from '@/modules/Core/types/interfaces'
import { measureTime } from '@/modules/Core/utils/measureTime'

const QuickSort = ({ array }: AlgorithmComponentProps): ReactElement => {
  const time = measureTime(quickSort, array)

  return (
    <ResultView
      complexity='O(n * log n) / в худшем случае O(n^2)'
      elements={array.length}
      subtitle='При обработке большого объема входных данных / Когда требуется использовать наиболее быстрый алгоритм'
      time={time}
      title='Быстрая сортировка'
    />
  )
}

export default QuickSort
