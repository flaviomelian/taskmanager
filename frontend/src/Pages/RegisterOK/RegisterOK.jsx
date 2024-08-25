import React from 'react'
import { useNavigate } from 'react-router-dom'
import './RegisterOK.css'

const RegisterOK = () => {

    const navigate = useNavigate()

  return (
    <div className='register-ok'>
      <h1 className='register-ok-header'>CODE-STATUS: 200 - OK</h1>
      <h2 className='register-ok-header-2'>Usted se ha registrado correctamente</h2>
      <button
        type='button' 
        className="btn btn-primary goto-login"
        onClick={(e) => {
            e.preventDefault();
            navigate("/login");
        }} >INICIAR SESIÓN</button>
    </div>
  )
}

export default RegisterOK
