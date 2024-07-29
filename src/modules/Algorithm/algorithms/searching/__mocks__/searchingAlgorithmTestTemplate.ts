type SearchFunction = (array: number[], target: number) => number | null

export const searchingAlgorithmTestTemplate = (searchFunction: SearchFunction): void => {
  it('should return null from empty array', () => {
    const result = searchFunction([], 10)

    expect(result).toBe(null)
  })

  it('should return correct element index', () => {
    const result = searchFunction([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)

    expect(result).toBe(2)
  })

  it('should return null of element is not found', () => {
    const result = searchFunction([1, 2, 3, 4, 5, 6, 7, 8, 9], 100)

    expect(result).toBe(null)
  })

  it('should return the first occurrence index of a repeated element', () => {
    const result = searchFunction([1, 2, 3, 3, 4, 5, 6, 7, 8, 9], 3)

    expect(result).toBe(2)
  })

  it('should return correct index for the first element', () => {
    const result = searchFunction([1, 2, 3, 4, 5, 6, 7, 8, 9], 1)

    expect(result).toBe(0)
  })

  it('should return correct index for the last element', () => {
    const result = searchFunction([1, 2, 3, 4, 5, 6, 7, 8, 9], 9)

    expect(result).toBe(8)
  })

  it('should return correct index in an array with one element', () => {
    const result = searchFunction([1], 1)

    expect(result).toBe(0)
  })

  it('should return null if element is not found in an array with one element', () => {
    const result = searchFunction([1], 2)

    expect(result).toBe(null)
  })

  it('should return correct index in an unsorted array', () => {
    const result = searchFunction([4, 2, 1, 3, 5], 3)

    expect(result).toBe(3)
  })
}
