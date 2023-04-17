import React, { useState, useEffect } from "react"; // Importa useState de React
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";

function CartWidget({ cartItems }) {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const [showCart, setShowCart] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [itemPrice, setItemPrice] = useState(totalPrice);

  const handleClose = () => setShowCart(false);

  const handleIncrement = (itemId) => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          quantity: item.quantity + 1,
          price: item.price * (item.quantity + 1),
        };
      } else {
        return item;
      }
    });
    setItemPrice(
      updatedCartItems.reduce((total, item) => total + item.price, 0)
    );
  };

  const handleDecrement = (itemId) => {
    const currentItem = cartItems.find((item) => item.id === itemId);
    if (currentItem.quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      const updatedCartItems = cartItems.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            quantity: item.quantity - 1,
            price: item.price * (item.quantity - 1),
          };
        } else {
          return item;
        }
      });
      setItemPrice(
        updatedCartItems.reduce((total, item) => total + item.price, 0)
      );
    }
  };
  return (
    <>
      <Button variant="dark" className="m-2" onClick={() => setShowCart(true)}>
        <i className="bi  bi-cart-plus fs-2"></i>
      </Button>

      <Offcanvas show={showCart} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Carrito</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cartItems.map(({ id, name, description, price }) => (
            <div key={id} className="border-bottom border-dark">
              <h6>{name}</h6>
              <p>{description}</p>
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <label>Cantidad:</label>
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    className="mx-2"
                    onClick={handleDecrement}
                  >
                    -
                  </Button>
                  <span>{quantity}</span>
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    className="mx-2"
                    onClick={handleIncrement}
                  >
                    +
                  </Button>
                </div>
                <label>${itemPrice}</label>
              </div>
            </div>
          ))}
          <div className="border-bottom text-center">
            <h6>Total:</h6>
            <label>${totalPrice}</label>
          </div>
          <div className="d-flex justify-content-center">
            <Button variant="success">Finalizar compra</Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default CartWidget;
