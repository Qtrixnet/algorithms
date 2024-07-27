import { ReactElement } from 'react'

import { selectionSort } from '@/modules/Core/alghorithms/selectionSort'
import { ResultView } from '@/modules/Core/components/ResultView'
import { AlgorithmComponentProps } from '@/modules/Core/types/interfaces'
import { measureTime } from '@/modules/Core/utils/measureTime'

const SelectionSort = ({ array, title }: AlgorithmComponentProps): ReactElement => {
  const time = measureTime(selectionSort, array)

  return <ResultView elements={array.length} time={time} title={title} />
}

export default SelectionSort
