import React from "react";
import axios from "axios";
class GaticosForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }

submitNuevoGato(event){
      event.preventDefault();
      axios.post('http://localhost:5000/gaticos',{
                                                  nombre: this.refs.nombre.value,
                                                  raza: this.refs.raza.value,
                                                  enfermedad: this.refs.enfermedad.value,
                                                  antecedentes: this.refs.antecedentes.value,
                                                  telefono_del_responsable: this.refs.telefono_del_responsable.value
                                                  }
        ).then((respuesta)=> console.log(respuesta.data))
         .catch(error => console.log(error))
}


    render(){
        return(
            <div className="row">
                <h1 className="center">Nuevo Gato</h1>
            <form className="col s12" onSubmit={this.submitNuevoGato.bind(this)}>
              <div className="row">
                <div className="input-field col s6">
                  <input  id="nombre" ref="nombre" type="text" />
                  <label for="nombre">Nombre</label>
                </div>
                <div className="input-field col s6">
                  <input id="raza" ref="raza" type="text" />
                  <label for="raza">Raza</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s6">
                  <input  id="enfermedad" ref="enfermedad" type="text" />
                  <label for="enfermedad">Enfermedad</label>
                </div>
                <div className="input-field col s6">
                  <input id="antecedentes" ref="antecedentes" type="text" />
                  <label for="antecedentes">Antecedente Medico</label>
                </div>
                <div className="input-field col s6">
                  <input id="telefono_del_responsable" ref="telefono_del_responsable" type="text" />
                  <label for="telefono_del_responsable">Telefono</label>
                </div>
                <div className="input-field col s6">
                  <button 
                  type="submit"
                  className="waves-effect waves-light btn"
                  name="action"
                  >Registrar</button>
                </div>
              </div>

            </form>
          </div>
        )
    }
}
export default GaticosForm