import React, { useEffect, useState } from "react";
import { Button, Card, Collapse, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ProductoCard({
  producto,
  onClick,
  carrito,
  chequear,
  borrarChango,
}) {
  const { id, category, description, image, price, title, rating } = producto;
  const [open, setOpen] = useState(false);
  const [chequeado, setChequeado] = useState(false);

  // const chequear = (i) => {
  //   const inCart = carrito.find((producto) => producto.id === i);
  //   if (inCart) {
  //     setChequeado(true);
  //   } else {
  //     setChequeado(false);
  //   }
  // };

  // const borrarChango = (i) => {
  //   const productoFiltrado = carrito.filter((producto) => producto.id !== i);
  //   setCarrito(productoFiltrado);
  // };

  // usamos useEffect para renderizar
  useEffect(() => {
    setChequeado(
      chequear(id) // es importante pasarle el parametro a la funcion que llamamos (razon por la cual no andaba el codigo)
    );
  }, [carrito]);

  return (
    <div>
      <Card className="my-4 tamaño fondo-carta">
        <div className="d-flex justify-content-center">
          <Card.Img className="imagen-card mt-4" variant="top" src={image} />
        </div>
        <Card.Body className="mt-2 fondo-body-carta">
          <Card.Title
            as={Link}
            to={`products/${id}`}
            className="fs-6 text-center mb-2"
          >
            {title}
          </Card.Title>
          <ListGroup className="my-2" variant="flush">
            <ListGroup.Item>Categoría : {category}</ListGroup.Item>
            <ListGroup.Item> Precio: {price}</ListGroup.Item>
            <ListGroup.Item>Calificación: {rating.rate}</ListGroup.Item>
            <ListGroup.Item>Stock : {rating.count}</ListGroup.Item>
          </ListGroup>
        </Card.Body>
        <Card.Footer className="fondo-footer-carta">
          <div className="d-flex justify-content-between">
            {" "}
            <Button
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
              variant="outline-light"
            >
              Detalle
            </Button>
            <Button
              // className={chequeado === true ? "disabled" : ""}
              aria-controls="example-collapse-text"
              aria-expanded={open}
              onClick={
                chequeado === false ? () => onClick(id) : () => borrarChango(id)
              }
              variant="success"
            >
              <span>{chequeado === false ? "colocar" : "sacar"}</span>
            </Button>
            {/* <Button
              className={chequeado && "disabled"}
              aria-controls="example-collapse-text"
              aria-expanded={open}
              size="sm"
              onClick={() => chequear(id)}
              variant="success"
            >
              <span> Chequear</span>
            </Button> */}
          </div>
          <div>
            <Collapse in={open}>
              <div className="my-2 text-white" id="example-collapse-text">
                {description}
              </div>
            </Collapse>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
}
