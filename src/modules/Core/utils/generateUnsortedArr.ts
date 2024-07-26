export const generateUnsortedArr = (length: number): number[] => {
  return Array.from({ length: length }, (_, i) => length - i)
}
