import { useState } from 'react';
import Input from './components/Input';
import Boton from './components/Boton';
function App() {
  const [nombre,setNombre]= useState('');
  const [password, setPassword]= useState('');
  return (
    <div cLassName= "container">
    <h1> Formulario</h1>
    <div cLassName='form-group'>
    <Input
    nombre={nombre}
    setNombre={setNombre}
    password= {password}
    setPassword= {setPassword}
     /> 
    {(password =='252525') ? <Boton />: null}   
    
    </div>
    
    </div>
  );
}


export default App;
