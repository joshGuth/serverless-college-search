import {
  FormControl,
  OutlinedInput,
  InputAdornment,
  CircularProgress,
  Typography,
} from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { FormError } from '../common/types'

type Props = {
  formError: FormError | null
  handleKeyUp: (event: React.KeyboardEvent<HTMLInputElement>) => void
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void
  isSubmitting: boolean
}
export const SearchBox: React.FC<Props> = ({
  formError,
  handleKeyUp,
  handleSearch,
  isSubmitting,
}) => {
  return (
    <FormControl variant="filled" fullWidth={true}>
      <OutlinedInput
        inputProps={{ 'data-testid': 'search-box' }}
        error={formError !== null}
        onKeyUp={handleKeyUp}
        onChange={handleSearch}
        id="searchField"
        startAdornment={
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        }
        endAdornment={
          isSubmitting && <CircularProgress data-testid="circular-progress" />
        }
        placeholder="Search by college name"
      />
      {formError && (
        <Typography variant="subtitle1" color="error">
          {formError.message}
        </Typography>
      )}
    </FormControl>
  )
}
