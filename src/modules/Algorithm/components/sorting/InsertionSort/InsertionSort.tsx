import { ReactElement } from 'react'

import { insertionSort } from '@/modules/Algorithm/algorithms/sorting/insertionSort'
import { ResultView } from '@/modules/Algorithm/components/ResultView'
import { ALGORITHMS_INFO } from '@/modules/Algorithm/constants/algorithms'
import { AlgorithmComponentProps } from '@/modules/Algorithm/types/types'
import { measureAlgorithmPerformance } from '@/modules/Algorithm/utils/measureAlgorithmPerformance'

const InsertionSort = ({
  sortedArray,
  randomArray,
  reverseSortedArray,
  elementsCount,
}: AlgorithmComponentProps): ReactElement => {
  const { bigOCaseTime, omegaCaseTime, thetaCaseTime } = measureAlgorithmPerformance({
    algorithm: insertionSort,
    randomArray,
    reverseSortedArray,
    sortedArray,
    isSearching: false,
  })

  const {
    title,
    description,
    complexity: { bigOCase, omegaCase, thetaCase },
  } = ALGORITHMS_INFO.sorting.insertionSorting

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

export default InsertionSort
