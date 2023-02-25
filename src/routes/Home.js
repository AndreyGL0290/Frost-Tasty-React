import { Link } from "react-router-dom"
import '../css/placeholder.css'
import basket from "../basket"
import tg from "../telegram"
import Image from "./Image"

const Home = props => {
    if (tg.MainButton.isVisible) tg.MainButton.hide()
    if (tg.BackButton.isVisible) tg.BackButton.hide()

    let basketButton = <></>
    if (Object.keys(basket.products).length === 0) basketButton = <></>
    else basketButton = <div className="basket-button-container"><Link to="../basket" className="basket-button" onClick={() => {window.scrollTo(0,0)}}>Перейти в корзину</Link></div>

    let data = []
    for (let i = 0; i < Math.ceil(Object.keys(props.groups).length / 2); i++){
        let sub_data = []
        for (let j = i*2; j < 2*(i + 1); j++) {
            props.groups[Object.keys(props.groups)[j]].category = Object.keys(props.groups)[j]
            sub_data.push(props.groups[Object.keys(props.groups)[j]])
        }
        data.push(sub_data)
    }

    return (
    <>
        <div className="inner-container">
            {data.map(props => {
                return (
                    <GroupCard key={props[0].name} groups={props} />
                )
            })}
        </div>
        {basketButton}
    </>
    )
}

const GroupCard = props => {
    props = props.groups
    return (
        <div className="cards">
            <div className="label-container">
                <span className="card-label">{props[0].name}</span>
                <span className="card-label">{props[1].name}</span>
            </div>
            <div className="image-container">
                <Image src={process.env.PUBLIC_URL + props[0].imagePath} />
                <Image src={process.env.PUBLIC_URL + props[1].imagePath} />
            </div>
            <div className="button-container">
                <Link to={'products#'+ props[0].category} className="card-button" onClick={() => {window.scrollTo(0,0)}}>Перейти</Link>
                <Link to={'products#'+ props[1].category} className="card-button" onClick={() => {window.scrollTo(0,0)}}>Перейти</Link>
            </div>
        </div>
    )
}

export default Home;