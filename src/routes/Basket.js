import { Link } from "react-router-dom"
import { useState } from "react"
import basket from "../basket"
import tg from '../telegram'
import '../css/basket.css'

const Basket = () => {
    window.scrollTo(0,0)
    window.sessionStorage.setItem('products', JSON.stringify(basket.products))
    if (!tg.BackButton.isVisible) tg.BackButton.show()
    if (!tg.MainButton.isVisible) tg.MainButton.show()

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
                    <svg className="system-image" viewBox="0 0 100 100"
                    onClick={() => {
                        basket.deleteProduct(props.product.name)
                        if (Object.keys(basket.products).length == 0) tg.MainButton.hide()
                        props.state.setDelete(!props.state.x)
                    }}>
                        <line x1="0" y1="0" x2="100" y2="100" stroke="black" stroke-width="10"/>
                        <line x1="0" y1="100" x2="100" y2="0" stroke="black" stroke-width="10"/>
                    </svg>

                    <Link to={'../products#'+props.product.parent} style={{width: 30 + 'px', height: 30 + 'px'}} onClick={() => {window.scrollTo(0,0)}}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="black" className="bi bi-eye system-image" viewBox="0 0 16 16">
                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                        </svg>
                    </Link>
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