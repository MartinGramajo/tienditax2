import React, { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import Footer from "./Footer";
import NavReact from "./NavReact";
import Productos from "./Productos";

export default function HomeContenido({ productos }) {
  const { carrito } = useContext(ProductsContext);

  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <NavReact carrito={carrito} />
      <Productos productos={productos} />
      <Footer />
    </div>
  );
}
