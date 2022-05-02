import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
  Box,
  Button,
  Container,
  Typography,
  useTheme,
  useMediaQuery
} from '@mui/material'

import '@/styles/NotFoundPage.scss'

const NotFoundPage = () => {
  const theme = useTheme()
  const mobileDevice = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <div id='not-found-page'>
      <Container maxWidth="lg">
        <Typography
          align="center"
          variant={mobileDevice ? 'h4' : 'h1'}
        >
          404: The page you are looking for isn’t here
        </Typography>
        <Typography
          align="center"
          variant="subtitle2"
          color="textSecondary"
        >
          You either tried some shady route or you
          came here by mistake. Whichever it is, try using the navigation.
        </Typography>
        <Box
          mt={6}
          display="flex"
          justifyContent="center"
        >
          <img
            alt="Under development"
            src={require('@/assets/images/undraw_page_not_found_su7k.svg')}
          />
        </Box>
        <Box
          mt={6}
          display="flex"
          justifyContent="center"
        >
          <Button
            color="secondary"
            component={RouterLink}
            to="/"
            variant="outlined"
          >
            Back to home
          </Button>
        </Box>
      </Container>
    </div>
  )
}

export default NotFoundPage
