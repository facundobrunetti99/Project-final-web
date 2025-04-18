import React, {  use, useEffect, useState } from 'react'
import '../NavBar/Nav.css'
import { Link } from 'react-router-dom'
import imgbutton from "../../img/imgFolder/menu100.png"
const Nav = () => {
  
  const [abrir, setAbrir] = useState(false);

    const openMenu = () => {
    setAbrir(!abrir); 
  };

  
  const clase = abrir ? 'nav-abrir' : 'nav-cerrar';

  return (
    <div className='nav'>
      
      <button className="btn-open" onClick={openMenu}>

        <img src={imgbutton} alt="" />

      </button>

   
      <div className={clase}>
        <ul className="nav-ul-conteiner">
          <li><Link to={"/"}>Inicio</Link></li>
          <li><Link to={'/login'}>Iniciar sesión</Link></li>
          <li><Link to={'/project'}>Proyectos</Link></li>
          <li><Link to={'/project/epics/'}>Epicas</Link></li>
          <li><Link to={'/project/epics/stories'}>Stories</Link></li>
          <li><Link to={'/project/epics/stories:task'}>Tareas</Link></li>
          <li><Link to={'/config'}>Configuración</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;