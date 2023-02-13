import { Link } from "react-router-dom"
import '../css/placeholder.css'
import basket from "../basket"
import tg from "../telegram"
import Image from "./Image"

const Home = props => {
    if (tg.MainButton.isVisible) tg.MainButton.hide()
    if (tg.BackButton.isVisible) tg.BackButton.hide()

    let basketButton = <></>
    if (Object.keys(basket.products).length == 0) basketButton = <></>
    else basketButton = <div className="basket-button-container"><Link to="../basket" className="basket-button">Перейти в корзину</Link></div>

    let data = []
    for (let i = 0; i < Object.keys(props.groups).length; i++){
        props.groups[Object.keys(props.groups)[i]].key = i
        props.groups[Object.keys(props.groups)[i]].category = Object.keys(props.groups)[i]
        data.push(props.groups[Object.keys(props.groups)[i]])
    }

    return (
    <>
        <div className="inner-container">
            {data.map(props => {
                return (
                    <GroupCard key={props.key} groups={props} />
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
        <div className="card">
            <span className="card-label">{props.name}</span>

            <Image src={process.env.PUBLIC_URL + props.imagePath} />
            <Link to={'products#'+ props.category} className="card-button">Перейти</Link>
        </div>
    )
}

export default Home;