import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Service from './pages/Service'
import Mybookings from './Mybookings'
import { h1, li } from 'framer-motion/client'


const Routing = () => {
  return (               
    <>
      
<Routes>
    <Route path='/' element={<Layout/>}>
     <Route index element={<Home/>} />
     <Route path='home' element={<Home/>} />
     <Route path='about' element={<About/>} />
     <Route path='contact' element={<Contact/>} />
     <Route path='service' element={<Service/>} />
     <Route path='mybooking' element={<Mybookings/>} />
      
     <Route path='*' element={<h1>ERROR</h1>}/>
    </Route>
</Routes>

    </>
  )
}

export default Routing
