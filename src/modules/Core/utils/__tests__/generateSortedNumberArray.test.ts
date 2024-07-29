import { generateSortedNumberArray } from '@/modules/Core/utils/generateSortedNumberArray'

describe('generateSortedNumberArray', () => {
  it('should generate random array with positive length', () => {
    const result = generateSortedNumberArray(5)

    expect(result).toEqual([1, 2, 3, 4, 5])
  })

  it('should generate empty array with zero length', () => {
    const result = generateSortedNumberArray(0)

    expect(result).toEqual([])
  })

  it('should generate empty array with negative length', () => {
    const result = generateSortedNumberArray(-1)

    expect(result).toEqual([])
  })
})
