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
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  </BrowserRouter>
  )
}

export default App
