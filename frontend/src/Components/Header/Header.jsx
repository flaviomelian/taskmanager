import React from 'react'
import logo from '../../assets/logo.png'
import './Header.css'

const Header = () => {
  return (
    <div>
      <img className='logo' src={logo}/>
    </div>
  )
}

export default Header