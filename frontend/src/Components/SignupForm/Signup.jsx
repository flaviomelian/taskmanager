import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './SignUp.css'
import { signUp } from '../../Services/auth'

const Signup = () => {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [surnames, setSurnames] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [rol, setRol] = useState('');
  const [devRol, setDevRol] = useState('')
  const [nick, setNick] = useState('');
  const [phone, setPhone] = useState('');


  const navigate = useNavigate()

  const handleSignUp = async () => {
    console.log(name, surnames, password, confirmPassword, nick, rol, devRol, phone);

    try {
      let data;
      if (rol === 'Desarrollador'){
        data = {
          name: name,
          surnames: surnames,
          password: password,
          email: email,
          rol: devRol,
          nick: nick,
          phone: phone,
        }
      }else{
        data = {
          name: name,
          surnames: surnames,
          password: password,
          email: email,
          rol: rol,
          nick: nick,
          phone: phone,
        }
      }
      const result = await signUp(data)
      
      localStorage.setItem('token', result.token)
      navigate('/signedup', { state: { registered: true } }) //Con esta linea redirecciono a RegisterOK y mando el valor TRUE en una variable registered que podre usar en el RegisterOK
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div>
        <form id="signup-form">
            <div className='signup-data'>
                <h1 className='signup-header'>REGISTRARSE</h1>
                <div className='lab-in'>
                    <label>Correo Electronico</label>
                    <input type='email'
                    onChange={(e) => {
                      setEmail(e.target.value)
                    }}
                    required
                    placeholder="Introduzca su direccion de email"/>
                </div>
                <div className='lab-in'>   
                    <label>Nombre</label>
                    <input
                      onChange={(e) => {
                        setName(e.target.value)
                      }}
                      required
                      placeholder="Introduzca su nombre"/>
                </div>
                <div className='lab-in'>
                    <label>Apellidos</label>
                    <input
                      onChange={(e) => {
                        setSurnames(e.target.value)
                      }}
                      required
                      placeholder="Introduzca sus apellidos"/>
                </div>
                <div className='lab-in'>
                    <label>Contraseña</label>
                    <input
                      type='password'
                      onChange={(e) => {
                        setPassword(e.target.value)
                      }}
                      required
                      placeholder="Introduzca su contraseña"/>
                </div>
                <div className='lab-in'>
                    <label>Confirme su contraseña</label>
                    <input
                      type='password'
                      onChange={(e) => {
                        setConfirmPassword(e.target.value)
                      }}
                      required
                      placeholder="Las contraseñas deben coincidir"/>
                </div>
                <div className='lab-in'>
                  <label>Seleccione su rol</label>
                  <select onChange={(e) => {
                    setRol(e.target.value)
                  }}>
                    <option>Seleccionar</option>
                    <option>Cliente</option>
                    <option>Desarrollador</option>
                  </select>
                </div>
                {rol === "Desarrollador" && (
                  <div className='lab-in'>
                    <label>Opciones adicionales para desarrolladores</label>
                    <select onChange={(e) => {setDevRol(e.target.value)}}>
                      <option>Seleccione su rol en el equipo de desarrollo</option>
                      <option>Front End</option>
                      <option>Back End</option>
                      <option>Full Stack</option>
                      <option>Dev Ops</option>
                      <option>Quality Assurance</option>
                      <option>Data Engineer</option>
                      <option>Master Scrum</option>
                    </select>
                  </div>
                )}
                <div className='lab-in'>
                    <label>Nick</label>
                    <input
                      onChange={(e) => {
                        setNick(e.target.value)
                      }}
                      required
                      placeholder="Introduzca su nick"/>
                    <label className='caption'>Podrá usarlo de manera alternativa a su email para identificarse</label>
                </div>
                <div className='lab-in'>
                    <label>Móvil</label>
                    <input type='phone'
                      onChange={(e) => {
                        setPhone(e.target.value)
                      }}
                      required
                      placeholder="Introduzca su numero de teléfono"/>
                </div>
            </div>
            <button
                type='button' 
                className="btn btn-primary button-signup"
                onClick={(e) => {
                  e.preventDefault();
                  handleSignUp();
                }} >REGISTRARSE</button>
          </form>
      </div>
    </>
  )
}

export default Signup
