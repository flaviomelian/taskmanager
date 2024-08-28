import React from 'react'
import "./Login.css"
import userImage from '../../assets/user.png';
import lockImage from '../../assets/lock.png';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react'
import { login } from '../../Services/auth';

const Login = () => {

  const [email, setEmail] = useState()
  const [passwd, setPasswd] = useState()

  const navigate = useNavigate()

  const handleLogin= async () => {
    try {
      let data = { email: email, passwd: passwd }
      const result = await login(data);
      console.log("data", data);
      localStorage.setItem('token', result.token)
      console.log(result.role)
      if (result.role === 'Client') navigate("/HomeClient");
      else navigate("/HomeDev/");
    }catch(error) {
      console.log("handle-login-error");
      console.log(error);
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
              className="nick-input"
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              required
              placeholder="Introduzca su usuario"
            />
        </div>        
        <h2>Contraseña</h2>
        <div className='img-input'>
            <img className="lck-img" src={lockImage}/>
            <input className='passwd' type='password' onChange={(e) => {
                setPasswd(e.target.value)
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
