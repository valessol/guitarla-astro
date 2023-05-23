import React, { useState } from "react";

const ReactComponent = () => {
  // Por defecto Astro corre este componente de React del lado del servidor.
  // Hay veces que es necesario que él mismo e ejecute del lado del cliente, como por ejemplo cuando utilizamos localStorage.
  // Para decirle a Astro que queremos que lo corra en el lado del cliente, debemos colocarle el atributo client:load al componente cuando lo llamamos (ver index.astro)
  // https://docs.astro.build/en/core-concepts/framework-components/#hydrating-interactive-components
  const [client, setClient] = useState("Valeria");
  console.log("Desde ReactComponent");
  return <div>{client}</div>;
};

export default ReactComponent;
