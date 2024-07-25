import { binarySearch } from '@/modules/Core/alghorithms/binarySearch'

describe('binarySearch', () => {
  it('should return null from empty array', () => {
    const result = binarySearch([], 10)

    expect(result).toBe(null)
  })

  it('should return correct element index', () => {
    const result = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)

    expect(result).toBe(2)
  })

  it('should return null of element is not found', () => {
    const result = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 100)

    expect(result).toBe(null)
  })
})
