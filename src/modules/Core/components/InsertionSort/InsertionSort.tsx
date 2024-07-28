import { ReactElement } from 'react'

import { insertionSort } from '@/modules/Core/alghorithms/insertionSort'
import { ResultView } from '@/modules/Core/components/ResultView'
import { AlgorithmComponentProps } from '@/modules/Core/types/interfaces'
import { measureAlgorithmPerformance } from '@/modules/Core/utils/measureAlgorithmPerformance'

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

  return (
    <ResultView
      bigOCase={{ time: bigOCaseTime, notation: '?' }}
      description='?'
      elements={elementsCount}
      omegaCase={{ time: omegaCaseTime, notation: '?' }}
      thetaCase={{ time: thetaCaseTime, notation: '?' }}
      title='Сортировка вставками'
    />
  )
}

export default InsertionSort
