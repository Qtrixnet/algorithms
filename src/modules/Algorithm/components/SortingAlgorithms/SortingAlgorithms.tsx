import { ReactElement } from 'react'

import { ArrayPrototypeSort } from '@/modules/Algorithm/components/sorting/ArrayPrototypeSort'
import { BubbleSort } from '@/modules/Algorithm/components/sorting/BubbleSort'
import { InsertionSort } from '@/modules/Algorithm/components/sorting/InsertionSort'
import { QuickSort } from '@/modules/Algorithm/components/sorting/QuickSort'
import { SelectionSort } from '@/modules/Algorithm/components/sorting/SelectionSort'
import { WithAlgorithmProps } from '@/modules/Algorithm/hocs/WithAlgorithmProps'

const BubbleSortWithProps = WithAlgorithmProps(BubbleSort)
const SelectionSortWithProps = WithAlgorithmProps(SelectionSort)
const InsertionSortWithProps = WithAlgorithmProps(InsertionSort)
const QuickSortWithProps = WithAlgorithmProps(QuickSort)
const ArrayPrototypeSortWithProps = WithAlgorithmProps(ArrayPrototypeSort)

export const SortingAlgorithms = (): ReactElement => {
  return (
    <>
      <BubbleSortWithProps />
      <SelectionSortWithProps />
      <InsertionSortWithProps />
      <QuickSortWithProps />
      <ArrayPrototypeSortWithProps />
    </>
  )
}
