import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  {faCheckSquare, faEdit, faTimes} from '@fortawesome/free-solid-svg-icons';

const Tarea = ({tarea}) => {
    const [editandoTarea, cambiarEditandoTarea] = useState(false);
    const [nuevaTarea, cambiarNuevaTarea] = useState(tarea.texto);


    return (
        <li className='lista-tareas__tarea'>
            <FontAwesomeIcon 
                icon={faCheckSquare}
                className="lista-tareas__icono lista-tareas__icono-check"
            />
            <div className='lista-tareas__texto'>
                {editandoTarea ? 
                <form action="" className='formulario-editar-tarea'>
                    <input 
                    type="text"
                    className='formulario-editar-tarea__input'
                    value={nuevaTarea}
                    />
                    <button
                    type="submit"
                    className='formulario-editar-tarea__btn'
                    >
                        Actualizar
                    </button>
                </form>   

                : tarea.texto
                }
            </div>
            <div className='lista-tareas__contenedor-botones'>
                <FontAwesomeIcon 
                    icon={faEdit}
                    className="lista-tareas__icono lista-tareas__icono-accion"
                    onClick={() => cambiarEditandoTarea(!editandoTarea)}
                />
                <FontAwesomeIcon 
                    icon={faTimes}
                    className="lista-tareas__icono lista-tareas__icono-accion"
                />
            </div>
        </li>
      );
}
 
export default Tarea;