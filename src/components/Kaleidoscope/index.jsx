import React from 'react'
import img from '../../../assets/images/profile_square.jpg'

import styles from './index.module.scss'

function index() {
  return (
    <div className={styles.parent}>
      <section className={styles.tiledGallery}>
        <div className={styles.tile}><a className={styles.a} href="https://github.com/agiskorska">My Github</a></div>
        <div className={styles.tile}><a href="https://www.linkedin.com/in/aggie-skorska-683924192/">LinkedIn</a></div>
        <div className={styles.tile}>Fiverr</div>
        <div className={styles.tile}>Chippenham Pride</div>
        <div className={styles.tile}>Other Stuff</div>
        <div className={styles.tile}>Small projects</div>
        <div className={styles.tile}><a href="https://cohorts.getfutureproof.co.uk/available/aggieskorska">Futureproof</a></div>
        <div className={styles.tile}>Call me</div>
        <div className={styles.tile}>Email me</div>
      </section>
    </div>
  )
}

export default index