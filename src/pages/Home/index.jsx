import React from 'react'

import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'

import ContactList from '@/components/ContactList/index.jsx'

import '@/styles/HomePage.scss'

const list = [
  {
    _id: '62466955a1686100160b60b6',
    firstName: 'my cool',
    lastName: 'last nameee',
    email: 'cool@email.com',
    phone: '3502621870',
    createdAt: '2022-04-01T02:54:13.918Z',
    updatedAt: '2022-04-30T21:16:42.571Z',
    __v: 0,
    id: '62466955a1686100160b60b6'
  },
  {
    _id: '62466e37a1686100160b60b8',
    firstName: 'wq3',
    lastName: 'wq',
    email: 'angel_wwguemez07@hotmail.com',
    phone: '12345678',
    createdAt: '2022-04-01T03:15:03.681Z',
    updatedAt: '2022-04-30T01:04:11.361Z',
    __v: 0,
    id: '62466e37a1686100160b60b8'
  }
]

const HomePage = () => {
  return (
    <div id='home-page'>
      <ContactList contacts={list} />
      <Fab className='fab' color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </div>
  )
}

export default HomePage
