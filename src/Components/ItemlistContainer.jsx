import "./ItemlistContainer.css";

import { useState, useEffect } from "react";
import { task } from "./Task";
function ItemlistContainer() {
  const [burgers, setBurgers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    task()
      .then((resultado) => {
        setBurgers(resultado);
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, []);
  return (
    <div className="item-list-container">
      {" "}
      {isLoading ? (
        <h2>Cargando...</h2>
      ) : (
        burgers.map(({ id, name, description, price }) => (
          <div key={id} className="card">
            <div className="card-body">
              <h6>Nombre: {name}</h6>
              <label>Precio: {price}</label>
            </div>
            <div className="card-footer">
              <button className="btn">Detalle</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
export default ItemlistContainer;
