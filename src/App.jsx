import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Title from "./Components/Title";
import Navbarjs from "./Components/Navbarjs";
import ItemlistContainer from "./Components/ItemlistContainer";
import React, { useState } from "react";
import Formulario from "./Components/formulario/Formulario";
import Footer from "./Components/footer/footer";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const handleAddToCart = (burger) => {
    const newBurger = { ...burger, quantity: 1 }; // Agrega la propiedad de cantidad al objeto de burger
    setCartItems([...cartItems, newBurger]); // Agrega el burger al arreglo de items del carrito
  };
  return (
    <BrowserRouter>
      <Navbarjs cartItems={cartItems} />

      <Title />
      <Routes>
        <Route
          exact
          path="/BurgerShop"
          element={<ItemlistContainer onAddToCart={handleAddToCart} />}
        />
        <Route exact path="/Formulario" element={<Formulario />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
