export const linearSearch = (array: number[], target: number): number | null => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i
    }
  }

  return null
}
