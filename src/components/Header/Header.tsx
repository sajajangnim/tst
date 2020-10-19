import React, { ReactElement } from 'react'
import styles from './Header.module.scss'

const Header = () : ReactElement => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
       UTS Teknologi Sistem Terintegrasi
      </div>
    </div>
  )
}

export default Header
