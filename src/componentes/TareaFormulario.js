import React, { useState } from 'react';
import '../hojas-de-estilo/TareaFormulario.css';
//generar id con paquete 
import { v4 as uuidv4 } from 'uuid';

function TareaFormulario(props) {

  const [input, setInput] = useState('');

  const manejarCambio = e => {
    //actualizamos el valor de input con setinput, extraemos el valor del campo de texto con target.value
    setInput(e.target.value);
  }

  const manejarEnvio = e => {
    //para que toda la app no se vuelva a cargar cuando se envia el formulario
    e.preventDefault();
    
    
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    }

    props.onSubmit(tareaNueva);
  }

  return (
    <form 
      className='tarea-formulario'
      //evento submit cuando se envia el formulario poreso usamos manejar envio
      onSubmit={manejarEnvio}>
      <input 
        className='tarea-input'
        type='text'
        placeholder='Escribe una Tarea'
        name='texto'
        //cuando ocurre un cambio en el formulario ocurre este evento onChange
        onChange={manejarCambio}
      />
      <button className='tarea-boton'>
        Agregar Tarea
      </button>
    </form>
  );
}

export default TareaFormulario;