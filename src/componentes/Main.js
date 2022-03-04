import { useState } from 'react'

export const Main = ({ asd }) => {
    const initial = 5
    const stock = 10
    let [estado, setEstado] = useState(initial)
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
            <p>estado: {estado}</p>
            <br />
            <button onClick={handlesAdd}>suma</button>
            <br />
            <button onClick={handleSub}>resta</button>
        </>
    )
}
