import React from 'react'
import GHimg from '../../assets/logo-github.jpg'
import Linkedin from '../../assets/Linkedin.png'
import Infojobs from '../../assets/infojobs.png'
import './Footer.css'

const Footer = () => {
  return (
    <div>
      <div className='rrss'>
        <img className='rrss-img' src={GHimg}/>
        <img className='rrss-img' src={Linkedin}/>
        <img className='rrss-img' src={Infojobs}/>
      </div>
    </div>
  )
}

export default Footer
