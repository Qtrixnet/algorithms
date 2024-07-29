import { ReactElement } from 'react'

import { AlgorithmsContainer } from '@/modules/Algorithm/components/AlgorithmsContainer'
import { SortingAlgorithms } from '@/modules/Algorithm/components/SortingAlgorithms'

const Sorting = (): ReactElement => {
  return (
    <AlgorithmsContainer>
      <SortingAlgorithms />
    </AlgorithmsContainer>
  )
}

export default Sorting
