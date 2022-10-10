import React from 'react'
import { Input } from '../'
import styles from './index.module.scss'

function index({formId, inputs}) {
  return (
    <form id={formId} className={styles.root}>
      {inputs.map((input, idx) => <Input key={idx} type={input.type} name={input.name} />)}
    </form>
  )
}

export default index