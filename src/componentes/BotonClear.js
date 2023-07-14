import React from 'react';
import '../hojas-de-estilo/BotonClear.css';

const BotonClear = (props) => (
  <div id={props.id} className='boton-clear' onClick={props.manejarClear}>
    {props.children}
  </div>
);

export default BotonClear;
