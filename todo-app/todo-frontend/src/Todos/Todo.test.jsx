import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import Todo from './Todo'

test('renders', () => {
  const todo = {
    id: 1,
    text: 'Buy milk',
    done: false,
  }

  const handler = () => () => { }

  render(
    <Todo
      todo={todo}
      onClickDelete={handler}
      onClickComplete={handler}
    />
  )

  expect(screen.getByText('Buy milk')).toBeInTheDocument()
})
