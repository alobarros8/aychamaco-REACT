import "./ItemlistContainer.css";

import React, { useState, useEffect } from "react";

import task from "./Task";
import Spinner from "react-bootstrap/Spinner";
import AddToCartButton from "./AddToCartButton";
function ItemlistContainer({ onAddToCart }) {
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
    <main>
      <h4 className="text-center fs-1 mt-2">BURGERS</h4>
      <div className="item-list-container">
        {isLoading ? (
          <Spinner animation="border" />
        ) : (
          burgers.map(({ id, name, img, description, price }) => (
            <div key={id} className="card ">
              <div className="card-body">
                <h6>{name}</h6>
                <img className="img-burger" src={img} alt="" />
                <p>{description}</p>
                <label>${price}</label>
              </div>
              <div className="mb-2">
                <AddToCartButton
                  burger={{ id, name, description, price }}
                  onAddToCart={onAddToCart}
                />
              </div>
            </div>
          ))
        )}
      </div>
    </main>
  );
}
export default ItemlistContainer;
