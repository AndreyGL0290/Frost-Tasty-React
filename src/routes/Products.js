import { Link, useLocation } from "react-router-dom"
import { useState } from "react"
import menu from '../menu'
import '../css/products.css'
import { basket } from '../index'

const Products = () => {
    const location = useLocation()

    let data = []
    console.log(Object.keys(menu[location.hash.split('#')[location.hash.split('#').length-1]]))
    for (let i = 0; i < Object.keys(menu[location.hash.split('#')[location.hash.split('#').length-1]]).length; i++){
        if (typeof menu[location.hash.split('#')[location.hash.split('#').length-1]][Object.keys(menu[location.hash.split('#')[location.hash.split('#').length-1]])[i]] === 'object') {
            menu[location.hash.split('#')[location.hash.split('#').length-1]][Object.keys(menu[location.hash.split('#')[location.hash.split('#').length-1]])[i]].parent = location.hash.split('#')[location.hash.split('#').length-1]
            data.push(menu[location.hash.split('#')[location.hash.split('#').length-1]][Object.keys(menu[location.hash.split('#')[location.hash.split('#').length-1]])[i]])
        }
    }

    return (
    <>
        <div className="inner-container">
            {data.map(ProductCard)}
        </div>
        <BasketButton />
    </>
    )
}

const ProductCard = (props) => {
    let price = props.price + props.postfix || props.price + ' ₾/кг'

    // const [quantity, setQuantity] = useState(0)

    return (
    <div className="card" key={props.key}>
            <span className="card-label">{props.name}</span>
            <img className="card-image" src={process.env.PUBLIC_URL + props.imagePath} alt="Here should be an image"></img>
            <span className="card-price">{price}</span>
            <CardFooter name={props.name} product={props}/>
    </div>
    )
}

const BasketButton = () => {
    if (basket.products.length == 0) return (<></>)
    else return (<Link to="../basket" className="basket-button">Перейти в корзину</Link>)
}

const CardFooter = (props) => {
    const [quantity, setQuantity] = useState(0)
    console.log(basket.products)
    if (quantity == 0){
        return (
            <a className="card-button" onClick={() => {
                setQuantity(quantity + 1)
                basket.addProduct(props.name, props.product)
            }}>Добавить</a>
        )
    }
    else{
        return (
            <div className="product-menu-container">
                <img
                className="minus-sign"
                onClick={() => {
                    setQuantity(quantity - 1)
                    basket.products[props.name].quantity.set(-1)
                }}
                src={process.env.PUBLIC_URL + '/images/system/minus.png'}></img>

                <span className="quantity-label">{quantity}</span>
                <img
                className="plus-sign"
                onClick={() => {
                    setQuantity(quantity + 1)
                    basket.products[props.name].quantity.set(+1)
                }}
                src={process.env.PUBLIC_URL + '/images/system/plus.png'}></img>
            </div>
        )
    }
}

export default Products