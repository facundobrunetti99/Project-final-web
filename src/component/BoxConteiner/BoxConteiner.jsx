import React from "react";
import "../BoxConteiner/BoxConteiner.css";
import img1 from "../../img/imgFolder/icons8-folder-128.png";
import img2 from "../../img/imgFolder/icons8-file-gradient/icons8-file-128.png";
import img3 from "../../img/imgFolder/task.png";
import img4 from "../../img/imgFolder/imgtask100.png"
import { Link } from "react-router-dom";
const BoxConteiner = ({ title, content, classn }) => {
  let img;
  let dir;
  if (classn === "project") {
    img = img1;
    dir = "/project";
  } else if (classn === "epics") {
    img = img2;
    dir = "/project/epics";
  } else if(classn==="stories") {
      dir="/project/epics/stories"
    img = img3;
  }else if(classn==="task"){
    dir="/project/epics/stories:task"
    img = img4;
  }

  return (
    <Link to={dir} className="conteiner-box">
      <p className="title-conteiner-box">{title}</p>
      <p className="content-box">{content}</p>
      <div className="img-box">
        <img src={img} alt="" />
      </div>
    </Link>
  );
};

export default BoxConteiner;
