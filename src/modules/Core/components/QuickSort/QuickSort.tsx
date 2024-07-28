import { ReactElement } from 'react'

import { quickSort } from '@/modules/Core/alghorithms/quickSort'
import { ResultView } from '@/modules/Core/components/ResultView'
import { AlgorithmComponentProps } from '@/modules/Core/types/interfaces'
import { measureAlgorithmPerformance } from '@/modules/Core/utils/measureAlgorithmPerformance'

const QuickSort = ({
  sortedArray,
  randomArray,
  reverseSortedArray,
  elementsCount,
}: AlgorithmComponentProps): ReactElement => {
  const { bigOCaseTime, omegaCaseTime, thetaCaseTime } = measureAlgorithmPerformance({
    algorithm: quickSort,
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
      title='Быстрая сортировка'
    />
  )
}

export default QuickSort
