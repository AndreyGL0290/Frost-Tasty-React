import { Link, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import '../css/placeholder.css'
import basket from "../basket"
import tg from '../telegram'
import '../css/products.css'
import Image from "./Image"
import menu from '../menu'

const Products = () => {
    if (tg.MainButton.isVisible) tg.MainButton.hide()
    if (!tg.BackButton.isVisible) tg.BackButton.show()

    const location = useLocation()
    let [products, setProducts] = useState([])
    let [button, setButton] = useState(<></>)
    
    useEffect(() => {
        setButton(
        <div className="basket-button-container">
            <Link to="../basket" className="basket-button">Перейти в корзину</Link>
        </div>
        )
        if (Object.keys(basket.products).length == 0) setButton(<></>)
    }, [products])

    let data = []
    
    for (let i = 0; i < Object.keys(menu[location.hash.split('#')[location.hash.split('#').length-1]]).length; i++){
        if (typeof menu[location.hash.split('#')[location.hash.split('#').length-1]][Object.keys(menu[location.hash.split('#')[location.hash.split('#').length-1]])[i]] === 'object') {
            if (basket.getProduct(menu[location.hash.split('#')[location.hash.split('#').length-1]][Object.keys(menu[location.hash.split('#')[location.hash.split('#').length-1]])[i]].name)) {
                menu[location.hash.split('#')[location.hash.split('#').length-1]][Object.keys(menu[location.hash.split('#')[location.hash.split('#').length-1]])[i]].state = {products: products, setProducts: setProducts}
                data.push(menu[location.hash.split('#')[location.hash.split('#').length-1]][Object.keys(menu[location.hash.split('#')[location.hash.split('#').length-1]])[i]])
                continue
            }
            menu[location.hash.split('#')[location.hash.split('#').length-1]][Object.keys(menu[location.hash.split('#')[location.hash.split('#').length-1]])[i]].parent = location.hash.split('#')[location.hash.split('#').length-1]
            menu[location.hash.split('#')[location.hash.split('#').length-1]][Object.keys(menu[location.hash.split('#')[location.hash.split('#').length-1]])[i]].state = {products: products, setProducts: setProducts}
            data.push(menu[location.hash.split('#')[location.hash.split('#').length-1]][Object.keys(menu[location.hash.split('#')[location.hash.split('#').length-1]])[i]])
        }
    }

    return (
    <>
        <div className="inner-container">
            {data.map(props => {
                return (
                    <ProductCard key={props.name} product={props}/>
                )
            })}
        </div>
        {button}
    </>
    )
}

const ProductCard = (props) => {
    props = props.product
    let price = props.price + props.postfix || props.price + ' ₾/кг'

    return (
    <div className="card" key={props.key}>
            <span className="card-label">{props.name}</span>
            <Image src={process.env.PUBLIC_URL + props.imagePath} />
            <span className="card-price">{price}</span>
            <CardFooter name={props.name} product={props} state={props.state} />
    </div>
    )
}

const CardFooter = (props) => {
    let startValue
    if (basket.products[props.name]) startValue = basket.products[props.name].quantity
    else startValue = 0
    const [quantity, setQuantity] = useState(startValue)

    if (quantity == 0){
        return (
            <a className="card-button" onClick={() => {
                setQuantity(quantity + 1)
                basket.addProduct(props.name, {name: props.name, parent: props.product.parent, price: props.product.price})
                window.sessionStorage.setItem('products', JSON.stringify(basket.products))

                if (Object.keys(basket.products).length <= 1) props.state.setProducts(Object.keys(basket.products))                
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
                    basket.setQuantity(props.name, -1)
                    window.sessionStorage.setItem('products', JSON.stringify(basket.products))
                    
                    if (Object.keys(basket.products).length == 0) props.state.setProducts([])

                }}
                src={process.env.PUBLIC_URL + '/images/system/minus.png'}></img>

                <span className="quantity-label">{quantity}</span>

                <img
                className="plus-sign"
                onClick={() => {
                    setQuantity(quantity + 1)
                    basket.setQuantity(props.name, 1)
                    window.sessionStorage.setItem('products', JSON.stringify(basket.products))
                }}
                src={process.env.PUBLIC_URL + '/images/system/plus.png'}></img>
            </div>
        )
    }
}

export default Products