import GoogleMap from '@/components/GoogleMap'
import axios from 'axios'
import type { NextPage } from 'next'
import { Alert, Container, Grid, Paper, Typography } from '@mui/material'
import { Theme } from '@/components/Theme'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { API_BASE_URL } from '@/common/constants'
import { College, CollegesResponse, FormError } from '@/common/types'
import { SearchBox } from '@/components/SearchBox'
import { useState } from 'react'

const Home: NextPage = () => {
  const [colleges, setColleges] = useState<College[] | null>(null)
  const [formError, setFormError] = useState<FormError | null>(null)
  const [requestError, setRequestError] = useState<string | null>(null)

  async function fetchColleges(searchTerm: string) {
    try {
      setIsSubmitting(true)
      const {
        data: { results },
      } = await axios.get<CollegesResponse>(
        `${API_BASE_URL}?school.name=${searchTerm}&api_key=${process.env.NEXT_PUBLIC_DATA_DOT_GOV_KEY}`,
        {
          headers: {
            Accept: 'application/json',
          },
        }
      )
      setRequestError(null)
      setColleges(results)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setRequestError(error.message)
      } else {
        console.log('unexpected error:', error)
        setRequestError('An unexpected error occured')
      }
    }
    setIsSubmitting(false)
  }

  const [searchTerm, setSearchTerm] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (searchTerm.length >= 3) {
        setFormError(null)
        fetchColleges(searchTerm)
      } else {
        setFormError({ message: 'Please enter a minimum of three characters' })
      }
    }
  }

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  return (
    <ErrorBoundary>
      <Theme>
        <Container maxWidth="md">
          <Paper sx={{ mt: 2, padding: 3 }}>
            {requestError && <Alert severity="error">{requestError}</Alert>}
            <Grid container flexDirection="column" spacing={3}>
              <Grid item>
                <Typography variant="h3" component="h5" sx={{ mt: 2 }}>
                  College Search
                </Typography>
              </Grid>
              <Grid item>
                <SearchBox
                  formError={formError}
                  handleKeyUp={handleKeyUp}
                  handleSearch={handleSearch}
                  isSubmitting={isSubmitting}
                />
              </Grid>
              <Grid item>
                <GoogleMap colleges={colleges} />
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Theme>
    </ErrorBoundary>
  )
}

export default Home
