import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { SearchBox } from './SearchBox'
import userEvent from '@testing-library/user-event'

const handleSearch = jest.fn((value) => {})
const handleKeyUp = jest.fn((value) => {})

describe('Search input field', () => {
  it('updates on change', () => {
    render(
      <SearchBox
        formError={null}
        handleKeyUp={handleKeyUp}
        handleSearch={handleSearch}
        isSubmitting={false}
      />
    )

    const searchField = screen.getByTestId('search-box') as HTMLInputElement
    userEvent.type(searchField, 'LSU')
    expect(searchField.value).toBe('LSU')
  })

  it('displays a loading state when isSubmitting is true', async () => {
    render(
      <SearchBox
        formError={null}
        handleKeyUp={handleKeyUp}
        handleSearch={handleSearch}
        isSubmitting={true}
      />
    )

    const circularProgress = screen.getByTestId('circular-progress')
    expect(circularProgress).toBeInTheDocument()
  })

  it('submits the field when the user presses enter', async () => {
    render(
      <SearchBox
        formError={null}
        handleKeyUp={handleKeyUp}
        handleSearch={handleSearch}
        isSubmitting={true}
      />
    )

    const searchField = screen.getByTestId('search-box') as HTMLInputElement
    fireEvent.keyUp(searchField, {
      key: 'Enter',
      code: 'Enter',
      charCode: 13,
    })
    expect(handleKeyUp).toHaveBeenCalled()
  })
})
