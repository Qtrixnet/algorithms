import { ReactElement } from 'react'

import { BinarySearch } from '@/modules/Core/components/BinarySearch'
import { LinearSearch } from '@/modules/Core/components/LinearSearch'
import { WithAlgorithmProps } from '@/modules/Core/hocs/WithAlgorithmProps'

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
