import React from 'react'
import Navbar from '../Companents/Navbar'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <> 
      <Navbar/>
      <div>
         <Outlet/>
      </div>
    </>
  )
}

export default MainLayout