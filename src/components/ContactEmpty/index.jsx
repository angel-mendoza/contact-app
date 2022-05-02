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

const ContactEmpty = () => {
  const theme = useTheme()
  const mobileDevice = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <div id='not-found-page'>
      <Container maxWidth="lg">
        <Typography
          align="center"
          variant={mobileDevice ? 'h4' : 'h1'}
          color="textPrimary"
        >
          You have no contacts
        </Typography>
        <Typography
          align="center"
          variant="subtitle2"
          color="textSecondary"
        >
          try to add some by pressing the following buttonion.
        </Typography>
        <Box
          mt={6}
          display="flex"
          justifyContent="center"
        >
          <img
            alt="Under development"
            src={require('@/assets/images/undraw_empty_xct9.svg')}
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
            to="/create"
            variant="outlined"
          >
            Add contact
          </Button>
        </Box>
      </Container>
    </div>
  )
}

export default ContactEmpty
