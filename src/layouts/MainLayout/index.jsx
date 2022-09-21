import React from 'react'
import { Outlet } from 'react-router-dom';

import { NavBar, Footer } from '../../components'
import styles from './index.module.scss'

function MainLayout() {
  return (
    <div className={styles.root}>
      <NavBar className={styles.nav} />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer className={styles.footer} />
    </div>

  )
}

export default MainLayout