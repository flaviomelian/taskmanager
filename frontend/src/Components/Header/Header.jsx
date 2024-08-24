import React from 'react'
import logo from '../../assets/logo.png'
import './Header.css'
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate();

  return (
    <div>
      <img className='logo' src={logo}  onClick={() => navigate('/')}/>
    </div>
  )
}

export default Header