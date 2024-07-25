import { cx } from 'class-variance-authority'
import { ReactElement } from 'react'

const homeClassName = cx(
  // Блочная модель
  'm-auto',
)

const titleClassName = cx('text-5xl')

const Home = (): ReactElement => {
  return (
    <section className={homeClassName}>
      <h1 className={titleClassName}>Algorithms</h1>
    </section>
  )
}

export default Home
