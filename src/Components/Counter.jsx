import { useState } from "react";
import "./Counter.css";

function Contador() {
  let [counter, setCounter] = useState(0);

  let handleCounter = () => {
    setCounter(counter + 1);
  };
  let handleDescount = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="cantidad">
      <button className="btn-cantidad" onClick={handleDescount}>
        -1
      </button>
      <p>{counter}</p>
      <button className="btn-cantidad" onClick={handleCounter}>
        +1
      </button>
    </div>
  );
}

export default Contador;
