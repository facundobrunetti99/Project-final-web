import React from 'react'
import '../Stories/Stories.css'
import { Link, useParams } from 'react-router-dom';


const stories = {
    1.1: [{
        id:"1.1.1",
        name:"Stories 1.1",
        cont:"Desarrollar un panel de administración intuitivo para gestionar usuarios, roles y permisos, mejorando la seguridad y eficiencia del sistema.",
        
     },
     {
      id:"1.1.2",
      name:"Stories 1.2",
      cont:"Desarrollar un panel de administración intuitivo para gestionar usuarios, roles y permisos, mejorando la seguridad y eficiencia del sistema.",
      
      },
    {
      id:"1.1.3",
      name:"Stories 1.3",
      cont:"Desarrollar un panel de administración intuitivo para gestionar usuarios, roles y permisos, mejorando la seguridad y eficiencia del sistema.",
      
    }],
    1.2: [
      {
        id:"1.2.1",
        name:"Stories 2.1",
        cont:"Desarrollar un panel de administración intuitivo para gestionar usuarios, roles y permisos, mejorando la seguridad y eficiencia del sistema.",
        
     },
     {
      id:"1.2.2",
      name:"Stories 1.2.2",
      cont:"Desarrollar un panel de administración intuitivo para gestionar usuarios, roles y permisos, mejorando la seguridad y eficiencia del sistema.",
      
      },
    {
      id:"1.2.3",
      name:"Stories 1.2.3",
      cont:"Desarrollar un panel de administración intuitivo para gestionar usuarios, roles y permisos, mejorando la seguridad y eficiencia del sistema.",
      
    }
    ],
    1.3: [{
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
  
const Stories = () => {
   const {epicId}=useParams();
   const st= stories[epicId] || [];
  return (
    <div>
         <h2>Épicas del Proyecto {epicId}</h2>
         <ul>
           {st.map((storie, index) => (
             <Link to={`/project/epics/stories/task/${storie.id}`}  key={index}>
             <p>{storie.name}</p>
             <p>{storie.cont}</p>
           </Link>
           ))}
         </ul>
       </div>
  )
}

export default Stories