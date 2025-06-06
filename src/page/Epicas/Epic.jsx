import React from 'react'
import "../Epicas/Epic.css"
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
const epicsData = {
  1: [{
      id:1.1,
      name:"Epic 1.1",
      cont:"Desarrollar un panel de administración intuitivo para gestionar usuarios, roles y permisos, mejorando la seguridad y eficiencia del sistema.",
      
   },
   {
    id:1.2,
    name:"Epic 1.2",
    cont:"Desarrollar un panel de administración intuitivo para gestionar usuarios, roles y permisos, mejorando la seguridad y eficiencia del sistema.",
    
    },
  {
    id:1.3,
    name:"Epic 1.3",
    cont:"Desarrollar un panel de administración intuitivo para gestionar usuarios, roles y permisos, mejorando la seguridad y eficiencia del sistema.",
    
  },
  {
    id:1.4,
    name:"Epic 1.4",
    cont:"Desarrollar un panel de administración intuitivo para gestionar usuarios, roles y permisos, mejorando la seguridad y eficiencia del sistema.",
    
  }],
  2: [
    {
      id:2.1,
      name:"Epic 2.1",
      cont:"Desarrollar un panel de administración intuitivo para gestionar usuarios, roles y permisos, mejorando la seguridad y eficiencia del sistema.",
      
   },
   {
    id:2.2,
    name:"Epic 2.2",
    cont:"Desarrollar un panel de administración intuitivo para gestionar usuarios, roles y permisos, mejorando la seguridad y eficiencia del sistema.",
    
    },
  {
    id:2.3,
    name:"Epic 3.3",
    cont:"Desarrollar un panel de administración intuitivo para gestionar usuarios, roles y permisos, mejorando la seguridad y eficiencia del sistema.",
    
  }
  ],
  3: [{
    id:3.1,
    name:"Epic 3.1",
    cont:"Desarrollar un panel de administración intuitivo para gestionar usuarios, roles y permisos, mejorando la seguridad y eficiencia del sistema.",
    
 },
 {
  id:3.2,
  name:"Epic 3.2",
  cont:"Desarrollar un panel de administración intuitivo para gestionar usuarios, roles y permisos, mejorando la seguridad y eficiencia del sistema.",
  
  },
{
  id:3.3,
  name:"Epic 3.3",
  cont:"Desarrollar un panel de administración intuitivo para gestionar usuarios, roles y permisos, mejorando la seguridad y eficiencia del sistema.",
  
}],
  
};



const Epic = () => {
  const { projectId } = useParams();
  const epics = epicsData[projectId] || [];

  return (
    <div className='epic-main'>
      <p className='epic-main-title'>Épicas del Proyecto {projectId}</p>
      
      
      <div className='div-epic-item'>
        {epics.map((epic, index) => (
          <Link className='link-epic-content' to={`/project/epics/stories/${epic.id}`}  key={index}>
          <p className='title-epic-item'>{epic.name}</p>
          <p className='contenet-epic-item'>{epic.cont}</p>
        </Link>
        ))}
      </div>
    </div>
  );
};

export default Epic;