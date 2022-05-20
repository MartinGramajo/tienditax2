import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import axios from "axios";
import { useEffect, useState } from "react";
import Carrito from "./pages/Carrito";
import DetalleProducto from "./pages/DetalleProducto";

function App() {
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);

  const onClick = (id) => {
    const productoFiltrado = productos.find((producto) => producto.id === id);
    const nuevoArray = [...carrito, productoFiltrado];
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

  const borrarChango = (i) => {
    const productoFiltrado = carrito.filter((producto) => producto.id !== i);
    setCarrito(productoFiltrado);
  };

  useEffect(() => {
    const request = async () => {
      const response = await axios.get(
        `https://fakestoreapi.com/products?limit=12`
      );
      const ListaProductos = response.data;
      setProductos(ListaProductos);
    };
    request();
  }, [carrito]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              chequear={chequear}
              borrarChango={borrarChango}
              productos={productos}
              onClick={onClick}
              carrito={carrito}
              setCarrito={setCarrito}
            />
          }
        />
        <Route
          path="/TuCarrictor"
          element={
            <Carrito
              onClick={onClick}
              carrito={carrito}
              setCarrito={setCarrito}
              chequear={chequear}
              borrarChango={borrarChango}
            />
          }
        />
        <Route
          path="/products/:id"
          element={
            <DetalleProducto
              carrito={carrito}
              onClick={onClick}
              chequear={chequear}
              borrarChango={borrarChango}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
