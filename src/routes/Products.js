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
        if (Object.keys(basket.products).length === 0) setButton(<></>)
    }, [products])

    let data = []
    
    let category = location.hash.replace('#', '')
    for (let i = 0; i < Math.ceil(Object.keys(menu[category]).length / 2); i++){
        let sub_data = []
        for (let j = i*2; j < 2*(i + 1); j++){
            if (typeof menu[category][Object.keys(menu[category])[j]] === 'object') {

                if (basket.getProduct(menu[category][Object.keys(menu[category])[j]].name)) {
                    menu[category][Object.keys(menu[category])[j]].state = {products: products, setProducts: setProducts}
                    sub_data.push(menu[category][Object.keys(menu[category])[j]])
                    continue
                }
                menu[category][Object.keys(menu[category])[j]].parent = category
                menu[category][Object.keys(menu[category])[j]].state = {products: products, setProducts: setProducts}
                sub_data.push(menu[category][Object.keys(menu[category])[j]])
            }
        }
        if (sub_data.length !== 0) data.push(sub_data)
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
    let pricePostfix = props[0].postfix || '₾/кг'
    if (props.length === 2) return (
        <div className="cards">
            <div className="label-container">
                <span className="card-label">{props[0].name}</span>
                <span className="card-label">{props[1].name}</span>
            </div>
            <div className="image-container">
                <Image src={process.env.PUBLIC_URL + props[0].imagePath} />
                <Image src={process.env.PUBLIC_URL + props[1].imagePath} />
            </div>
            <div className="price-container">
                <span className="card-price">{props[0].price + ' ' + pricePostfix}</span>
                <span className="card-price">{props[1].price + ' ' + pricePostfix}</span>
            </div>
            <div className="button-container">
                <CardFooter product={props[0]} state={props[0].state} />
                <CardFooter product={props[1]} state={props[1].state} />
            </div>
        </div>
    )
    else return (
        <div className="cards">
            <div className="label-container">
                <span className="card-label">{props[0].name}</span>
            </div>
            <div className="image-container">
                <Image src={process.env.PUBLIC_URL + props[0].imagePath} />
            </div>
            <div className="price-container">
                <span className="card-price">{props[0].price + ' ' + pricePostfix}</span>
            </div>
            <div className="button-container">
                <CardFooter product={props[0]} state={props[0].state} />
            </div>
        </div>
    )
}

const CardFooter = (props) => {
    let startValue
    if (basket.products[props.product.name]) startValue = basket.products[props.product.name].quantity
    else startValue = 0
    const [quantity, setQuantity] = useState(startValue)

    let x = 0.5
    if (props.product.postfix) x = 1

    if (quantity === 0){
        console.log(props.product)
        return (
            <button className="card-button" onClick={() => {
                setQuantity(quantity + x)
                
                basket.addProduct(props.product.name, {name: props.product.name, parent: props.product.parent, price: props.product.price}, x)
                window.sessionStorage.setItem('products', JSON.stringify(basket.products))

                if (Object.keys(basket.products).length <= 1) props.state.setProducts(Object.keys(basket.products))                
            }}>Добавить</button>
        )
    }
    else {
        console.log(props.product)
        let quantityPostfix = props.product.postfix || 'кг'
        return (
            <div className="product-menu-container">
                <svg className="system-image" viewBox="0 0 100 100"
                onClick={() => {
                    setQuantity(quantity - x)
                    basket.setQuantity(props.product.name, -x)
                    window.sessionStorage.setItem('products', JSON.stringify(basket.products))
                    
                    if (Object.keys(basket.products).length === 0) props.state.setProducts([])
                }}>
                    <line x1="0" y1="50" x2="100" y2="50" stroke="black" stroke-width="10"/>
                </svg>

                <span className="quantity-label" onDoubleClick={e => {e.preventDefault()}}>{quantity} {quantityPostfix.replace('₾/', '')}</span>

                <svg className="system-image" viewBox="0 0 100 100"
                onClick={() => {
                    setQuantity(quantity + x)
                    basket.setQuantity(props.product.name, x)
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