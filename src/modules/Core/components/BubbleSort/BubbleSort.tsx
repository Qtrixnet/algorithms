import { ReactElement } from 'react'

import { bubbleSort } from '@/modules/Core/alghorithms/bubbleSort'
import { ResultView } from '@/modules/Core/components/ResultView'
import { ALGORITHMS_INFO } from '@/modules/Core/constants/algorithms'
import { AlgorithmComponentProps } from '@/modules/Core/types/interfaces'
import { measureAlgorithmPerformance } from '@/modules/Core/utils/measureAlgorithmPerformance'

const BubbleSort = ({
  sortedArray,
  randomArray,
  reverseSortedArray,
  elementsCount,
}: AlgorithmComponentProps): ReactElement => {
  const { bigOCaseTime, omegaCaseTime, thetaCaseTime } = measureAlgorithmPerformance({
    algorithm: bubbleSort,
    randomArray,
    reverseSortedArray,
    sortedArray,
    isSearching: false,
  })

  const {
    title,
    description,
    complexity: { bigOCase, thetaCase, omegaCase },
  } = ALGORITHMS_INFO.sorting.bubbleSorting

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

export default BubbleSort
