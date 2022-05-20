import NavReact from "../components/NavReact";
import { Button, Card, ListGroup } from "react-bootstrap";

export default function Carrito({ carrito, setCarrito, borrarChango }) {
  return (
    <>
      <NavReact carrito={carrito} />
      <div className="d-flex flex-wrap justify-content-between container my-2">
        {carrito.map((producto, id) => (
          <Card className="my-4 tamaño fondo-carta" key={id}>
            <div className="d-flex justify-content-center">
              <Card.Img
                className="imagen-card mt-4"
                variant="top"
                src={producto.image}
              />
            </div>
            <Card.Body className="mt-2 fondo-body-carta">
              <Card.Title className="fs-6 text-center mb-2">
                {producto.title}
              </Card.Title>
              <ListGroup className="my-2" variant="flush">
                <ListGroup.Item>Categoría : {producto.category}</ListGroup.Item>
                <ListGroup.Item> Precio: {producto.price}</ListGroup.Item>
              </ListGroup>
            </Card.Body>
            <Card.Footer>
              <Button onClick={() => borrarChango(producto.id)}>
                sacar del chango
              </Button>
            </Card.Footer>
          </Card>
        ))}
      </div>
    </>
  );
}
