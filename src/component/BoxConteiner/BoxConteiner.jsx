import React from 'react'
import "../BoxConteiner/BoxConteiner.css"
const BoxConteiner = ({title,content,img}) => {
  return (
    <div className="conteiner-box">
    <h4 className="title-conteiner-box">
        {title}
    </h4>
    <p  className="content-box">
      {content}
    </p>
    <div  className='img-box'>
      {img}
    </div>
</div>
  )
}

export default BoxConteiner