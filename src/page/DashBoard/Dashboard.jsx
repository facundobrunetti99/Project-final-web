import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../../component/NavBar/Nav'
import '../DashBoard/DashBoard.css'
import Footer from '../../component/Footer/Footer'
const Dashboard = () => {
      
        return  ( 
        
          <div className='main-dashboard'>
                <Nav></Nav>
                      <Outlet></Outlet>
                      <Footer></Footer>
                 </div>)
      
        

  
}

export default Dashboard