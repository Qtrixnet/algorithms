import { cx } from 'class-variance-authority'
import { ReactElement } from 'react'

import { BinarySearch } from '@/modules/Core/components/BinarySearch'
import { BubbleSort } from '@/modules/Core/components/BubbleSort'
import { InsertionSort } from '@/modules/Core/components/InsertionSort'
import { QuickSort } from '@/modules/Core/components/QuickSort'
import { SelectionSort } from '@/modules/Core/components/SelectionSort'
import { generateUnsortedArr } from '@/modules/Core/utils/generateUnsortedArr'

import ArrayPrototypeSort from '../modules/Core/components/ArrayPrototypeSort/ArrayPrototypeSort'

const homeClassName = cx(
  // Блочная модель
  'flex flex-col gap-4',
)

const titleClassName = cx(
  // Блочная модель
  'p-4',
  // Оформление
  'bg-blue-900',
  // Типографика
  'font-bold text-xl',
)

const TEST_ARRAY_LENGTH = 50_000
const TEST_ARRAY = generateUnsortedArr(TEST_ARRAY_LENGTH)

const Home = (): ReactElement => {
  return (
    <section className={homeClassName}>
      <h2 className={titleClassName}>Алгоритмы сортировки</h2>
      <BubbleSort array={TEST_ARRAY} title='Сортировка пузырьком' />
      <SelectionSort array={TEST_ARRAY} title='Сортировка выбором' />
      <InsertionSort array={TEST_ARRAY} title='Сортировка вставками' />
      <QuickSort array={TEST_ARRAY} title='Быстрая сортировка' />
      <ArrayPrototypeSort array={TEST_ARRAY} title='Array.prototype.sort()' />
      <h2 className={titleClassName}>Алгоритмы поиска</h2>
      <BinarySearch array={TEST_ARRAY} title='Бинарный поиск' />
    </section>
  )
}

export default Home
