import React from 'react'
import Alert from '@mui/material/Alert'

const AlertMessage = (props) => {
  return (
    <Alert sx={{ my: '1rem' }} severity={props.message.severity} onClose={() => props.hide()}>{props.message.data}</Alert>
  )
}
export default AlertMessage
