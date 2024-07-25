interface Params {
  algorithmName: 'bubble-sort'
  array: number[]
  time: number
}

const styles = `
    padding: 8px;
    margin: 16px 0;
    background-color: white;
    border-radius: 0px;
    color: black;
    font-size: 18px;
    font-weight: bold;
`

export const performanceLogger = ({ algorithmName, time, array }: Params): void => {
  console.log(
    `%c ${algorithmName.toUpperCase()}: Время сортировки: ${time.toFixed(10)} мс., Длина массива: ${array.length}`,
    styles,
  )
}
