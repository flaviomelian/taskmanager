import React from 'react'
import './HomeClient.css'

const HomeClient = () => {
  return (
    <div>
      <div className='buttons'>
          <div className='in-home-client'>
            <button className="btn btn-primary button-login home-button" onClick={() =>{
              navigate("/profile")
            }}>
              Mi perfil
            </button>
          </div>
          <div className='in-home-client'>
            <button className="btn btn-primary button-login home-button" onClick={() =>{
              navigate("/my-repositories")
            }}>
              Mis Proyectos
            </button>
          </div>
          <div className='in-home-client'>
            <button className="btn btn-primary button-login home-button" onClick={() =>{
              navigate("/my-repositories")
            }}>
              Buscar Desarrolladores
            </button>
          </div>
      </div>
    </div>
  )
}

export default HomeClient
