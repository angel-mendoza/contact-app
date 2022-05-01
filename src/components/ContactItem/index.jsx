import React from 'react'
import Grid from '@mui/material/Grid'

import ContactCard from '@/components/ContactCard'

const ContactItem = ({ contact }) => {
  return (
    <Grid item xs={12} md={4}>
      <ContactCard contact={contact} />
    </Grid>
  )
}

export default ContactItem
