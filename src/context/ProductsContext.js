import { createContext, useState } from "react";
import {
  guardarEnLocalStorage,
  leerDeLocalStorage,
} from "../utils/localStorage";

export const ProductsContext = createContext();
const carritoLocal = leerDeLocalStorage("productos") || [];

export const DataProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [productosCarrito, setProductosCarrito] = useState([]);
  const [carrito, setCarrito] = useState(carritoLocal);

  const borrarChango = (i) => {
    const productoFiltrado = carrito.filter((producto) => producto.id !== i);
    guardarEnLocalStorage({ key: "productos", value: productoFiltrado });
    setCarrito(productoFiltrado);
  };

  const onClick = (id) => {
    const productoFiltrado = productos.find((producto) => producto.id === id);
    const nuevoArray = [...carrito, productoFiltrado];
    guardarEnLocalStorage({ key: "productos", value: nuevoArray });
    setCarrito(nuevoArray);
  };

  const chequear = (i) => {
    const inCart = carrito.find((producto) => producto.id === i);
    if (inCart) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <ProductsContext.Provider
      value={{
        carrito,
        productos,
        setProductos,
        productosCarrito,
        setProductosCarrito,
        setCarrito,
        borrarChango,
        onClick,
        chequear,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
