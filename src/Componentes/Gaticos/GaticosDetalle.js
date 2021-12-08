

import React from "react";

const GaticosDetalle = ({gatico}) =>{

  
  
  return(
    <div className="row">
      <div className="col s12 m6">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">
                {gatico.nombre} {gatico.raza} {gatico._id}
                </span>
            <p>Telefono:{gatico.telefono_del_responsable}</p>
            <p>Enfermedad: {gatico.enfermedad}</p>
            <p>Antecedentes: {gatico.antecedentes}</p>
          </div>
          <div className="card-action">
            <a  >Borrar</a>
            <a href="#!">This is a link</a>
          </div>
        </div>
      </div>
    </div>
  )

  

    
}
export default GaticosDetalle