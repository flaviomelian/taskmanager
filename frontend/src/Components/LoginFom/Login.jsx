import React from 'react'
import "./Login.css"
import userImage from '../../assets/user.png';
import lockImage from '../../assets/lock.png';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react'

const Login = () => {

  const [CIF, setCIF] = useState()
  const [password, setPassword] = useState()

  const navigate = useNavigate()

  const handleLogin= async () => {
    try {
      let data = { CIF: CIF, password: password }
      const result = await login(data)
      localStorage.setItem('token', result.token)
      const {role} = await getClientInformation();
      (role==="client"? navigate("/HomeClient") : navigate("/HomeAdmin"))
       
    }catch(error) {
      toast.error('Credenciales inválidas')
    }
  }

  return (
    <div id="login-component">
      <h1 className='header-login'> INICIAR SESIÓN </h1>
      <div className='fields'>
        <h2>Usuario</h2>
        <div className='img-input'>
            <img className="usr-img" src={userImage}/>
            <input
              className="CIF-input"
              onChange={(e) => {
                setCIF(e.target.value)
              }}
              required
              placeholder="Introduzca su usuario"
            />
        </div>        
        <h2>Contraseña</h2>
        <div className='img-input'>
            <img className="lck-img" src={lockImage}/>
            <input className='passwd' type='password' onChange={(e) => {
                setPassword(e.target.value)
              }}
              required
              placeholder="Introduzca su contraseña"/> 
        </div>
      </div>
      <p className='to-sign-up'>¿No tienes cuenta? <Link className='ankle-to-sign-up' to="/signup">Regístrate</Link></p>
      <button type="button" className="btn btn-primary button-login" onClick={(e) => {
              e.preventDefault()
              handleLogin()
            }}>LOGIN</button>
    </div>
  )
}

export default Login
