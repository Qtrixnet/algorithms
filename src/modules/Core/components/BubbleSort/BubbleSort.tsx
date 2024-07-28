import { ReactElement } from 'react'

import { bubbleSort } from '@/modules/Core/alghorithms/bubbleSort'
import { ResultView } from '@/modules/Core/components/ResultView'
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

  return (
    <ResultView
      bigOCase={{ time: bigOCaseTime, notation: 'n^2' }}
      description={`наиболее эффективен на уже отсортированных или почти отсортированных массивах, 
                    но его производительность значительно снижается на больших наборах данных с 
                    хаотическим расположением элементов.`}
      elements={elementsCount}
      omegaCase={{ time: omegaCaseTime, notation: 'n' }}
      thetaCase={{ time: thetaCaseTime, notation: 'n^2' }}
      title='Сортировка пузырьком'
    />
  )
}

export default BubbleSort
