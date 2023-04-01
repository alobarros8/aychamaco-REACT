import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

let condition = true;
let resultado = "";
/*
if (condition) {
  resultado = "Verdadero";
} else {
  resultado = "Falso";
}
console.log("el resultado es \n" + resultado);*/

//console.log(`El resultado es: ${condition ? "Verdadero" : "Falso"} `);

//Spread Operator
let array = [1, 2, 3, 4];
let numeroCinco = 5;

let nuevoArray = [...array, numeroCinco];
console.log(nuevoArray);
//
//Propiedades dinamicas
let email = "f@gmail.com";
let campo = "email";
let objetosPersona = {
  nombre: "fede",
  apellido: "Osandon",
  [campo]: email,
};
console.log(objetosPersona);

//
//Deep Matching
//desestructuracion
//let nombreUsuario = objetosPersona.nombre;
//let apellidoUsuario = objetosPersona.apellido;
const { nombre: first_name, apellido } = objetosPersona;
console.log(first_name, apellido);
//
//

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
