import React, { useEffect } from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

import { useParams } from 'react-router-dom'

import { useDispatch, useSelector } from '@/store'
import { setMessageContact, getOneContact } from '@/slices/contact'

import PageComponent from '@/components/PageComponent'
import ContactError from '@/components/ContactError'
import DeleteContactSkeleton from '@/components/DeleteContactSkeleton'
import DeleteContactForm from '@/components/DeleteContactForm'
import AlertMessage from '@/components/AlertMessage'

const DeleteContactPage = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const stateContact = useSelector((state) => state.contacts)

  const hideAlert = () => {
    dispatch(setMessageContact(null))
  }

  useEffect(() => {
    if (!stateContact.contactSelected) {
      dispatch(getOneContact(id))
    }
  }, [])

  const showError = () => {
    if (stateContact.error) {
      return (
        <Grid item xs={12}>
          <ContactError />
        </Grid>
      )
    }
  }

  return (
    <PageComponent>
      { stateContact.message && <AlertMessage message={stateContact.message} hide={() => hideAlert()} /> }
        <Grid container direction="row" justifyContent="center">
          <Grid item xs={12} md={4} >
            <Card sx={{ minWidth: '100%' }}>
              <CardContent>
                { showError() }
                { stateContact.loading ? <DeleteContactSkeleton /> : <DeleteContactForm /> }
              </CardContent>
            </Card>
          </Grid>
        </Grid>
    </PageComponent>
  )
}

export default DeleteContactPage
