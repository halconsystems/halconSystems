import React from 'react'
import { Routes , Route } from 'react-router-dom'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Services from './Pages/Services'
import caseStudies from './Pages/Studies'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Studies from './Pages/Studies'
const App = () => {
  return (
    <div className='px-10 md:px-16'>
   
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/case-studies' element={<Studies/>}/>
      </Routes>

      <Footer/>

    </div>
  )
}

export default App