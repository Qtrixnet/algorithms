import { ReactElement } from 'react'

import { BinarySearch } from '@/modules/Algorithm/components/searching/BinarySearch'
import { LinearSearch } from '@/modules/Algorithm/components/searching/LinearSearch'
import { WithAlgorithmProps } from '@/modules/Algorithm/hocs/WithAlgorithmProps'

const LinearSearchWithProps = WithAlgorithmProps(LinearSearch)
const BinarySearchWithProps = WithAlgorithmProps(BinarySearch)

export const SearchingAlgorithms = (): ReactElement => {
  return (
    <>
      <LinearSearchWithProps />
      <BinarySearchWithProps />
    </>
  )
}
