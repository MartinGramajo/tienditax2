import ProductoCard from "./ProductoCard";

export default function Productos({ productos }) {
  return (
    <div className="d-flex flex-wrap justify-content-between container my-2">
      {productos.map((producto, id) => (
        <ProductoCard producto={producto} key={id} />
      ))}
    </div>
  );
}
