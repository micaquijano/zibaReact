import { useState } from 'react'
export const ItemCount = () => {
    const initial = 5
    const stock = 10
    const [estado, setEstado] = useState(initial)
    const handlesAdd = () => {
        if
            (estado < stock) {
            setEstado(estado + 1)
        }
    }
    const handleSub = () => {
        setEstado(estado - 1)
        
    }

    return (
        <>
            <div>
                <p>Mi contador va: {estado}</p>
                <div className='button-count'>
                <button onClick={handlesAdd}>suma</button>
                <button onClick={handleSub}>resta</button>
            </div>
            </div>
        </>
    )
}