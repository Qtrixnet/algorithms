import { ReactElement } from 'react'

import { selectionSort } from '@/modules/Algorithm/algorithms/sorting/selectionSort'
import { ResultView } from '@/modules/Algorithm/components/ResultView'
import { ALGORITHMS_INFO } from '@/modules/Algorithm/constants/algorithms'
import { AlgorithmComponentProps } from '@/modules/Algorithm/types/types'
import { measureAlgorithmPerformance } from '@/modules/Algorithm/utils/measureAlgorithmPerformance'

const SelectionSort = ({
  sortedArray,
  randomArray,
  reverseSortedArray,
  elementsCount,
}: AlgorithmComponentProps): ReactElement => {
  const { bigOCaseTime, omegaCaseTime, thetaCaseTime } = measureAlgorithmPerformance({
    algorithm: selectionSort,
    randomArray,
    reverseSortedArray,
    sortedArray,
    isSearching: false,
  })

  const {
    title,
    description,
    complexity: { bigOCase, omegaCase, thetaCase },
  } = ALGORITHMS_INFO.sorting.selectionSorting

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

export default SelectionSort
