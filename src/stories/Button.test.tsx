import { render, screen } from '@testing-library/react'
import React from 'react'

import { Button } from './Button'

// adjust this import to your actual Button component path

describe('Button', () => {
  test('renders Button component', () => {
    render(<Button label="button" />)

    // Replace 'Button' with the actual text or label in your Button component
    expect(screen.getByText('button')).toBeInTheDocument()
  })
})
