import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../component/NavBar/Nav'
const Dashboard = () => {
  return (
    <>
    Este es el dashboar
    <Nav></Nav>

        <Outlet></Outlet>
    
    
    </>
  )
}

export default Dashboard