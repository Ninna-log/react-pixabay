import React, { Component } from 'react';

class Buscador extends Component {
    busquedaRef = React.createRef();

    obtenerDatos= (e) => {
        e.preventDefault();
        // Tomamos el valor del input
        // Y se envía la componente padre App.js
        this.props.datosBusqueda(this.busquedaRef.current.value);
    }
    render() {
        return (
            <form onSubmit={ this.obtenerDatos }>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input ref={ this.busquedaRef } type="text" className="form-control form-control-lg"
                         placeholder="Busca tu Imagen. Ejemplo: Fútbol">
                        </input>
                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-lg btn-danger btn-block"
                         value="Buscar">
                        </input>
                    </div>
                </div>
            </form>
         );
    }
}

export default Buscador;