import * as React from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { red } from '@mui/material/colors'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MailIcon from '@mui/icons-material/Mail'
import PhoneIcon from '@mui/icons-material/Phone'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import { useNavigate } from 'react-router-dom'

import { setContactSelected } from '@/slices/contact'
import { useDispatch } from '@/store'

import { formateDate } from '@/utils/moment'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest
  })
}))

const ContactCard = ({ contact }) => {
  const [expanded, setExpanded] = React.useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  const onHandleDelete = contact => {
    dispatch(setContactSelected(contact))
    navigate(`/contact/${contact.id}/remove`)
  }

  const onHandleEdit = contact => {
    dispatch(setContactSelected(contact))
    navigate(`/contact/${contact.id}/edit`)
  }

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            { contact.firstName.substr(0, 1) }
          </Avatar>
        }
        title={`${contact.firstName} ${contact.lastName}`}
        subheader={ formateDate(contact.createdAt) }
      />
      <CardActions disableSpacing>
        <IconButton
          onClick={() => onHandleDelete(contact)}
          aria-label="remove this contact"
        >
          <DeleteForeverIcon />
        </IconButton>
        <IconButton
          onClick={() => onHandleEdit(contact)}
          aria-label="edict this contact"
        >
          <BorderColorIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            <MailIcon /> {contact.email}
          </Typography>
          <Typography paragraph>
            <PhoneIcon /> {contact.phone}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}

export default ContactCard
