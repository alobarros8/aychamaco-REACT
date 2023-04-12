import "bootstrap/dist/css/bootstrap.min.css";
import Title from "./Components/Title";
import Navbarjs from "./Components/Navbarjs";
import ItemlistContainer from "./Components/ItemlistContainer";
import React, { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const handleAddToCart = (burger) => {
    setCartItems([...cartItems, burger]); // Agrega el burger al arreglo de items del carrito
  };
  return (
    <div>
      <Navbarjs cartItems={cartItems} />
      <Title />
      <ItemlistContainer onAddToCart={handleAddToCart} />
    </div>
  );
}

export default App;
