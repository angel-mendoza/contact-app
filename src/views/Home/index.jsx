import React, { useEffect } from 'react'
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'

import ContactList from '@/components/ContactList'
import ContactItem from '@/components/ContactItem'
import PageComponent from '@/components/PageComponent'

// import API from '@/utils/axios'

import { useDispatch, useSelector } from '@/store'
import { getContact } from '../../slices/contact'

const HomePage = () => {
  const dispatch = useDispatch()
  const stateContact = useSelector((state) => state.contacts)
  // const [stateContact] = useState({
  //   count: 0,
  //   currentPage: 1,
  //   perPage: 0,
  //   results: [],
  //   totalPages: 0
  // })

  const getData = async () => {
    // const response = await API.get('contacts')
    // setStateContact(response.data)
    dispatch(getContact(stateContact.currentPage))
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <PageComponent title="My contact list">
      <ContactList contacts={stateContact}>
        {
          stateContact.results.map(contact => (
            <ContactItem key={contact._id} contact={contact} />
          ))
        }
      </ContactList>
      <Fab className='fab' color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </PageComponent>
  )
}

export default HomePage
