import { Link } from "react-router-dom"
import basket from "./basket"

const BasketButton = () => {
    if (Object.keys(basket.products).length == 0) {
        return (
        <></>
        )
    } else {
        return (
        <div className="basket-button-container">
            <Link to="../basket" className="basket-button">Перейти в корзину</Link>
        </div>
        )
    }
}

export default BasketButton