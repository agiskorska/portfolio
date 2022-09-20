import React from 'react'
import { Outlet } from 'react-router-dom';

import { NavBar, Footer } from '../../components'

function MainLayout({children}) {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  )
}

export default MainLayout