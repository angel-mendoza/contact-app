import React from 'react'
import { useNavigate } from 'react-router-dom'
// import { Link, useNavigate } from 'react-router-dom'
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

import { useSelector, useDispatch } from '@/store'
import { setContactSelected } from '@/slices/contact'

import '@/styles/DeleteContactForm.scss'

const DeleteContactForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const stateContact = useSelector((state) => state.contacts)

  const theme = useTheme()
  const mobileDevice = useMediaQuery(theme.breakpoints.down('sm'))

  const { register, handleSubmit, formState: { errors } } = useForm()

  const submit = async (data) => {
    console.log(data)
    // const res = await dispatch(createContact(data))
    // if (res.request.status === 200) {
    //   console.log(res)
    //   dispatch(setMessageContact({ severity: 'success', data: `The user ${res.data.firstName} ${res.data.lastName} was created correctly` }))
    //   navigate('/')
    // }
  }

  const goBack = () => {
    dispatch(setContactSelected(null))
    navigate(-1)
  }

  return (
    <div id='contact-delete-form'>
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
          Remove contact here
        </Typography>
        <Typography
          align="center"
          paragraph
        >
          to delete this item correctly type the full name of the contact
          <span>{` "${stateContact.contactSelected?.firstName} ${stateContact.contactSelected?.lastName}" ` }</span>
        </Typography>
        <div>
          <TextField
            error={ errors.fullName ? true : false }
            className='app-input'
            fullWidth
            id="input-full-name"
            label="Full Name"
            name='fullName'
            helperText={ errors.fullName?.message }
            {...register('fullName', {
              validate: value => value === `${stateContact.contactSelected?.firstName} ${stateContact.contactSelected?.lastName}` || 'The full name do not match',
              required: {
                value: true,
                message: 'The full name is required to delete contact'
              }
            })}
          />
        </div>
        <Button
          color="primary"
          variant="outlined"
          onClick={() => goBack()}
        >
          Go back
        </Button>
        <Button
          disabled={stateContact.loading}
          color="error"
          variant="outlined"
          type='submit'
        >
          { stateContact.loading && <CircularProgress size={20} /> } Remove contact
        </Button>
      </Box>
    </div>
  )
}

export default DeleteContactForm
