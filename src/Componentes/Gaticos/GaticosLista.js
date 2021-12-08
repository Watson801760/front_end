import React from "react";

const GaticosLista = (props) =>{

    return(
   <>
    <ul className="collection with-header">
            <li className="collection-header"><h4>Gatos</h4></li>
            {
               props.lista.map((elemento)=>{
                   return(
                    <li 
                       className="collection-item"
                       key={elemento._id}
                       onClick={props.actualizarGato.bind(this, elemento)}
                    >
                        {elemento.nombre} {elemento.raza}
                    </li>
                   )
               }) 
            }     
      </ul>
    </>
    )
}
export default GaticosLista