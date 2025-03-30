import React from 'react'
import "../PublicHome/PublicHome.css"
import BoxConteiner from '../../component/BoxConteiner/BoxConteiner'
const PublicHome = () => {
  return (

    <div className='public-home'>
      
      <h1 className='title-public-home'>Gestiona tus proyectos</h1>


      <div className='conteiner-public-home'>
        <h2 className='h2-title-pub'>Gestionar proyectoss</h2>
        <p className="conteiner-public-home-content">
          Podras gestionar todos tus proyectos como tu quieras
        </p>
          <BoxConteiner title={"Gestionar proyectos"} content={"Gestiona todos tus proyectos como tu quieras"} img={<img className='img-box' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAeNJREFUWEft2MtKAlEYB/D/54WgXYsuEJQ3sItOBWqQ1KInaNMT9CDVo/QC0b5doYEKlaIZ5KWwoBa1V5svtNRRZ5xJz0SKszzn8D+/+c45w8wQ/tlF/8yD4QIFJKfXAjoBaFNEJRkcYfBBIlm418rTrFDAv+CywBYF0awITDOD+VVGdSuResqr5aqCTMM0BD1QXaAuDPMHf1q245mH9CCVCq54VskqX4Joqp6jgWoD/eyZC4BmWiXGGYhvB8G0smgNhL1WFr/J4B3lnmoDBf2uLBF5hUxuMISBdDyZ8zWGt4FCkpsN5ggdFkvmmo4eID4WOmtXGB02mgyBlIPMgClXY3RBIcl1pFa9WDKv2q4ca0qFtA6BkeUeg/QOwuhVaGPZuWi3WyIA5vXuvqP/uVKRw9d3hUfhm7oPlCqmBhO2ZL9AaWKEgmphBlA9McJBOihdjCkgDZQhjGmgDhTUTpPWiRS2qdUmWF9yOGrtN9li0egjwVSQUYTw51A/Ew+0ZEHJXSbA/h3yN2+MzCjHU7mJBrzzJT9GREGRldDLYkY0nsqFVUEBye0j5nMimtMLEtHPwAtD3tX8DKofY49n2jYp7xPQ+jYTMXtXBpes1crpVab0ruwarr8fphRGJ3RcIb2qfwHjf1Q0coVhTQAAAABJRU5ErkJggg=="/>} ></BoxConteiner>

      </div>
    </div>
  )
}

export default PublicHome