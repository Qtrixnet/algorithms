import { ReactElement } from 'react'

import { linearSearch } from '@/modules/Core/alghorithms/linearSearch'
import { ResultView } from '@/modules/Core/components/ResultView'
import { AlgorithmComponentProps } from '@/modules/Core/types/interfaces'

const LinearSearch = ({ array }: AlgorithmComponentProps): ReactElement => {
  array.pop()
  array.push(100)

  const start = performance.now()
  linearSearch(array, 0)
  const end = performance.now()

  return <ResultView elements={array.length} time={end - start} title='Линейный поиск' />
}

export default LinearSearch
