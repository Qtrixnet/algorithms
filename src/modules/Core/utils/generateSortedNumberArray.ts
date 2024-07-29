export const generateSortedNumberArray = (length: number): number[] => {
  if (length < 1) return []

  return Array.from({ length: length }, (_, i) => i + 1)
}
