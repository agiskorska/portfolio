import React from 'react'
import { Outlet } from 'react-router-dom';

import { NavBar, Footer } from '../../components'
import styles from './index.module.scss'

function MainLayout({children}) {
  return (
    <main className={styles.root}>
      <NavBar />
      <Outlet />
      <Footer />
    </main>
  )
}

export default MainLayout