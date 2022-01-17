import React, { useEffect, useState } from "react";
import Avatar from "../components/Avatar";

import imgOscar from "../37453654.png";
import imgNarvaez from "../narvaez.jpg";

export default function AcercaDe() {
  useEffect(() => {
    document.title = "Acerca de";
  }, []);

  const [desarrolladores, setInformation] = useState([
    {
      nombre: "Narvaez Ruiz Alexis",
      descripcion: "Los quiero mucho chavos :3",
      avatar: imgNarvaez,
    },
  ]);

  return (
    <section>
      <div className="container mb-1">
        <h1 className="h4 text-start my-3 ">Desarrollador.</h1>
        <div className="row justify-content-around">
          {desarrolladores.map((desarrollador, index) => (
            <Avatar
              key={index}
              avatar={desarrollador.avatar}
              nombre={desarrollador.nombre}
              descripcion={desarrollador.descripcion}
            />
          ))}
        </div>
      </div>
      <div className="container mb-5 mt-2">
        <h1 className="h4 text-start mb-3">Cosas importantes.</h1>
        <div className="row">
          <p className="col-md-6 col-sm-12 p-2 text-start">
            ¡Recuerda!, Esta es una aplicacion que utiliza el servicio de{" "}
            <a href="https://apidocs.cheapshark.com/">cheapshark </a>
            el cual nos proporciona la informacion necesaria para que la
            aplicación pueda funcionar.
          </p>
          <p className="col-md-6 col-sm-12 p-2 text-start">
            Otra de las tecnologias que he usado para desarrollar este proyecto
            es la libreria de "react" por parte de facebook, la cual nos permite
            la posibilidad de tener componentes en nuestras páginas o
            aplicaciones, para poder manipularlos con una parte logica que seria
            Javascript en este caso.
          </p>
        </div>
      </div>
    </section>
  );
}
