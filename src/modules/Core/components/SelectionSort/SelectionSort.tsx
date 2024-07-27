import { ReactElement } from 'react'

import { selectionSort } from '@/modules/Core/alghorithms/selectionSort'
import { ResultView } from '@/modules/Core/components/ResultView'

interface Props {
  array: number[]
  title: string
}

const SelectionSort = ({ array, title }: Props): ReactElement => {
  const start = performance.now()
  selectionSort(array)
  const end = performance.now()

  return <ResultView elements={array.length} time={end - start} title={title} />
}

export default SelectionSort
