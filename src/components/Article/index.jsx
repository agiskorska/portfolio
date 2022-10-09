import React from 'react'
import styles from './index.module.scss'

function index({title, paragraphs}) {
  const [ button, setButton ] = React.useState('see more')

  const handleClick = () => {
    if (button=='see more') setButton('see less')
    if (button=='see less') setButton('see more')
  }
  return (
    <div className={styles.root}>
      <h1>{title}</h1>
      <span onClick={handleClick}>{button}</span>
      {button== 'see less' && paragraphs.map((p, i) => <p key={i} className={styles.para}>{p}</p>)}
    </div>
  )
}

export default index