import { SearchingAlgorithm, SortingAlgorithm } from '@/modules/Core/types/types'

type MeasureTime = (algorithm: SortingAlgorithm | SearchingAlgorithm, array: number[], target: number | null) => number

function isSortingAlgorithm(algorithm: SortingAlgorithm | SearchingAlgorithm): algorithm is SortingAlgorithm {
  return (algorithm as SortingAlgorithm).length === 1
}

function isSearchingAlgorithm(algorithm: SortingAlgorithm | SearchingAlgorithm): algorithm is SearchingAlgorithm {
  return (algorithm as SearchingAlgorithm).length === 2
}

const measureTime: MeasureTime = (algorithm, array, target) => {
  const start = performance.now()

  if (isSearchingAlgorithm(algorithm) && typeof target === 'number') {
    algorithm(array, target)
  } else if (isSortingAlgorithm(algorithm)) {
    algorithm(array)
  } else {
    throw new Error('Invalid algorithm or missing target for searching algorithm')
  }

  return performance.now() - start
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
  const omegaCaseTime = measureTime(algorithm, sortedArray, isSearching ? 1 : null)
  const thetaCaseTime = measureTime(algorithm, randomArray, isSearching ? 1 : null)
  const bigOCaseTime = measureTime(algorithm, reverseSortedArray, isSearching ? 1 : null)

  return {
    bigOCaseTime,
    omegaCaseTime,
    thetaCaseTime,
  }
}
