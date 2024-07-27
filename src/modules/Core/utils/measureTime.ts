export const measureTime = (sortFunction: (array: number[]) => number[], array: number[]): number => {
  const start = performance.now()

  sortFunction(array)

  const end = performance.now()

  return end - start
}
