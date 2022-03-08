import { useState } from 'react'
const Contador = () => {
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
                <br />
                <button onClick={handlesAdd}>suma</button>
                <br />
                <button onClick={handleSub}>resta</button>
            </div>
        </>
    )
}
export default Contador