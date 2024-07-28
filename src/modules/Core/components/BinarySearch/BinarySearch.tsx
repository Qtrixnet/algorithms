import { ReactElement } from 'react'

import { binarySearch } from '@/modules/Core/alghorithms/binarySearch'
import { ResultView } from '@/modules/Core/components/ResultView'
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

  return (
    <ResultView
      bigOCase={{ time: bigOCaseTime, notation: '?' }}
      description='?'
      elements={elementsCount}
      omegaCase={{ time: omegaCaseTime, notation: '?' }}
      thetaCase={{ time: thetaCaseTime, notation: '?' }}
      title='Бинарный поиск'
    />
  )
}

export default BinarySearch
