import { ReactElement } from 'react'

import { binarySearch } from '@/modules/Algorithm/algorithms/searching/binarySearch'
import { ResultView } from '@/modules/Algorithm/components/ResultView'
import { ALGORITHMS_INFO } from '@/modules/Algorithm/constants/algorithms'
import { AlgorithmComponentProps } from '@/modules/Algorithm/types/types'
import { measureAlgorithmPerformance } from '@/modules/Algorithm/utils/measureAlgorithmPerformance'

const BinarySearch = ({
  elementsCount,
  randomArray,
  reverseSortedArray,
  sortedArray,
}: AlgorithmComponentProps): ReactElement => {
  randomArray.pop()
  randomArray.push(1000)

  const { bigOCaseTime, omegaCaseTime, thetaCaseTime } = measureAlgorithmPerformance({
    algorithm: binarySearch,
    randomArray,
    reverseSortedArray,
    sortedArray,
    isSearching: true,
  })

  const {
    title,
    description,
    complexity: { omegaCase, thetaCase, bigOCase },
  } = ALGORITHMS_INFO.searching.binarySearching

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

export default BinarySearch
