import React from 'react'
import "../BoxConteiner/BoxConteiner.css"
import img1 from "../../img/imgFolder/icons8-folder-128.png"
import img2 from "../../img/imgFolder/icons8-file-gradient/icons8-file-128.png"
import img3 from "../../img/imgFolder/task.png"
import { Link } from 'react-router-dom'
const BoxConteiner = ({title,content,classn}) => {
 let img;
 let dir;
 if(classn==="folder"){
   img=img1;
  dir="/project"
 }else if(classn==="project"){
  img = img2;
  dir="/project/task"
 }else{
  img=img3;
 }
 
  return (
    
    <Link to={dir} className="conteiner-box">
    <p className="title-conteiner-box">
        {title}
    </p>
    <p  className="content-box">
      {content}
    </p>
    <div  className='img-box'>
        <img src={img} alt="" />
    </div>
</Link>
  )
}

export default BoxConteiner