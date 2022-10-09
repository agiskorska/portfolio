import React from 'react'
import { Input } from '../'
function index({formId, inputs}) {
  return (
    <form id={formId}>
      {inputs.map((input, idx) => <Input key={idx} type={input.type} name={input.name} />)}
    </form>
  )
}

export default index