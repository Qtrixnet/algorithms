type SortFunction = (array: number[]) => number[]

export const sortingAlgorithmTestTemplate = (sortFunction: SortFunction): void => {
  it('should return empty array', () => {
    const result = sortFunction([])

    expect(result).toEqual([])
  })

  it('should return array with one element', () => {
    const result = sortFunction([1])

    expect(result).toEqual([1])
  })

  it('should return array with two elements', () => {
    const result = sortFunction([2, 1])

    expect(result).toEqual([1, 2])
  })

  it('should return sorted array', () => {
    const result = sortFunction([4, 5, 1, 3, 2])

    expect(result).toEqual([1, 2, 3, 4, 5])
  })

  it('should return sorted array with zero', () => {
    const result = sortFunction([4, 5, 1, 3, 2, 0])

    expect(result).toEqual([0, 1, 2, 3, 4, 5])
  })

  it('should return sorted array with negative number', () => {
    const result = sortFunction([4, 5, 1, 3, 2, -1, 0])

    expect(result).toEqual([-1, 0, 1, 2, 3, 4, 5])
  })

  it('should return sorted array consisting only of negative numbers', () => {
    const result = sortFunction([-10, -13, -5])

    expect(result).toEqual([-13, -10, -5])
  })

  it('should return sorted array with repeated elements', () => {
    const result = sortFunction([3, 1, 2, 1, 3])

    expect(result).toEqual([1, 1, 2, 3, 3])
  })

  it('should return already sorted array as is', () => {
    const result = sortFunction([1, 2, 3, 4, 5])

    expect(result).toEqual([1, 2, 3, 4, 5])
  })

  it('should return reversed array in sorted order', () => {
    const result = sortFunction([5, 4, 3, 2, 1])

    expect(result).toEqual([1, 2, 3, 4, 5])
  })

  it('should handle large arrays correctly', () => {
    const largeArray = Array.from({ length: 100000 }, (_, i) => 100000 - i)

    const result = sortFunction(largeArray)

    expect(result).toEqual(Array.from({ length: 100000 }, (_, i) => i + 1))
  })
}
