import { ReactElement } from 'react'

import { binarySearch } from '@/modules/Core/alghorithms/binarySearch'
import { ResultView } from '@/modules/Core/components/ResultView'
import { AlgorithmComponentProps } from '@/modules/Core/types/interfaces'

const BinarySearch = ({ array, title }: AlgorithmComponentProps): ReactElement => {
  const start = performance.now()
  binarySearch(array, 100)
  const end = performance.now()

  return <ResultView elements={array.length} time={end - start} title={title} />
}

export default BinarySearch
