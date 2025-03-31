import React from 'react'
import "../Tittle/Title.css"
const Titlte = ({clas,title}) => {
  return (
    <div className={clas}>
    <p>{title}</p>
  </div>
  )
}

export default Titlte