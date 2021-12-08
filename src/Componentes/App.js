import React from 'react';
import axios from 'axios';
import './App.css';
import GaticosLista from './Gaticos/GaticosLista.js';
import GaticosDetalle from './Gaticos/GaticosDetalle.js';
import GaticosForm from './Gaticos/GaticosForm.js';

class App extends React.Component {
  
 constructor(props){
   super(props);
   this.state = {
      gatos : [ ],
      gatoActual : {}
   }
   this.actualizarGato = this.actualizarGato.bind(this)
 } 

 componentDidMount(){
   const url = 'http://localhost:5000/gaticos'
   axios.get(url)
   .then((respuesta)=>{
     this.setState({
      gatos:respuesta.data,
       gatoActual:respuesta.data[0]
     })
     console.log(respuesta.data)
   })
   .catch((error) =>{console.log(error)})
 }

 actualizarGato(gato){
   this.setState({
     gatoActual:gato
   })
 }

  render(){
    return (
      <div className="container-fluid">
          <div className="row">
            <div className="col s12">
            <nav>
              <div class="nav-wrapper">
                <a href="#!" class="brand-logo">lista de gatos</a>
               
              </div>
            </nav>
        
            </div>
          </div>
          <div className="row">
            <div className="col s3">
              <GaticosLista 
              lista={this.state.gatos} 
              actualizarGato={this.actualizarGato}/>
            </div>
            <div className="col s9">
              <GaticosDetalle
               gatico={ this.state.gatoActual }  />
            </div>   
          </div>
          <div className="row">
            <div className="col s12">
              <GaticosForm
                 gatico={ this.state.gatoActual }
              />
            </div>
          </div>    
      </div>
    );
  }
 
}

export default App;