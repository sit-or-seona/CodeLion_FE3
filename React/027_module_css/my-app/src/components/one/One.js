import React from 'react'
// import './one.css'
// import './one.module.css'
import styles from './one.module.css'

export default function One() {
  return (
    <section>
      <h1>hello world</h1>
      <p className={styles.contents}>hello world</p>
    </section>
  )
}
