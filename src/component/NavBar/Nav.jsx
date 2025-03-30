import React from 'react'
import '../NavBar/Nav.css'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <>
        <div className='nav'>
            <ul className='nav-ul-conteiner'>
                <Link to={'/login'}>Iniciar sesión</Link>
                <Link to={'/project'}>Proyectos</Link>
                <Link to={'/project/task'}>Tareas</Link>
                <Link to={'/config'}>Configuracion</Link>
            </ul>
        </div>
    </>
  )
}

export default Nav