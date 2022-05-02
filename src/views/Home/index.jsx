import React, { useEffect } from 'react'
import { Link as RouterLink } from 'react-router-dom'

import Pagination from '@mui/material/Pagination'
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'

import ContactList from '@/components/ContactList'
import ContactItem from '@/components/ContactItem'
import PageComponent from '@/components/PageComponent'
import AlertMessage from '@/components/AlertMessage'

import { useDispatch, useSelector } from '@/store'
import { getContact, setMessageContact } from '@/slices/contact'

const HomePage = () => {
  const dispatch = useDispatch()
  const stateContact = useSelector((state) => state.contacts)

  const initialiceData = () => {
    dispatch(getContact(stateContact.currentPage))
  }

  const getData = (value) => {
    dispatch(getContact(value))
  }

  const handleChangePagination = (event, newPage) => {
    getData(newPage)
  }

  const hideAlert = () => {
    dispatch(setMessageContact(null))
  }

  useEffect(() => {
    initialiceData()
  }, [])

  return (
    <PageComponent>
      { stateContact.message && <AlertMessage message={stateContact.message} hide={() => hideAlert()} /> }
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
      <Pagination className='pagination' xs={12} count={stateContact.totalPages} page={stateContact.currentPage} onChange={handleChangePagination} />
    </PageComponent>
  )
}

export default HomePage
