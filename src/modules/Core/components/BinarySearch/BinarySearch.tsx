import { ReactElement } from 'react'

import { binarySearch } from '@/modules/Core/alghorithms/binarySearch'
import { ResultView } from '@/modules/Core/components/ResultView'
import { ALGORITHMS_INFO } from '@/modules/Core/constants/algorithms'
import { AlgorithmComponentProps } from '@/modules/Core/types/interfaces'
import { measureAlgorithmPerformance } from '@/modules/Core/utils/measureAlgorithmPerformance'

const BinarySearch = ({
  elementsCount,
  randomArray,
  reverseSortedArray,
  sortedArray,
}: AlgorithmComponentProps): ReactElement => {
  randomArray.pop()
  randomArray.push(100)

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
