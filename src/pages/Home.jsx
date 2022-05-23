import React from "react";
import HomeContenido from "../components/HomeContenido";

export default function Home({ productos }) {
  return (
    <div>
      <HomeContenido productos={productos} />
    </div>
  );
}
