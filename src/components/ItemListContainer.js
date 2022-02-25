import { ItemCount } from "./ItemCount";
import { item } from "../data-fake/items";
import { useState, useEffect } from "react";
export const ItemListContainer = () => {
    const [count, setCount] = useState(0);
    useEffect( () => console.log(count), [count])
    return <>
        <h1>Catalogo de productos</h1>
        <span>Aca se visualizaran los catalogos</span>
        <ItemCount stock={item.stock} initial="1" toAdd={(val) => setCount(val)}/>
        {count}    
    </>;
}