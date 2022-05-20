import React from "react";
import HomeContenido from "../components/HomeContenido";

export default function Home({
  productos,
  setCarrito,
  onClick,
  carrito,
  chequeado,
  chequear,
  borrarChango,
}) {
  return (
    <div>
      <HomeContenido
        chequeado={chequeado}
        chequear={chequear}
        borrarChango={borrarChango}
        productos={productos}
        setCarrito={setCarrito}
        onClick={onClick}
        carrito={carrito}
      />
    </div>
  );
}
