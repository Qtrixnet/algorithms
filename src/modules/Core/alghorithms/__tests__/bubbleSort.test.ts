import { bubbleSort } from '@/modules/Core/alghorithms/bubbleSort'

describe('bubbleSort', () => {
  it('should return empty array', () => {
    const result = bubbleSort([])

    expect(result).toEqual([])
  })

  it('should return array with one element', () => {
    const result = bubbleSort([1])

    expect(result).toEqual([1])
  })

  it('should return sorted array', () => {
    const result = bubbleSort([4, 5, 1, 3, 2])

    expect(result).toEqual([1, 2, 3, 4, 5])
  })

  it('should return sorted array with zero', () => {
    const result = bubbleSort([4, 5, 1, 3, 2, 0])

    expect(result).toEqual([0, 1, 2, 3, 4, 5])
  })

  it('should return sorted array with negative numbers', () => {
    const result = bubbleSort([4, 5, 1, 3, 2, -1, 0])

    expect(result).toEqual([-1, 0, 1, 2, 3, 4, 5])
  })

  it('should return sorted array consisting only of negative numbers', () => {
    const result = bubbleSort([-10, -13, -5])

    expect(result).toEqual([-13, -10, -5])
  })
})
