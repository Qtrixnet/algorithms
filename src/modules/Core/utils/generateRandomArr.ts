export const generateRandomArr = (length: number = 0): number[] => {
  if (length < 1) return []

  const arr = []

  arr.length = length

  for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.floor(Math.random() * arr.length)
  }

  return arr
}
