import React, { Component } from "react";
import Buscador from './components/Buscador'
import Resultado from './components/Resultado'

class App extends Component {

  state = {
    termino: '',
    imagenes: [],
    pagina: 1
  }

  paginaAnterior = () => {
    let pagina = this.state.pagina;
    if(pagina === 1) return null;
    pagina--;
    this.setState({
      pagina
    }, () => {
      this.consultarApi();
    });
  }
  paginaSiguiente= () => {
    let pagina = this.state.pagina;
    pagina++;
    this.setState({
      pagina
    }, () => {
      this.consultarApi();
    });
  }

  datosBusqueda = (termino) => {
    this.setState({
      termino: termino,
      imagenes: [],
      pagina: 1
    }, () => {
      this.consultarApi(termino); // callback
    })
  }

  consultarApi = (termino, pagina) => {
    const url = `https://pixabay.com/api/?key=22646706-3b77626f034189c4966bb7b8f&q=${termino}&per_page=30&page=${pagina}`

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
        <div className="row justify-content-center">
          <Resultado
            imagenes={this.state.imagenes}
            paginaAnterior={this.paginaAnterior}
            paginaSiguiente={this.paginaSiguiente}
          />
        </div>
      </div>
    );
  }
}

export default App;
