function Input({nombre,setNombre, password, setPassword}){
    return(
    <div>
        <label htmLFor="nombre">Nombre: </label>     
            <input type="text" 
            name="nombre"
            id="nombre" 
            placeholder="Ingresa tu nombre"
            onChange={(e)=> setNombre(e.target.value)}
            value={nombre}
            />            
        <label htmLFor="password">Password: </label>           
            <input type="password"
            name = "password"
            id= "password"
            placeholder="Escriba su Password"
            onChange={(e)=> setPassword(e.target.value)}
            value={password}
            />                    
    </div>
    );
     
   
}
export default Input;