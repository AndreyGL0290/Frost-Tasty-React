import { Link, useLocation } from "react-router-dom"
import BasketButton from "../BasketButton"
import { basket } from "../index"
import { useState } from "react"
import '../css/products.css'
import menu from '../menu'

const Products = () => {
    const location = useLocation()

    let [isEmpty, setBoolean] = useState(!!Object.keys(basket.products).length)

    let data = []
    
    for (let i = 0; i < Object.keys(menu[location.hash.split('#')[location.hash.split('#').length-1]]).length; i++){
        if (typeof menu[location.hash.split('#')[location.hash.split('#').length-1]][Object.keys(menu[location.hash.split('#')[location.hash.split('#').length-1]])[i]] === 'object') {
            menu[location.hash.split('#')[location.hash.split('#').length-1]][Object.keys(menu[location.hash.split('#')[location.hash.split('#').length-1]])[i]].parent = location.hash.split('#')[location.hash.split('#').length-1]
            menu[location.hash.split('#')[location.hash.split('#').length-1]][Object.keys(menu[location.hash.split('#')[location.hash.split('#').length-1]])[i]].state = {isEmpty: isEmpty, setBoolean: setBoolean}
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

    return (
    <div className="card" key={props.key}>
            <span className="card-label">{props.name}</span>
            <img className="card-image" src={process.env.PUBLIC_URL + props.imagePath} alt="Here should be an image"></img>
            <span className="card-price">{price}</span>
            <CardFooter name={props.name} product={props} state={props.state}/>
    </div>
    )
}

const CardFooter = (props) => {
    let startValue
    if (basket.products[props.name]) startValue = basket.products[props.name].quantity.get()
    else startValue = 0
    const [quantity, setQuantity] = useState(startValue)

    if (quantity == 0){
        return (
            <a className="card-button" onClick={() => {
                setQuantity(quantity + 1)
                basket.addProduct(props.name, {name: props.name, parent: props.product.parent, price: props.product.price})

                props.state.setBoolean(true)
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

                    if (basket.products[props.name].quantity.get() == 0){
                        basket.deleteProduct(props.name)
                    }

                    if (Object.keys(basket.products).length == 0) props.state.setBoolean(false)
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