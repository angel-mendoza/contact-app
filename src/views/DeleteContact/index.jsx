import React, { useEffect } from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

import { useParams } from 'react-router-dom'

import { useDispatch, useSelector } from '@/store'
import { setMessageContact, getOneContact } from '@/slices/contact'

import PageComponent from '@/components/PageComponent'
import ContactFormSkeleton from '@/components/ContactFormSkeleton'
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

  return (
    <PageComponent>
      { stateContact.message && <AlertMessage message={stateContact.message} hide={() => hideAlert()} /> }
        <Grid container direction="row" justifyContent="center">
          <Grid item xs={12} md={4} >
            <Card sx={{ minWidth: '100%' }}>
              <CardContent>
                { stateContact.loading ? <ContactFormSkeleton /> : <DeleteContactForm /> }
              </CardContent>
            </Card>
          </Grid>
        </Grid>
    </PageComponent>
  )
}

export default DeleteContactPage
