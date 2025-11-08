import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from 'react-router-dom'

import { Root, Home, NotFound, Presentation } from '../pages'
import { Redirect404 } from '../components/common'
import './stylesheets.css'

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/epresentation' element={<Root />}>
            <Route exact index element={<Home />} />
            <Route path='presentations/:presentationId'  element={<Presentation />} />
            <Route path='not_found' element={<NotFound />} />
          </Route>
          <Route path='*'  element={<Redirect404 />} />
        </Routes>
      </Router>
    </div>
  )
}
