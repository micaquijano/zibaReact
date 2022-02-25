import { useState, useEffect } from "react";

export const ItemCount = ({ stock, initial }) => {
    const [count, setCount] = useState(Number(initial));
    const [currentInput, setCurrentInput] = useState(Number(initial));
    return <>
        <div>
            <button disabled={currentInput <= initial} onClick={() => setCurrentInput(currentInput - 1)}>-</button>
            {currentInput}
            <button disabled={currentInput >= stock} onClick={() => setCurrentInput(currentInput + 1)}>+</button>
        </div>
        <div>
            <button disabled={!stock || currentInput > stock} onClick={() => setCount(currentInput)} >Agregar al carrito</button>
        </div>
    </>
}