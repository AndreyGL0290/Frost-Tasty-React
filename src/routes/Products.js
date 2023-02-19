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
            <Link to="../basket" className="basket-button" onClick={() => {window.scrollTo(0,0)}}>Перейти в корзину</Link>
        </div>
        )
        if (Object.keys(basket.products).length == 0) setButton(<></>)
    }, [products])

    let data = []
    
    let category = location.hash.replace('#', '')
    for (let i = 0; i < Object.keys(menu[category]).length; i++){
        if (typeof menu[category][Object.keys(menu[category])[i]] === 'object') {
            if (basket.getProduct(menu[category][Object.keys(menu[category])[i]].name)) {
                menu[category][Object.keys(menu[category])[i]].state = {products: products, setProducts: setProducts}
                data.push(menu[category][Object.keys(menu[category])[i]])
                continue
            }
            menu[category][Object.keys(menu[category])[i]].parent = category
            menu[category][Object.keys(menu[category])[i]].state = {products: products, setProducts: setProducts}
            data.push(menu[category][Object.keys(menu[category])[i]])
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
                <svg className="system-image" viewBox="0 0 100 100"
                onClick={() => {
                    setQuantity(quantity - 1)
                    basket.setQuantity(props.name, -1)
                    window.sessionStorage.setItem('products', JSON.stringify(basket.products))
                    
                    if (Object.keys(basket.products).length == 0) props.state.setProducts([])
                }}>
                    <line x1="0" y1="50" x2="100" y2="50" stroke="black" stroke-width="10"/>
                </svg>

                <span className="quantity-label">{quantity}</span>

                <svg className="system-image" viewBox="0 0 100 100"
                onClick={() => {
                    setQuantity(quantity + 1)
                    basket.setQuantity(props.name, 1)
                    window.sessionStorage.setItem('products', JSON.stringify(basket.products))
                }}>
                    <line x1="0" y1="50" x2="100" y2="50" stroke="black" stroke-width="10"/>
                    <line x1="50" y1="0" x2="50" y2="100" stroke="black" stroke-width="10"/>
                </svg>
            </div>
        )
    }
}

export default Products