import React from 'react'
import { Article } from '../../components';

function index() {

  const paragraphs = ['I was born and raised in Poland', 'I studied mechanical engineering', 'I was a maths teacher for 7 years', 'I am ready for a career change']
  return (
    <div >
      <Article title='short story of my life' paragraphs={paragraphs} />
    </div>
  )
}

export default index