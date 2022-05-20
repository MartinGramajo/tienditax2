import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function ProductoDetalle({
  carrito,
  onClick,
  chequear,
  borrarChango,
}) {
  const params = useParams();
  const [chequeado, setChequeado] = useState(false);
  const [open, setOpen] = useState(false);

  const [productos, setProductos] = useState({
    id: "",
    category: "",
    description: "",
    image: "",
    price: "",
    title: "",
    rating: "",
  });

  const { id, category, image, price, title, rating, description } = productos;
  useEffect(() => {
    const request = async () => {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${params.id}`
      );
      const ListaProductos = response.data;
      console.log("~ ListaProductos", ListaProductos);
      setProductos(ListaProductos);
    };
    setChequeado(
      chequear(id) // es importante pasarle el parametro a la funcion que llamamos (razon por la cual no andaba el codigo)
    );
    request();
  }, [productos, carrito]);

  // const chequear = (i) => {
  //   const inCart = carrito.find((producto) => producto.id === i);

  //   if (inCart) {
  //     setChequeado(true);
  //   }
  // };

  return (
    <div>
      <Card className="my-4 tamaño fondo-carta">
        <div className="d-flex justify-content-center">
          <Card.Img className="imagen-card mt-4" variant="top" src={image} />
        </div>
        <Card.Body className="mt-2 fondo-body-carta">
          <Card.Title className="fs-6 text-center mb-2">{title}</Card.Title>
          <ListGroup className="my-2" variant="flush">
            <ListGroup.Item>Categoría : {category}</ListGroup.Item>
            <ListGroup.Item> Precio: {price}</ListGroup.Item>
            <ListGroup.Item>Calificación: {rating.rate}</ListGroup.Item>
            <ListGroup.Item>Stock : {rating.count}</ListGroup.Item>
          </ListGroup>
          {description}
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
          <div></div>
        </Card.Footer>
      </Card>
    </div>
  );
}
