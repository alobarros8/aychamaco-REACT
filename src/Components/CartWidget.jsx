import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

function CartWidget({ cartItems }) {
  // Calcular el total de los precios de los elementos en el carrito
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        <i className="bi  bi-cart-plus"></i>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {cartItems.map(({ id, name, description, price }) => (
          <Dropdown.Item key={id}>
            <div>
              <h6>{name}</h6>
              <p>{description}</p>
              <label>${price}</label>
            </div>
          </Dropdown.Item>
        ))}
        <Dropdown.Divider />
        <Dropdown.Item>
          <div className="border-bottom ">
            <h6>Total:</h6>
            <label>${totalPrice}</label>
          </div>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default CartWidget;
