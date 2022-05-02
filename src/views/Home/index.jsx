import React, { useEffect } from 'react'
import { Link as RouterLink } from 'react-router-dom'

import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'

import ContactList from '@/components/ContactList'
import ContactItem from '@/components/ContactItem'
import PageComponent from '@/components/PageComponent'
import '@/styles/PageComponent.scss'

import { useDispatch, useSelector } from '@/store'
import { getContact } from '@/slices/contact'

const HomePage = () => {
  const dispatch = useDispatch()
  const stateContact = useSelector((state) => state.contacts)

  const getData = async () => {
    dispatch(getContact(stateContact.currentPage))
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <PageComponent>
      <ContactList contacts={stateContact}>
        {
          stateContact.results.map(contact => (
            <ContactItem key={contact._id} contact={contact} />
          ))
        }
      </ContactList>
      <Fab
        className='fab'
        color="primary"
        aria-label="add"
        component={RouterLink}
        to="/create"
      >
        <AddIcon />
      </Fab>
    </PageComponent>
  )
}

export default HomePage
