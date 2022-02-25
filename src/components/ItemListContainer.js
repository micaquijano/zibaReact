import { ItemCount } from "./ItemCount";
import { item } from "../data-fake/items";
import { useState, useEffect } from "react";
export const ItemListContainer = () => {
    return <>
        <h1>Catalogo de productos</h1>
        <span>Aca se visualizaran los catalogos</span>
        <ItemCount stock={item.stock} initial="1"/>
    </>;
}