import { log } from 'node:util'

import { SearchingAlgorithm, SortingAlgorithm } from '@/modules/Algorithm/types/types'

type MeasureTime = (algorithm: SortingAlgorithm | SearchingAlgorithm, array: number[], target: number | null) => number

function isSortingAlgorithm(algorithm: SortingAlgorithm | SearchingAlgorithm): algorithm is SortingAlgorithm {
  return (algorithm as SortingAlgorithm).length === 1
}

function isSearchingAlgorithm(algorithm: SortingAlgorithm | SearchingAlgorithm): algorithm is SearchingAlgorithm {
  return (algorithm as SearchingAlgorithm).length === 2
}

const measureTime: MeasureTime = (algorithm, array, target) => {
  const iterations = 10
  let totalTime = 0

  for (let i = 0; i < iterations; i++) {
    const arrayCopy = [...array]

    const start = performance.now()

    if (typeof target === 'number' && isSearchingAlgorithm(algorithm)) {
      algorithm(arrayCopy, target)
    } else if (isSortingAlgorithm(algorithm)) {
      algorithm(arrayCopy)
    } else {
      throw new Error('Invalid algorithm or missing target for searching algorithm')
    }

    const end = performance.now()
    totalTime += end - start
  }

  return totalTime / iterations
}

type MeasureAlgorithmPerformanceParams = {
  algorithm: SearchingAlgorithm | SortingAlgorithm
  isSearching: boolean
  randomArray: number[]
  reverseSortedArray: number[]
  sortedArray: number[]
}

type MeasureAlgorithmPerformance = ({
  algorithm,
  randomArray,
  reverseSortedArray,
  sortedArray,
  isSearching,
}: MeasureAlgorithmPerformanceParams) => {
  bigOCaseTime: number
  omegaCaseTime: number
  thetaCaseTime: number
}

export const measureAlgorithmPerformance: MeasureAlgorithmPerformance = ({
  algorithm,
  sortedArray,
  randomArray,
  reverseSortedArray,
  isSearching,
}) => {
  const omegaCaseTime = measureTime(algorithm, sortedArray, isSearching ? 1000 : null)
  const thetaCaseTime = measureTime(algorithm, randomArray, isSearching ? 1000 : null)
  const bigOCaseTime = measureTime(algorithm, reverseSortedArray, isSearching ? 1000 : null)

  return {
    bigOCaseTime,
    omegaCaseTime,
    thetaCaseTime,
  }
}
