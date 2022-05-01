// import React, { lazy } from 'react'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from '@/containers/Layout.jsx'

import Home from '@/pages/Home/index.jsx'
import NotFound from '@/pages/NotFound/index.jsx'

import '@/styles/Global.scss'

const App = () => {
  return (
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
  )
}

// const routes = [
//   {
//     exact: true,
//     path: '/',
//     component: lazy(() => import('@/pages/Home/index.jsx'))
//   },
//   {
//     exact: false,
//     path: '*',
//     component: lazy(() => import('@/pages/NotFound/index.jsx'))
//   }
// ]

export default App
