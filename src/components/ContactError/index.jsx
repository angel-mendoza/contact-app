import React from 'react'
import {
  Box,
  Container,
  Typography,
  useTheme,
  useMediaQuery
} from '@mui/material'

import '@/styles/NotFoundPage.scss'

const ContactError = () => {
  const theme = useTheme()
  const mobileDevice = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <div id='not-found-page'>
      <Container maxWidth="lg">
        <Typography
          align="center"
          variant={mobileDevice ? 'h4' : 'h1'}
        >
          An error occurred while entering your contact information.
        </Typography>
        <Typography
          align="center"
          variant="subtitle2"
          color="textSecondary"
        >
          Try reloading the page or contact our customer service staff.
        </Typography>
        <Box
          mt={6}
          display="flex"
          justifyContent="center"
        >
          <img
            alt="Under development"
            src={require('@/assets/images/undraw_server_down_s4lk.svg')}
          />
        </Box>
      </Container>
    </div>
  )
}

export default ContactError
