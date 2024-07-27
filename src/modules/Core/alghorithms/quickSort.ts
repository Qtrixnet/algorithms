const swap = (items: number[], firstIndex: number, secondIndex: number): void => {
  const temp = items[firstIndex]
  items[firstIndex] = items[secondIndex]
  items[secondIndex] = temp
}

const partition = (items: number[], left: number, right: number): number => {
  const pivot = items[Math.floor((right + left) / 2)]

  let i = left
  let j = right

  while (i <= j) {
    while (items[i] < pivot) {
      i++
    }

    while (items[j] > pivot) {
      j--
    }

    if (i <= j) {
      swap(items, i, j)
      i++
      j--
    }
  }

  return i
}

export const quickSort = (array: number[], left: number = 0, right: number = array.length - 1): number[] => {
  let index

  if (array.length > 1) {
    index = partition(array, left, right)
    if (left < index - 1) {
      quickSort(array, left, index - 1)
    }
    if (index < right) {
      quickSort(array, index, right)
    }
  }
  return array
}
