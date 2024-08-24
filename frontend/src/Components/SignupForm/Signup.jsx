import React from 'react'
import './SignUp.css'

const Signup = () => {
  return (
    <>
      <div>
        <form id="signup-form">
            <div className='signup-data'>
                <h1 className='signup-header'>REGISTRARSE</h1>
                <div className='lab-in'>
                    <label>Correo Electronico</label>
                    <input type='email'/>
                </div>
                <div className='lab-in'>   
                    <label>Nombre</label>
                    <input/>
                </div>
                <div className='lab-in'>
                    <label>Apellidos</label>
                    <input/>
                </div>
                <div className='lab-in'>
                    <label>Nick de desarrollador</label>
                    <input/>
                    <label className='caption'>Podrá usarlo de manera alternativa a su email para identificarse</label>
                </div>
                <div className='lab-in'>
                    <label>Móvil</label>
                    <input type='phone'/>
                </div>
            </div>
            <button type='button' className="btn btn-primary button-signup" >REGISTRARSE</button>
          </form>
      </div>
    </>
  )
}

export default Signup
