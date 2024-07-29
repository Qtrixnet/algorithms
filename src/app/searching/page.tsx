import { ReactElement } from 'react'

import { AlgorithmsContainer } from '@/modules/Algorithm/components/AlgorithmsContainer'
import { SearchingAlgorithms } from '@/modules/Algorithm/components/SearchingAlgorithms'

const Searching = (): ReactElement => {
  return (
    <AlgorithmsContainer>
      <SearchingAlgorithms />
    </AlgorithmsContainer>
  )
}

export default Searching
