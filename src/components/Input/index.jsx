import React from 'react'

import styles from './index.module.scss'
function index({type, name}) {
  return (
    <label htmlFor={name} className={styles.root}>
      {name}
      <input type={type} id={name} className={styles.input}/>
    </label>
  )
}

export default index