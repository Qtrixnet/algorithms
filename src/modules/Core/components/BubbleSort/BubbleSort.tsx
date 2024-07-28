import { ReactElement } from 'react'

import { bubbleSort } from '@/modules/Core/alghorithms/bubbleSort'
import { ResultView } from '@/modules/Core/components/ResultView'
import { AlgorithmComponentProps } from '@/modules/Core/types/interfaces'
import { measureTime } from '@/modules/Core/utils/measureTime'

const BubbleSort = ({ array }: AlgorithmComponentProps): ReactElement => {
  const time = measureTime(bubbleSort, array)

  return (
    <ResultView
      complexity='O(n^2)'
      elements={array.length}
      subtitle='Когда количество входных данных невелико'
      time={time}
      title='Сортировка пузырьком'
    />
  )
}

export default BubbleSort
