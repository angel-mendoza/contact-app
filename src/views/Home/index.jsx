import React, { useEffect, useState } from 'react'
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'

import ContactList from '@/components/ContactList'
import PageComponent from '@/components/PageComponent'

import API from '@/utils/axios'

const HomePage = () => {
  const [stateContact, setStateContact] = useState({
    count: 0,
    currentPage: 1,
    perPage: 0,
    results: [],
    totalPages: 0
  })

  const getData = async () => {
    const response = await API.get('contacts')
    setStateContact(response.data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <PageComponent title="My contact list">
      <ContactList contacts={stateContact.results} />
      <Fab className='fab' color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </PageComponent>
  )
}

export default HomePage
