import { cx } from 'class-variance-authority'
import { ReactElement } from 'react'

import { BubbleSort } from '@/modules/Core/components/BubbleSort'

const homeClassName = cx(
  // Блочная модель
  'm-auto',
)

const titleClassName = cx('text-5xl')

const Home = (): ReactElement => {
  const TestArraysLength = 1000

  return (
    <section className={homeClassName}>
      <h1 className={titleClassName}>Algorithms</h1>
      <BubbleSort length={TestArraysLength} />
    </section>
  )
}

export default Home
