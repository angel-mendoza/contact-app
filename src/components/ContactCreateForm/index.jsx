import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { useForm } from 'react-hook-form'

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
  const theme = useTheme()
  const mobileDevice = useMediaQuery(theme.breakpoints.down('sm'))

  const { register, handleSubmit, formState: { errors } } = useForm()
  const onSubmit = data => console.log(data)

  return (
    <div id='contact-create-form'>
      <Box
        onSubmit={handleSubmit(onSubmit)}
        component="form"
        sx={{ maxWidth: '100%' }}
        noValidate
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
            error={ errors.firstName ? true : false }
            className='app-input'
            fullWidth
            id="input-first-name"
            label="Fisrt Name"
            name='firstName'
            helperText={ errors.firstName?.message }
            {...register('firstName', {
              required: {
                value: true,
                message: 'The first name is required'
              }
            })}
          />
          <TextField
            error={ errors.lastName ? true : false }
            className='app-input'
            fullWidth
            id="input-last-name"
            label="Last Name"
            name='lastName'
            helperText={ errors.lastName?.message }
            {...register('lastName', {
              required: {
                value: true,
                message: 'The last name is required'
              }
            })}
          />
          <TextField
            error={ errors.email ? true : false }
            className='app-input'
            fullWidth
            id="input-email"
            label="Email"
            name='email'
            helperText={ errors.email?.message }
            {...register('email', {
              required: {
                value: true,
                message: 'The email is required'
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'The format is not correct'
              }
            })}
          />
          <TextField
            error={ errors.phone ? true : false }
            className='app-input'
            fullWidth
            id="input-phone"
            label="Phone Number"
            name='phone'
            helperText={ errors.phone?.message }
            {...register('phone', {
              required: {
                value: true,
                message: 'The phone name is required'
              }
            })}
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
