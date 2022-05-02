import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import ContactSkeleton from '@/components/ContactSkeleton'
import ContactError from '@/components/ContactError'
import ContactEmpty from '@/components/ContactEmpty'
import { generateRandonArray } from '@/utils/randomElement'

const ContactList = (props) => {
  const arr = generateRandonArray()

  const loadingSkeleton = () => {
    if (props.contacts.loading && !props.contacts.error) {
      return (
        <>
          {
          arr.map(randon => (
            <Grid key={randon} item xs={12} md={4}>
              <ContactSkeleton />
            </Grid>
          ))
          }
        </>
      )
    }
  }

  const showError = () => {
    if (!props.contacts.loading && props.contacts.error) {
      return (
        <Grid item xs={12}>
          <ContactError />
        </Grid>
      )
    }
  }

  const contactListEmpty = () => {
    if (!props.contacts.loading && !props.contacts.error && props.contacts.results.length <= 0) {
      return (
        <Grid item xs={12}>
          <ContactEmpty />
        </Grid>
      )
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        { loadingSkeleton() }
        { showError() }
        { contactListEmpty() }
        { props.children }
      </Grid>
    </Box>
  )
}

export default ContactList
