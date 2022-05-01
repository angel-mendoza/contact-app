import React from 'react'

import {
  useTheme,
  Typography,
  useMediaQuery
} from '@mui/material'

import '@/styles/PageComponent.scss'

const PageComponent = (props) => {
  const theme = useTheme()
  const mobileDevice = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <div className='page-component'>
      <Typography
        align="left"
        variant={mobileDevice ? 'h5' : 'h4'}
      >
        {props.title}
      </Typography>
      {props.children}
    </div>
  )
}

export default PageComponent
