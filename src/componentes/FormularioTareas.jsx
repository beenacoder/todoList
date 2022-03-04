import {useState} from 'react';
import React from 'react';
// Importamos el componente de Fontaweso y despues el icono que vamos a utilizar
//Los nombres de los iconos los adaptamos en camelCase
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  {faPlusSquare} from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';
const FormularioTareas = ({tareas, cambiarTareas}) => {
    const [inputTarea, cambiarInputTarea] = useState('');

    const handleInput = (e) => {
        cambiarInputTarea(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        cambiarTareas([
            ...tareas,
            {
                id: uuidv4(),
                texto: inputTarea,
                completado: false
            }
        ]);
        
    }


    return ( 
        <form action="" className='formulario-tareas' onSubmit={handleSubmit}>
            <input 
                type="text"
                className='formulario-tareas__input'
                placeholder='Escribe una tarea'
                value = {inputTarea}
                onChange = {(e) => handleInput(e)}
            />
            <button 
                type="submit"
                className='formulario-tareas__btn'
            >
            <FontAwesomeIcon 
                icon={faPlusSquare}
                className="formulario-tareas__icono-btn"
            />
            </button>
            </form>
    );
}
 
export default FormularioTareas;