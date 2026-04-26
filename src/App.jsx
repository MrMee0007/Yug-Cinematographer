import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Work from './pages/Work'
import HireMe from './components/HireMe'
import ContactSection from './components/ContactSection'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Contact from './pages/Contact'

const App = () => {
  return (
    <>
    <Navbar />
    <div className="min-h-screen flex flex-col">
    <Routes>
      <Route path="/" element={<Home />} />     
      <Route path="/works" element={<Work />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    </div>
    <Footer />
    </>
  )
}

export default App
