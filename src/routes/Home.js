import { Link } from "react-router-dom";

const Home = (props) => {
    let data = []
    for (let i = 0; i < Object.keys(props.groups).length; i++){
        props.groups[Object.keys(props.groups)[i]].key = i
        props.groups[Object.keys(props.groups)[i]].category = Object.keys(props.groups)[i]
        data.push(props.groups[Object.keys(props.groups)[i]])
    }

    return (
    <div className="inner-container">
        {data.map(GroupCard)}
    </div>
    )
}

const GroupCard = props => {
    return (
        <div className="card" key={props.key}>
            <span className="card-label">{props.name}</span>
            <img className="card-image" src={process.env.PUBLIC_URL + props.imagePath} alt="Here should be an image"></img>
            <Link to={'products#'+ props.category} className="card-button">Перейти</Link>
        </div>
    )
}

export default Home;