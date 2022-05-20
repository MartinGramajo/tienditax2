import ProductoCard from "./ProductoCard";

export default function Productos({
  productos,
  onClick,
  carrito,
  setCarrito,
  setProductos,
  chequeado,
  chequear,
  borrarChango,
}) {
  return (
    <div className="d-flex flex-wrap justify-content-between container my-2">
      {productos.map((producto, id) => (
        <ProductoCard
          chequeado={chequeado}
          chequear={chequear}
          borrarChango={borrarChango}
          carrito={carrito}
          setCarrito={setCarrito}
          setProductos={setProductos}
          productos={productos}
          producto={producto}
          key={id}
          onClick={onClick}
        />
      ))}
    </div>
  );
}
