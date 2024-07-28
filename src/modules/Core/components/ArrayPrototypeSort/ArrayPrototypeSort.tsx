import { ReactElement } from 'react'

import { ResultView } from '@/modules/Core/components/ResultView'
import { AlgorithmComponentProps } from '@/modules/Core/types/interfaces'
import { SortingAlgorithm } from '@/modules/Core/types/types'
import { measureAlgorithmPerformance } from '@/modules/Core/utils/measureAlgorithmPerformance'

const ArrayPrototypeSort = ({
  sortedArray,
  randomArray,
  reverseSortedArray,
  elementsCount,
}: AlgorithmComponentProps): ReactElement => {
  const arrayPrototypeSort: SortingAlgorithm = (array) => {
    return array.sort((a, b) => a - b)
  }

  const { bigOCaseTime, omegaCaseTime, thetaCaseTime } = measureAlgorithmPerformance({
    algorithm: arrayPrototypeSort,
    randomArray,
    reverseSortedArray,
    sortedArray,
    isSearching: false,
  })

  return (
    <ResultView
      bigOCase={{ time: bigOCaseTime, notation: '?' }}
      description='?'
      elements={elementsCount}
      omegaCase={{ time: omegaCaseTime, notation: '?' }}
      thetaCase={{ time: thetaCaseTime, notation: '?' }}
      title='Array.prototype.sort()'
    />
  )
}

export default ArrayPrototypeSort
