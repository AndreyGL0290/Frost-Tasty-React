import { Link } from "react-router-dom"
import { useState } from "react"
import basket from "../basket"
import tg from '../telegram'
import '../css/basket.css'

const Basket = () => {
    window.localStorage.setItem('products', JSON.stringify(basket.products))
    tg.MainButton.show()

    let [x, setDelete] = useState(false)

    if (Object.keys(basket.products).length == 0)
    return (
        <div className="after-label-container">
            <span>Ваша корзина пуста<br/>Посмтрите что-нибудь еще<br/><br/></span>
            <Link className="get-more-button" to={'../'}>Посмотреть</Link>
        </div>
    )

    return (
        <div className='basket-container'>
            {Object.values(basket.products).map(props => {
                return (
                    <BasketCard key={props.name} product={props} state={{x: x, setDelete: setDelete}}/>
                )
            })}
        </div>
    )
}

const BasketCard = (props) => {
    return (
        <div className='product-container'>
            <div className='content-container'>
                <div className='images-container'>
                    <a className='delete-button'
                    onClick={() => {
                        basket.deleteProduct(props.product.name)
                        props.state.setDelete(!props.state.x)
                    }
                    }></a>
                    <Link className='show-product-button' to={'../products#'+props.product.parent}></Link>
                </div>
                <span className='product-label'>{props.product.name}</span>
            </div>
            <div className='add-content-container'>
                <span className='product-quantity'>{props.product.quantity}</span>
                <span className='product-price'>{props.product.price*props.product.quantity} ₾</span>
            </div>
        </div>
    )
}

export default Basket