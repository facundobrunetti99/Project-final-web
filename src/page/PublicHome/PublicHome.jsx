import React from "react";
import "../PublicHome/PublicHome.css";
import BoxConteiner from "../../component/BoxConteiner/BoxConteiner";
const PublicHome = () => {
  return (
    <div className="public-home">
      <div className="title-public-home">
        <p>Gestiona tus proyectos, tareas y aplicaciones</p>
      </div>

      <div className="conteiner-public-home">
        <BoxConteiner
          title={"Gestionar proyectos"}
          content={
            "Gestiona todos tus proyectos como tu quieras desde la creacion eliminacion y modificacion de los mismos"
          }
          classn={"folder"}
        ></BoxConteiner>
        <BoxConteiner
          title={"Gestionar archivos  "}
          content={
            "Gestiona todos tus archivos como tu quieras desde la creacion eliminacion y modificacion de los mismos"
          }
          classn={"project"}
        ></BoxConteiner>
        <BoxConteiner
          title={"Gestionar tareas"}
          content={
            "Gestiona todos tus tareas como tu quieras desde la creacion eliminacion y modificacion de los mismos"
          }
          classn={"task"}
        ></BoxConteiner>
      </div>
    </div>
  );
};

export default PublicHome;
