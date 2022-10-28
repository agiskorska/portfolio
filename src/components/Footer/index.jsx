import React from 'react'

import { Form } from '../index'
import styles from './index.module.scss'
function index() {
  return (
    <footer className={styles.root}>
      {/* <Form formId={'footerForm'} inputs={[{name:'search', type:'text'}]}/> */}
      <p className={styles.credits}>Created and designed by Aggie Skorska - Web Development © 2022</p>
    </footer>
  )
}

export default index