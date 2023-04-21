import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validar que los campos no estén vacíos
    if (!nombre || !apellido || !email || !telefono) {
      setError("Todos los campos son obligatorios");
      return;
    }

    // Aquí puedes realizar la lógica de envío del formulario, como enviar los datos a un servidor, etc.
    // También puedes realizar otras validaciones antes de enviar los datos.

    // Resetear los campos del formulario y el mensaje de error
    setNombre("");
    setApellido("");
    setEmail("");
    setTelefono("");
    setError("");
  };

  return (
    <div className="bg-dark text-light p-5">
      <Form className="container  " onSubmit={handleSubmit}>
        {error && <Alert variant="danger">{error}</Alert>}
        <h4 className="text-center fs-1">Formulario de contacto</h4>
        <Form.Group controlId="nombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa tu nombre"
            value={nombre}
            onChange={(event) => setNombre(event.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="apellido">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa tu apellido"
            value={apellido}
            onChange={(event) => setApellido(event.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingresa tu correo electrónico"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="telefono">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Ingresa tu número de teléfono"
            value={telefono}
            onChange={(event) => setTelefono(event.target.value)}
          />
        </Form.Group>
        <Button className="m-2" type="submit">
          Enviar
        </Button>
      </Form>
    </div>
  );
};

export default Formulario;
