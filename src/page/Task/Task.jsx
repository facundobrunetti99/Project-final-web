import React from 'react'
import Title from '../../component/Tittle/Title'
import { useParams } from 'react-router-dom'
import "../Task/Task.css"
const Task = () => {

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