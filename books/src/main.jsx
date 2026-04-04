import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css'
import Home from './Pages/Home/Home.jsx'
import About from './Pages/About/About.jsx'
import Header from './Components/Header/Header.jsx'
import BookList from './Components/BookList/BookList.jsx'
import BookDetails from './Components/BookDetails/BookDetails.jsx'
import { AppProvider } from './context.jsx'

const root = createRoot(document.getElementById('root'))

root.render(
  <AppProvider>           
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/books" element={<><Header /> <BookList /></>} />
        <Route path="/books/:id" element={<><Header /> <BookDetails /></>} />
      </Routes>
    </Router>
  </AppProvider>           
)
