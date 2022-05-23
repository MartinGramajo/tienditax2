import "./App.css";
import axios from "axios";
import { useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductsContext } from "./context/ProductsContext";
import Home from "./pages/Home";
import Carrito from "./pages/Carrito";
import DetalleProducto from "./pages/DetalleProducto";

function App() {
  const { productos, setProductos, setProductosCarrito } =
    useContext(ProductsContext);

  useEffect(() => {
    const request = async () => {
      const response = await axios.get(
        `https://fakestoreapi.com/products?limit=12`
      );
      console.log("~ response", response);
      const ListaProductos = response.data;
      setProductos(ListaProductos);
      setProductosCarrito(ListaProductos);
    };
    request();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home productos={productos} />} />
        <Route path="/TuCarrictor" element={<Carrito />} />
        <Route path="/products/:id" element={<DetalleProducto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
