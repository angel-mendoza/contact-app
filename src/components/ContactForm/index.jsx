import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import {
  Box,
  Button,
  Alert,
  useTheme,
  TextField,
  Typography,
  useMediaQuery,
  CircularProgress
} from '@mui/material'

import { useDispatch, useSelector } from '@/store'
import { createContact, editContact, setMessageContact } from '@/slices/contact'

import '@/styles/ContactCreateForm.scss'

const ContactCreateForm = ({ type, contact }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const stateContact = useSelector((state) => state.contacts)

  const theme = useTheme()
  const mobileDevice = useMediaQuery(theme.breakpoints.down('sm'))

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: contact
  })

  const newContact = async (data) => {
    const res = await dispatch(createContact(data))
    if (res.request.status === 200) {
      dispatch(setMessageContact({ severity: 'success', data: `The user ${res.data.firstName} ${res.data.lastName} was update correctly` }))
      navigate('/')
    }
  }

  const updateContact = async (data) => {
    const res = await dispatch(editContact(data))
    if (res.request.status === 200) {
      dispatch(setMessageContact({ severity: 'success', data: `The user ${res.data.firstName} ${res.data.lastName} was created correctly` }))
      navigate('/')
    }
  }

  const submit = (data) => {
    if (type === 'edit') {
      updateContact({ id: contact.id, data })
    } else {
      newContact(data)
    }
  }

  return (
    <div id='contact-create-form'>
      { stateContact.error && <Alert className='alert' severity="error">{ stateContact.error }</Alert> }
      <Box
        onSubmit={handleSubmit(submit)}
        component="form"
        sx={{ maxWidth: '100%' }}
        noValidate
        autoComplete="off"
      >
        <Typography
          align="center"
          variant={mobileDevice ? 'h6' : 'h4'}
        >
          { type === 'edit' ? 'Edit' : 'Add new' } contact here
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
          component={Link}
          to="/"
          variant="outlined"
        >
          Go back
        </Button>
        <Button
          disabled={stateContact.loading}
          color="secondary"
          variant="outlined"
          type='submit'
        >
          { stateContact.loading && <CircularProgress size={20} /> }
          { type === 'edit' ? 'Edit' : 'Add' } contact
        </Button>
      </Box>
    </div>
  )
}

export default ContactCreateForm
