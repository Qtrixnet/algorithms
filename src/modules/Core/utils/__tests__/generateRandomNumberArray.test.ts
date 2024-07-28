import { generateRandomNumberArray } from '@/modules/Core/utils/generateRandomNumberArray'

describe('generateRandomNumberArray', () => {
  it('should generate random array with positive length', () => {
    const result = generateRandomNumberArray(5)

    expect(result).toHaveLength(5)
  })

  it('should generate empty array with zero length', () => {
    const result = generateRandomNumberArray(0)

    expect(result).toEqual([])
  })

  it('should generate empty array with negative length', () => {
    const result = generateRandomNumberArray(-1)

    expect(result).toEqual([])
  })
})
