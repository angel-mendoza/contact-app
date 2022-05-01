// import React, { lazy } from 'react'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from '@/store'

import Layout from '@/containers/Layout.jsx'

import Home from '@/views/Home'
import NotFound from '@/views/NotFound'

import '@/styles/Global.scss'

const App = () => {
  return (
  <Provider store={store}>
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* {
            routes.map((route, index) => (
              <Route key={index} exact={route.exact} path={route.path} element={<route.component />} />
            ))
          } */}
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </Provider>
  )
}

export default App
