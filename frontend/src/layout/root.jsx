import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'
import './Root.css'

const Root = () => {
  return (
    <div id="layout">
      <Header/>
      <Outlet/>
    </div>
  )
}

export default Root