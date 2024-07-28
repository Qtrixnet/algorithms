import { ReactElement } from 'react'

import { ResultView } from '@/modules/Core/components/ResultView'
import { ALGORITHMS_INFO } from '@/modules/Core/constants/algorithms'
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

  const {
    title,
    description,
    complexity: { bigOCase, omegaCase, thetaCase },
  } = ALGORITHMS_INFO.sorting.arrayPrototypeSorting

  return (
    <ResultView
      bigOCase={{ time: bigOCaseTime, ...bigOCase }}
      description={description}
      elements={elementsCount}
      omegaCase={{ time: omegaCaseTime, ...omegaCase }}
      thetaCase={{ time: thetaCaseTime, ...thetaCase }}
      title={title}
    />
  )
}

export default ArrayPrototypeSort
