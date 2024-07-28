import { ReactElement } from 'react'

import { ArrayPrototypeSort } from '@/modules/Core/components/ArrayPrototypeSort'
import { BubbleSort } from '@/modules/Core/components/BubbleSort'
import { InsertionSort } from '@/modules/Core/components/InsertionSort'
import { QuickSort } from '@/modules/Core/components/QuickSort'
import { SelectionSort } from '@/modules/Core/components/SelectionSort'
import { WithAlgorithmProps } from '@/modules/Core/hocs/WithAlgorithmProps'

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
