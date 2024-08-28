import React from 'react'
import './HomeDev.css'
import { useNavigate } from 'react-router-dom'

const HomeDev = (id) => {

  const navigate = useNavigate()

  return (
    <>
        <div className='buttons'>
          <div className='in-home-dev'>
            <button className="btn btn-primary button-login home-button" onClick={() =>{
              navigate("/profile")
            }}>
              Mi perfil
            </button>
          </div>
          <div className='in-home-dev'>
            <button className="btn btn-primary button-login home-button" onClick={() =>{
              navigate("/my-repositories")
            }}>
              Mis respositorios
            </button>
          </div>
          <div className='in-home-dev'>
            <button className="btn btn-primary button-login home-button" onClick={() =>{
              navigate("/team-repositories")
            }}>
              Respositorios compartidos
            </button>
          </div>
          <div className='in-home-dev'>
            <button className="btn btn-primary button-login home-button" onClick={() =>{
              navigate("/my-projects")
            }}>
              Mis Proyectos
            </button>
          </div>
          <div className='in-home-dev'>
            <button className="btn btn-primary button-login home-button" onClick={() =>{
              navigate("/team-projects")
            }}>
              Proyectos compartidos
            </button>
          </div>
          <div className='in-home-dev'>
            <button className="btn btn-primary button-login home-button" onClick={() =>{
              navigate("/task&messages")
            }}>
              Tareas y mensajes
            </button>
          </div>
        </div>
    </>
    )
}

export default HomeDev
