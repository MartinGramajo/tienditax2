import React from "react";
import Footer from "./Footer";
import NavReact from "./NavReact";
import Productos from "./Productos";

export default function HomeContenido({
  productos,
  onClick,
  carrito,
  setProductos,
  setCarrito,
  chequeado,
  chequear,
  borrarChango,
}) {
  return (
    <div>
      <NavReact carrito={carrito} />
      <Productos
        chequeado={chequeado}
        chequear={chequear}
        borrarChango={borrarChango}
        carrito={carrito}
        productos={productos}
        setProductos={setProductos}
        setCarrito={setCarrito}
        onClick={onClick}
      />
      <Footer />
    </div>
  );
}
