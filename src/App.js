import React, {useState, useEffect} from 'react';
import Header from './componentes/Header';
import ListaTareas from './componentes/ListaTareas';
import './App.css';
import FormularioTareas from './componentes/FormularioTareas';

const App = () => {
  //Obtenemos las tareas guardadas de localstorage.
  const tareasGuardadas = localStorage.getItem('tareas') 
  ? 
  JSON.parse(localStorage.getItem('tareas')) 
  : 
  [];
  
  // Establecemos el estado de las tareas obtenidas de logalstorage.
  const [tareas, cambiarTareas] = useState(tareasGuardadas);

  //Guardamos el estado de la app cada vez que cambia dentro de localstorage
  useEffect(() => {
    //Esto se ejecuta la primera vez y cuando las tareas cambien
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);


  const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(true);
  useEffect(() => {
    localStorage.setItem('mostrarCompletadas', mostrarCompletadas.toString());
  }, [mostrarCompletadas]);

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
