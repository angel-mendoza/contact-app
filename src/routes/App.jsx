// import React, { lazy } from 'react'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from '@/store'

import Layout from '@/containers/Layout.jsx'

import Home from '@/views/Home'
import CreateContact from '@/views/CreateContact'
import EditContact from '@/views/EditContact'
import DeleteContact from '@/views/DeleteContact'
import NotFound from '@/views/NotFound'

import '@/styles/Global.scss'

const App = () => {
  return (
  <Provider store={store}>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/create" element={<CreateContact />} />
          <Route exact path="/contact/:id/remove" element={<DeleteContact />} />
          <Route exact path="/contact/:id/edit" element={<EditContact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </Provider>
  )
}

export default App
