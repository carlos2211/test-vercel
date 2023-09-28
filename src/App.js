import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './componentes/Header';
import FormularioTareas from './componentes/FormularioTareas';
import ListaTareas from './componentes/ListaTareas';

const App = () => {
  //obtenemos tareas guardadas de local storage
  const tareasGuardadas = localStorage.getItem('tareas') ? JSON.parse(localStorage.getItem('tareas')) : [];
  const [tareas, cambiarTareas] = useState(tareasGuardadas);  

  useEffect(()=>{
    localStorage.setItem('tareas',JSON.stringify(tareas));
  },[tareas]);


  //Acceder a local storage y comprobar si mostrarCompletadas es Null
  let configMostrarCompletadas ='';
  if(localStorage.getItem('mostrarCompletadas') == null){
    configMostrarCompletadas = true;
  } else{
    configMostrarCompletadas = localStorage.getItem('mostrarCompletadas') === 'true';
  }

//estado de mostrarCompletadas
  const [mostrarCompletadas , cambiarMostrarCompletadas] = useState(configMostrarCompletadas);
  
  useEffect(()=>{
    localStorage.setItem('mostrarCompletadas',mostrarCompletadas.toString());
  },[mostrarCompletadas]);



  return (
    <div className="contenedor"> 
      <Header 
        mostrarCompletadas={mostrarCompletadas}
        cambiarMostrarCompletadas={cambiarMostrarCompletadas} 
      />
      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas} />
      <ListaTareas 
        tareas={tareas}
        cambiarTareas={cambiarTareas}
        mostrarCompletadas={mostrarCompletadas}
      />
    </div>
  );
}

export default App;
