import React from "react";
import "../ConteinerContent/Content.css";
import { Link } from "react-router-dom";
const projects = [
  {
    title: "Titulo projecto 1",
    cont: "Este es el contenido del proyecto hablara sobre que se tratara y todo lo relacionado al mismo",
    img: "Imagen contenido 1",
    epic: "/project/epics/1",
  },
  {
    title: "Titulo projecto 2",
    cont:"Este es el contenido del proyecto hablara sobre que se tratara y todo lo relacionado al mismo",
    img: "Imagen contenido 2",
    epic: [],
  },
  {
    title: "Titulo projecto 3",
    cont: "Este es el contenido del proyecto hablara sobre que se tratara y todo lo relacionado al mismo",
    img: "Imagen contenido 3",
    epic: [],
  },
  {
    title: "Titulo projecto 4",
    cont: "Este es el contenido del proyecto hablara sobre que se tratara y todo lo relacionado al mismo",
    img: "Imagen contenido 4",
    epic: [],
  },
  {
    title: "Titulo projecto 5",
    cont: "Este es el contenido del proyecto hablara sobre que se tratara y todo lo relacionado al mismo",
    img: "Imagen contenido 5",
    epic: [],
  },
  {
    title: "Titulo projecto 6",
    cont: "Este es el contenido del proyecto hablara sobre que se tratara y todo lo relacionado al mismo",
    img: "Imagen contenido 6",
    epic: [],
  },
];

const Content = ({ clas }) => {
  const p = projects;
  if (clas === "content-project") {
    return (
      <div  className="div-project">
        {p.map((item) => (
          <Link to={item.epic} className={clas}>
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
