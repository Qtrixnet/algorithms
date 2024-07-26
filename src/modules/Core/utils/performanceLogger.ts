interface Params {
  algorithmName: 'bubble-sort' | 'binary-search' | 'selection-sort'
  array: number[]
  time: number
}

const styles = `
    padding: 8px;
    margin: 4px 0;
    background-color: white;
    border-radius: 8px;
    color: black;
    font-size: 18px;
    font-weight: bold;
`

export const performanceLogger = ({ algorithmName, time, array }: Params): void => {
  setTimeout(() => {
    console.log(`%c ${algorithmName.toUpperCase()}: Time: ${time} мс., Elements: ${array.length}`, styles)
  }, 0)
}
