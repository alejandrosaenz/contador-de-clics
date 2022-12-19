import React from "react"; //es opcional no es necesario importar react a menos que se implemente en versiones anteriores
import '../hojas-de-estilo/Contador.css'

function Contador ({ numClics }) {
  return (
    <div className='contador'>
      {numClics}
    </div>
  );
}

export default Contador;