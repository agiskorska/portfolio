import React, {useState} from 'react'
import img from '../../../assets/images/profile_square.jpg'
import {CopyToClipboard} from 'react-copy-to-clipboard'

import styles from './index.module.scss'

function Kaleidoscope() {
  const [copied, setCopied] = useState(false)
  const [callMe, setCallMe] = useState('Call me')
  const handleCallMe = (e) => {
    setCallMe('07598397503')
  }

  const handleCopied = () =>{
    setCopied(true)
    setTimeout(() => setCopied(false), 800)
  }

  return (
    <div className={styles.parent}>
      <section className={styles.tiledGallery}>
        <div className={styles.tile}><a className={styles.a} href="https://github.com/agiskorska">My Github</a></div>
        <div className={styles.tile}><a className={styles.a} href="https://www.linkedin.com/in/aggie-skorska-683924192/">LinkedIn</a></div>
        <div className={styles.tile}>Fiverr</div>
        <div className={styles.tile}><a className={styles.a} href="https://chippenhampride.com">Chippenham Pride</a></div>
        <div className={styles.tile}>Other Stuff</div>
        <div className={styles.tile}>Small projects</div>
        <div className={styles.tile}><a className={styles.a} href="https://cohorts.getfutureproof.co.uk/available/aggieskorska">Futureproof</a></div>
        <CopyToClipboard text={'07898397503'} onCopy={handleCopied}>
          <div className={styles.tile} onClick={handleCallMe}>{callMe}</div>
        </CopyToClipboard>
        <CopyToClipboard text={'skorskaga@gmail.com'} onCopy={handleCopied}>
          <div className={styles.tile}>Email me</div>
        </CopyToClipboard>
      </section>
          {copied ? <span className={styles.copiedMsg}>Copied!</span> : null}
    </div>
  )
}

export default Kaleidoscope