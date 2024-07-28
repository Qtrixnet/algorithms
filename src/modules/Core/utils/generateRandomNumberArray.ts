export const generateRandomNumberArray = (length: number = 0): number[] => {
  if (length < 1) return []

  return Array.from({ length }, () => Math.floor(Math.random() * length))
}
