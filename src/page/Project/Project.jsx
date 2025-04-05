import React from "react";
import Title from "../../component/Tittle/Title";
import "../Project/Project.css"
import Content from "../../component/ConteinerContent/Content";
const Project = () => {
  return (
    <div className="main-project">
      <Title clas={"title-public-home"} title={"Proyectos"}></Title>
      <Content clas={"content-project"}></Content>
    </div>
  );
};

export default Project;
