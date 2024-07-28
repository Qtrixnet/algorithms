export const measureTime = (sortFunction: (array: number[]) => number[], array: number[]): number => {
  const start = performance.now()

  sortFunction(array)

  return performance.now() - start
}
