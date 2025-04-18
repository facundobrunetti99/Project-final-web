import React from "react";
import Title from "../../component/Tittle/Title";
import { Link, useParams } from "react-router-dom";
import "../Task/Task.css";
const Task = () => {
  const task = {
    "1.1.1": [
      {
        id: "1.1.1.1",
        name: "task 1.1.1.1",
        cont: "Desarrollar un panel de administración intuitivo para gestionar usuarios, roles y permisos, mejorando la seguridad y eficiencia del sistema.",
      },
      {
        id: "1.1.1.2",
        name: "task 1.1.1.2",
        cont: "Desarrollar un panel de administración intuitivo para gestionar usuarios, roles y permisos, mejorando la seguridad y eficiencia del sistema.",
      },
      {
        id: "1.1.1.3",
        name: "task 1.1.1.3",
        cont: "Desarrollar un panel de administración intuitivo para gestionar usuarios, roles y permisos, mejorando la seguridad y eficiencia del sistema.",
      },
    ],
    "1.1.2": [
      {
        id: "1.1.2.1",
        name: "task 1.1.2.1",
        cont: "Desarrollar un panel de administración intuitivo para gestionar usuarios, roles y permisos, mejorando la seguridad y eficiencia del sistema.",
      },
      {
        id: "1.1.2.2",
        name: "task 1.1.2.2",
        cont: "Desarrollar un panel de administración intuitivo para gestionar usuarios, roles y permisos, mejorando la seguridad y eficiencia del sistema.",
      },
      {
        id: "1.1.2.3",
        name: "task 1.2.2.3",
        cont: "Desarrollar un panel de administración intuitivo para gestionar usuarios, roles y permisos, mejorando la seguridad y eficiencia del sistema.",
      },
    ],
    "1.1.3": [
      {
        id: "1.1.3.1",
        name: "task 1.1.1.3",
        cont: "Desarrollar un panel de administración intuitivo para gestionar usuarios, roles y permisos, mejorando la seguridad y eficiencia del sistema.",
      },
      {
        id: "1.1.3.2",
        name: "task 1.1.1.3",
        cont: "Desarrollar un panel de administración intuitivo para gestionar usuarios, roles y permisos, mejorando la seguridad y eficiencia del sistema.",
      },
      {
        id: "1.1.3.2",
        name: "task 1.1.3.2",
        cont: "Desarrollar un panel de administración intuitivo para gestionar usuarios, roles y permisos, mejorando la seguridad y eficiencia del sistema.",
      },
    ],
  };

  const { storieId } = useParams();
  const tasks = task[storieId] || [];
  return (
    <div>
      <Title clas={"title-public-home"} title={"Tareas"}></Title>
      <div className="content-task">
        <p className="task-title-general">Tareas a realizar para la storie {storieId}</p>
        <p className="task-title-name">Nombre del usuario: Facundo</p>
        <p className="task-title-cant">Cantidad de tareas:</p>
        <p className="task-title-rl">Tareas realizadas: </p>
      </div>

      {tasks.map((ts, i) => (
        <div
          className="conteiner-task-item"
          key={i}
        >
          <p className="title-ts-item">{ts.name}</p>
          <p className="contenet-ts-item">{ts.cont}</p>
        </div>
      ))


      }


    </div>
  );
};

export default Task;
