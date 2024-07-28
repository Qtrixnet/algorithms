export type SortingAlgorithm = (array: number[]) => number[]

export type SearchingAlgorithm = (array: number[], target: number) => number | null

type Notations = 'n' | 'log*n' | 'n^2' | 'n*log*n' | '?'

export type ComplexityNotation = {
  description: string
  notation: Notations
  time: number
}
