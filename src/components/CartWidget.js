import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

export const CartWidget = ({ itemsCount }) => {
    return <> <FontAwesomeIcon icon={faCartShopping} /> {itemsCount}</>;
}