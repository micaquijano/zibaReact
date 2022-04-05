import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { productosIniciales } from "./ItemListContainer";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState();
  const { idProducto } = useParams();
console.log(idProducto)


useEffect(() => {
    console.log("hi")
   
  });

  /* useEffect(() => {
      const pedido = new Promise((res) => {
        setTimeout(() => {
          res(productosIniciales);
        }, 2000);
      });
      console.log(pedido)
      pedido
        .then((resultado) => {
          const producto = resultado.find(p=>p.id===idProducto)
          console.log(11,producto)
          if (producto!==undefined)
          setItem(producto);
        })
        .catch((error) => {
          toast.error("error al cargar productos");
        })
        
    }
  ); */
  return <ItemDetail item={item} />;
};
