import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css'
import Home from './Pages/Home/Home.jsx'
import About from './Pages/About/About.jsx'
import BookList from './Components/BookList/BookList.jsx'
import BookDetails from './Components/BookDetails/BookDetails.jsx'

const root = createRoot(document.getElementById('root'))

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/books" element={<BookList />} />
      <Route path="/books/:id" element={<BookDetails />} />
    </Routes>
  </Router>
)
