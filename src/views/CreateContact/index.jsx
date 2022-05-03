import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

import PageComponent from '@/components/PageComponent'
import ContactCreateForm from '@/components/ContactForm'

const CreateContactPage = () => {
  return (
    <PageComponent>
        <Grid container direction="row" justifyContent="center">
          <Grid item xs={12} md={4} >
            <Card sx={{ minWidth: '100%' }}>
              <CardContent>
                <ContactCreateForm />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
    </PageComponent>
  )
}

export default CreateContactPage
