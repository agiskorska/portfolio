import React from 'react'

import { Form } from '../index'
import styles from './index.module.scss'
function index() {
  return (
    <footer className={styles.root}>
      <p>Created and designed by Aggie Skorska - Web Development © 2022</p>
      <Form formId={'footerForm'} inputs={[{name:'search', type:'text'}]}/>
    </footer>
  )
}

export default index