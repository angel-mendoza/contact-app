import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

const ContactList = ({ children }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        { children }
      </Grid>
    </Box>
  )
}

export default ContactList
