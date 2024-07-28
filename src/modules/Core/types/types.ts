export type SortingAlgorithm = (array: number[]) => number[]

export type SearchingAlgorithm = (array: number[], target: number) => number | null

type Notations = '1' | 'log*n' | 'n' | 'n*log*n' | 'n^2' | 'n!'

export type ComplexityNotation = {
  description: string
  notation: Notations
  time: number
}
