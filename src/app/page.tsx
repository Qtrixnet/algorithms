import { ReactElement } from 'react'

import { AlgorithmsContainer } from '@/modules/Algorithm/components/AlgorithmsContainer'
import { SortingAlgorithms } from '@/modules/Algorithm/components/SortingAlgorithms'

const Home = (): ReactElement => {
  return (
    <AlgorithmsContainer>
      <SortingAlgorithms />
    </AlgorithmsContainer>
  )
}

export default Home
