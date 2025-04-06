import React from "react";
import "../ConteinerContent/Content.css";
import { Link } from "react-router-dom";
const projects = [
  {
    id:1,
    title: "Titulo projecto 1",
    cont: "Este es el contenido del proyecto hablara sobre que se tratara y todo lo relacionado al mismo",
    img: "Imagen contenido 1",
  },
  {
    id:2,
    title: "Titulo projecto 2",
    cont:"Este es el contenido del proyecto hablara sobre que se tratara y todo lo relacionado al mismo",
    img: "Imagen contenido 2",
  },
  {
    id:3,
    title: "Titulo projecto 3",
    cont: "Este es el contenido del proyecto hablara sobre que se tratara y todo lo relacionado al mismo",
    img: "Imagen contenido 3",
  },
  {
    id:4,
    title: "Titulo projecto 4",
    cont: "Este es el contenido del proyecto hablara sobre que se tratara y todo lo relacionado al mismo",
    img: "Imagen contenido 4",
  },
  {
    id:5,
    title: "Titulo projecto 5",
    cont: "Este es el contenido del proyecto hablara sobre que se tratara y todo lo relacionado al mismo",
    img: "Imagen contenido 5",
  },
  {
    id:6,
    title: "Titulo projecto 6",
    cont: "Este es el contenido del proyecto hablara sobre que se tratara y todo lo relacionado al mismo",
    img: "Imagen contenido 6",
  },
];

const Content = ({ clas }) => {
  const p = projects;
  if (clas === "content-project") {
    return (
      <div  className="div-project">
        {p.map((item) => (
          <Link to={`/project/epics/${item.id}`} className={clas} key={item.id}>
            <p className="title-proj"><b>{item.title}</b></p>
            <div>
              <p className="cont-proj">{item.cont}</p>
              <img src={item.img} alt="" />
            </div>    
          </Link>
        ))}
      </div>
    );
  } else {
    return hola;
  }
};

export default Content;
