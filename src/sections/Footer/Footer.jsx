import React from 'react'
import styles from './footerStyle.module.css'

function Footer() {
  return (
    <section id='footer' className={styles.container} > 
      <p>&copy; 2026 Ahsanullah Danish.
        <br />
        All rights reserved
      </p>
    </section>
  )
}

export default Footer