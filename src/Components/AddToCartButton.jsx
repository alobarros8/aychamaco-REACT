import React, { useState } from "react";

const AddToCartButton = ({ burger, onAddToCart }) => {
  const handleClick = () => {
    // Llama a la función de agregar al carrito con la información del producto
    onAddToCart(burger);
  };

  return (
    <div>
      <button onClick={handleClick}>Agregar al carrito</button>
    </div>
  );
};

export default AddToCartButton;
