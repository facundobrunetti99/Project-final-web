import React from 'react'
import "../Tittle/Title.css"
const Title = ({clas,title}) => {
  return (
    <div className={clas}>
    <p>{title}</p>
  </div>
  )
}

export default Title