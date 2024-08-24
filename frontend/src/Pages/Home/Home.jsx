import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();

  return (
    <>
      <div id="Home">
        <h2 id='header-Home'>Colabora en el Código, Construye Proyectos Juntos</h2>
        <section className="hero">
          <p className='p-Home'>La plataforma definitiva para que los desarrolladores compartan y trabajen en proyectos sin problemas.</p>
        </section>

        <section class="features">
          <div class="feature">
              <h3 className='header-in-features'>Colabora Fácilmente</h3>
              <p className='p-Home'>Trabaja con otros en proyectos, sigue el progreso y fusiona código sin esfuerzo.</p>
          </div>
          <div class="feature">
              <h3 className='header-in-features'>Control de Versiones</h3>
              <p className='p-Home'>Mantén un seguimiento de cada cambio con herramientas robustas de control de versiones.</p>
          </div>
          <div class="feature">
              <h3 className='header-in-features'>Seguro y Confiable</h3>
              <p className='p-Home'>Tu código está seguro con nosotros, gracias a nuestras medidas de seguridad de primer nivel.</p>
          </div>
        </section>
        <div className='group'>    
          <button className='start' onClick={() => navigate('/signup')}>Comenzar</button>
          <a className='to-login' href="#" onClick={() => navigate('/login')}>Ya tengo cuenta</a>
        </div>
      </div>
    </>
  )
}

export default Home
