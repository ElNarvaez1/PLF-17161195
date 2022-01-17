import React, { Component } from "react";
import Form from "../components/Form";
export default class Home extends Component {

  componentDidMount() {
    document.title  = "Inicio"
  }

  render() {

    return (
      <div className="container new-height d-flex">
        <div className="mt-auto container-fluid">
          <p className="text-center" >
            ¡Hola! Bienvenido a mi aplicacion web.
          </p>
          <p className="text-center" >
            ¿Estas buscando algun juego en descuento?
          </p>
          <p className="text-center">
            ¡Intenta buscarlo aqui 😊 !
          </p>
          <div className="row justify-content-center">
                <div className="col-8">
                    <Form />
                </div>
          </div>
        </div>
      </div> 
    );
  }
}
