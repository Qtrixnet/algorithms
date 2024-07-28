import { ReactElement } from 'react'

import { binarySearch } from '@/modules/Core/alghorithms/binarySearch'
import { ResultView } from '@/modules/Core/components/ResultView'
import { AlgorithmComponentProps } from '@/modules/Core/types/interfaces'

const BinarySearch = ({ array }: AlgorithmComponentProps): ReactElement => {
  array.pop()
  array.push(100)

  const start = performance.now()
  binarySearch(array, 100)
  const end = performance.now()

  return (
    <ResultView
      complexity='В лучшем случае - O(1) / В среднем O(logn)'
      elements={array.length}
      subtitle='Когда входной массив отсортирован / Когда необходимо максимально производительное решение'
      time={end - start}
      title='Бинарный поиск'
    />
  )
}

export default BinarySearch
