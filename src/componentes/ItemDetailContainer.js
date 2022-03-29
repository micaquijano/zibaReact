import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () => {
  const [ Item, setItem] = useState();
  const [loading, setLoading] = useState(true);
  const {idProducto} = useParams()

  useEffect (()=>{
    fetch(`https://fakestoreapi.com/products/${idProducto}`)
    .then((response)=>{
      return response.json()
  })
  .then((respuesta)=>{ 
    setItem(respuesta)
  })
  .catch(()=>{
    toast.error("Error al cargar el producto")
  })
  .finally(()=>{
    setLoading(false)
  })
  }, [loading])
  return (
    <ItemDetail Item={Item}/>
  )
}

 