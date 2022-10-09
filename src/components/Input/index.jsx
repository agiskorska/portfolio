import React from 'react'

function index({type, name}) {
  return (
    <label htmlFor={name}>
      {name}
      <input type={type} id={name}/>
    </label>
  )
}

export default index