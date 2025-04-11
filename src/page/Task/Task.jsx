import React from 'react'
import Title from '../../component/Tittle/Title'
import { useParams } from 'react-router-dom'
import "../Task/Task.css"
const Task = () => {
  const task = {
    "1.1.1": [{
        id:"1.1.1.1",
        name:"Stories 1.1",
        cont:"Desarrollar un panel de administración intuitivo para gestionar usuarios, roles y permisos, mejorando la seguridad y eficiencia del sistema.",
        
     },
     {
      id:"1.1.1.2",
      name:"Stories 1.2",
      cont:"Desarrollar un panel de administración intuitivo para gestionar usuarios, roles y permisos, mejorando la seguridad y eficiencia del sistema.",
      
      },
    {
      id:"1.1.1.3",
      name:"Stories 1.3",
      cont:"Desarrollar un panel de administración intuitivo para gestionar usuarios, roles y permisos, mejorando la seguridad y eficiencia del sistema.",
      
    }],
    "1.1.2": [
      {
        id:"1.1.2.1",
        name:"Stories 2.1",
        cont:"Desarrollar un panel de administración intuitivo para gestionar usuarios, roles y permisos, mejorando la seguridad y eficiencia del sistema.",
        
     },
     {
      id:"1.1.2.2",
      name:"Stories 1.2.2",
      cont:"Desarrollar un panel de administración intuitivo para gestionar usuarios, roles y permisos, mejorando la seguridad y eficiencia del sistema.",
      
      },
    {
      id:"1.1.2.3",
      name:"Stories 1.2.3",
      cont:"Desarrollar un panel de administración intuitivo para gestionar usuarios, roles y permisos, mejorando la seguridad y eficiencia del sistema.",
      
    }
    ],
    "1.1.1.3": [{
      id:"1.3.1",
      name:"Stories 1.3.1",
      cont:"Desarrollar un panel de administración intuitivo para gestionar usuarios, roles y permisos, mejorando la seguridad y eficiencia del sistema.",
      
   },
   {
    id:"1.3.2",
    name:"Stories 1.3.2",
    cont:"Desarrollar un panel de administración intuitivo para gestionar usuarios, roles y permisos, mejorando la seguridad y eficiencia del sistema.",
    
    },
  {
    id:"1.3.3",
    name:"Stories 1.3.3",
    cont:"Desarrollar un panel de administración intuitivo para gestionar usuarios, roles y permisos, mejorando la seguridad y eficiencia del sistema.",
    
  }],
    
  };



  const{storieId} = useParams();
  return (
    <div>
      <Title clas={"title-public-home"} title={"Tareas"}></Title>
      <div className="content-task">
      <p>Tareas a realizar para la storie {storieId}</p> 
       <p>Nombre del usuario: Facundo</p>
       <p>Cantidad de tareas:</p>
       <p>Tareas realizadas: </p>
      </div>
     

    </div>
  )
}

export default Task