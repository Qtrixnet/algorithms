import { ReactElement } from 'react'

import { selectionSort } from '@/modules/Core/alghorithms/selectionSort'
import { ResultView } from '@/modules/Core/components/ResultView'
import { AlgorithmComponentProps } from '@/modules/Core/types/interfaces'
import { measureAlgorithmPerformance } from '@/modules/Core/utils/measureAlgorithmPerformance'

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

  return (
    <ResultView
      bigOCase={{ time: bigOCaseTime, notation: '?' }}
      description='?'
      elements={elementsCount}
      omegaCase={{ time: omegaCaseTime, notation: '?' }}
      thetaCase={{ time: thetaCaseTime, notation: '?' }}
      title='Сортировка выбором'
    />
  )
}

export default SelectionSort
