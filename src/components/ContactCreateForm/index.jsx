import React, { useRef } from 'react'
import { Link as RouterLink } from 'react-router-dom'

import {
  Box,
  Button,
  useTheme,
  TextField,
  Typography,
  useMediaQuery
} from '@mui/material'

import '@/styles/ContactCreateForm.scss'

const ContactCreateForm = () => {
  const form = useRef(null)
  const theme = useTheme()
  const mobileDevice = useMediaQuery(theme.breakpoints.down('sm'))

  const submit = event => {
    event.preventDefault()
    const formData = new FormData(form.current)
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: formData.get('phone')
    }
    console.log(data)
  }

  return (
    <div id='contact-create-form'>
      <Box
        onSubmit={submit}
        component="form"
        sx={{ maxWidth: '100%' }}
        noValidate
        ref={form}
        autoComplete="off"
      >
        <Typography
          align="center"
          variant={mobileDevice ? 'h6' : 'h4'}
        >
          Add new contact here
        </Typography>
        <div>
          <TextField
            className='app-input'
            fullWidth
            id="input-first-name"
            label="Fisrt Name"
            name='firstName'
          />
          <TextField
            className='app-input'
            fullWidth
            id="input-last-name"
            label="Last Name"
            name='lastName'
          />
          <TextField
            className='app-input'
            fullWidth
            id="input-email"
            label="Email"
            name='email'
          />
          <TextField
            className='app-input'
            fullWidth
            id="input-phone"
            label="Phone Number"
            name='phone'
          />
        </div>
        <Button
          color="primary"
          component={RouterLink}
          to="/"
          variant="outlined"
        >
          Go back
        </Button>
        <Button
          color="secondary"
          variant="outlined"
          type='submit'
        >
          Add contact
        </Button>
      </Box>
    </div>
  )
}

export default ContactCreateForm
