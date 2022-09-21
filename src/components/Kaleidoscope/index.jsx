import React from 'react'
import img from '../../../assets/images/profile_square.jpg'

import styles from './index.module.scss'

function index() {
  return (
      <div className={styles.parent}>
        <section class={styles.tiledGallery}>
            <img src={img} class={styles.galleryImg} />
            <div class={styles.tile}>github</div>
            <div class={styles.tile}></div>
            <div class={styles.tile}></div>
            <div class={styles.tile}></div>
            <div class={styles.tile}></div>
            <div class={styles.tile}></div>
            <div class={styles.tile}></div>
            <div class={styles.tile}></div>
            <div class={styles.tile}></div>
        </section>
    </div>
  )
}

export default index