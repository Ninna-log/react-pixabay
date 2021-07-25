import React, { Component } from "react";
import Buscador from './components/Buscador'
import Resultado from './components/Resultado'

class App extends Component {

  state = {
    termino: ''
  }

  datosBusqueda = (termino) => {
    this.setState({
      termino: termino,
      imagenes: []
    }, () => {
      this.consultarApi(termino); // callback
    })
  }

  consultarApi = (termino) => {
    const url = `https://pixabay.com/api/?key=22646706-3b77626f034189c4966bb7b8f&q=${termino}`
 
    fetch(url)
    .then(response => response.json())
    .then(resultado => this.setState({ imagenes: resultado.hits }))
  }

  render() {
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">Buscador de imágenes</p>
          <Buscador
            datosBusqueda={this.datosBusqueda}
          />
        </div>
        <Resultado 
          imagenes={this.state.imagenes}
        />
      </div>
    );
  }  
}

export default App;
