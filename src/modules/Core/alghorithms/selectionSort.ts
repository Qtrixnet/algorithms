export const selectionSort = (array: number[]): number[] => {
  const { length } = array

  if (length <= 1) return array

  for (let i = 0; i < length - 1; i++) {
    let minIndex = i

    for (let j = i + 1; j < length; j++) {
      if (array[minIndex] > array[j]) {
        minIndex = j
      }
    }

    if (minIndex !== i) {
      const temp = array[i]
      array[i] = array[minIndex]
      array[minIndex] = temp
    }
  }

  return array
}
