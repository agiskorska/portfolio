import React from 'react'

import styles from './index.module.scss'
import { Kaleidoscope } from '../../components'
function index() {
  return (
    <div className={styles.root}>
      <Kaleidoscope />
    </div>
  )
}

export default index