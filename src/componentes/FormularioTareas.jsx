import React from 'react';
// Importamos el componente de Fontaweso y despues el icono que vamos a utilizar
//Los nombres de los iconos los adaptamos en camelCase
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  {faPlusSquare} from '@fortawesome/free-solid-svg-icons';
const FormularioTareas = ({tareas, setTareas}) => {

    const handleSubmit = (e) => {
        e.preventDefault();

        setTareas('Cambiado');
        
    }


    return ( 
        <form action="" className='formulario-tareas' onSubmit={handleSubmit}>
            <input 
                type="text"
                className='formulario-tareas__input'
                placeholder='Escribe una tarea'
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