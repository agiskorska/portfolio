import React from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.scss'
import { MainLayout } from './layouts'
import { About, Contact, Home, MyWork } from './pages'

const App = () => {
   return (
    <Routes>
        <Route path="/" element={<MainLayout/>}>
            <Route index element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/work' element={<MyWork />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
        </Route>
    </Routes>
   )
}

export default App