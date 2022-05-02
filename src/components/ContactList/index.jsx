import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import ContactSkeleton from '@/components/ContactSkeleton'
import ContactError from '@/components/ContactError'
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

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        { loadingSkeleton() }
        { showError() }
        { props.children }
      </Grid>
    </Box>
  )
}

export default ContactList
