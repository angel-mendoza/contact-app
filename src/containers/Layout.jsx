import React from 'react'
import Grid from '@mui/material/Grid'

import NavbarApp from '../components/navbar/index.jsx'

const LayoutApp = ({ children }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <NavbarApp />
        <div id="layout-app">
          { children }
        </div>
      </Grid>
    </Grid>
  )
}

export default LayoutApp
