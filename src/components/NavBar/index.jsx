import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './index.module.scss'

function index() {
  return (
    <nav className={styles.root}>
        <NavLink className={styles.link} to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/work'>My work</NavLink>
    </nav>
  )
}

export default index