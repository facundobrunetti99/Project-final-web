import React from "react";
import "../PublicHome/PublicHome.css";
import BoxConteiner from "../../component/BoxConteiner/BoxConteiner";
import Title from "../../component/Tittle/Title";
const PublicHome = () => {
  return (
    <div className="public-home">

      
     
 
      <Title clas={"title-public-home"} title={"Gestiona tus proyectos, tareas y aplicaciones"}/>


      <div className="conteiner-public-home">
        <BoxConteiner
          title={"Gestionar proyectos"}
          content={
            "Gestiona todos tus proyectos como tu quieras desde la creacion eliminacion y modificacion de los mismos"
          }
          classn={"project"}
        ></BoxConteiner>
        <BoxConteiner
          title={"Gestionar epicas"}
          content={
            "Gestiona todos tus archivos como tu quieras desde la creacion eliminacion y modificacion de los mismos"
          }
          classn={"epics"}
        ></BoxConteiner>
        <BoxConteiner
          title={"Gestionar historias"}
          content={
            "Gestiona todas tus historias como tu quieras desde la creacion eliminacion y modificacion de los mismos"
          }
          classn={"stories"}
        ></BoxConteiner>
         <BoxConteiner
          title={"Gestionar tareas"}
          content={
            "Gestiona todas tus tareas como tu quieras desde la creacion eliminacion y modificacion de los mismos"
          }
          classn={"task"}
        ></BoxConteiner>
      </div>
    </div>
  );
};

export default PublicHome;
