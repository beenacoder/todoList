import React, {useState} from 'react';
import './App.css';
import Header from './componentes/Header';
import FormularioTareas from './componentes/FormularioTareas';
import ListaTareas from './componentes/ListaTareas';
const App = () => {
  const [tareas, cambiarTareas] = useState([
    {
      id: 1,
      texto: 'Lavar la ropa',
      completada: false
    },
    {
      id: 2,
      texto: 'Preparar tutorial',
      completada: true
    }
  ]
  );

  const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(false);
  

  return (
    <div className="contenedor">
      <Header mostrarCompletadas={mostrarCompletadas} cambiarMostrarCompletadas = {cambiarMostrarCompletadas}/>
      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas}/>
      <ListaTareas 
        tareas={tareas} 
        cambiarTareas={cambiarTareas} 
        mostrarCompletadas = {mostrarCompletadas}
      />
    </div>
  );
}

export default App;
