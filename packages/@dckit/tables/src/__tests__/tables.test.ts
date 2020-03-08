import { screen, render } from '@testing-library/react'
import { app } from './App'

describe('tables', () => {
  it('should render', async () => {
    render(app)
    expect(screen.getByText('table')).toBeDefined()
  })
})
