import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './index.module.scss'

function index() {
  return (
    <header className={styles.root}>
      <p className={styles.title}>Aggie Skorska</p>
      <p className={styles.subTitle}>Full Stack Web developer</p>
      <nav className={styles.navbar}>
        <NavLink className={styles.link} to='/'><h3 className={styles.h3}>Home</h3><h4 className={styles.h4}>See the main page</h4><h5  className={styles.h5}>for general stuff</h5></NavLink>
        <NavLink className={styles.link} to='/about'><h3 className={styles.h3}>About</h3><h4 className={styles.h4}>A little about me</h4><h5  className={styles.h5}>so we get familiar</h5></NavLink>
        <NavLink className={styles.link} to='/work'><h3 className={styles.h3}>My Work</h3><h4 className={styles.h4}>See some of my work</h4><h5  className={styles.h5}>hope you enjoy it</h5></NavLink>
        <NavLink className={styles.link} to='/contact'><h3 className={styles.h3}>Contact</h3><h4 className={styles.h4}>Call me or email</h4><h5  className={styles.h5}>I like both!</h5></NavLink>
      </nav>
    </header>
    
  )
}

export default index