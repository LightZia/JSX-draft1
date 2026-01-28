import React from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className = { styles.navbar }>Navbar
      <div className = { styles.btn }>Login</div>
    </div>
  )
}

export default Navbar