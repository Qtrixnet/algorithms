import { cx } from 'class-variance-authority'
import { ReactElement } from 'react'

import { BinarySearch } from '@/modules/Core/components/BinarySearch'
import { BubbleSort } from '@/modules/Core/components/BubbleSort'
import { SelectionSort } from '@/modules/Core/components/SelectionSort'
import { generateUnsortedArr } from '@/modules/Core/utils/generateUnsortedArr'

const homeClassName = cx(
  // Блочная модель
  'flex flex-col gap-4',
)

const TEST_ARRAY_LENGTH = 50_000
const TEST_ARRAY = generateUnsortedArr(TEST_ARRAY_LENGTH)

const Home = (): ReactElement => {
  return (
    <section className={homeClassName}>
      <BubbleSort array={TEST_ARRAY} title='Сортировка пузырьком' />
      <SelectionSort array={TEST_ARRAY} title='Сортировка выбором' />
      <BinarySearch array={TEST_ARRAY} title='Бинарный поиск' />
    </section>
  )
}

export default Home
