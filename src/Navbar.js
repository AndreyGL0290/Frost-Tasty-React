import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div>
            <Link to="/products">Products section</Link>
            <Link to="/basket">Basket section</Link>
        </div>
    )
}

export default Navbar