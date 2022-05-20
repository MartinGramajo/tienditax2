import React from "react";
import NavReact from "../components/NavReact";
import ProductoDetalle from "../components/ProductoDetalle";

export default function DetalleProducto({
  carrito,
  onClick,
  chequear,
  borrarChango,
}) {
  return (
    <div>
      <NavReact carrito={carrito} />
      <div className="d-flex justify-content-center">
        <ProductoDetalle
          carrito={carrito}
          onClick={onClick}
          chequear={chequear}
          borrarChango={borrarChango}
        />
      </div>
    </div>
  );
}
