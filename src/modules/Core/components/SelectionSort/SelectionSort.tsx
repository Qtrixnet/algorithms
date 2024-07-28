import { ReactElement } from 'react'

import { selectionSort } from '@/modules/Core/alghorithms/selectionSort'
import { ResultView } from '@/modules/Core/components/ResultView'
import { AlgorithmComponentProps } from '@/modules/Core/types/interfaces'
import { measureTime } from '@/modules/Core/utils/measureTime'

const SelectionSort = ({ array }: AlgorithmComponentProps): ReactElement => {
  const time = measureTime(selectionSort, array)

  return (
    <ResultView
      complexity='O(n^2)'
      elements={array.length}
      subtitle='Когда количество входных данных невелико'
      time={time}
      title='Сортировка выбором'
    />
  )
}

export default SelectionSort
